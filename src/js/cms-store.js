/**
 * REVA PHOENIX CMS - Central Content Store & Data Layer
 * Single source of truth for the entire website with local disk persistence,
 * IndexedDB/localStorage fallback, and real-time cross-tab synchronization.
 */

import {
  COMPANY_INFO,
  HERO_DATA,
  ABOUT_DATA,
  STATISTICS,
  CORE_VALUES,
  SERVICES,
  API_SERVICES,
  IMS_SERVICES,
  TRAINING_SERVICES_DATA,
  INDUSTRIES,
  CLIENTS,
  TESTIMONIALS,
  INFRASTRUCTURE_DATA,
  GALLERY_ITEMS,
  VIDEOS,
  DOWNLOADS,
  MD_MESSAGE
} from './data.js';

import {
  fetchCmsContent,
  saveAllCmsContent
} from './supabase-client.js';

import {
  syncAllToFirestore
} from './firebase-firestore.js';

export const CMS_STORAGE_KEY = 'reva_phoenix_cms_store_v2';
export const CMS_SESSION_KEY = 'reva_admin_session';

// Complete, curated default CMS dataset matching the current live site
export const DEFAULT_CMS_DATA = {
  siteSettings: {
    siteName: "Reva Phoenix Labs & Consultants Pvt. Ltd.",
    division: "Consulting Division",
    tagline: "Quality is our way of life!",
    philosophy: "PEOPLE | PROCESS | PRODUCT | PERFECTION",
    established: 2005,
    founderInspiration: "Smt. Revathi Venkatesan, Founder Director, Cancer warrior & Survivor and the inspiration behind this Organization",
    primaryColor: "#F47A3C",
    secondaryColor: "#0070F3",
    lastUpdated: new Date().toISOString()
  },

  seo: {
    pageTitle: "Reva Phoenix Labs & Consultants | Consulting Division – Industrial Quality, API & IMS Engineering",
    metaDescription: "Reva Phoenix Labs & Consultants Pvt. Ltd. Consulting Division provides world-class Training, Consulting, Implementation, Auditing and API Spec Q1, Q2, Monogram and ISO management systems certification for Automotive, Aerospace, and Oil & Gas industries worldwide.",
    metaKeywords: "Reva Phoenix, API Spec Q1, API Spec Q2, API Monogram, ISO 9001:2015, IATF 16949, AS 9100, ISO 17025, Management Systems Consulting, Industrial Engineering, Oil and Gas Consulting, Automotive Consulting, Chennai Consulting, Quality Auditing",
    ogTitle: "Reva Phoenix Labs & Consultants | Consulting Division",
    ogDescription: "Quality is our way of life! Over 25 years of domain expertise serving 500+ clients across 40 countries in API, IMS, Automotive, Aerospace & Oil & Gas consulting.",
    ogImage: "assets/hero/hero-industrial-engineering.jpg",
    ogUrl: "https://revaphoenix.com/"
  },

  header: {
    topBarEmail: "info@revaphoenix.com",
    topBarPhone: "+91 99405 64261",
    labBadgeText: "Laboratory Division: revacalibration.com ↗",
    labBadgeUrl: "https://www.revacalibration.com/",
    logo: "assets/logo/reva-phoenix-logo.png",
    brandName: "REVA PHOENIX",
    brandSub: "Consulting Division",
    quoteButtonText: "Get A Quote",
    quoteButtonService: "General Consultation",
    navItems: [
      { id: "nav-home", label: "Home", link: "#home", isDropdown: false },
      { id: "nav-about", label: "About", link: "#about", isDropdown: false },
      {
        id: "nav-api",
        label: "API Services",
        link: "#api-services",
        isDropdown: true,
        dropdownItems: [
          { label: "API Auditing Services", targetTab: "api-auditing" },
          { label: "About API Spec Q1", targetTab: "api-q1-about" },
          { label: "API Spec Q1 Training", targetTab: "api-q1-training" },
          { label: "API Spec Q1 Consultancy", targetTab: "api-q1-consultancy" },
          { label: "About API Spec Q2", targetTab: "api-q2-about" },
          { label: "API Spec Q2 Training", targetTab: "api-q2-training" },
          { label: "API Spec Q2 Consultancy", targetTab: "api-q2-consultancy" },
          { label: "API Monogram", targetTab: "api-monogram" }
        ]
      },
      { id: "nav-ims", label: "MSS", link: "#ims-services", isDropdown: false },
      {
        id: "nav-training",
        label: "Training",
        link: "#training",
        isDropdown: true,
        dropdownItems: [
          { label: "Training Academy", targetTab: "training", subtext: "API, ISO 9001, Automotive Core Tools & Lean", icon: "🎓", badge: "10 Tracks" },
          { label: "Consulting Advisory", targetTab: "consulting", subtext: "Clause 4-10 Diagnostics & QMS Architecture", icon: "💡" },
          { label: "Turnkey Implementation", targetTab: "implementation", subtext: "6-Stage Roadmap to Guaranteed Certification", icon: "🚀", badge: "100% Pass" },
          { label: "Surgical Auditing", targetTab: "auditing", subtext: "Outsourced Internal Audits & Mock Dry Runs", icon: "🛡️" }
        ]
      },
      { id: "nav-industries", label: "Industries", link: "#industries", isDropdown: false },
      {
        id: "nav-portfolio",
        label: "Portfolio",
        link: "#portfolio",
        isDropdown: true,
        dropdownItems: [
          { label: "Our Clients", link: "#clients" },
          { label: "Infrastructure", link: "#infrastructure" },
          { label: "Event Gallery", link: "#gallery" },
          { label: "Video Center", link: "#videos" },
          { label: "Testimonials", link: "#testimonials" },
          { label: "Downloads", link: "#downloads" }
        ]
      },
      { id: "nav-careers", label: "Careers", link: "#careers", isDropdown: false },
      { id: "nav-contact", label: "Contact", link: "#contact", isDropdown: false }
    ]
  },

  home: {
    hero: {
      eyebrow: "Consulting • Training • Engineering • Auditing",
      titleLine1: "REVA PHOENIX",
      titleLine2: "LABS & CONSULTANTS",
      taglines: ["CONSULTING.", "TRAINING.", "ENGINEERING.", "AUDITING."],
      description: "Empowering international manufacturing, energy, and aerospace leaders with verified <strong>API Monogram licenses</strong>, <strong>Integrated Management Systems (IMS)</strong>, and precision quality consulting. Driving operational excellence for over two decades.",
      ctaPrimaryText: "Get A Quote",
      ctaPrimaryLink: "#contact",
      ctaPrimaryService: "Turnkey Management System Certification",
      ctaSecondaryText: "Explore Services",
      ctaSecondaryLink: "#services"
    },
    capabilitiesSubtitle: "Capabilities",
    capabilitiesTitleLine1: "ENGINEERING",
    capabilitiesTitleLine2: "THAT MOVES",
    capabilitiesTitleLine3: "INDUSTRIES.",
    capabilitiesDescription: "Comprehensive six-pillar service architecture delivering end-to-end organizational transformation, accreditation compliance, and measurable cost reductions."
  },

  about: {
    subtitle: "Together We Grow!",
    headingWord1: "ABOUT",
    headingWord2: "REVA",
    headingWord3: "PHOENIX",
    leadText: "It is the endeavor of <strong>Reva Phoenix Labs &amp; Consultants Pvt. Ltd. Consulting Division</strong> to add value to our Customer’s Business &amp; Management Systems through Training, Consultation, Implementation and other Value-added services.",
    bodyText: "It has been nearly 2 decades since we started Reva Phoenix, as a modest organization. We have grown to become one of the leading service providers in the Industry.",
    tributeQuote: "Our growth is attributed to the blessings of <strong>Smt. Revathi Venkatesan</strong>, Our Founder Director, Cancer warrior &amp; Survivor and the inspiration behind this Organization;",
    founderImage: "assets/about/dr-manikandan-venkatesan-md.jpg",
    founderName: "Dr. Manikandan Venkatesan",
    founderTitle: "Founder & Managing Director",
    mdButtonText: "Message From MD",
    coreValuesButtonText: "Our Core Values",
    mdMessage: MD_MESSAGE,
    coreValues: CORE_VALUES
  },

  statistics: STATISTICS,

  services: SERVICES,

  apiServices: API_SERVICES,

  imsServices: IMS_SERVICES,

  training: TRAINING_SERVICES_DATA,

  industries: {
    subtitle: "Sectors We Serve",
    titleLine1: "GLOBAL",
    titleLine2: "INDUSTRIAL",
    titleLine3: "FOOTPRINT",
    description: "Proven compliance blueprints customized for high-consequence industries where safety, zero defect, and regulatory compliance are non-negotiable.",
    items: INDUSTRIES
  },

  portfolio: {
    clientsSubtitle: "Privileged Clientele",
    clientsTitle: "TRUSTED BY INDUSTRY TITANS",
    clientsBadge: "18 Verified Enterprises",
    clients: CLIENTS,

    infrastructureSubtitle: "Facility & Technology",
    infrastructureTitleLine1: "WORLD CLASS",
    infrastructureTitleLine2: "INFRASTRUCTURE",
    infrastructureDescription: "Operating from the Reva Phoenix Complex in Chennai with <strong>20+ integrated calibration laboratories</strong> under one roof — India's largest integrated calibration facility.",
    infrastructureLabLinkText: "Visit Calibration Division ↗",
    infrastructureLabLinkUrl: "https://www.revacalibration.com/",
    infrastructureFeatures: INFRASTRUCTURE_DATA.features,
    infrastructureImages: INFRASTRUCTURE_DATA.images,

    gallerySubtitle: "Visual Archive",
    galleryTitleLine1: "EVENT",
    galleryTitleLine2: "& WORKSHOP",
    galleryTitleLine3: "GALLERY",
    galleryDescription: "Live photographic documentation of auditor masterclasses, industrial training cohorts, and corporate felicitation milestones.",
    gallery: GALLERY_ITEMS,

    videosSubtitle: "Media Center",
    videosTitleLine1: "OFFICIAL",
    videosTitleLine2: "TRAINING",
    videosTitleLine3: "VIDEOS",
    videosDescription: "Watch our master trainers explore automotive standards, API oil & gas frameworks, and integrated management systems.",
    videos: VIDEOS,

    testimonialsSubtitle: "Client Endorsements",
    testimonialsTitleLine1: "WHAT OUR",
    testimonialsTitleLine2: "PARTNERS SAY",
    testimonialsDescription: "Authentic, unedited feedback from quality managers, technical leads, and corporate executives trained and mentored by Reva Phoenix.",
    testimonials: TESTIMONIALS,

    downloadsSubtitle: "Official Publications",
    downloadsTitleLine1: "VERIFIED",
    downloadsTitleLine2: "DOWNLOADS",
    downloadsDescription: "Access our official Corporate Brochure and accredited ISO 9001:2015 certificate for verification and RFP procurement.",
    downloads: DOWNLOADS
  },

  careers: {
    subtitle: "Join Our Team",
    titleLine1: "CAREERS",
    titleLine2: "BUILD",
    titleLine3: "YOUR FUTURE.",
    description: "Reva Phoenix is expanding its business in Training, Consulting, and Calibration across PAN India and the Middle East. Work on global projects in metrology and oil & gas.",
    jobs: CAREERS.map(c => ({
      ...c,
      status: "Open",
      employmentType: "Full-Time",
      department: "Quality & Metrology Engineering"
    }))
  },

  contact: {
    subtitle: "Initiate Collaboration",
    titleLine1: "LET'S",
    titleLine2: "BUILD",
    titleLine3: "WHAT'S",
    titleLine4: "NEXT.",
    hqTitle: "Corporate Headquarters",
    companyName: COMPANY_INFO.name,
    addressLines: [
      COMPANY_INFO.address.line1,
      COMPANY_INFO.address.line2,
      `${COMPANY_INFO.address.city} – ${COMPANY_INFO.address.postalCode}, ${COMPANY_INFO.address.state}, ${COMPANY_INFO.address.country}.`
    ],
    registration: {
      gstin: COMPANY_INFO.tax.gst,
      sac: COMPANY_INFO.tax.sac,
      centralEmail: COMPANY_INFO.contacts.general.email,
      centralDesk: COMPANY_INFO.contacts.general.phone
    },
    departments: [
      COMPANY_INFO.contacts.enquiry,
      COMPANY_INFO.contacts.feedback,
      COMPANY_INFO.contacts.collection,
      COMPANY_INFO.contacts.accounts
    ],
    socials: COMPANY_INFO.socials,
    googleMapsUrl: "https://maps.google.com/?q=Reva+Phoenix+Labs+and+Consultants+Madipakkam+Chennai",
    formTitle: "Request Consultation & Proposal",
    formSubtitle: "Submit your project specifications. Our lead consultant will respond within 24 hours.",
    formRecipientEmail: "enquiry@revaphoenix.com",
    formSuccessMessage: "Your inquiry has been successfully dispatched to our engineering consulting desk. We will respond promptly."
  },

  footer: {
    logo: "assets/logo/reva-phoenix-logo.png",
    description: "Reva Phoenix Labs & Consultants Pvt. Ltd. Consulting Division is an international business solutions leader in quality engineering, API monogram licensing, and IMS management system certifications.",
    motto: "QUALITY IS OUR WAY OF LIFE!",
    addressSummary: `${COMPANY_INFO.address.line1}, ${COMPANY_INFO.address.line2}, ${COMPANY_INFO.address.city} – ${COMPANY_INFO.address.postalCode}, ${COMPANY_INFO.address.country}.`,
    copyright: "© 2026 Reva Phoenix Labs & Consultants Pvt. Ltd. All rights reserved.",
    gst: "33AAFCR4885G1Z6",
    sac: "998313"
  },

  mediaLibrary: [
    { name: "Reva Phoenix Logo", url: "assets/logo/reva-phoenix-logo.png", type: "image/png", tag: "Brand" },
    { name: "Dr. Manikandan Venkatesan (MD)", url: "assets/about/dr-manikandan-venkatesan-md.jpg", type: "image/jpeg", tag: "About" },
    { name: "Reva Phoenix Headquarters", url: "assets/about/reva-phoenix-headquarters.jpg", type: "image/jpeg", tag: "Facility" },
    { name: "Training Classroom", url: "assets/services/training-classroom.jpg", type: "image/jpeg", tag: "Services" },
    { name: "Consulting Engineering", url: "assets/services/consulting-engineering.jpg", type: "image/jpeg", tag: "Services" },
    { name: "Implementation Methodology", url: "assets/services/implementation-methodology.jpg", type: "image/jpeg", tag: "Services" },
    { name: "Project Management Flow", url: "assets/services/project-management-flow.jpg", type: "image/jpeg", tag: "Services" },
    { name: "API Inspection", url: "assets/api/api-spec-q1-inspection.jpg", type: "image/jpeg", tag: "API" },
    { name: "Auditing Precision", url: "assets/services/auditing-precision.jpg", type: "image/jpeg", tag: "Services" },
    { name: "Dimensional Metrology Lab", url: "assets/infrastructure/reva-calibration-lab-1.jpg", type: "image/jpeg", tag: "Infrastructure" },
    { name: "Calibration Standards Suite", url: "assets/infrastructure/reva-calibration-lab-2.jpg", type: "image/jpeg", tag: "Infrastructure" },
    { name: "API Gauge Inspection Wing", url: "assets/infrastructure/reva-calibration-lab-3.jpg", type: "image/jpeg", tag: "Infrastructure" },
    { name: "Training Session Group", url: "assets/gallery/training-session-group.jpg", type: "image/jpeg", tag: "Gallery" },
    { name: "Management Review Event", url: "assets/gallery/gallery-event-1.jpg", type: "image/jpeg", tag: "Gallery" },
    { name: "Shop Floor Workshop", url: "assets/gallery/gallery-event-2.jpg", type: "image/jpeg", tag: "Gallery" },
    { name: "Inspection Demo", url: "assets/gallery/gallery-event-3.jpg", type: "image/jpeg", tag: "Gallery" },
    { name: "Quality Systems Seminar", url: "assets/gallery/gallery-event-4.jpg", type: "image/jpeg", tag: "Gallery" },
    { name: "Lead Auditor Felicitation", url: "assets/gallery/gallery-event-5.jpg", type: "image/jpeg", tag: "Gallery" },
    { name: "Automotive Manufacturing", url: "assets/industries/automotive-manufacturing.jpg", type: "image/jpeg", tag: "Industries" },
    { name: "Oil & Gas Facility", url: "assets/industries/oil-and-gas-facility.jpg", type: "image/jpeg", tag: "Industries" },
    { name: "Aerospace Precision", url: "assets/industries/aerospace-precision.jpg", type: "image/jpeg", tag: "Industries" },
    { name: "Business Excellence", url: "assets/industries/business-excellence.jpg", type: "image/jpeg", tag: "Industries" }
  ]
};

