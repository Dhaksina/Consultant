/**
 * REVA PHOENIX — Firebase Authentication Module
 * Handles Email/Password Signup, Login, Password Reset, and Session Persistence
 * via official Firebase modular SDK.
 */

import { BACKEND_CONFIG, isFirebaseConfigured } from './config.js';

let firebaseApp = null;
let firebaseAuth = null;
let authInitialized = false;
let authSubscribers = [];

/**
 * Dynamically initialize Firebase Auth using official ESM build
 */
export async function initFirebaseAuth() {
  if (authInitialized) return firebaseAuth;

  if (!isFirebaseConfigured()) {
    console.warn("[Firebase] Credentials not configured yet. Running in offline/local auth mode.");
    return null;
  }

  try {
    const { initializeApp } = await import("https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js");
    const {
      getAuth,
      setPersistence,
      browserLocalPersistence,
      onAuthStateChanged
    } = await import("https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js");

    firebaseApp = initializeApp(BACKEND_CONFIG.firebase);
    firebaseAuth = getAuth(firebaseApp);

    await setPersistence(firebaseAuth, browserLocalPersistence);

    onAuthStateChanged(firebaseAuth, (user) => {
      authSubscribers.forEach(cb => {
        try { cb(user); } catch (e) { console.error(e); }
      });
    });

    authInitialized = true;
    console.log("[Firebase Auth] Initialized successfully.");
    return firebaseAuth;
  } catch (err) {
    console.error("[Firebase Auth] Initialization error:", err);
    return null;
  }
}

/**
 * Login with Email and Password
 */
export async function loginWithEmail(email, password) {
  const auth = await initFirebaseAuth();

  if (!auth) {
    // Graceful local fallback if user credentials not yet set up in Firebase console
    if (email === "admin@revaphoenix.com" || email === "admin") {
      if (password === "reva2026" || password === "admin123") {
        const mockUser = {
          uid: "local-admin-uid",
          email: "admin@revaphoenix.com",
          displayName: "Executive Admin",
          isLocalMock: true
        };
        sessionStorage.setItem("reva_mock_auth_user", JSON.stringify(mockUser));
        authSubscribers.forEach(cb => cb(mockUser));
        return { success: true, user: mockUser };
      }
    }
    return {
      success: false,
      error: "Firebase Auth not configured. Please supply Firebase credentials in config or .env, or use local credentials (admin / reva2026)."
    };
  }

  try {
    const { signInWithEmailAndPassword } = await import("https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js");
    const cred = await signInWithEmailAndPassword(auth, email, password);
    return { success: true, user: cred.user };
  } catch (err) {
    return { success: false, error: formatFirebaseError(err) };
  }
}

/**
 * Sign Up with Email and Password
 */
export async function signUpWithEmail(email, password) {
  const auth = await initFirebaseAuth();

  if (!auth) {
    return {
      success: false,
      error: "Firebase is not yet configured with your project API keys. Please update src/js/config.js with your project credentials."
    };
  }

  try {
    const { createUserWithEmailAndPassword, sendEmailVerification } = await import("https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js");
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    
    // Optionally trigger verification email
    try {
      await sendEmailVerification(cred.user);
    } catch (e) {
      console.warn("Could not dispatch verification email:", e);
    }

    return { success: true, user: cred.user, verificationSent: true };
  } catch (err) {
    return { success: false, error: formatFirebaseError(err) };
  }
}

/**
 * Password Reset / Forgot Password
 */
export async function resetPassword(email) {
  const auth = await initFirebaseAuth();

  if (!auth) {
    return {
      success: false,
      error: "Firebase project not connected yet. Please add your Firebase configuration."
    };
  }

  try {
    const { sendPasswordResetEmail } = await import("https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js");
    await sendPasswordResetEmail(auth, email);
    return { success: true, message: `Password reset link dispatched to ${email}.` };
  } catch (err) {
    return { success: false, error: formatFirebaseError(err) };
  }
}

/**
 * Logout
 */
export async function logoutUser() {
  sessionStorage.removeItem("reva_mock_auth_user");
  const auth = await initFirebaseAuth();
  if (auth) {
    const { signOut } = await import("https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js");
    await signOut(auth);
  }
  authSubscribers.forEach(cb => cb(null));
  return { success: true };
}

/**
 * Listen for auth state changes
 */
export function onAuthStateChange(callback) {
  authSubscribers.push(callback);

  // Check mock local auth first
  const mock = sessionStorage.getItem("reva_mock_auth_user");
  if (mock) {
    try { callback(JSON.parse(mock)); } catch (e) {}
  }

  if (firebaseAuth && firebaseAuth.currentUser) {
    callback(firebaseAuth.currentUser);
  } else if (isFirebaseConfigured()) {
    initFirebaseAuth().then(auth => {
      if (auth && auth.currentUser) callback(auth.currentUser);
    });
  }
}

/**
 * Get current active user
 */
export function getCurrentUser() {
  if (firebaseAuth && firebaseAuth.currentUser) {
    return firebaseAuth.currentUser;
  }
  const mock = sessionStorage.getItem("reva_mock_auth_user");
  if (mock) {
    try { return JSON.parse(mock); } catch (e) {}
  }
  return null;
}

/**
 * Get Firebase ID Token for secure backend verification
 */
export async function getIdToken() {
  const user = getCurrentUser();
  if (!user) return null;
  if (user.getIdToken && typeof user.getIdToken === 'function') {
    return await user.getIdToken();
  }
  return "mock-token-" + (user.uid || "admin");
}

/**
 * User-friendly translation of Firebase Auth error codes
 */
function formatFirebaseError(err) {
  const code = err.code || "";
  switch (code) {
    case 'auth/user-not-found':
    case 'auth/wrong-password':
    case 'auth/invalid-credential':
      return 'Invalid email address or password. Please verify your credentials.';
    case 'auth/invalid-email':
      return 'Please enter a valid email address.';
    case 'auth/email-already-in-use':
      return 'An account with this email address already exists. Please log in.';
    case 'auth/weak-password':
      return 'Password must be at least 6 characters long.';
    case 'auth/too-many-requests':
      return 'Access temporarily disabled due to multiple failed login attempts. Please reset your password or try again later.';
    case 'auth/network-request-failed':
      return 'Network connection issue. Please check your internet connection.';
    default:
      return err.message || 'Authentication failed. Please try again.';
  }
}
