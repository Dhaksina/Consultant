/**
 * REVA PHOENIX — MEDIA & ASSET MANAGEMENT ADMIN CONTROLLER
 * Focused specifically on:
 * 1. Website Images (About MD, API Auditing, Sectors, Infrastructure, Gallery, Branding)
 * 2. Brochures & Catalogs (PDF Uploads & Management)
 * 3. Certificates & Accreditations (ISO & API Certificate Uploads)
 * 4. Videos & Media Showcase (Video File Upload & URL Management)
 * 5. Media Library & Backup
 */

import {
  initCmsData,
  getCmsData,
  saveCmsData,
  resetCmsData,
  exportCmsBackup,
  importCmsBackup,
  uploadMediaFile,
  isCmsAuthenticated,
  loginCms,
  logoutCms
} from '/src/js/cms-store.js';

import {
  initFirebaseAuth,
  loginWithEmail,
  signUpWithEmail,
  resetPassword,
  logoutUser,
  onAuthStateChange,
  getCurrentUser
} from '/src/js/firebase-auth.js';

import {
  isFirebaseConfigured,
  isSupabaseConfigured
} from '/src/js/config.js';

let activeData = null;
let currentTab = 'images';
let activeImageFilter = 'all';
let isDirty = false;
let pendingImageCallback = null;
let pendingDeleteAction = null;
let currentAuthMode = 'signin'; // 'signin' or 'signup'

// Helper to ensure all image/asset paths resolve from web root
function formatAssetUrl(url) {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:')) {
    return url;
  }
  return url.startsWith('/') ? url : '/' + url;
}

// DOM Elements
const loginScreen = document.getElementById('admin-login-screen');
const adminApp = document.getElementById('admin-app');
const loginForm = document.getElementById('admin-login-form');
const loginErrorAlert = document.getElementById('login-error-alert');
const loginSuccessAlert = document.getElementById('login-success-alert');
const tabPanesContainer = document.getElementById('admin-tab-panes');
const currentBreadcrumb = document.getElementById('current-section-breadcrumb');
const saveStatusIndicator = document.getElementById('save-status-indicator');
const btnSaveAll = document.getElementById('btn-save-all');
const btnDiscard = document.getElementById('btn-discard-changes');
const btnLivePreview = document.getElementById('btn-live-preview');
const adminLogoutBtn = document.getElementById('admin-logout-btn');
const mobileSidebarToggle = document.getElementById('mobile-sidebar-toggle');
const adminSidebar = document.getElementById('admin-sidebar');
const sectionSearchInput = document.getElementById('section-search-input');

// Auth DOM Elements
const tabBtnSignin = document.getElementById('tab-btn-signin');
const tabBtnSignup = document.getElementById('tab-btn-signup');
const confirmPasswordContainer = document.getElementById('confirm-password-container');
const confirmPasswordInput = document.getElementById('login-confirm-password');
const signinOptionsRow = document.getElementById('signin-options-row');
const btnSubmitAuth = document.getElementById('btn-submit-auth');
const btnSubmitText = document.getElementById('btn-submit-text');
const btnForgotPassword = document.getElementById('btn-forgot-password');
const modalForgotPassword = document.getElementById('modal-forgot-password');
const forgotEmailInput = document.getElementById('forgot-email-input');
const sendResetBtn = document.getElementById('send-reset-btn');
const cancelForgotBtn = document.getElementById('cancel-forgot-btn');
const closeForgotModal = document.getElementById('close-forgot-modal');
const forgotStatusMsg = document.getElementById('forgot-status-msg');

// Modals
const mediaModal = document.getElementById('modal-media-picker');
const deleteModal = document.getElementById('modal-delete-confirm');
const previewModal = document.getElementById('modal-live-preview');
const adminToast = document.getElementById('admin-toast');

document.addEventListener('DOMContentLoaded', async () => {
  initAuth();
  initGlobalEvents();
  initMediaModal();
  initDeleteModal();
  initPreviewModal();
});

/**
 * 1. Authentication Flow with Firebase Integration
 */
function initAuth() {
  // Listen for Firebase Auth state changes
  onAuthStateChange((user) => {
    if (user) {
      updateUserProfileUI(user);
    }
  });

  if (isCmsAuthenticated() || getCurrentUser()) {
    showDashboard();
  } else {
    showLogin();
  }

  // Auth Mode Switching (Sign In vs Create Admin)
  if (tabBtnSignin && tabBtnSignup) {
    tabBtnSignin.addEventListener('click', () => setAuthMode('signin'));
    tabBtnSignup.addEventListener('click', () => setAuthMode('signup'));
  }

  // Handle Login / Signup Submit
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const usernameInput = document.getElementById('login-username');
      const passwordInput = document.getElementById('login-password');
      const email = usernameInput.value.trim();
      const password = passwordInput.value;
      const remember = document.getElementById('login-remember')?.checked;

      hideAuthAlerts();

      if (btnSubmitAuth) {
        btnSubmitAuth.disabled = true;
        btnSubmitAuth.style.opacity = '0.7';
      }

      try {
        if (currentAuthMode === 'signup') {
          // Sign Up flow
          const confirmPassword = confirmPasswordInput ? confirmPasswordInput.value : '';
          if (password !== confirmPassword) {
            showLoginError("Passwords do not match. Please re-enter.");
            return;
          }
          if (password.length < 6) {
            showLoginError("Password must be at least 6 characters long.");
            return;
          }

          const result = await signUpWithEmail(email, password);
          if (result.success) {
            showLoginSuccess("Admin account created successfully! You may now sign in.");
            setAuthMode('signin');
          } else {
            showLoginError(result.error || "Failed to create account.");
          }
        } else {
          // Sign In flow
          // Attempt Firebase Auth first
          const result = await loginWithEmail(email, password);
          if (result.success) {
            sessionStorage.setItem('reva_admin_session', 'authenticated');
            if (remember) localStorage.setItem('reva_admin_session', 'authenticated');
            hideAuthAlerts();
            updateUserProfileUI(result.user);
            showDashboard();
          } else {
            // Local fallback check if Firebase not yet wired with user's keys
            const localRes = loginCms(email, password, remember);
            if (localRes.success) {
              hideAuthAlerts();
              updateUserProfileUI({ email, uid: 'local-admin' });
              showDashboard();
            } else {
              showLoginError(result.error || localRes.error || "Invalid login credentials.");
            }
          }
        }
      } catch (err) {
        console.error("Auth error:", err);
        showLoginError(err.message || "An unexpected authentication error occurred.");
      } finally {
        if (btnSubmitAuth) {
          btnSubmitAuth.disabled = false;
          btnSubmitAuth.style.opacity = '1';
        }
      }
    });
  }

  // Toggle Password Visibility
  const togglePassBtn = document.getElementById('toggle-password-btn');
  const passInput = document.getElementById('login-password');
  if (togglePassBtn && passInput) {
    togglePassBtn.addEventListener('click', () => {
      passInput.type = passInput.type === 'password' ? 'text' : 'password';
      togglePassBtn.textContent = passInput.type === 'password' ? '👁' : '🔒';
    });
  }

  // Forgot Password Modal Handlers
  if (btnForgotPassword && modalForgotPassword) {
    btnForgotPassword.addEventListener('click', () => {
      if (forgotEmailInput) {
        forgotEmailInput.value = document.getElementById('login-username')?.value || '';
      }
      if (forgotStatusMsg) forgotStatusMsg.style.display = 'none';
      modalForgotPassword.style.display = 'flex';
    });
  }

  const closeForgot = () => {
    if (modalForgotPassword) modalForgotPassword.style.display = 'none';
  };
  if (closeForgotModal) closeForgotModal.addEventListener('click', closeForgot);
  if (cancelForgotBtn) cancelForgotBtn.addEventListener('click', closeForgot);

  if (sendResetBtn) {
    sendResetBtn.addEventListener('click', async () => {
      const email = forgotEmailInput ? forgotEmailInput.value.trim() : '';
      if (!email) {
        showForgotStatus("Please enter your admin email address.", true);
        return;
      }
      sendResetBtn.disabled = true;
      sendResetBtn.textContent = "Sending...";

      const res = await resetPassword(email);
      sendResetBtn.disabled = false;
      sendResetBtn.textContent = "Send Reset Link";

      if (res.success) {
        showForgotStatus(res.message || "Password reset email sent!", false);
      } else {
        showForgotStatus(res.error || "Failed to send reset link.", true);
      }
    });
  }

  // Logout Handler
  if (adminLogoutBtn) {
    adminLogoutBtn.addEventListener('click', async () => {
      if (confirm('Log out from Media Admin Panel?')) {
        await logoutUser();
        logoutCms();
        showLogin();
      }
    });
  }
}