// Cross-tab broadcast channel for immediate real-time sync
let cmsBroadcastChannel = null;
try {
  if (typeof BroadcastChannel !== 'undefined') {
    cmsBroadcastChannel = new BroadcastChannel('reva_phoenix_cms_sync');
  }
} catch (e) {
  console.warn("BroadcastChannel not supported", e);
}

// In-memory cache
let cachedCmsData = null;

/**
 * Deep merge utility
 */
function deepMerge(target, source) {
  if (!source || typeof source !== 'object') return target;
  const output = Array.isArray(target) ? [...target] : { ...target };

  if (Array.isArray(source)) {
    return [...source];
  }

  Object.keys(source).forEach(key => {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      if (!(key in target)) {
        output[key] = source[key];
      } else {
        output[key] = deepMerge(target[key], source[key]);
      }
    } else {
      output[key] = source[key];
    }
  });

  return output;
}

/**
 * Synchronous getter: gets data from memory, localStorage, or defaults
 */
export function getCmsData() {
  if (cachedCmsData) {
    return cachedCmsData;
  }

  try {
    const raw = localStorage.getItem(CMS_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      cachedCmsData = deepMerge(DEFAULT_CMS_DATA, parsed);
      return cachedCmsData;
    }
  } catch (err) {
    console.error("Error reading CMS data from localStorage:", err);
  }

  cachedCmsData = JSON.parse(JSON.stringify(DEFAULT_CMS_DATA));
  return cachedCmsData;
}

