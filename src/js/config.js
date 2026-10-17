/**
 * REVA PHOENIX — Unified Backend Configuration
 * Integrates Firebase Authentication, Supabase Database & Local Storage
 */

// Global configuration object (populated from environment variables or custom configuration)
export const BACKEND_CONFIG = {
  // Firebase Configuration (Client-safe configuration for Firebase Auth)
  firebase: {
    apiKey: window.__ENV?.FIREBASE_API_KEY || "AIzaSyA_JY4alHObbDTtcEFNFJJg334TZ6uBaVg",
    authDomain: window.__ENV?.FIREBASE_AUTH_DOMAIN || "consultant-f04e1.firebaseapp.com",
    projectId: window.__ENV?.FIREBASE_PROJECT_ID || "consultant-f04e1",
    storageBucket: window.__ENV?.FIREBASE_STORAGE_BUCKET || "consultant-f04e1.firebasestorage.app",
    messagingSenderId: window.__ENV?.FIREBASE_MESSAGING_SENDER_ID || "607307330005",
    appId: window.__ENV?.FIREBASE_APP_ID || "1:607307330005:web:5a567ed8d97621ed8f4d5c",
    measurementId: window.__ENV?.FIREBASE_MEASUREMENT_ID || "G-ZC3870JQG2"
  },

  // Supabase Configuration (Client-safe anon/publishable key & project URL)
  supabase: {
    url: (window.__ENV?.SUPABASE_URL || "https://obwfodjbglrofhdddblk.supabase.co").replace(/\/rest\/v1\/?$/, '').replace(/\/$/, ''),
    anonKey: window.__ENV?.SUPABASE_ANON_KEY || "sb_publishable_2CeznAEh1XNm0Lja7hObSA_EdN4hbzZ"
  },

  // Feature Flags
  features: {
    enableRealtimeSync: true,
    fallbackToLocalOnOffline: true,
    enableLocalAdminBypass: true
  }
};

/**
 * Check if real Firebase credentials have been configured
 */
export function isFirebaseConfigured() {
  const k = BACKEND_CONFIG.firebase.apiKey;
  return Boolean(k && k !== "YOUR_FIREBASE_API_KEY" && !k.startsWith("YOUR_"));
}

/**
 * Check if real Supabase credentials have been configured
 */
export function isSupabaseConfigured() {
  const u = BACKEND_CONFIG.supabase.url;
  const k = BACKEND_CONFIG.supabase.anonKey;
  return Boolean(
    u && !u.includes("your-project-id") &&
    k && k !== "YOUR_SUPABASE_ANON_KEY" && !k.startsWith("YOUR_")
  );
}

/**
 * Allow runtime configuration updates (e.g. from Admin settings or .env loader)
 */
export function updateBackendConfig(newConfig) {
  if (newConfig.firebase) {
    Object.assign(BACKEND_CONFIG.firebase, newConfig.firebase);
  }
  if (newConfig.supabase) {
    Object.assign(BACKEND_CONFIG.supabase, newConfig.supabase);
  }
  // Store in localStorage for persistent client-side configuration testing
  try {
    localStorage.setItem("reva_backend_config", JSON.stringify(BACKEND_CONFIG));
  } catch (e) {}
}

// Load previously stored custom configuration if available
try {
  const saved = localStorage.getItem("reva_backend_config");
  if (saved) {
    const parsed = JSON.parse(saved);
    if (parsed.firebase) Object.assign(BACKEND_CONFIG.firebase, parsed.firebase);
    if (parsed.supabase) Object.assign(BACKEND_CONFIG.supabase, parsed.supabase);
  }
} catch (e) {}

// Auto-load .env configuration from local dev server API if available
if (typeof window !== 'undefined' && (location.hostname === 'localhost' || location.hostname === '127.0.0.1')) {
  fetch('/api/config')
    .then(res => res.ok ? res.json() : null)
    .then(cfg => {
      if (cfg) {
        if (cfg.firebase) Object.assign(BACKEND_CONFIG.firebase, cfg.firebase);
        if (cfg.supabase) Object.assign(BACKEND_CONFIG.supabase, cfg.supabase);
      }
    })
    .catch(() => {});
}

