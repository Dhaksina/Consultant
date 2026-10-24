/**
 * Main Application Orchestrator
 * REVA PHOENIX LABS & CONSULTANTS PVT. LTD. Redesign
 */

import { renderAllComponents } from './components.js';
import { initAnimations } from './animations.js';
import { initNavigation } from './navigation.js';
import { initModals, showToast } from './modals.js';
import { initCorporateGalleryModal, openCorporateGalleryModal } from './corporate-gallery-modal.js';
import { initSmoothScroll, scrollToTarget } from './smooth-scroll.js';

function bootApp() {
  if (window.__appInitialized) return;
  window.__appInitialized = true;
  console.log("Initializing Reva Phoenix Industrial Redesign...");

  // 1. Initialize Navigation immediately (fastest interactivity for header/drawer)
  initNavigation();

  // 2. Initialize Lenis Smooth Inertia Scroll (synchronized with GSAP)
  initSmoothScroll();

  // 3. Render dynamic content
  renderAllComponents();

  // 4. Initialize Modals & Dialogs
  initModals();

  // 4b. Initialize Corporate Archival Gallery Modal & Browser
  initCorporateGalleryModal();
  window.openCorporateGalleryModal = openCorporateGalleryModal;

  // 5. Initialize GSAP & ScrollTrigger Animations
  initAnimations();

  // 6. Initialize Main Contact Form
  initContactForm();

  // 7. Handle deep-linking hash on initial page load with Lenis
  if (window.location.hash) {
    if (window.location.hash.startsWith('#standard-')) {
      const stdId = window.location.hash.replace('#standard-', '');
      setTimeout(() => {
        if (typeof window.openStandardDetail === 'function') {
          window.openStandardDetail(stdId);
        }
      }, 500);
    } else {
      setTimeout(() => {
        scrollToTarget(window.location.hash, -84, 1.2);
      }, 450);
    }
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootApp);
} else {
  bootApp();
}

/**
 * Main Contact Form Validation & Submission
 */
function initContactForm() {
  const form = document.getElementById("main-contact-form");
  const statusMsg = document.getElementById("contact-form-status");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = form.querySelector('[name="name"]').value.trim();
    const company = form.querySelector('[name="company"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const phone = form.querySelector('[name="phone"]').value.trim();
    const service = form.querySelector('[name="service"]').value;
    const message = form.querySelector('[name="message"]').value.trim();

    if (!name || !email || !service || !message) {
      if (statusMsg) {
        statusMsg.className = "form-status-msg error";
        statusMsg.innerText = "Please complete all required fields (*).";
        statusMsg.style.display = "block";
      }
      return;
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      if (statusMsg) {
        statusMsg.className = "form-status-msg error";
        statusMsg.innerText = "Please enter a valid business email address.";
        statusMsg.style.display = "block";
      }
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn ? submitBtn.innerHTML : '';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Transmitting to Supabase...</span>`;
    }

    try {
      const { submitContactInquiry } = await import('./supabase-client.js');
      const { recordContactInquiryInFirestore } = await import('./firebase-firestore.js');

      await submitContactInquiry({
        name,
        company,
        email,
        phone,
        service,
        message
      });

      // Dual-sync to Firebase Firestore
      recordContactInquiryInFirestore({
        name,
        company,
        email,
        phone,
        service,
        message
      }).catch(console.warn);

      // Success feedback
      if (statusMsg) {
        statusMsg.className = "form-status-msg success";
        statusMsg.innerText = `Thank you, ${name}! Your inquiry for ${service} has been successfully dispatched to our engineering consulting desk. We will respond promptly.`;
        statusMsg.style.display = "block";
      }

      showToast(`Inquiry dispatched to enquiry@revaphoenix.com!`);
      form.reset();
    } catch (err) {
      console.error("Error submitting contact inquiry:", err);
      if (statusMsg) {
        statusMsg.className = "form-status-msg error";
        statusMsg.innerText = "An error occurred dispatching your request. Please email info@revaphoenix.com directly.";
        statusMsg.style.display = "block";
      }
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }
    }
  });
}