/**
 * Asynchronous loader: checks Supabase database first, then local server disk (/api/data), then localStorage
 */
export async function initCmsData() {
  // 1. Try Supabase cloud database
  try {
    const supabaseData = await fetchCmsContent();
    if (supabaseData && Object.keys(supabaseData).length > 0) {
      console.log("[Supabase] Loaded active CMS dataset from cloud database.");
      cachedCmsData = deepMerge(DEFAULT_CMS_DATA, supabaseData);
      localStorage.setItem(CMS_STORAGE_KEY, JSON.stringify(cachedCmsData));
      return cachedCmsData;
    }
  } catch (supabaseErr) {
    console.warn("[Supabase] Cloud load skipped or offline, attempting local disk fallback:", supabaseErr);
  }

  // 2. Fallback to local server disk (/api/data)
  try {
    const res = await fetch('/api/data', { cache: 'no-store' });
    if (res.ok) {
      const serverData = await res.json();
      if (serverData && Object.keys(serverData).length > 0) {
        cachedCmsData = deepMerge(DEFAULT_CMS_DATA, serverData);
        localStorage.setItem(CMS_STORAGE_KEY, JSON.stringify(cachedCmsData));
        return cachedCmsData;
      }
    }
  } catch (err) {
    // Local static server or offline
  }
  return getCmsData();
}

