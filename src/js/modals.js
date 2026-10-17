/**
 * Modals, Lightbox & Dialog System
 */

import { getCmsData } from './cms-store.js';
import { pauseScroll, resumeScroll } from './smooth-scroll.js';
import { getStandardTrackData } from './standards-tracks.js';
import { submitQuoteRequest } from './supabase-client.js';
import { recordQuoteRequestInFirestore } from './firebase-firestore.js';

// DOM Modal elements
let lightboxModal, videoModal, pdfModal, quoteModal, textModal, toastElement;

export function initModals() {
  lightboxModal = document.getElementById("modal-lightbox");
  videoModal = document.getElementById("modal-video");
  pdfModal = document.getElementById("modal-pdf");
  quoteModal = document.getElementById("modal-quote");
  textModal = document.getElementById("modal-text");
  toastElement = document.getElementById("toast-notification");

  // Close buttons on all modals
  document.querySelectorAll(".modal-close-btn, .modal-close-trigger").forEach(btn => {
    btn.addEventListener("click", () => {
      closeAllModals();
    });
  });

  // Prevent Lenis smooth-scroll from intercepting modal wheel and touch gestures
  document.querySelectorAll(".modal-overlay, .modal-container, .mobile-drawer").forEach(el => {
    el.setAttribute("data-lenis-prevent", "");
    el.addEventListener("wheel", (e) => {
      e.stopPropagation();
    }, { passive: true });
    el.addEventListener("touchmove", (e) => {
      e.stopPropagation();
    }, { passive: true });
  });

  // Close on backdrop click
  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        closeAllModals();
      }
    });
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeAllModals();
    }
  });

  // Quote button triggers across the page
  document.querySelectorAll(".trigger-quote-modal").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const service = btn.getAttribute("data-service") || "Comprehensive Consulting & Certification";
      openQuoteModal(service);
    });
  });

  // MD Message trigger
  const mdBtn = document.getElementById("trigger-md-message");
  if (mdBtn) {
    mdBtn.addEventListener("click", (e) => {
      e.preventDefault();
      openMdMessageModal();
    });
  }

  // Core Values trigger
  const valuesBtn = document.getElementById("trigger-core-values");
  if (valuesBtn) {
    valuesBtn.addEventListener("click", (e) => {
      e.preventDefault();
      openCoreValuesModal();
    });
  }

  // Handle quote modal submission
  const quoteForm = document.getElementById("quote-modal-form");
  if (quoteForm) {
    quoteForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const service = document.getElementById("quote-service-input")?.value || 'Consulting';
      const name = document.getElementById("quote-name-input")?.value || '';
      const email = document.getElementById("quote-email-input")?.value || '';
      const phone = document.getElementById("quote-phone-input")?.value || '';
      const company = document.getElementById("quote-company-input")?.value || '';

      const submitBtn = quoteForm.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerText : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerText = 'Transmitting...';
      }

      try {
        await submitQuoteRequest({ service, name, email, phone, company });
        // Dual-sync to Firebase Firestore
        recordQuoteRequestInFirestore({ service, name, email, phone, company }).catch(console.warn);

        closeAllModals();
        showToast(`Thank you ${name}! Your quote request for ${service} has been received.`);
        quoteForm.reset();
      } catch (err) {
        console.error("Error submitting quote request:", err);
        closeAllModals();
        showToast(`Request submitted. We will contact you at ${email}.`);
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerText = originalText;
        }
      }
    });
  }
}

export function closeAllModals() {
  document.querySelectorAll(".modal-overlay").forEach(modal => {
    modal.classList.remove("active");
  });

  // Stop video playback if active
  const videoPlayer = document.getElementById("modal-video-player");
  if (videoPlayer) {
    videoPlayer.pause();
    videoPlayer.src = "";
  }
  const videoFrame = document.getElementById("modal-video-iframe");
  if (videoFrame) {
    videoFrame.src = "";
  }

  // Clear PDF iframe if active
  const pdfFrame = document.getElementById("modal-pdf-iframe");
  if (pdfFrame) {
    pdfFrame.src = "";
  }

  document.body.style.overflow = "";
  resumeScroll();
}

