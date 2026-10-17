/**
 * REVA PHOENIX — Firebase Cloud Firestore Database Module
 * Synchronizes all site content, media assets, brochures, videos, and inquiries
 * directly with Cloud Firestore so they appear in the Firebase Console.
 */

import { BACKEND_CONFIG } from './config.js';
import { initFirebaseAuth } from './firebase-auth.js';

let firestoreDb = null;
let firestoreInitialized = false;

/**
 * Initialize Firestore instance using official ESM build
 */
export async function initFirestore() {
  if (firestoreInitialized) return firestoreDb;

  try {
    const { initializeApp, getApps } = await import("https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js");
    const { getFirestore } = await import("https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js");

    let app = getApps()[0];
    if (!app) {
      app = initializeApp(BACKEND_CONFIG.firebase);
    }

    firestoreDb = getFirestore(app);
    firestoreInitialized = true;
    console.log("[Firestore] Connected to Cloud Firestore successfully.");
    return firestoreDb;
  } catch (err) {
    console.error("[Firestore] Initialization error:", err);
    return null;
  }
}

/**
 * Sync entire CMS data store to Cloud Firestore
 */
export async function syncAllToFirestore(cmsData) {
  const db = await initFirestore();
  if (!db) return false;

  try {
    const { doc, setDoc, writeBatch } = await import("https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js");

    // 1. Sync Site Content sections
    const sections = [
      'siteSettings', 'seo', 'header', 'home', 'about', 'statistics',
      'services', 'apiServices', 'imsServices', 'training', 'industries',
      'portfolio', 'careers', 'contact', 'footer'
    ];

    for (const key of sections) {
      if (cmsData[key]) {
        const ref = doc(db, "site_content", key);
        await setDoc(ref, {
          section: key,
          data: cmsData[key],
          updated_at: new Date().toISOString()
        }, { merge: true });
      }
    }

    // 2. Sync Media Assets
    if (Array.isArray(cmsData.mediaLibrary)) {
      for (const m of cmsData.mediaLibrary) {
        const docId = (m.name || 'asset').toLowerCase().replace(/[^a-z0-9_-]/g, '_');
        const ref = doc(db, "media_assets", docId);
        await setDoc(ref, {
          name: m.name || '',
          url: m.url || '',
          type: m.type || 'image/png',
          size: m.size || '',
          tag: m.tag || 'Images',
          updated_at: new Date().toISOString()
        }, { merge: true });
      }
    }

    // 3. Sync Brochures & Downloads
    const downloads = cmsData.portfolio?.downloads || [];
    for (const b of downloads) {
      const docId = (b.id || b.title || 'brochure').toLowerCase().replace(/[^a-z0-9_-]/g, '_');
      const ref = doc(db, "brochures", docId);
      await setDoc(ref, {
        title: b.title || '',
        description: b.description || '',
        file_path: b.file_path || b.filePath || '',
        file_type: b.file_type || b.fileType || 'PDF',
        size: b.size || '',
        verified: b.verified || 'Official Publication',
        updated_at: new Date().toISOString()
      }, { merge: true });
    }

    // 4. Sync Videos
    const videos = cmsData.portfolio?.videos || [];
    for (const v of videos) {
      const docId = (v.id || 'video').replace(/[^a-z0-9_-]/g, '_');
      const ref = doc(db, "videos", docId);
      await setDoc(ref, {
        id: v.id || '',
        title: v.title || '',
        subtitle: v.subtitle || '',
        duration: v.duration || '',
        category: v.category || '',
        thumbnail: v.thumbnail || '',
        updated_at: new Date().toISOString()
      }, { merge: true });
    }

    console.log("[Firestore] Successfully synchronized all content, media, brochures, and videos!");
    return true;
  } catch (err) {
    console.warn("[Firestore] Sync error (Check Firestore Rules in Firebase console):", err.message);
    return false;
  }
}

/**
 * Record a new customer contact inquiry in Firestore
 */
export async function recordContactInquiryInFirestore(inquiry) {
  const db = await initFirestore();
  if (!db) return false;

  try {
    const { collection, addDoc } = await import("https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js");
    await addDoc(collection(db, "contact_inquiries"), {
      ...inquiry,
      created_at: new Date().toISOString(),
      status: "unread"
    });
    return true;
  } catch (err) {
    console.warn("[Firestore] Inquiry record error:", err.message);
    return false;
  }
}

/**
 * Record a new quote request in Firestore
 */
export async function recordQuoteRequestInFirestore(quote) {
  const db = await initFirestore();
  if (!db) return false;

  try {
    const { collection, addDoc } = await import("https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js");
    await addDoc(collection(db, "quote_requests"), {
      ...quote,
      created_at: new Date().toISOString(),
      status: "pending"
    });
    return true;
  } catch (err) {
    console.warn("[Firestore] Quote record error:", err.message);
    return false;
  }
}