/**
 * Save CMS data to memory, localStorage, server disk, and Supabase cloud database
 */
export async function saveCmsData(newData, userIdentifier = null) {
  try {
    newData.siteSettings = newData.siteSettings || {};
    newData.siteSettings.lastUpdated = new Date().toISOString();

    cachedCmsData = newData;
    const serialized = JSON.stringify(newData);
    localStorage.setItem(CMS_STORAGE_KEY, serialized);

    // Notify other tabs and window listeners
    if (cmsBroadcastChannel) {
      cmsBroadcastChannel.postMessage({ type: 'CMS_DATA_UPDATED', timestamp: Date.now() });
    }
    window.dispatchEvent(new CustomEvent('reva-cms-updated', { detail: newData }));

    // 1. Persist to Supabase cloud database
    try {
      saveAllCmsContent(newData, userIdentifier).then(res => {
        if (res && res.success) {
          console.log("[Supabase] CMS data synchronized to cloud database!");
        }
      }).catch(e => console.warn("[Supabase] Cloud sync error:", e));
    } catch (sbErr) {
      console.warn("[Supabase] Cloud save skipped:", sbErr);
    }

    // 2. Persist to Firebase Cloud Firestore database
    try {
      syncAllToFirestore(newData).then(res => {
        if (res) {
          console.log("[Firestore] CMS data synchronized to Firebase Cloud Firestore!");
        }
      }).catch(e => console.warn("[Firestore] Cloud Firestore sync error:", e));
    } catch (fsErr) {
      console.warn("[Firestore] Cloud Firestore save skipped:", fsErr);
    }

    // 3. Persist to server disk via /api/save-data
    try {
      const res = await fetch('/api/save-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: serialized
      });
      if (res.ok) {
        console.log("Successfully saved CMS data to server disk!");
      }
    } catch (e) {
      console.warn("Backend save-data unavailable, saved to localStorage", e);
    }

    return true;
  } catch (err) {
    console.error("Failed to save CMS data:", err);
    throw err;
  }
}