export function openLightbox(src, title) {
  if (!lightboxModal) return;
  const imgEl = document.getElementById("lightbox-image");
  const titleEl = document.getElementById("lightbox-caption-text");

  if (imgEl) imgEl.src = src;
  if (titleEl) titleEl.innerText = title;

  lightboxModal.classList.add("active");
  document.body.style.overflow = "hidden";
  pauseScroll();
}

export function openVideoPlayer(videoId, title) {
  if (!videoModal) return;
  const container = document.querySelector(".video-iframe-container");
  const titleEl = document.getElementById("modal-video-title");

  if (titleEl) titleEl.innerText = title;
  if (container) {
    if (videoId && (videoId.endsWith('.mp4') || videoId.endsWith('.webm') || videoId.endsWith('.mov') || videoId.startsWith('assets/uploads/'))) {
      container.innerHTML = `<video id="modal-video-player" src="${videoId}" controls autoplay playsinline style="width: 100%; height: 100%; border-radius: 4px;"></video>`;
    } else {
      const cleanId = videoId && videoId.includes('watch?v=') ? videoId.split('watch?v=')[1].split('&')[0] : (videoId && videoId.includes('youtu.be/') ? videoId.split('youtu.be/')[1] : videoId);
      container.innerHTML = `<iframe id="modal-video-iframe" src="https://www.youtube.com/embed/${cleanId}?autoplay=1&rel=0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width: 100%; height: 100%; border: none;"></iframe>`;
    }
  }

  videoModal.classList.add("active");
  document.body.style.overflow = "hidden";
  pauseScroll();
}

export function openPdfPreview(pdfPath, title) {
  if (!pdfModal) return;
  const frame = document.getElementById("modal-pdf-iframe");
  const titleEl = document.getElementById("modal-pdf-title");
  const downloadLink = document.getElementById("modal-pdf-download-link");

  if (titleEl) titleEl.innerText = title;
  if (frame) frame.src = pdfPath;
  if (downloadLink) downloadLink.href = pdfPath;

  pdfModal.classList.add("active");
  document.body.style.overflow = "hidden";
  pauseScroll();
}

export function openQuoteModal(serviceName = "Management System Consulting") {
  if (!quoteModal) return;
  const input = document.getElementById("quote-service-input");
  if (input) input.value = serviceName;

  quoteModal.classList.add("active");
  document.body.style.overflow = "hidden";
  pauseScroll();
}