function setAuthMode(mode) {
  currentAuthMode = mode;
  hideAuthAlerts();

  if (mode === 'signup') {
    tabBtnSignup?.classList.add('active');
    tabBtnSignin?.classList.remove('active');
    if (confirmPasswordContainer) confirmPasswordContainer.style.display = 'block';
    if (signinOptionsRow) signinOptionsRow.style.display = 'none';
    if (btnSubmitText) btnSubmitText.textContent = 'Create Admin Account';
  } else {
    tabBtnSignin?.classList.add('active');
    tabBtnSignup?.classList.remove('active');
    if (confirmPasswordContainer) confirmPasswordContainer.style.display = 'none';
    if (signinOptionsRow) signinOptionsRow.style.display = 'flex';
    if (btnSubmitText) btnSubmitText.textContent = 'Sign In with Firebase';
  }
}

function showLoginError(msg) {
  if (loginErrorAlert) {
    loginErrorAlert.textContent = msg;
    loginErrorAlert.style.display = 'block';
  }
  if (loginSuccessAlert) loginSuccessAlert.style.display = 'none';
}

function showLoginSuccess(msg) {
  if (loginSuccessAlert) {
    loginSuccessAlert.textContent = msg;
    loginSuccessAlert.style.display = 'block';
  }
  if (loginErrorAlert) loginErrorAlert.style.display = 'none';
}

function hideAuthAlerts() {
  if (loginErrorAlert) loginErrorAlert.style.display = 'none';
  if (loginSuccessAlert) loginSuccessAlert.style.display = 'none';
}

function showForgotStatus(msg, isError) {
  if (!forgotStatusMsg) return;
  forgotStatusMsg.textContent = msg;
  forgotStatusMsg.style.display = 'block';
  forgotStatusMsg.style.color = isError ? '#f87171' : '#34d399';
}

function updateUserProfileUI(user) {
  if (!user) return;
  const email = user.email || 'admin@revaphoenix.com';
  const uid = user.uid || 'local-admin';

  const emailEl = document.getElementById('user-display-email');
  const uidEl = document.getElementById('user-display-uid');
  const avatarEl = document.getElementById('user-avatar-initials');
  const authBadge = document.getElementById('badge-auth-status');
  const dbBadge = document.getElementById('badge-db-status');

  if (emailEl) emailEl.textContent = email;
  if (uidEl) uidEl.textContent = `UID: ${uid.slice(0, 12)}...`;
  if (avatarEl) avatarEl.textContent = (email[0] || 'A').toUpperCase();

  if (authBadge) {
    authBadge.textContent = isFirebaseConfigured() ? '🔥 Firebase Active' : '🔒 Local Session';
  }
  if (dbBadge) {
    dbBadge.textContent = isSupabaseConfigured() ? '⚡ Supabase Synced' : '💾 Local DB';
  }
}

function showLogin() {
  if (loginScreen) loginScreen.style.display = 'flex';
  if (adminApp) adminApp.style.display = 'none';
}

async function showDashboard() {
  if (loginScreen) loginScreen.style.display = 'none';
  if (adminApp) adminApp.style.display = 'flex';

  const user = getCurrentUser();
  if (user) updateUserProfileUI(user);

  await initCmsData();
  activeData = JSON.parse(JSON.stringify(getCmsData()));

  // Ensure portfolio downloads exist
  if (!activeData.portfolio) activeData.portfolio = {};
  if (!activeData.portfolio.downloads) activeData.portfolio.downloads = [];
  if (!activeData.portfolio.videos) activeData.portfolio.videos = [];
  if (!activeData.portfolio.infrastructureImages) activeData.portfolio.infrastructureImages = [];
  if (!activeData.portfolio.gallery) activeData.portfolio.gallery = [];

  switchTab('images');
}

/**
 * 2. Navigation & Global Events
 */
function initGlobalEvents() {
  const navButtons = document.querySelectorAll('#sidebar-nav .nav-item');
  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');
      if (tabId) switchTab(tabId);
    });
  });

  // Mobile sidebar toggle
  if (mobileSidebarToggle && adminSidebar) {
    mobileSidebarToggle.addEventListener('click', () => {
      adminSidebar.classList.toggle('mobile-open');
    });
  }

  const sidebarToggleBtn = document.getElementById('sidebar-toggle-btn');
  if (sidebarToggleBtn && adminSidebar) {
    sidebarToggleBtn.addEventListener('click', () => {
      adminSidebar.classList.toggle('collapsed');
      sidebarToggleBtn.textContent = adminSidebar.classList.contains('collapsed') ? '▶' : '◀';
    });
  }

  // Save All
  if (btnSaveAll) {
    btnSaveAll.addEventListener('click', handleSaveAll);
  }

  // Keyboard shortcut Ctrl+S / Cmd+S
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
      e.preventDefault();
      handleSaveAll();
    }
  });

  // Discard
  if (btnDiscard) {
    btnDiscard.addEventListener('click', () => {
      if (confirm('Discard all unsaved changes and reload from server?')) {
        activeData = JSON.parse(JSON.stringify(getCmsData()));
        setDirty(false);
        switchTab(currentTab);
        showToast('Changes discarded.');
      }
    });
  }

  // Live Preview
  if (btnLivePreview) {
    btnLivePreview.addEventListener('click', openLivePreview);
  }

  // Section search
  if (sectionSearchInput) {
    sectionSearchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      const cards = document.querySelectorAll('.media-card-item, .media-section-group');
      cards.forEach(el => {
        const text = el.innerText.toLowerCase();
        el.style.display = !q || text.includes(q) ? '' : 'none';
      });
    });
  }
}

/**
 * Switch Active Tab
 */
function switchTab(tabId) {
  currentTab = tabId;

  document.querySelectorAll('#sidebar-nav .nav-item').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-tab') === tabId);
  });

  const tabTitles = {
    images: 'Website Images (Photos & Graphics)',
    brochures: 'Brochures & Catalogs (PDF)',
    certificates: 'Certificates & Accreditations',
    videos: 'Videos & Media Showcase',
    media: 'Media Library',
    backup: 'Backup & Restore'
  };

  if (currentBreadcrumb) {
    currentBreadcrumb.textContent = tabTitles[tabId] || 'Media Management';
  }

  if (tabPanesContainer) {
    tabPanesContainer.innerHTML = '';
    switch (tabId) {
      case 'images':
        renderImagesTab();
        break;
      case 'brochures':
        renderBrochuresTab();
        break;
      case 'certificates':
        renderCertificatesTab();
        break;
      case 'videos':
        renderVideosTab();
        break;
      case 'media':
        renderMediaTab();
        break;
      case 'backup':
        renderBackupTab();
        break;
      default:
        renderImagesTab();
    }
  }

  if (adminSidebar && adminSidebar.classList.contains('mobile-open')) {
    adminSidebar.classList.remove('mobile-open');
  }
}

/**
 * ==============================================================
 * TAB 1: WEBSITE IMAGES
 * Sections matching the screenshots:
 * 1. About Section (Dr. Manikandan Venkatesan, MD)
 * 2. API Auditing, Second-Party & Mock Assessments
 * 3. Global Industrial Footprint / Sectors We Serve
 * 4. World Class Infrastructure (4 Labs/Buildings)
 * 5. Event & Workshop Gallery (All 6 photos + Add photo)
 * 6. Hero & Branding
 * ==============================================================
 */