/**
 * Reset to factory defaults
 */
export async function resetCmsData() {
  try {
    localStorage.removeItem(CMS_STORAGE_KEY);
    cachedCmsData = JSON.parse(JSON.stringify(DEFAULT_CMS_DATA));

    if (cmsBroadcastChannel) {
      cmsBroadcastChannel.postMessage({ type: 'CMS_DATA_RESET', timestamp: Date.now() });
    }
    window.dispatchEvent(new CustomEvent('reva-cms-updated', { detail: DEFAULT_CMS_DATA }));

    try {
      await fetch('/api/reset-data', { method: 'POST' });
    } catch (e) {}

    return true;
  } catch (err) {
    console.error("Failed to reset CMS data:", err);
    throw err;
  }
}

/**
 * Export backup as JSON file download
 */
export function exportCmsBackup() {
  const data = getCmsData();
  const dateStr = new Date().toISOString().slice(0, 10);
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `reva_phoenix_cms_backup_${dateStr}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

/**
 * Import backup from JSON file
 */
export async function importCmsBackup(jsonString) {
  try {
    const parsed = JSON.parse(jsonString);
    if (!parsed || typeof parsed !== 'object') {
      throw new Error("Invalid JSON backup structure");
    }
    const merged = deepMerge(DEFAULT_CMS_DATA, parsed);
    await saveCmsData(merged);
    return true;
  } catch (err) {
    console.error("Import backup error:", err);
    throw err;
  }
}

/**
 * Upload image file to server or convert to base64 DataURL fallback
 */
export async function uploadMediaFile(file) {
  return new Promise(async (resolve, reject) => {
    if (!file) return reject(new Error("No file selected"));
    if (file.size > 200 * 1024 * 1024) {
      return reject(new Error("File exceeds 200MB limit"));
    }

    let finalUrl = null;

    // Try direct server upload first
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("image", file);
      formData.append("filename", file.name);

      const response = await fetch('/api/upload-file', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        const resJson = await response.json();
        if (resJson && resJson.url) {
          finalUrl = resJson.url;
        }
      }
    } catch (err) {
      console.warn("Direct upload failed, attempting fallback:", err);
    }

    // Fallback to dataUrl only if smaller than 15MB
    if (!finalUrl && file.size <= 15 * 1024 * 1024) {
      try {
        finalUrl = await new Promise((res, rej) => {
          const reader = new FileReader();
          reader.onload = () => res(reader.result);
          reader.onerror = rej;
          reader.readAsDataURL(file);
        });
      } catch (e) {
        return reject(e);
      }
    }

    if (!finalUrl) {
      return reject(new Error("Failed to upload file to server"));
    }

    // Add to media library list
    const store = getCmsData();
    store.mediaLibrary = store.mediaLibrary || [];
    const existing = store.mediaLibrary.find(m => m.url === finalUrl);
    if (!existing) {
      store.mediaLibrary.unshift({
        name: file.name,
        url: finalUrl,
        type: file.type || (file.name.endsWith('.mp4') ? "video/mp4" : file.name.endsWith('.pdf') ? "application/pdf" : "image/png"),
        size: `${Math.round(file.size / 1024)} KB`,
        uploadedAt: new Date().toISOString(),
        tag: file.name.endsWith('.mp4') || file.name.endsWith('.webm') ? "Videos" : file.name.endsWith('.pdf') ? "Brochures" : "Images"
      });
      saveCmsData(store).catch(console.error);
    }

    resolve(finalUrl);
  });
}

/**
 * Register listener for runtime updates across tabs or within window
 */
export function onCmsUpdate(callback) {
  window.addEventListener('reva-cms-updated', (e) => {
    callback(e.detail);
  });

  if (cmsBroadcastChannel) {
    cmsBroadcastChannel.onmessage = (event) => {
      if (event.data && (event.data.type === 'CMS_DATA_UPDATED' || event.data.type === 'CMS_DATA_RESET')) {
        cachedCmsData = null; // Invalidate cache
        callback(getCmsData());
      }
    };
  }

  window.addEventListener('storage', (e) => {
    if (e.key === CMS_STORAGE_KEY) {
      cachedCmsData = null;
      callback(getCmsData());
    }
  });
}

/**
 * Simple secure admin session management
 */
export function isCmsAuthenticated() {
  return sessionStorage.getItem(CMS_SESSION_KEY) === 'authenticated' ||
         localStorage.getItem(CMS_SESSION_KEY) === 'authenticated';
}

export function loginCms(username, password, remember = false) {
  // Verified default credentials: admin / reva2026 or admin123
  const validUser = "admin";
  const validPass = ["reva2026", "admin123", "reva@2026"];

  if (username.trim().toLowerCase() === validUser && validPass.includes(password.trim())) {
    sessionStorage.setItem(CMS_SESSION_KEY, 'authenticated');
    if (remember) {
      localStorage.setItem(CMS_SESSION_KEY, 'authenticated');
    }
    return { success: true };
  }
  return { success: false, error: "Invalid username or password" };
}

export function logoutCms() {
  sessionStorage.removeItem(CMS_SESSION_KEY);
  localStorage.removeItem(CMS_SESSION_KEY);
}