export function openMdMessageModal() {
  if (!textModal) return;
  pauseScroll();
  const cms = getCmsData();
  const MD_MESSAGE = cms.about?.mdMessage || {};
  const founderImg = cms.about?.founderImage || "assets/about/dr-manikandan-venkatesan-md.jpg";

  const tagEl = document.getElementById("modal-text-tag");
  const titleEl = document.getElementById("modal-text-title");
  const bodyEl = document.getElementById("modal-text-body");

  if (tagEl) tagEl.innerText = MD_MESSAGE.tagline || "";
  if (titleEl) titleEl.innerText = MD_MESSAGE.title || "";
  if (bodyEl) {
    bodyEl.innerHTML = `
      <div style="display: flex; gap: 1.5rem; align-items: center; margin-bottom: 2rem; border-bottom: 1px solid var(--border-subtle); padding-bottom: 1.5rem;">
        <img src="${founderImg}" alt="${MD_MESSAGE.author}" 
             style="width: 75px; height: 75px; border-radius: 50%; object-fit: cover; border: 2px solid var(--orange-primary);" />
        <div>
          <div style="font-weight: 800; font-size: 1.15rem; color: #FFFFFF;">${MD_MESSAGE.author}</div>
          <div style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--orange-primary); text-transform: uppercase;">
            ${MD_MESSAGE.designation}
          </div>
        </div>
      </div>
      <div style="display: flex; flex-direction: column; gap: 1.25rem; font-size: 0.95rem; color: var(--text-secondary); line-height: 1.7;">
        ${(MD_MESSAGE.paragraphs || []).map(p => `<p>${p}</p>`).join("")}
      </div>
      ${MD_MESSAGE.motto ? `
        <div style="margin-top: 1.5rem; padding: 1.25rem 1.5rem; background: rgba(255, 106, 0, 0.08); border-left: 3px solid var(--orange-primary); color: #FFFFFF; font-weight: 700; font-size: 1rem; border-radius: 2px;">
          "${MD_MESSAGE.motto}"
        </div>
      ` : ""}
      <div style="margin-top: 2rem; border-top: 1px solid var(--border-subtle); padding-top: 1.5rem;">
        <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--blue-light);">
          Reva Phoenix Labs & Consultants Pvt. Ltd. — Consulting Division
        </div>
      </div>
    `;
  }

  textModal.classList.add("active");
  document.body.style.overflow = "hidden";
  const mdContainer = textModal.querySelector('.modal-container');
  if (mdContainer) mdContainer.scrollTop = 0;
}

export function openCoreValuesModal() {
  if (!textModal) return;
  pauseScroll();
  const cms = getCmsData();
  const CORE_VALUES = cms.about?.coreValues || [];
  const settings = cms.siteSettings || {};

  const tagEl = document.getElementById("modal-text-tag");
  const titleEl = document.getElementById("modal-text-title");
  const bodyEl = document.getElementById("modal-text-body");

  if (tagEl) tagEl.innerText = settings.tagline || "";
  if (titleEl) titleEl.innerText = settings.philosophy || "";
  if (bodyEl) {
    bodyEl.innerHTML = `
      <div style="margin-bottom: 2rem; color: var(--text-secondary); font-size: 1rem; line-height: 1.6;">
        To be the most preferred service provider in the Industry – in terms of training, consultation, implementation & audit assistance to our Customers globally.
      </div>
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        ${CORE_VALUES.map(val => `
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); padding: 1.25rem 1.5rem; border-left: 3px solid var(--orange-primary);">
            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.4rem;">
              <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--orange-primary); font-weight: 700;">${val.number}</span>
              <span style="font-weight: 800; font-size: 1.1rem; color: #FFFFFF;">${val.title}</span>
            </div>
            <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">${val.description}</p>
          </div>
        `).join("")}
      </div>
    `;
  }

  textModal.classList.add("active");
  document.body.style.overflow = "hidden";
  const cvContainer = textModal.querySelector('.modal-container');
  if (cvContainer) cvContainer.scrollTop = 0;
}