function renderImagesTab() {
  const container = tabPanesContainer;
  if (!container) return;

  const html = `
    <div class="pane-header-row">
      <div>
        <h2 class="pane-title">🖼️ Website Images &amp; Visual Media</h2>
        <p class="pane-desc">Upload and replace images across all key sections of the website. Changes update the live website immediately.</p>
      </div>
      <button class="admin-btn admin-btn-primary" id="btn-save-images">
        💾 Save All Images
      </button>
    </div>

    <!-- Quick Section Jump Filters -->
    <div class="quick-filter-strip">
      <button class="quick-filter-pill ${activeImageFilter === 'all' ? 'active' : ''}" data-filter="all">All Sections (18 Images)</button>
      <button class="quick-filter-pill ${activeImageFilter === 'about' ? 'active' : ''}" data-filter="about">About MD Photo</button>
      <button class="quick-filter-pill ${activeImageFilter === 'api' ? 'active' : ''}" data-filter="api">API Auditing</button>
      <button class="quick-filter-pill ${activeImageFilter === 'industries' ? 'active' : ''}" data-filter="industries">Sectors We Serve</button>
      <button class="quick-filter-pill ${activeImageFilter === 'infra' ? 'active' : ''}" data-filter="infra">Infrastructure Labs</button>
      <button class="quick-filter-pill ${activeImageFilter === 'gallery' ? 'active' : ''}" data-filter="gallery">Visual Gallery</button>
      <button class="quick-filter-pill ${activeImageFilter === 'branding' ? 'active' : ''}" data-filter="branding">Hero &amp; Branding</button>
    </div>

    <!-- SECTION 1: ABOUT REVA PHOENIX (Screenshot 1) -->
    <div class="media-section-group" data-group="about" style="${activeImageFilter === 'all' || activeImageFilter === 'about' ? '' : 'display: none;'}">
      <div class="media-section-head">
        <div class="media-section-title-wrap">
          <span class="media-section-icon">👨‍💼</span>
          <div>
            <div class="media-section-heading">About Section — Founder &amp; Managing Director</div>
            <div class="media-section-sub">Portrait photo displayed next to "ABOUT REVA PHOENIX"</div>
          </div>
        </div>
        <span class="tech-badge orange">Section: About</span>
      </div>

      <div class="grid-2">
        <div class="media-card-item">
          <div class="media-preview-box">
            <img src="${formatAssetUrl(activeData.about?.founderImage || 'assets/about/dr-manikandan-venkatesan-md.jpg')}" id="preview-about-founder" alt="MD Portrait" />
            <span class="media-preview-badge">Portrait (3:4)</span>
            <div class="media-preview-actions">
              <button class="admin-btn admin-btn-xs admin-btn-ghost btn-pick-library" data-target="about.founderImage">Choose Library 📁</button>
            </div>
          </div>
          <div class="media-card-details">
            <div class="media-card-title">${activeData.about?.founderName || 'Dr. Manikandan Venkatesan'}</div>
            <div class="media-card-desc">${activeData.about?.founderTitle || 'Founder & Managing Director'}</div>
            <div class="media-card-path" id="path-about-founder">${activeData.about?.founderImage || 'assets/about/dr-manikandan-venkatesan-md.jpg'}</div>
          </div>
          
          <div class="media-upload-zone-compact" data-target="about.founderImage" data-preview="preview-about-founder" data-path="path-about-founder">
            <input type="file" accept="image/*" class="direct-file-input" style="display: none;" />
            <div class="zone-text">📸 <strong>Click to upload</strong> or drag &amp; drop photo here</div>
          </div>
        </div>

        <div class="media-card-item">
          <div class="media-preview-box">
            <img src="${formatAssetUrl(activeData.about?.headquartersImage || 'assets/about/reva-phoenix-headquarters.jpg')}" id="preview-about-hq" alt="Headquarters" />
            <span class="media-preview-badge">Corporate Facility</span>
            <div class="media-preview-actions">
              <button class="admin-btn admin-btn-xs admin-btn-ghost btn-pick-library" data-target="about.headquartersImage">Choose Library 📁</button>
            </div>
          </div>
          <div class="media-card-details">
            <div class="media-card-title">Corporate Headquarters Building</div>
            <div class="media-card-desc">Reva Phoenix Complex, Rajarajeswari Nagar, Madipakkam, Chennai</div>
            <div class="media-card-path" id="path-about-hq">${activeData.about?.headquartersImage || 'assets/about/reva-phoenix-headquarters.jpg'}</div>
          </div>

          <div class="media-upload-zone-compact" data-target="about.headquartersImage" data-preview="preview-about-hq" data-path="path-about-hq">
            <input type="file" accept="image/*" class="direct-file-input" style="display: none;" />
            <div class="zone-text">📸 <strong>Click to upload</strong> or drag &amp; drop photo here</div>
          </div>
        </div>
      </div>
    </div>

    <!-- SECTION 2: API AUDITING & PROGRAMS (Screenshot 2) -->
    <div class="media-section-group" data-group="api" style="${activeImageFilter === 'all' || activeImageFilter === 'api' ? '' : 'display: none;'}">
      <div class="media-section-head">
        <div class="media-section-title-wrap">
          <span class="media-section-icon">🛢️</span>
          <div>
            <div class="media-section-heading">API Auditing, Second-Party &amp; Mock Assessments</div>
            <div class="media-section-sub">Photos for API Spec Q1, Q2, Auditing and Monogram tabs</div>
          </div>
        </div>
        <span class="tech-badge blue">Section: API Services</span>
      </div>

      <div class="grid-2">
        ${(activeData.apiServices?.programs || []).map((prog, idx) => `
          <div class="media-card-item">
            <div class="media-preview-box">
              <img src="${formatAssetUrl(prog.image || 'assets/services/auditing-precision.jpg')}" id="preview-api-${idx}" alt="${prog.title}" />
              <span class="media-preview-badge">${prog.code || 'API PROGRAM'}</span>
              <div class="media-preview-actions">
                <button class="admin-btn admin-btn-xs admin-btn-ghost btn-pick-library" data-target="apiServices.programs.${idx}.image">Choose Library 📁</button>
              </div>
            </div>
            <div class="media-card-details">
              <div class="media-card-title">${prog.title}</div>
              <div class="media-card-desc">${prog.edition} — ${prog.badge}</div>
              <div class="media-card-path" id="path-api-${idx}">${prog.image || ''}</div>
            </div>

            <div class="media-upload-zone-compact" data-target="apiServices.programs.${idx}.image" data-preview="preview-api-${idx}" data-path="path-api-${idx}">
              <input type="file" accept="image/*" class="direct-file-input" style="display: none;" />
              <div class="zone-text">📸 <strong>Upload new image</strong> for ${prog.code}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- SECTION 3: SECTORS WE SERVE (Screenshot 3) -->
    <div class="media-section-group" data-group="industries" style="${activeImageFilter === 'all' || activeImageFilter === 'industries' ? '' : 'display: none;'}">
      <div class="media-section-head">
        <div class="media-section-title-wrap">
          <span class="media-section-icon">🏭</span>
          <div>
            <div class="media-section-heading">Global Industrial Footprint — Sectors We Serve</div>
            <div class="media-section-sub">High-consequence sector showcase cards</div>
          </div>
        </div>
        <span class="tech-badge orange">Section: Industries</span>
      </div>

      <div class="grid-2">
        ${(activeData.industries?.items || []).map((ind, idx) => `
          <div class="media-card-item">
            <div class="media-preview-box">
              <img src="${formatAssetUrl(ind.image || 'assets/industries/automotive-manufacturing.jpg')}" id="preview-ind-${idx}" alt="${ind.name}" />
              <span class="media-preview-badge">${ind.name}</span>
              <div class="media-preview-actions">
                <button class="admin-btn admin-btn-xs admin-btn-ghost btn-pick-library" data-target="industries.items.${idx}.image">Choose Library 📁</button>
              </div>
            </div>
            <div class="media-card-details">
              <div class="media-card-title">${ind.name}: ${ind.title}</div>
              <div class="media-card-path" id="path-ind-${idx}">${ind.image || ''}</div>
            </div>

            <div class="media-upload-zone-compact" data-target="industries.items.${idx}.image" data-preview="preview-ind-${idx}" data-path="path-ind-${idx}">
              <input type="file" accept="image/*" class="direct-file-input" style="display: none;" />
              <div class="zone-text">📸 <strong>Upload new image</strong> for ${ind.name}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- SECTION 4: WORLD CLASS INFRASTRUCTURE (Screenshot 4) -->
    <div class="media-section-group" data-group="infra" style="${activeImageFilter === 'all' || activeImageFilter === 'infra' ? '' : 'display: none;'}">
      <div class="media-section-head">
        <div class="media-section-title-wrap">
          <span class="media-section-icon">🔬</span>
          <div>
            <div class="media-section-heading">World Class Infrastructure</div>
            <div class="media-section-sub">Operating 35+ calibration &amp; inspection laboratories</div>
          </div>
        </div>
        <span class="tech-badge blue">Section: Infrastructure</span>
      </div>

      <div class="grid-2">
        ${(activeData.portfolio?.infrastructureImages || []).map((img, idx) => `
          <div class="media-card-item">
            <div class="media-preview-box">
              <img src="${formatAssetUrl(img.src)}" id="preview-infra-${idx}" alt="${img.caption}" />
              <span class="media-preview-badge">${img.tag || 'Laboratory'}</span>
              <div class="media-preview-actions">
                <button class="admin-btn admin-btn-xs admin-btn-ghost btn-pick-library" data-target="portfolio.infrastructureImages.${idx}.src">Choose Library 📁</button>
              </div>
            </div>
            <div class="media-card-details">
              <div class="form-field" style="margin-bottom: 0;">
                <label class="field-label-sm">Caption</label>
                <input type="text" class="admin-input-sm" value="${img.caption || ''}" data-target-input="portfolio.infrastructureImages.${idx}.caption" />
              </div>
              <div class="form-field" style="margin-bottom: 0;">
                <label class="field-label-sm">Category Tag</label>
                <input type="text" class="admin-input-sm" value="${img.tag || ''}" data-target-input="portfolio.infrastructureImages.${idx}.tag" />
              </div>
              <div class="media-card-path" id="path-infra-${idx}">${img.src || ''}</div>
            </div>

            <div class="media-upload-zone-compact" data-target="portfolio.infrastructureImages.${idx}.src" data-preview="preview-infra-${idx}" data-path="path-infra-${idx}">
              <input type="file" accept="image/*" class="direct-file-input" style="display: none;" />
              <div class="zone-text">📸 <strong>Upload new lab photo</strong></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- SECTION 5: EVENT & WORKSHOP GALLERY (Screenshot 5) -->
    <div class="media-section-group" data-group="gallery" style="${activeImageFilter === 'all' || activeImageFilter === 'gallery' ? '' : 'display: none;'}">
      <div class="media-section-head">
        <div class="media-section-title-wrap">
          <span class="media-section-icon">📸</span>
          <div>
            <div class="media-section-heading">Event &amp; Workshop Gallery (Visual Archive)</div>
            <div class="media-section-sub">Auditor masterclasses, training cohorts, and corporate felicitation photos</div>
          </div>
        </div>
        <button class="admin-btn admin-btn-sm admin-btn-secondary" id="btn-add-gallery-item">
          + Add New Photo
        </button>
      </div>

      <div class="grid-3" id="gallery-cards-grid">
        ${(activeData.portfolio?.gallery || []).map((item, idx) => `
          <div class="media-card-item">
            <div class="media-preview-box">
              <img src="${formatAssetUrl(item.src)}" id="preview-gallery-${idx}" alt="${item.title}" />
              <span class="media-preview-badge">${item.category || 'Event'}</span>
              <div class="media-preview-actions">
                <button class="admin-btn admin-btn-xs admin-btn-danger btn-delete-gallery-item" data-idx="${idx}" title="Delete Photo">✕</button>
              </div>
            </div>
            <div class="media-card-details">
              <div class="form-field" style="margin-bottom: 0;">
                <label class="field-label-sm">Photo Title</label>
                <input type="text" class="admin-input-sm" value="${item.title || ''}" data-target-input="portfolio.gallery.${idx}.title" />
              </div>
              <div class="form-field" style="margin-bottom: 0;">
                <label class="field-label-sm">Category</label>
                <input type="text" class="admin-input-sm" value="${item.category || ''}" data-target-input="portfolio.gallery.${idx}.category" />
              </div>
              <div class="media-card-path" id="path-gallery-${idx}">${item.src || ''}</div>
            </div>

            <div class="media-upload-zone-compact" data-target="portfolio.gallery.${idx}.src" data-preview="preview-gallery-${idx}" data-path="path-gallery-${idx}">
              <input type="file" accept="image/*" class="direct-file-input" style="display: none;" />
              <div class="zone-text">📸 <strong>Upload new photo</strong></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- SECTION 6: HERO & BRANDING -->
    <div class="media-section-group" data-group="branding" style="${activeImageFilter === 'all' || activeImageFilter === 'branding' ? '' : 'display: none;'}">
      <div class="media-section-head">
        <div class="media-section-title-wrap">
          <span class="media-section-icon">💎</span>
          <div>
            <div class="media-section-heading">Hero &amp; Corporate Branding</div>
            <div class="media-section-sub">Anniversary emblems, logo and hero showcase</div>
          </div>
        </div>
        <span class="tech-badge orange">Branding</span>
      </div>

      <div class="grid-3">
        <div class="media-card-item">
          <div class="media-preview-box" style="background: radial-gradient(circle, #1a2233 0%, #07090c 100%);">
            <img src="${formatAssetUrl(activeData.hero?.anniversaryBadge || 'assets/logo/reva-phoenix-25-years-official.png')}" id="preview-brand-badge" alt="Anniversary Emblem" style="object-fit: contain; padding: 10px;" />
            <span class="media-preview-badge">25 Years Medal</span>
          </div>
          <div class="media-card-details">
            <div class="media-card-title">25 Years Anniversary Emblem</div>
            <div class="media-card-desc">Gold official medal emblem in hero section</div>
            <div class="media-card-path" id="path-brand-badge">${activeData.hero?.anniversaryBadge || 'assets/logo/reva-phoenix-25-years-official.png'}</div>
          </div>
          <div class="media-upload-zone-compact" data-target="hero.anniversaryBadge" data-preview="preview-brand-badge" data-path="path-brand-badge">
            <input type="file" accept="image/*" class="direct-file-input" style="display: none;" />
            <div class="zone-text">📸 <strong>Replace emblem</strong></div>
          </div>
        </div>

        <div class="media-card-item">
          <div class="media-preview-box" style="background: #0b0e14;">
            <img src="${formatAssetUrl(activeData.header?.logo || 'assets/logo/reva-phoenix-logo.png')}" id="preview-brand-logo" alt="Logo" style="object-fit: contain; padding: 15px;" />
            <span class="media-preview-badge">Header Logo</span>
          </div>
          <div class="media-card-details">
            <div class="media-card-title">Corporate Header Logo</div>
            <div class="media-card-desc">Main logo in sticky header &amp; footer</div>
            <div class="media-card-path" id="path-brand-logo">${activeData.header?.logo || 'assets/logo/reva-phoenix-logo.png'}</div>
          </div>
          <div class="media-upload-zone-compact" data-target="header.logo" data-preview="preview-brand-logo" data-path="path-brand-logo">
            <input type="file" accept="image/*" class="direct-file-input" style="display: none;" />
            <div class="zone-text">📸 <strong>Replace logo</strong></div>
          </div>
        </div>

        <div class="media-card-item">
          <div class="media-preview-box">
            <img src="${formatAssetUrl(activeData.hero?.heroImage || 'assets/hero/hero-industrial-engineering.jpg')}" id="preview-brand-hero" alt="Hero Background" />
            <span class="media-preview-badge">Hero Background</span>
          </div>
          <div class="media-card-details">
            <div class="media-card-title">Hero Industrial Background</div>
            <div class="media-card-desc">High-tech industrial engineering visual</div>
            <div class="media-card-path" id="path-brand-hero">${activeData.hero?.heroImage || 'assets/hero/hero-industrial-engineering.jpg'}</div>
          </div>
          <div class="media-upload-zone-compact" data-target="hero.heroImage" data-preview="preview-brand-hero" data-path="path-brand-hero">
            <input type="file" accept="image/*" class="direct-file-input" style="display: none;" />
            <div class="zone-text">📸 <strong>Replace hero background</strong></div>
          </div>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = html;

  // Save Images button
  document.getElementById('btn-save-images')?.addEventListener('click', handleSaveAll);

  // Quick filter pills
  container.querySelectorAll('.quick-filter-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      const f = btn.getAttribute('data-filter');
      activeImageFilter = f;
      container.querySelectorAll('.quick-filter-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      container.querySelectorAll('.media-section-group').forEach(sec => {
        const group = sec.getAttribute('data-group');
        sec.style.display = (f === 'all' || group === f) ? '' : 'none';
      });
    });
  });

  // Attach drag & drop and direct upload handlers to all compact upload zones
  attachDirectUploadListeners(container);

  // Text inputs on gallery/infra
  container.querySelectorAll('[data-target-input]').forEach(input => {
    input.addEventListener('input', (e) => {
      const path = input.getAttribute('data-target-input');
      setDeepValue(activeData, path, e.target.value);
      setDirty(true);
    });
  });

  // Choose from library buttons
  container.querySelectorAll('.btn-pick-library').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetPath = btn.getAttribute('data-target');
      openMediaPickerForPath(targetPath);
    });
  });

  // Add gallery item
  document.getElementById('btn-add-gallery-item')?.addEventListener('click', () => {
    if (!activeData.portfolio) activeData.portfolio = {};
    if (!activeData.portfolio.gallery) activeData.portfolio.gallery = [];

    const newId = Date.now();
    activeData.portfolio.gallery.push({
      id: newId,
      src: "assets/gallery/training-session-group.jpg",
      title: "New Training Cohort Milestone",
      category: "Training"
    });
    setDirty(true);
    renderImagesTab();
    showToast("New gallery photo card added. Upload your photo!");
  });

  // Delete gallery item
  container.querySelectorAll('.btn-delete-gallery-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-idx'), 10);
      if (confirm('Remove this photo from the gallery?')) {
        activeData.portfolio.gallery.splice(idx, 1);
        setDirty(true);
        renderImagesTab();
        showToast("Photo removed from gallery.");
      }
    });
  });
}

/**
 * ==============================================================
 * TAB 2: BROCHURES & CATALOGS (PDF)
 * Upload and manage PDF documents for downloads & preview
 * ==============================================================
 */
function renderBrochuresTab() {
  const container = tabPanesContainer;
  if (!container) return;

  const downloads = activeData.portfolio?.downloads || [];
  // Filter brochure documents or show all documents
  const brochures = downloads.filter(d => d.id !== 'iso-certificate');

  const html = `
    <div class="pane-header-row">
      <div>
        <h2 class="pane-title">📑 Brochures &amp; Catalogs (PDF Management)</h2>
        <p class="pane-desc">Upload, replace, and manage downloadable PDF brochures. Visitors can preview and download these directly from the website.</p>
      </div>
      <div style="display: flex; gap: 0.75rem;">
        <button class="admin-btn admin-btn-secondary" id="btn-add-new-brochure">
          + Upload New Brochure
        </button>
        <button class="admin-btn admin-btn-primary" id="btn-save-brochures">
          💾 Save Changes
        </button>
      </div>
    </div>

    <div class="grid-2" id="brochures-grid-container">
      ${brochures.map((doc, idx) => `
        <div class="media-card-item">
          <div style="display: flex; align-items: flex-start; justify-content: space-between;">
            <div style="display: flex; gap: 0.75rem; align-items: center;">
              <span style="font-size: 2.2rem;">📕</span>
              <div>
                <div class="media-card-title">${doc.title}</div>
                <div class="doc-card-badge-row">
                  <span class="pdf-icon-badge">PDF</span>
                  <span class="tech-badge orange">${doc.size || '1.6 MB'}</span>
                  <span class="tech-badge blue">${doc.verified || 'Official Publication'}</span>
                </div>
              </div>
            </div>
            <button class="admin-btn admin-btn-xs admin-btn-danger btn-delete-brochure" data-id="${doc.id}">✕</button>
          </div>

          <div class="media-card-desc">${doc.description}</div>
          <div class="media-card-path" id="path-brochure-${idx}">${doc.filePath}</div>

          <!-- Actions -->
          <div style="display: flex; gap: 0.5rem;">
            <a href="${doc.filePath}" download class="admin-btn admin-btn-xs admin-btn-secondary" style="flex: 1; text-align: center; text-decoration: none;">
              Download PDF ↓
            </a>
            <button class="admin-btn admin-btn-xs admin-btn-ghost btn-preview-pdf" data-path="${doc.filePath}" data-title="${doc.title}" style="flex: 1;">
              Preview PDF 👁
            </button>
          </div>

          <!-- Upload & Replace Zone -->
          <div class="media-upload-zone-compact" data-doc-id="${doc.id}" data-path="path-brochure-${idx}">
            <input type="file" accept=".pdf,application/pdf" class="direct-pdf-input" style="display: none;" />
            <div class="zone-text">📄 <strong>Click or drag to replace PDF file</strong></div>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  container.innerHTML = html;

  document.getElementById('btn-save-brochures')?.addEventListener('click', handleSaveAll);

  // Add new brochure
  document.getElementById('btn-add-new-brochure')?.addEventListener('click', () => {
    const title = prompt("Enter Brochure Title (e.g. Training Academy Catalog 2026):", "Technical Services Brochure");
    if (!title) return;
    const desc = prompt("Enter Short Description:", "Comprehensive overview of training programs and compliance solutions.");

    const newId = `brochure-${Date.now()}`;
    activeData.portfolio.downloads.push({
      id: newId,
      title: title,
      description: desc || "Official Reva Phoenix Publication",
      fileType: "PDF Document",
      size: "1.2 MB",
      filePath: "assets/documents/reva-phoenix-corporate-brochure.pdf",
      verified: "Official Publication"
    });
    setDirty(true);
    renderBrochuresTab();
    showToast("New brochure added! Now click to upload your PDF file.");
  });

  // Delete brochure
  container.querySelectorAll('.btn-delete-brochure').forEach(btn => {
    btn.addEventListener('click', () => {
      const docId = btn.getAttribute('data-id');
      if (confirm('Delete this brochure?')) {
        activeData.portfolio.downloads = activeData.portfolio.downloads.filter(d => d.id !== docId);
        setDirty(true);
        renderBrochuresTab();
        showToast("Brochure deleted.");
      }
    });
  });

  // Preview PDF
  container.querySelectorAll('.btn-preview-pdf').forEach(btn => {
    btn.addEventListener('click', () => {
      const path = btn.getAttribute('data-path');
      const title = btn.getAttribute('data-title');
      openPdfPreviewModal(path, title);
    });
  });

  // Direct PDF Uploader
  container.querySelectorAll('.media-upload-zone-compact').forEach(zone => {
    const fileInput = zone.querySelector('.direct-pdf-input');
    const docId = zone.getAttribute('data-doc-id');
    const pathEl = document.getElementById(zone.getAttribute('data-path'));

    zone.addEventListener('click', () => fileInput?.click());

    zone.addEventListener('dragover', (e) => {
      e.preventDefault();
      zone.classList.add('dragover');
    });

    zone.addEventListener('dragleave', () => zone.classList.remove('dragover'));

    zone.addEventListener('drop', async (e) => {
      e.preventDefault();
      zone.classList.remove('dragover');
      if (e.dataTransfer.files?.length) {
        handlePdfUpload(e.dataTransfer.files[0], docId, pathEl);
      }
    });

    fileInput?.addEventListener('change', async (e) => {
      if (e.target.files?.length) {
        handlePdfUpload(e.target.files[0], docId, pathEl);
      }
    });
  });
}

async function handlePdfUpload(file, docId, pathEl) {
  try {
    showToast(`Uploading ${file.name}...`);
    const finalUrl = await uploadMediaFile(file);
    const doc = activeData.portfolio.downloads.find(d => d.id === docId);
    if (doc) {
      doc.filePath = finalUrl;
      doc.size = `${Math.max(1, Math.round(file.size / (1024 * 1024) * 10) / 10)} MB`;
      if (pathEl) pathEl.textContent = finalUrl;
    }
    setDirty(true);
    await autoSave();
    showToast(`PDF updated & saved: ${file.name}`);
    renderBrochuresTab();
  } catch (err) {
    alert("Upload failed: " + err.message);
  }
}

/**
 * ==============================================================
 * TAB 3: CERTIFICATES & ACCREDITATIONS
 * Official ISO, API, NABL credentials & certificate management
 * ==============================================================
 */
function renderCertificatesTab() {
  const container = tabPanesContainer;
  if (!container) return;

  const downloads = activeData.portfolio?.downloads || [];
  let certs = downloads.filter(d => d.id === 'iso-certificate' || d.id?.startsWith('cert-'));

  if (certs.length === 0) {
    certs = [{
      id: "iso-certificate",
      title: "ISO 9001:2015 Management System Certificate",
      description: "Official Accredited Management System Certificate of Reva Phoenix Labs & Consultants Pvt. Ltd.",
      fileType: "PDF Document",
      size: "775 KB",
      filePath: "assets/documents/iso-9001-2015-certificate.pdf",
      verified: "Accredited Certificate"
    }];
  }

  const html = `
    <div class="pane-header-row">
      <div>
        <h2 class="pane-title">📜 Certificates &amp; Accreditations</h2>
        <p class="pane-desc">Manage official certificates (ISO 9001:2015, API Monogram, NABL ISO/IEC 17025). Supports PDF and high-res image certificate files.</p>
      </div>
      <div style="display: flex; gap: 0.75rem;">
        <button class="admin-btn admin-btn-secondary" id="btn-add-new-cert">
          + Add Certificate
        </button>
        <button class="admin-btn admin-btn-primary" id="btn-save-certs">
          💾 Save Changes
        </button>
      </div>
    </div>

    <div class="grid-2" id="certs-grid-container">
      ${certs.map((doc, idx) => `
        <div class="media-card-item">
          <div style="display: flex; align-items: flex-start; justify-content: space-between;">
            <div style="display: flex; gap: 0.75rem; align-items: center;">
              <span style="font-size: 2.2rem;">🏆</span>
              <div>
                <div class="media-card-title">${doc.title}</div>
                <div class="doc-card-badge-row">
                  <span class="pdf-icon-badge" style="background: var(--blue-primary);">${doc.fileType?.includes('PDF') ? 'PDF' : 'IMAGE'}</span>
                  <span class="tech-badge orange">${doc.size || '775 KB'}</span>
                  <span class="tech-badge green">Accredited &amp; Active</span>
                </div>
              </div>
            </div>
            ${doc.id !== 'iso-certificate' ? `<button class="admin-btn admin-btn-xs admin-btn-danger btn-delete-cert" data-id="${doc.id}">✕</button>` : ''}
          </div>

          <div class="media-card-desc">${doc.description}</div>
          <div class="media-card-path" id="path-cert-${idx}">${doc.filePath}</div>

          <!-- Actions -->
          <div style="display: flex; gap: 0.5rem;">
            <a href="${doc.filePath}" download class="admin-btn admin-btn-xs admin-btn-secondary" style="flex: 1; text-align: center; text-decoration: none;">
              Download Certificate ↓
            </a>
            <button class="admin-btn admin-btn-xs admin-btn-ghost btn-preview-cert" data-path="${doc.filePath}" data-title="${doc.title}" style="flex: 1;">
              Preview Certificate 👁
            </button>
          </div>

          <!-- Upload & Replace Zone -->
          <div class="media-upload-zone-compact" data-cert-id="${doc.id}" data-path="path-cert-${idx}">
            <input type="file" accept=".pdf,image/*,application/pdf" class="direct-cert-input" style="display: none;" />
            <div class="zone-text">📜 <strong>Click or drag to replace Certificate (PDF/Image)</strong></div>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  container.innerHTML = html;

  document.getElementById('btn-save-certs')?.addEventListener('click', handleSaveAll);

  // Add new certificate
  document.getElementById('btn-add-new-cert')?.addEventListener('click', () => {
    const title = prompt("Enter Certificate Name (e.g. API Spec Q1 Monogram Accreditation):", "API Spec Q1 Certificate");
    if (!title) return;
    const desc = prompt("Enter Description / Accrediting Body:", "Official accreditation by American Petroleum Institute.");

    const newId = `cert-${Date.now()}`;
    activeData.portfolio.downloads.push({
      id: newId,
      title: title,
      description: desc || "Official Accredited Certificate",
      fileType: "PDF Document",
      size: "850 KB",
      filePath: "assets/documents/iso-9001-2015-certificate.pdf",
      verified: "Accredited Certificate"
    });
    setDirty(true);
    renderCertificatesTab();
    showToast("Certificate card added. Now click to upload the certificate file!");
  });

  // Delete certificate
  container.querySelectorAll('.btn-delete-cert').forEach(btn => {
    btn.addEventListener('click', () => {
      const docId = btn.getAttribute('data-id');
      if (confirm('Delete this certificate?')) {
        activeData.portfolio.downloads = activeData.portfolio.downloads.filter(d => d.id !== docId);
        setDirty(true);
        renderCertificatesTab();
        showToast("Certificate removed.");
      }
    });
  });

  // Preview certificate
  container.querySelectorAll('.btn-preview-cert').forEach(btn => {
    btn.addEventListener('click', () => {
      const path = btn.getAttribute('data-path');
      const title = btn.getAttribute('data-title');
      if (path.endsWith('.pdf')) {
        openPdfPreviewModal(path, title);
      } else {
        window.open(path, '_blank');
      }
    });
  });

  // Direct Certificate Uploader
  container.querySelectorAll('.media-upload-zone-compact').forEach(zone => {
    const fileInput = zone.querySelector('.direct-cert-input');
    const certId = zone.getAttribute('data-cert-id');
    const pathEl = document.getElementById(zone.getAttribute('data-path'));

    zone.addEventListener('click', () => fileInput?.click());

    zone.addEventListener('dragover', (e) => {
      e.preventDefault();
      zone.classList.add('dragover');
    });

    zone.addEventListener('dragleave', () => zone.classList.remove('dragover'));

    zone.addEventListener('drop', async (e) => {
      e.preventDefault();
      zone.classList.remove('dragover');
      if (e.dataTransfer.files?.length) {
        handleCertUpload(e.dataTransfer.files[0], certId, pathEl);
      }
    });

    fileInput?.addEventListener('change', async (e) => {
      if (e.target.files?.length) {
        handleCertUpload(e.target.files[0], certId, pathEl);
      }
    });
  });
}

async function handleCertUpload(file, certId, pathEl) {
  try {
    showToast(`Uploading ${file.name}...`);
    const finalUrl = await uploadMediaFile(file);
    let doc = activeData.portfolio.downloads.find(d => d.id === certId);
    if (!doc && certId === 'iso-certificate') {
      doc = {
        id: "iso-certificate",
        title: "ISO 9001:2015 Certificate",
        description: "Official Management System Certificate of Reva Phoenix Labs & Consultants Pvt. Ltd.",
        verified: "Accredited Certificate"
      };
      activeData.portfolio.downloads.push(doc);
    }
    if (doc) {
      doc.filePath = finalUrl;
      doc.fileType = file.name.endsWith('.pdf') ? "PDF Document" : "Image Document";
      doc.size = `${Math.round(file.size / 1024)} KB`;
      if (pathEl) pathEl.textContent = finalUrl;
    }
    setDirty(true);
    await autoSave();
    showToast(`Certificate uploaded: ${file.name}`);
    renderCertificatesTab();
  } catch (err) {
    alert("Upload failed: " + err.message);
  }
}

/**
 * ==============================================================
 * TAB 4: VIDEOS & MEDIA SHOWCASE
 * Video file upload (.mp4, .webm, .mov) or YouTube URL update
 * with live video preview player
 * ==============================================================
 */
function renderVideosTab() {
  const container = tabPanesContainer;
  if (!container) return;

  const videos = activeData.portfolio?.videos || [];

  const html = `
    <div class="pane-header-row">
      <div>
        <h2 class="pane-title">🎥 Videos &amp; Training Media Management</h2>
        <p class="pane-desc">Upload video files (.mp4, .webm, .mov) directly to the server, or embed YouTube video URLs. You can also upload custom poster/cover images.</p>
      </div>
      <div style="display: flex; gap: 0.75rem;">
        <button class="admin-btn admin-btn-secondary" id="btn-add-new-video">
          + Add New Video
        </button>
        <button class="admin-btn admin-btn-primary" id="btn-save-videos">
          💾 Save Changes
        </button>
      </div>
    </div>

    <div class="grid-2" id="videos-grid-container">
      ${videos.map((vid, idx) => {
        const isLocalVideo = vid.id && (vid.id.endsWith('.mp4') || vid.id.endsWith('.webm') || vid.id.startsWith('assets/uploads/'));
        return `
          <div class="media-card-item">
            <!-- Video Preview / Player -->
            <div style="position: relative;">
              ${isLocalVideo ? `
                <video src="${formatAssetUrl(vid.id)}" controls playsinline class="video-preview-player" poster="${formatAssetUrl(vid.thumbnail)}"></video>
              ` : `
                <div class="media-preview-box">
                  <img src="${formatAssetUrl(vid.thumbnail || 'https://img.youtube.com/vi/' + vid.id + '/maxresdefault.jpg')}" id="preview-video-thumb-${idx}" alt="${vid.title}" />
                  <span class="media-preview-badge">▶ ${vid.duration || 'Video'}</span>
                  <div class="media-preview-actions">
                    <button class="admin-btn admin-btn-xs admin-btn-primary btn-test-play" data-id="${vid.id}" data-title="${vid.title}">Test Play ▶</button>
                  </div>
                </div>
              `}
            </div>

            <!-- Details Form -->
            <div class="media-card-details">
              <div class="form-field" style="margin-bottom: 0;">
                <label class="field-label-sm">Video Title</label>
                <input type="text" class="admin-input-sm" value="${vid.title || ''}" data-target-input="portfolio.videos.${idx}.title" />
              </div>
              <div class="form-field" style="margin-bottom: 0;">
                <label class="field-label-sm">Subtitle / Description</label>
                <input type="text" class="admin-input-sm" value="${vid.subtitle || ''}" data-target-input="portfolio.videos.${idx}.subtitle" />
              </div>
              <div class="form-field" style="margin-bottom: 0;">
                <label class="field-label-sm">Video Source (Local File Path or YouTube ID / URL)</label>
                <input type="text" class="admin-input-sm" value="${vid.id || ''}" id="input-video-src-${idx}" data-target-input="portfolio.videos.${idx}.id" />
              </div>
              <div class="form-field" style="margin-bottom: 0;">
                <label class="field-label-sm">Custom Cover / Poster Image URL</label>
                <input type="text" class="admin-input-sm" value="${vid.thumbnail || ''}" id="input-video-thumb-${idx}" data-target-input="portfolio.videos.${idx}.thumbnail" />
              </div>
            </div>

            <!-- Upload Buttons Row -->
            <div style="display: flex; gap: 0.5rem;">
              <!-- Direct Video File Upload -->
              <div class="media-upload-zone-compact" style="flex: 1;" data-video-idx="${idx}" data-type="video">
                <input type="file" accept="video/mp4,video/webm,video/quicktime,.mp4,.webm,.mov" class="direct-video-file-input" style="display: none;" />
                <div class="zone-text">🎬 <strong>Upload Video File</strong> (.mp4)</div>
              </div>

              <!-- Cover Image Upload -->
              <div class="media-upload-zone-compact" style="flex: 1;" data-video-idx="${idx}" data-type="thumbnail">
                <input type="file" accept="image/*" class="direct-thumb-file-input" style="display: none;" />
                <div class="zone-text">🖼️ <strong>Upload Cover Image</strong></div>
              </div>
            </div>

            <div style="display: flex; justify-content: flex-end;">
              <button class="admin-btn admin-btn-xs admin-btn-danger btn-delete-video" data-idx="${idx}">Remove Video ✕</button>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  container.innerHTML = html;

  document.getElementById('btn-save-videos')?.addEventListener('click', handleSaveAll);

  // Test Play
  container.querySelectorAll('.btn-test-play').forEach(btn => {
    btn.addEventListener('click', () => {
      const vidId = btn.getAttribute('data-id');
      const title = btn.getAttribute('data-title');
      openTestVideoModal(vidId, title);
    });
  });

  // Inputs change
  container.querySelectorAll('[data-target-input]').forEach(input => {
    input.addEventListener('input', (e) => {
      const path = input.getAttribute('data-target-input');
      setDeepValue(activeData, path, e.target.value);
      setDirty(true);
    });
  });

  // Add new video
  document.getElementById('btn-add-new-video')?.addEventListener('click', () => {
    const title = prompt("Enter Video Title:", "Reva Phoenix Facility Tour & Masterclass");
    if (!title) return;
    if (!activeData.portfolio) activeData.portfolio = {};
    if (!activeData.portfolio.videos) activeData.portfolio.videos = [];

    activeData.portfolio.videos.push({
      id: "ki2GdYTqp2E",
      title: title,
      subtitle: "Official Masterclass & Training",
      duration: "Video Showcase",
      category: "Corporate Video",
      thumbnail: "https://img.youtube.com/vi/ki2GdYTqp2E/maxresdefault.jpg"
    });
    setDirty(true);
    renderVideosTab();
    showToast("New video card added! Upload your MP4 or enter YouTube URL.");
  });

  // Delete video
  container.querySelectorAll('.btn-delete-video').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-idx'), 10);
      if (confirm('Delete this video?')) {
        activeData.portfolio.videos.splice(idx, 1);
        setDirty(true);
        renderVideosTab();
        showToast("Video deleted.");
      }
    });
  });

  // Direct Video & Thumbnail uploaders
  container.querySelectorAll('.media-upload-zone-compact').forEach(zone => {
    const idx = parseInt(zone.getAttribute('data-video-idx'), 10);
    const type = zone.getAttribute('data-type');
    const input = zone.querySelector('input[type="file"]');

    zone.addEventListener('click', () => input?.click());

    zone.addEventListener('dragover', (e) => {
      e.preventDefault();
      zone.classList.add('dragover');
    });

    zone.addEventListener('dragleave', () => zone.classList.remove('dragover'));

    zone.addEventListener('drop', async (e) => {
      e.preventDefault();
      zone.classList.remove('dragover');
      if (e.dataTransfer.files?.length) {
        handleVideoAssetUpload(e.dataTransfer.files[0], idx, type);
      }
    });

    input?.addEventListener('change', async (e) => {
      if (e.target.files?.length) {
        handleVideoAssetUpload(e.target.files[0], idx, type);
      }
    });
  });
}

async function handleVideoAssetUpload(file, idx, type) {
  try {
    showToast(`Uploading ${file.name}... (Please wait)`);
    const finalUrl = await uploadMediaFile(file);
    const vid = activeData.portfolio.videos[idx];
    if (vid) {
      if (type === 'video') {
        vid.id = finalUrl;
      } else if (type === 'thumbnail') {
        vid.thumbnail = finalUrl;
      }
    }
    setDirty(true);
    await autoSave();
    showToast(`Uploaded & Saved: ${file.name}`);
    renderVideosTab();
  } catch (err) {
    alert("Upload failed: " + err.message);
  }
}

/**
 * ==============================================================
 * TAB 5: MEDIA LIBRARY
 * Global media explorer of all uploaded assets
 * ==============================================================
 */
function renderMediaTab() {
  const container = tabPanesContainer;
  if (!container) return;

  const library = activeData.mediaLibrary || [];

  const html = `
    <div class="pane-header-row">
      <div>
        <h2 class="pane-title">📁 Media Library &amp; Uploads</h2>
        <p class="pane-desc">Global repository of all uploaded images, video files, and PDF brochures.</p>
      </div>
      <button class="admin-btn admin-btn-primary" id="btn-upload-to-library">
        + Upload File
      </button>
    </div>

    <!-- Global Dropzone -->
    <div class="upload-dropzone" id="global-media-dropzone">
      <input type="file" id="global-media-input" accept="image/*,video/*,.pdf" style="display: none;" />
      <div class="dropzone-icon">☁️</div>
      <div class="dropzone-text">Drag &amp; drop any Image, Video, or PDF here to upload</div>
      <div class="dropzone-hint">Supports PNG, JPG, WEBP, SVG, PDF, MP4 (Max 200MB)</div>
    </div>

    <div class="grid-4" id="media-library-grid">
      ${library.length === 0 ? `
        <div style="grid-column: 1 / -1; padding: 3rem; text-align: center; color: var(--text-muted);">
          No files uploaded yet. Drag &amp; drop files above to populate the media library.
        </div>
      ` : library.map((item, idx) => `
        <div class="media-card-item">
          <div class="media-preview-box" style="height: 140px;">
            ${item.type?.includes('video') || item.url?.endsWith('.mp4') ? `
              <div style="font-size: 2.5rem;">🎬</div>
            ` : item.type?.includes('pdf') || item.url?.endsWith('.pdf') ? `
              <div style="font-size: 2.5rem;">📕</div>
            ` : `
              <img src="${formatAssetUrl(item.url)}" alt="${item.name}" />
            `}
            <span class="media-preview-badge">${item.tag || 'Asset'}</span>
          </div>
          <div class="media-card-details">
            <div class="media-card-title" style="font-size: 0.85rem;" title="${item.name}">${item.name}</div>
            <div class="media-card-desc">${item.size || ''}</div>
            <div class="media-card-path">${item.url}</div>
          </div>
          <div style="display: flex; gap: 0.5rem;">
            <button class="admin-btn admin-btn-xs admin-btn-secondary btn-copy-url" data-url="${item.url}" style="flex: 1;">Copy URL 📋</button>
            <button class="admin-btn admin-btn-xs admin-btn-danger btn-delete-library-item" data-idx="${idx}">✕</button>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  container.innerHTML = html;

  const dropzone = document.getElementById('global-media-dropzone');
  const fileInput = document.getElementById('global-media-input');

  document.getElementById('btn-upload-to-library')?.addEventListener('click', () => fileInput?.click());
  dropzone?.addEventListener('click', () => fileInput?.click());

  dropzone?.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropzone.classList.add('dragover');
  });

  dropzone?.addEventListener('dragleave', () => dropzone.classList.remove('dragover'));

  dropzone?.addEventListener('drop', async (e) => {
    e.preventDefault();
    dropzone.classList.remove('dragover');
    if (e.dataTransfer.files?.length) {
      for (const file of e.dataTransfer.files) {
        await handleGlobalUpload(file);
      }
    }
  });

  fileInput?.addEventListener('change', async (e) => {
    if (e.target.files?.length) {
      for (const file of e.target.files) {
        await handleGlobalUpload(file);
      }
    }
  });

  container.querySelectorAll('.btn-copy-url').forEach(btn => {
    btn.addEventListener('click', () => {
      const u = btn.getAttribute('data-url');
      navigator.clipboard.writeText(u);
      showToast(`Copied to clipboard: ${u}`);
    });
  });

  container.querySelectorAll('.btn-delete-library-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-idx'), 10);
      if (confirm('Delete this asset from library?')) {
        activeData.mediaLibrary.splice(idx, 1);
        setDirty(true);
        renderMediaTab();
        showToast("Asset removed from library.");
      }
    });
  });
}

async function handleGlobalUpload(file) {
  try {
    showToast(`Uploading ${file.name}...`);
    await uploadMediaFile(file);
    activeData = JSON.parse(JSON.stringify(getCmsData()));
    showToast(`Upload complete: ${file.name}`);
    renderMediaTab();
  } catch (err) {
    alert("Upload failed: " + err.message);
  }
}

/**
 * ==============================================================
 * TAB 6: BACKUP & RESTORE
 * ==============================================================
 */
function renderBackupTab() {
  const container = tabPanesContainer;
  if (!container) return;

  const html = `
    <div class="pane-header-row">
      <div>
        <h2 class="pane-title">💾 Backup, Restore &amp; Synchronization</h2>
        <p class="pane-desc">Export snapshot of all customized media paths and restore when needed.</p>
      </div>
    </div>

    <div class="grid-2">
      <div class="media-card-item">
        <div class="media-card-title">Export Backup Snapshot</div>
        <div class="media-card-desc">Download a complete JSON snapshot containing all current media paths, brochure configurations, and videos.</div>
        <button class="admin-btn admin-btn-secondary" id="btn-export-backup" style="margin-top: 1rem;">
          Download JSON Snapshot ↓
        </button>
      </div>

      <div class="media-card-item">
        <div class="media-card-title">Restore from Backup</div>
        <div class="media-card-desc">Select a previously exported JSON backup to restore all media configurations.</div>
        <input type="file" id="backup-file-input" accept=".json" style="margin-top: 1rem; color: var(--text-secondary);" />
        <button class="admin-btn admin-btn-primary" id="btn-import-backup" style="margin-top: 0.75rem;">
          Restore from Selected JSON
        </button>
      </div>
    </div>
  `;

  container.innerHTML = html;

  document.getElementById('btn-export-backup')?.addEventListener('click', () => {
    exportCmsBackup();
    showToast("Backup JSON file downloaded.");
  });

  document.getElementById('btn-import-backup')?.addEventListener('click', () => {
    const input = document.getElementById('backup-file-input');
    if (!input.files || input.files.length === 0) {
      alert("Please select a JSON backup file first.");
      return;
    }
    const reader = new FileReader();
    reader.onload = async (e) => {
      const ok = importCmsBackup(e.target.result);
      if (ok) {
        activeData = JSON.parse(JSON.stringify(getCmsData()));
        showToast("Backup restored successfully!");
        switchTab('images');
      } else {
        alert("Invalid backup file.");
      }
    };
    reader.readAsText(input.files[0]);
  });
}

/**
 * ==============================================================
 * DIRECT COMPACT IMAGE UPLOADER HANDLERS
 * Attaches drag & drop and click uploaders directly to cards
 * ==============================================================
 */
function attachDirectUploadListeners(container) {
  container.querySelectorAll('.media-upload-zone-compact').forEach(zone => {
    const targetPath = zone.getAttribute('data-target');
    const previewImgId = zone.getAttribute('data-preview');
    const pathSpanId = zone.getAttribute('data-path');
    const fileInput = zone.querySelector('.direct-file-input');

    zone.addEventListener('click', () => fileInput?.click());

    zone.addEventListener('dragover', (e) => {
      e.preventDefault();
      zone.classList.add('dragover');
    });

    zone.addEventListener('dragleave', () => zone.classList.remove('dragover'));

    zone.addEventListener('drop', async (e) => {
      e.preventDefault();
      zone.classList.remove('dragover');
      if (e.dataTransfer.files?.length) {
        handleDirectImageUpload(e.dataTransfer.files[0], targetPath, previewImgId, pathSpanId);
      }
    });

    fileInput?.addEventListener('change', async (e) => {
      if (e.target.files?.length) {
        handleDirectImageUpload(e.target.files[0], targetPath, previewImgId, pathSpanId);
      }
    });
  });
}

async function handleDirectImageUpload(file, targetPath, previewImgId, pathSpanId) {
  try {
    showToast(`Uploading ${file.name}...`);
    const finalUrl = await uploadMediaFile(file);

    // Update memory data
    setDeepValue(activeData, targetPath, finalUrl);

    // Update UI immediately
    if (previewImgId) {
      const img = document.getElementById(previewImgId);
      if (img) img.src = formatAssetUrl(finalUrl);
    }
    if (pathSpanId) {
      const span = document.getElementById(pathSpanId);
      if (span) span.textContent = finalUrl;
    }

    setDirty(true);
    await autoSave();
    showToast(`Image updated & saved!`);
  } catch (err) {
    alert("Image upload failed: " + err.message);
  }
}

/**
 * ==============================================================
 * SAVE & SYNC CONTROLLERS
 * ==============================================================
 */
async function handleSaveAll() {
  if (!activeData) return;
  try {
    if (saveStatusIndicator) {
      saveStatusIndicator.className = 'status-indicator-badge syncing';
      saveStatusIndicator.querySelector('.status-text').textContent = 'Saving to Server...';
    }

    await saveCmsData(activeData);
    setDirty(false);

    if (saveStatusIndicator) {
      saveStatusIndicator.className = 'status-indicator-badge synced';
      saveStatusIndicator.querySelector('.status-text').textContent = 'All Changes Saved';
    }

    showToast("Changes saved & published to website!");
  } catch (err) {
    if (saveStatusIndicator) {
      saveStatusIndicator.className = 'status-indicator-badge unsaved';
      saveStatusIndicator.querySelector('.status-text').textContent = 'Save Failed';
    }
    alert("Save error: " + err.message);
  }
}

async function autoSave() {
  if (!activeData) return;
  try {
    await saveCmsData(activeData);
    setDirty(false);
  } catch (e) {
    console.error("Auto save error:", e);
  }
}

function setDirty(dirty) {
  isDirty = dirty;
  if (saveStatusIndicator) {
    if (dirty) {
      saveStatusIndicator.className = 'status-indicator-badge unsaved';
      saveStatusIndicator.querySelector('.status-text').textContent = 'Unsaved Changes';
    } else {
      saveStatusIndicator.className = 'status-indicator-badge synced';
      saveStatusIndicator.querySelector('.status-text').textContent = 'All Changes Saved';
    }
  }
}

/**
 * ==============================================================
 * MODALS & HELPERS
 * ==============================================================
 */
function initMediaModal() {
  const closeBtn = document.getElementById('close-media-modal');
  const cancelBtn = document.getElementById('cancel-media-select');
  const confirmBtn = document.getElementById('confirm-media-select');

  const closeMedia = () => {
    if (mediaModal) mediaModal.style.display = 'none';
    pendingImageCallback = null;
  };

  closeBtn?.addEventListener('click', closeMedia);
  cancelBtn?.addEventListener('click', closeMedia);

  confirmBtn?.addEventListener('click', () => {
    const selected = document.querySelector('.media-picker-item.selected');
    if (selected && pendingImageCallback) {
      const url = selected.getAttribute('data-url');
      pendingImageCallback(url);
    }
    closeMedia();
  });
}

function openMediaPickerForPath(targetPath) {
  if (!mediaModal) return;
  mediaModal.style.display = 'flex';

  pendingImageCallback = (selectedUrl) => {
    setDeepValue(activeData, targetPath, selectedUrl);
    setDirty(true);
    autoSave().then(() => {
      showToast("Selected image applied!");
      switchTab(currentTab);
    });
  };

  renderMediaPickerGrid();
}

function renderMediaPickerGrid() {
  const grid = document.getElementById('media-picker-grid-container');
  if (!grid) return;

  const library = activeData?.mediaLibrary || [];
  grid.innerHTML = library.map(item => `
    <div class="media-picker-item" data-url="${item.url}" style="cursor: pointer; padding: 6px; border: 1px solid var(--admin-border); border-radius: 4px;">
      <div style="height: 100px; background: #000; overflow: hidden; display: flex; align-items: center; justify-content: center;">
        <img src="${formatAssetUrl(item.url)}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover;" />
      </div>
      <div style="font-size: 0.75rem; margin-top: 4px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${item.name}</div>
    </div>
  `).join('');

  grid.querySelectorAll('.media-picker-item').forEach(item => {
    item.addEventListener('click', () => {
      grid.querySelectorAll('.media-picker-item').forEach(i => i.classList.remove('selected'));
      item.classList.add('selected');
      const confirmBtn = document.getElementById('confirm-media-select');
      if (confirmBtn) confirmBtn.disabled = false;
      const previewBar = document.getElementById('selected-media-preview-bar');
      if (previewBar) previewBar.textContent = `Selected: ${item.getAttribute('data-url')}`;
    });
  });
}

function initDeleteModal() {
  const closeBtn = document.getElementById('close-delete-modal');
  const cancelBtn = document.getElementById('cancel-delete-btn');
  const confirmBtn = document.getElementById('confirm-delete-btn');

  const closeDel = () => {
    if (deleteModal) deleteModal.style.display = 'none';
    pendingDeleteAction = null;
  };

  closeBtn?.addEventListener('click', closeDel);
  cancelBtn?.addEventListener('click', closeDel);

  confirmBtn?.addEventListener('click', () => {
    if (pendingDeleteAction) pendingDeleteAction();
    closeDel();
  });
}

function initPreviewModal() {
  const closeBtn = document.getElementById('close-preview-modal');
  closeBtn?.addEventListener('click', () => {
    if (previewModal) previewModal.style.display = 'none';
  });

  document.querySelectorAll('.preview-size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.preview-size-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const iframe = document.getElementById('preview-iframe');
      if (iframe) iframe.style.width = btn.getAttribute('data-width');
    });
  });
}

function openLivePreview() {
  if (previewModal) {
    previewModal.style.display = 'flex';
    const iframe = document.getElementById('preview-iframe');
    if (iframe) iframe.src = '../?preview=' + Date.now();
  }
}

function openPdfPreviewModal(path, title) {
  window.open(path, '_blank');
}

function openTestVideoModal(id, title) {
  if (id.endsWith('.mp4') || id.endsWith('.webm') || id.startsWith('assets/uploads/')) {
    window.open(id, '_blank');
  } else {
    window.open(`https://www.youtube.com/watch?v=${id}`, '_blank');
  }
}

function showToast(msg) {
  if (!adminToast) return;
  const text = document.getElementById('admin-toast-text');
  if (text) text.textContent = msg;
  adminToast.style.display = 'flex';
  setTimeout(() => {
    adminToast.style.display = 'none';
  }, 3200);
}

// Deep Object Value Helper
function setDeepValue(obj, path, value) {
  if (!path || !obj) return;
  const parts = path.split('.');
  let curr = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    const p = parts[i];
    if (curr[p] === undefined || curr[p] === null) {
      curr[p] = isNaN(parts[i + 1]) ? {} : [];
    }
    curr = curr[p];
  }
  curr[parts[parts.length - 1]] = value;
}