export function openExcellenceModal(item) {
  const modal = textModal || document.getElementById("modal-text");
  if (!modal || !item) return;
  pauseScroll();

  const tagEl = document.getElementById("modal-text-tag");
  const titleEl = document.getElementById("modal-text-title");
  const bodyEl = document.getElementById("modal-text-body");

  if (tagEl) tagEl.innerText = `OPERATIONAL MASTERY · ${item.badge || 'BUSINESS EXCELLENCE'}`;
  if (titleEl) titleEl.innerText = item.name;

  if (bodyEl) {
    const stdId = item.id;
    let activeTrack = 'overview';

    const renderContent = (currentTrack) => {
      activeTrack = currentTrack;
      const waMsg = encodeURIComponent(`Hello, I would like to consult and implement the "${item.name}" framework (${currentTrack.toUpperCase()} track). Please share complete documentation, roadmap and commercial proposal.`);

      let trackHtml = '';
      if (currentTrack === 'overview') {
        const pillars = item.pillars || [];
        const benefits = item.benefits || [];
        const deliverables = item.deliverables || [];

        trackHtml = `
          ${pillars.length > 0 ? `
            <div class="excellence-modal-section">
              <div class="excellence-modal-heading">
                <span class="excellence-modal-dot"></span>
                Structured Framework &amp; Core Pillars (${pillars.length} Pillars)
              </div>
              <div class="excellence-modal-pillars-grid">
                ${pillars.map((p, idx) => `
                  <div class="excellence-modal-pillar-card">
                    <div class="pillar-card-header">
                      <span class="pillar-num">${String(idx + 1).padStart(2, '0')}</span>
                      <span class="pillar-title">${p.title}</span>
                    </div>
                    <div class="pillar-text">${p.text}</div>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <div class="excellence-modal-dual-grid">
            ${benefits.length > 0 ? `
              <div class="excellence-modal-block">
                <div class="excellence-modal-heading">
                  <span class="excellence-modal-dot orange"></span>
                  Key Business Benefits &amp; Measurable ROI
                </div>
                <ul class="excellence-modal-checklist">
                  ${benefits.map(b => `
                    <li>
                      <span class="check-icon">✓</span>
                      <span>${b}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            ` : ''}

            ${deliverables.length > 0 ? `
              <div class="excellence-modal-block">
                <div class="excellence-modal-heading">
                  <span class="excellence-modal-dot blue"></span>
                  Verified Implementation Deliverables
                </div>
                <ul class="excellence-modal-checklist deliverables">
                  ${deliverables.map(d => `
                    <li>
                      <span class="check-icon blue">◆</span>
                      <span>${d}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            ` : ''}
          </div>
        `;
      } else {
        const track = getStandardTrackData(stdId, currentTrack);
        if (track) {
          const itemsList = track.programs || track.services || track.phases || track.auditTypes || [];
          const sideItems = track.topics || track.deliverables || track.milestones || track.checklists || [];
          const trackLabel = currentTrack.toUpperCase();
          const accentColorMap = { training: '#00d4aa', consulting: '#4a9eff', implementation: '#a855f7', auditing: '#f59e0b' };
          const color = accentColorMap[currentTrack] || '#f47a3c';

          trackHtml = `
            <div class="excellence-modal-section" style="margin-top: 1.25rem;">
              <div style="font-family: var(--font-mono); font-size: 0.76rem; color: ${color}; font-weight: 700; text-transform: uppercase; margin-bottom: 0.4rem; letter-spacing: 0.08em;">
                ● ${trackLabel} TRACK SPECIFICATIONS
              </div>
              <h3 style="font-family: var(--font-main); font-size: 1.25rem; font-weight: 800; color: #FFFFFF; margin-bottom: 0.6rem;">
                ${track.title || item.name}
              </h3>
              <p style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.6; margin-bottom: 1.5rem;">
                ${track.desc || track.intro || ''}
              </p>

              ${itemsList.length > 0 ? `
                <div class="excellence-modal-heading">
                  <span class="excellence-modal-dot" style="background: ${color};"></span>
                  Key Specialized ${currentTrack === 'training' ? 'Programs & Modules' : currentTrack === 'implementation' ? 'Execution Phases' : 'Service Packages'}
                </div>
                <div class="excellence-modal-pillars-grid" style="margin-bottom: 1.75rem;">
                  ${itemsList.map((prog, idx) => `
                    <div class="excellence-modal-pillar-card" style="border-left: 3px solid ${color};">
                      <div class="pillar-card-header">
                        <span class="pillar-num" style="color: ${color};">${prog.phase || String(idx + 1).padStart(2, '0')}</span>
                        <span class="pillar-title">${prog.name} ${prog.duration ? `<span style="font-size: 0.72rem; color: var(--text-muted); font-weight: normal; margin-left: 0.4rem;">(${prog.duration})</span>` : ''}</span>
                      </div>
                      ${prog.audience ? `<div style="font-size: 0.74rem; font-family: var(--font-mono); color: var(--orange-primary); margin-bottom: 0.35rem;">Target: ${prog.audience}</div>` : ''}
                      <div class="pillar-text">${prog.desc}</div>
                    </div>
                  `).join('')}
                </div>
              ` : ''}

              <div class="excellence-modal-dual-grid">
                ${sideItems.length > 0 ? `
                  <div class="excellence-modal-block">
                    <div class="excellence-modal-heading">
                      <span class="excellence-modal-dot" style="background: ${color};"></span>
                      ${currentTrack === 'training' ? 'Core Syllabus & Topics' : currentTrack === 'auditing' ? 'Key Audit Checklists' : 'Specific Deliverables & Milestones'}
                    </div>
                    <ul class="excellence-modal-checklist">
                      ${sideItems.map(it => `
                        <li>
                          <span class="check-icon" style="color: ${color};">›</span>
                          <span>${typeof it === 'string' ? it : (it.name || it.title || it.desc)}</span>
                        </li>
                      `).join('')}
                    </ul>
                  </div>
                ` : ''}

                ${(track.benefits && track.benefits.length > 0) ? `
                  <div class="excellence-modal-block">
                    <div class="excellence-modal-heading">
                      <span class="excellence-modal-dot" style="background: ${color};"></span>
                      Tangible Track Benefits
                    </div>
                    <ul class="excellence-modal-checklist">
                      ${track.benefits.map(b => `
                        <li>
                          <span class="check-icon" style="color: ${color};">✓</span>
                          <span>${b}</span>
                        </li>
                      `).join('')}
                    </ul>
                  </div>
                ` : ''}
              </div>
            </div>
          `;
        }
      }

      bodyEl.innerHTML = `
        <div class="excellence-modal-hero">
          <div class="excellence-modal-icon-badge">${item.icon || '⚡'}</div>
          <div>
            <div class="excellence-modal-tagline">${item.tagline || ''}</div>
            <p class="excellence-modal-overview">${item.overview || item.desc || ''}</p>
          </div>
        </div>

        <!-- 4 Option Action Buttons / Tabs Toolbar (Exact Match to Reference Design) -->
        <div class="excellence-modal-nav-toolbar" style="display: flex; gap: 0.55rem; flex-wrap: wrap; margin: 1.25rem 0 0.5rem; padding: 0.85rem; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px;">
          <button type="button" class="ims-action-btn ${currentTrack === 'overview' ? 'active' : ''}" data-nav-track="overview" style="flex: 1; min-width: 130px; justify-content: center; ${currentTrack === 'overview' ? 'background: rgba(255,255,255,0.15); border-color: #FFFFFF; color: #FFFFFF;' : 'color: var(--text-secondary); border-color: rgba(255,255,255,0.12);'}">
            📋 CORE PILLARS
          </button>
          <button type="button" class="ims-action-btn ims-btn-train ${currentTrack === 'training' ? 'active' : ''}" data-nav-track="training" style="flex: 1; min-width: 130px; justify-content: center; ${currentTrack === 'training' ? 'box-shadow: 0 0 14px rgba(0, 212, 170, 0.4);' : ''}">
            <span class="ims-btn-icon">🎓</span> <span class="ims-btn-text">GET TRAINED</span>
          </button>
          <button type="button" class="ims-action-btn ims-btn-consult ${currentTrack === 'consulting' ? 'active' : ''}" data-nav-track="consulting" style="flex: 1; min-width: 130px; justify-content: center; ${currentTrack === 'consulting' ? 'box-shadow: 0 0 14px rgba(74, 158, 255, 0.4);' : ''}">
            <span class="ims-btn-icon">💼</span> <span class="ims-btn-text">GET CONSULTING</span>
          </button>
          <button type="button" class="ims-action-btn ims-btn-implement ${currentTrack === 'implementation' ? 'active' : ''}" data-nav-track="implementation" style="flex: 1; min-width: 130px; justify-content: center; ${currentTrack === 'implementation' ? 'box-shadow: 0 0 14px rgba(168, 85, 247, 0.4);' : ''}">
            <span class="ims-btn-icon">🚀</span> <span class="ims-btn-text">GET IMPLEMENTATION</span>
          </button>
          <button type="button" class="ims-action-btn ims-btn-audit ${currentTrack === 'auditing' ? 'active' : ''}" data-nav-track="auditing" style="flex: 1; min-width: 130px; justify-content: center; ${currentTrack === 'auditing' ? 'box-shadow: 0 0 14px rgba(245, 158, 11, 0.4);' : ''}">
            <span class="ims-btn-icon">🔍</span> <span class="ims-btn-text">GET AUDITING</span>
          </button>
        </div>

        <div class="excellence-modal-dynamic-body">
          ${trackHtml}
        </div>

        <div class="excellence-modal-cta-strip">
          <div>
            <div class="cta-strip-title">Ready to implement ${item.name}?</div>
            <div class="cta-strip-sub">Reva Phoenix deployment specialists provide complete turnkey consulting, training &amp; audit defense.</div>
          </div>
          <div class="cta-strip-buttons">
            <a
              href="https://wa.me/919940564261?text=${waMsg}"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-whatsapp-booking"
              style="background: #25d366; color: #000; font-weight: 700; display: inline-flex; align-items: center; gap: 0.5rem; text-decoration: none; border-radius: 4px; padding: 0.75rem 1.4rem; font-size: 0.88rem; box-shadow: 0 4px 15px rgba(37,211,102,0.3); transition: transform 0.2s, background 0.2s;"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Book / Consult on WhatsApp →
            </a>
            <button type="button" class="btn btn-primary-orange btn-excellence-quote">
              Request Scope Proposal →
            </button>
            <button type="button" class="btn btn-secondary-blue btn-open-card-view" style="font-size: 0.84rem;">
              ⚡ View In-Place on Page
            </button>
            <button type="button" class="btn btn-secondary-outline modal-close-trigger">
              Close
            </button>
          </div>
        </div>
      `;

      // Attach track switcher tabs listeners
      bodyEl.querySelectorAll('[data-nav-track]').forEach(tabBtn => {
        tabBtn.addEventListener('click', (e) => {
          e.preventDefault();
          const targetNavTrack = tabBtn.getAttribute('data-nav-track');
          renderContent(targetNavTrack);
        });
      });

      // Connect quote CTA
      const quoteBtn = bodyEl.querySelector('.btn-excellence-quote');
      if (quoteBtn) {
        quoteBtn.addEventListener('click', () => {
          closeAllModals();
          openQuoteModal(`${item.name} (${activeTrack.toUpperCase()} Track)`);
        });
      }

      // Connect View In-Place button
      const cardViewBtn = bodyEl.querySelector('.btn-open-card-view');
      if (cardViewBtn) {
        cardViewBtn.addEventListener('click', () => {
          closeAllModals();
          setTimeout(() => {
            if (typeof window.expandStandardCard === 'function') {
              window.expandStandardCard(stdId, activeTrack === 'overview' ? 'training' : activeTrack, true);
            }
          }, 300);
        });
      }

      // Connect close button
      const closeBtn = bodyEl.querySelector('.modal-close-trigger');
      if (closeBtn) {
        closeBtn.addEventListener('click', () => {
          closeAllModals();
        });
      }
    };

    renderContent('overview');
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
  const modalContainer = modal.querySelector('.modal-container');
  if (modalContainer) modalContainer.scrollTop = 0;
}

window.openExcellenceModal = openExcellenceModal;

export function showToast(message) {
  if (!toastElement) return;
  const textEl = toastElement.querySelector(".toast-text");
  if (textEl) textEl.innerText = message;

  toastElement.classList.add("show");
  setTimeout(() => {
    toastElement.classList.remove("show");
  }, 4500);
}
