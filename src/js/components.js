/**
 * REVA PHOENIX LABS & CONSULTANTS - Dynamic Component Renderer
 * Connected directly to CMS Store for instant local synchronization
 */

import { initCmsData, getCmsData, onCmsUpdate } from './cms-store.js';
import { openLightbox, openVideoPlayer, openPdfPreview, openQuoteModal, openExcellenceModal } from './modals.js';
import { openStandardDetail, getStandardIdByCode } from './standard-detail.js';

let cmsListenerRegistered = false;

export async function renderAllComponents() {
  await initCmsData();
  const cms = getCmsData();

  renderSeo(cms);
  renderHeaderAndNavigation(cms);
  renderHero(cms);
  renderAbout(cms);
  renderStatistics(cms);
  renderServices(cms);
  renderApiServices(cms);
  renderImsServices(cms);
  renderTrainingServices(cms);
  renderIndustries(cms);
  renderClientsMarquee(cms);
  renderInfrastructure(cms);
  renderGallery(cms);
  renderVideos(cms);
  renderTestimonials(cms);
  renderCareers(cms);
  renderDownloads(cms);
  renderDepartmentalContacts(cms);
  renderFooter(cms);

  if (!cmsListenerRegistered) {
    cmsListenerRegistered = true;
    onCmsUpdate(() => {
      console.log("Real-time CMS update detected, re-rendering website components...");
      renderAllComponents();
    });
  }
}

/**
 * 0. SEO Best Practices
 */
function renderSeo(cms) {
  const seo = cms.seo || {};
  if (seo.pageTitle) {
    document.title = seo.pageTitle;
  }
  const descEl = document.querySelector('meta[name="description"]');
  if (descEl && seo.metaDescription) {
    descEl.setAttribute('content', seo.metaDescription);
  }
  const kwEl = document.querySelector('meta[name="keywords"]');
  if (kwEl && seo.metaKeywords) {
    kwEl.setAttribute('content', seo.metaKeywords);
  }
  const ogTitleEl = document.querySelector('meta[property="og:title"]');
  if (ogTitleEl && (seo.ogTitle || seo.pageTitle)) {
    ogTitleEl.setAttribute('content', seo.ogTitle || seo.pageTitle);
  }
  const ogDescEl = document.querySelector('meta[property="og:description"]');
  if (ogDescEl && (seo.ogDescription || seo.metaDescription)) {
    ogDescEl.setAttribute('content', seo.ogDescription || seo.metaDescription);
  }
  const ogImgEl = document.querySelector('meta[property="og:image"]');
  if (ogImgEl && seo.ogImage) {
    ogImgEl.setAttribute('content', seo.ogImage);
  }
}

/**
 * 0.1 Header, Top-Bar & Navigation
 */
function renderHeaderAndNavigation(cms) {
  const header = cms.header || {};
  const settings = cms.siteSettings || {};

  // Utility bar
  const emailLink = document.querySelector('.top-utility-bar .utility-contacts a[href^="mailto:"]');
  if (emailLink && header.topBarEmail) {
    emailLink.href = `mailto:${header.topBarEmail}`;
    emailLink.innerHTML = `<span>✉</span> ${header.topBarEmail}`;
  }

  const phoneLink = document.querySelector('.top-utility-bar .utility-contacts a[href^="tel:"]');
  if (phoneLink && header.topBarPhone) {
    phoneLink.href = `tel:${header.topBarPhone.replace(/\s+/g, '')}`;
    phoneLink.innerHTML = `<span>☎</span> ${header.topBarPhone}`;
  }

  const labBadge = document.querySelector('.utility-lab-badge');
  if (labBadge) {
    if (header.labBadgeText) labBadge.textContent = header.labBadgeText;
    if (header.labBadgeUrl) labBadge.href = header.labBadgeUrl;
  }

  // Brand logo & name
  const logoImg = document.querySelector('.site-brand .site-logo');
  if (logoImg && header.logo) {
    logoImg.src = header.logo;
  }
  const brandName = document.querySelector('.site-brand .brand-name');
  if (brandName && header.brandName) {
    brandName.textContent = header.brandName;
  }
  const brandSub = document.querySelector('.site-brand .brand-div');
  if (brandSub && header.brandSub) {
    brandSub.textContent = header.brandSub;
  }

  // Quote Button
  const headerQuoteBtn = document.querySelector('.header-actions .trigger-quote-modal');
  if (headerQuoteBtn && header.quoteButtonText) {
    headerQuoteBtn.innerHTML = `${header.quoteButtonText} <span class="arrow-icon">→</span>`;
    if (header.quoteButtonService) {
      headerQuoteBtn.setAttribute('data-service', header.quoteButtonService);
    }
  }
}

/**
 * 0.2 Hero Section
 */
function renderHero(cms) {
  const hero = cms.home?.hero || {};

  const eyebrow = document.querySelector('.hero-section .hero-eyebrow');
  if (eyebrow && hero.eyebrow) {
    eyebrow.textContent = hero.eyebrow;
  }

  const brandTitle = document.querySelector('.hero-section .hero-brand-title');
  if (brandTitle && (hero.titleLine1 || hero.titleLine2)) {
    brandTitle.innerHTML = `
      <span class="hero-title-line">${hero.titleLine1 || 'REVA PHOENIX'}</span>
      <span class="hero-title-line">${hero.titleLine2 || 'LABS &amp; CONSULTANTS'}</span>
    `;
  }

  const taglinesSplit = document.querySelector('.hero-section .hero-tagline-split');
  if (taglinesSplit && hero.taglines && hero.taglines.length >= 4) {
    taglinesSplit.innerHTML = `
      <span class="word-white">${hero.taglines[0]}</span>
      <span class="word-blue">${hero.taglines[1]}</span>
      <span class="word-orange">${hero.taglines[2]}</span>
      <span class="word-blue">${hero.taglines[3]}</span>
    `;
  }

  const heroDesc = document.querySelector('.hero-section .hero-desc');
  if (heroDesc && hero.description) {
    heroDesc.innerHTML = hero.description;
  }

  const ctaPrimary = document.querySelector('.hero-section .hero-cta-group .btn-primary-orange');
  if (ctaPrimary) {
    if (hero.ctaPrimaryText) {
      ctaPrimary.innerHTML = `${hero.ctaPrimaryText} <span class="arrow-icon">→</span>`;
    }
    if (hero.ctaPrimaryService) {
      ctaPrimary.setAttribute('data-service', hero.ctaPrimaryService);
    }
  }

  const ctaSecondary = document.querySelector('.hero-section .hero-cta-group .btn-secondary-blue');
  if (ctaSecondary) {
    if (hero.ctaSecondaryText) {
      ctaSecondary.innerHTML = `${hero.ctaSecondaryText} <span class="arrow-icon">→</span>`;
    }
    if (hero.ctaSecondaryLink) {
      ctaSecondary.setAttribute('href', hero.ctaSecondaryLink);
    }
  }
}

/**
 * 0.3 About Section
 */
function renderAbout(cms) {
  const about = cms.about || {};

  const subtitle = document.querySelector('#about .subtitle-mono');
  if (subtitle && about.subtitle) {
    subtitle.textContent = about.subtitle;
  }

  const heading = document.querySelector('#about .about-heading');
  if (heading && (about.headingWord1 || about.headingWord2 || about.headingWord3)) {
    heading.innerHTML = `
      <span class="word-orange">${about.headingWord1 || 'ABOUT'}</span> 
      <span class="word-white">${about.headingWord2 || 'REVA'}</span> 
      <span class="word-blue">${about.headingWord3 || 'PHOENIX'}</span>
    `;
  }

  const lead = document.querySelector('#about .about-lead');
  if (lead && about.leadText) {
    lead.innerHTML = about.leadText;
  }

  const bodyText = document.querySelector('#about .about-body-text');
  if (bodyText && about.bodyText) {
    bodyText.innerHTML = about.bodyText;
  }

  const tribute = document.querySelector('#about .about-tribute-box');
  if (tribute && about.tributeQuote) {
    tribute.innerHTML = `"${about.tributeQuote}"`;
  }

  const portrait = document.querySelector('#about .about-portrait-img');
  if (portrait && about.founderImage) {
    portrait.src = about.founderImage;
    if (about.founderName) portrait.alt = `${about.founderName} - ${about.founderTitle || ''}`;
  }

  const fName = document.querySelector('#about .founder-name');
  if (fName && about.founderName) {
    fName.textContent = about.founderName;
  }

  const fTitle = document.querySelector('#about .founder-title');
  if (fTitle && about.founderTitle) {
    fTitle.textContent = about.founderTitle;
  }

  const mdBtn = document.getElementById('trigger-md-message');
  if (mdBtn && about.mdButtonText) {
    mdBtn.innerHTML = `${about.mdButtonText} <span class="arrow-icon">→</span>`;
  }

  const coreBtn = document.getElementById('trigger-core-values');
  if (coreBtn && about.coreValuesButtonText) {
    coreBtn.innerHTML = `${about.coreValuesButtonText} <span class="arrow-icon">→</span>`;
  }
}

/**
 * 1. Statistics Section
 */
function renderStatistics(cms) {
  const container = document.getElementById("stats-grid-container");
  if (!container) return;

  const stats = cms.statistics || [];
  container.innerHTML = stats.map((stat, i) => `
    <div class="stat-box" data-index="${i}">
      <div class="stat-number-wrap">
        <span class="stat-counter" data-target="${stat.value}">${stat.value}</span>
        <span class="stat-suffix">${stat.suffix || ''}</span>
      </div>
      <div class="stat-title">${stat.label}</div>
      <div class="stat-desc">${stat.subtext || ''}</div>
    </div>
  `).join("");
}

/**
 * 2. Services Editorial List
 */
function renderServices(cms) {
  const home = cms.home || {};
  const sTitle = document.querySelector('#services .section-title');
  if (sTitle && (home.capabilitiesTitleLine1 || home.capabilitiesTitleLine2 || home.capabilitiesTitleLine3)) {
    sTitle.innerHTML = `
      <span class="word-white">${home.capabilitiesTitleLine1 || 'ENGINEERING'}</span><br />
      <span class="word-blue">${home.capabilitiesTitleLine2 || 'THAT MOVES'}</span><br />
      <span class="word-orange">${home.capabilitiesTitleLine3 || 'INDUSTRIES.'}</span>
    `;
  }
  const sDesc = document.querySelector('#services .section-desc-lead');
  if (sDesc && home.capabilitiesDescription) {
    sDesc.innerHTML = home.capabilitiesDescription;
  }

  const container = document.getElementById("services-list-container");
  if (!container) return;

  const services = cms.services || [];
  container.innerHTML = services.map((service) => `
    <div class="service-item-row" data-service-id="${service.id}" id="service-${service.id}">
      <div class="service-number">${service.num}</div>
      <div class="service-name-wrap">
        <div class="service-name">${service.name}</div>
        <div class="service-tagline">${service.tagline}</div>
      </div>
      <div class="service-desc-preview">${service.description}</div>
      <div class="service-arrow-box">
        <div class="service-arrow-circle">→</div>
      </div>
      <div class="service-deliverables-panel">
        <div class="deliverables-grid">
          ${(service.deliverables || []).map(item => `
            <div class="deliverable-card">
              <span class="deliverable-check">✔</span>
              <span class="deliverable-text">${item}</span>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `).join("");

  // Attach toggle expand listener
  container.querySelectorAll(".service-item-row").forEach(row => {
    row.addEventListener("click", () => {
      const isExpanded = row.classList.contains("expanded");
      container.querySelectorAll(".service-item-row").forEach(r => r.classList.remove("expanded"));
      if (!isExpanded) {
        row.classList.add("expanded");
      }
    });
  });
}

/**
 * 3. API Services (Tabs & Blueprints)
 */
function renderApiServices(cms) {
  const tabsContainer = document.getElementById("api-tabs-nav");
  const viewsContainer = document.getElementById("api-views-container");
  if (!tabsContainer || !viewsContainer) return;

  const apiData = cms.apiServices || {};
  const programs = apiData.programs || [];

  tabsContainer.innerHTML = programs.map((prog, idx) => `
    <button class="api-tab-btn ${idx === 0 ? 'active' : ''}" data-target-tab="${prog.id}">
      ${prog.code}
    </button>
  `).join("");

  viewsContainer.innerHTML = programs.map((prog, idx) => `
    <div class="api-program-view ${idx === 0 ? 'active' : ''}" id="api-view-${prog.id}">
      <div class="api-program-details">
        <div class="api-program-header">
          <span class="tech-badge orange">${prog.edition}</span>
          <span class="tech-badge blue">${prog.badge}</span>
        </div>
        <h3 class="api-program-title">${prog.title}</h3>
        <p class="about-body-text">${prog.overview}</p>
        <div class="api-pillars-grid">
          ${(prog.pillars || []).map(pillar => `
            <div class="api-pillar-box">
              <div class="api-pillar-name">${pillar.name}</div>
              <div class="api-pillar-desc">${pillar.desc}</div>
            </div>
          `).join("")}
        </div>
        <div style="margin-top: 2rem;">
          <a
            href="https://wa.me/919940564261?text=Hello%2C%20I%20would%20like%20to%20engage%20an%20API%20Specialist%20for%20${encodeURIComponent(prog.title)}.%20Please%20share%20details."
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary-orange"
            style="display: inline-flex; align-items: center; gap: 0.5rem; text-decoration: none;"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink:0;">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Engage API Specialist →
          </a>
        </div>
      </div>
      <div class="api-visual-frame">
        <div class="api-blueprint-corner tl"></div>
        <div class="api-blueprint-corner tr"></div>
        <div class="api-blueprint-corner bl"></div>
        <div class="api-blueprint-corner br"></div>
        <img src="${prog.image || 'assets/api/api-spec-q1-inspection.jpg'}" 
             alt="${prog.title}" class="api-visual-img" loading="lazy" />
      </div>
    </div>
  `).join("");

  // Tab switching logic
  tabsContainer.querySelectorAll(".api-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target-tab");
      tabsContainer.querySelectorAll(".api-tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      viewsContainer.querySelectorAll(".api-program-view").forEach(v => v.classList.remove("active"));
      const targetView = document.getElementById(`api-view-${targetId}`);
      if (targetView) targetView.classList.add("active");
    });
  });

  // Attach quote trigger
  viewsContainer.querySelectorAll(".btn-quote-trigger").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      openQuoteModal(btn.getAttribute("data-service"));
    });
  });
}

/**
 * 4. IMS Services Standards Grid
 */
function renderImsServices(cms) {
  const standardsContainer = document.getElementById("ims-standards-container");
  const excellenceContainer = document.getElementById("excellence-list-container");
  if (!standardsContainer) return;

  const imsData = cms.imsServices || {};
  const certifications = imsData.certifications || [];
  const businessExcellence = imsData.businessExcellence || [];

  standardsContainer.innerHTML = certifications.map((cert, idx) => {
    const stdId = cert.id || getStandardIdByCode(cert.code) || 'iso-9001';
    return `
    <div class="ims-standard-card" id="ims-card-${stdId}" data-standard-id="${stdId}" role="region" aria-label="${cert.name}">
      <!-- Compact Closed State (Reference Design) -->
      <div class="ims-card-compact" tabindex="0" role="button" aria-expanded="false" aria-label="${cert.name} – Click to explore framework">
        <div class="ims-card-compact-header">
          <div class="ims-card-top">
            <span class="ims-code">${cert.code}</span>
            <span class="ims-category-badge">${cert.category || 'Standard'}</span>
          </div>
          <div class="ims-title">${cert.name}</div>
          <div class="ims-focus">${cert.focus}</div>
        </div>

        <!-- 4 Reference Action Boxes / Buttons -->
        <div class="ims-card-actions">
          <button type="button" class="ims-action-btn ims-btn-train" data-action="training" data-std-id="${stdId}" onclick="event.stopPropagation(); window.handleStandardAction('${stdId}', 'training')">
            <span class="ims-btn-icon">🎓</span> <span class="ims-btn-text">GET TRAINED</span>
          </button>
          <button type="button" class="ims-action-btn ims-btn-consult" data-action="consulting" data-std-id="${stdId}" onclick="event.stopPropagation(); window.handleStandardAction('${stdId}', 'consulting')">
            <span class="ims-btn-icon">💼</span> <span class="ims-btn-text">GET CONSULTING</span>
          </button>
          <button type="button" class="ims-action-btn ims-btn-implement" data-action="implementation" data-std-id="${stdId}" onclick="event.stopPropagation(); window.handleStandardAction('${stdId}', 'implementation')">
            <span class="ims-btn-icon">🚀</span> <span class="ims-btn-text">GET IMPLEMENTATION</span>
          </button>
          <button type="button" class="ims-action-btn ims-btn-audit" data-action="auditing" data-std-id="${stdId}" onclick="event.stopPropagation(); window.handleStandardAction('${stdId}', 'auditing')">
            <span class="ims-btn-icon">🔍</span> <span class="ims-btn-text">GET AUDITING</span>
          </button>
        </div>

        <!-- Subtle Expand Indicator Bar -->
        <div class="ims-card-expand-bar" role="button" tabindex="0" aria-label="Toggle details for ${cert.name}">
          <span class="expand-bar-text">Explore Framework &amp; Tracks</span>
          <span class="expand-bar-icon">▼</span>
        </div>
      </div>

      <!-- Expandable In-Place Drawer Container -->
      <div class="ims-card-expanded-drawer" id="drawer-${stdId}" style="display: none;" aria-hidden="true"></div>
    </div>
  `;
  }).join("");

  // Attach click & keyboard listeners for all 18 compact boxes
  const cardElements = standardsContainer.querySelectorAll('.ims-standard-card');
  cardElements.forEach(card => {
    const stdId = card.getAttribute('data-standard-id');
    const compactBox = card.querySelector('.ims-card-compact');
    const expandBar = card.querySelector('.ims-card-expand-bar');

    const handleCardClick = (e) => {
      if (e.target.closest('.ims-action-btn') || e.target.closest('.ims-drawer-collapse-btn') || e.target.closest('.ims-track-tab') || e.target.closest('.ims-drawer-body')) {
        return;
      }
      if (stdId && typeof window.toggleStandardCard === 'function') {
        window.toggleStandardCard(stdId);
      }
    };

    if (compactBox) {
      compactBox.addEventListener('click', handleCardClick);
      compactBox.addEventListener('keydown', (e) => {
        if ((e.key === 'Enter' || e.key === ' ') && !e.target.closest('.ims-action-btn')) {
          e.preventDefault();
          handleCardClick(e);
        }
      });
    }
  });

  if (excellenceContainer) {
    window._businessExcellenceData = businessExcellence;
    excellenceContainer.innerHTML = businessExcellence.map((item, idx) => {
      const stdId = item.id || `be-${idx}`;
      return `
      <div class="excellence-card ims-standard-card" id="ims-card-${stdId}" data-standard-id="${stdId}" data-index="${idx}" role="region" aria-label="${item.name}">
        <!-- Compact Closed State -->
        <div class="ims-card-compact excellence-card-compact" tabindex="0" role="button" aria-expanded="false" aria-label="${item.name} – Click to explore framework">
          <div class="excellence-card-header">
            <div class="excellence-card-badge-wrap">
              <span class="excellence-card-icon">${item.icon || '⚡'}</span>
              <span class="excellence-card-badge">${item.badge || 'Excellence'}</span>
            </div>
            <span class="excellence-card-tap-indicator" role="button" tabindex="0" onclick="event.stopPropagation(); window.openExcellenceModal(window._businessExcellenceData[${idx}])" aria-label="Open full view modal for ${item.name}">
              <span>Tap to View</span>
              <span class="tap-arrow">↗</span>
            </span>
          </div>

          <div class="excellence-card-body">
            <h4 class="excellence-card-title">${item.name}</h4>
            <p class="excellence-card-desc">${item.desc}</p>
          </div>

          <!-- 4 Reference Action Boxes / Buttons (Exact Match to Reference Design) -->
          <div class="ims-card-actions">
            <button type="button" class="ims-action-btn ims-btn-train" data-action="training" data-std-id="${stdId}" onclick="event.stopPropagation(); window.handleStandardAction('${stdId}', 'training')">
              <span class="ims-btn-icon">🎓</span> <span class="ims-btn-text">GET TRAINED</span>
            </button>
            <button type="button" class="ims-action-btn ims-btn-consult" data-action="consulting" data-std-id="${stdId}" onclick="event.stopPropagation(); window.handleStandardAction('${stdId}', 'consulting')">
              <span class="ims-btn-icon">💼</span> <span class="ims-btn-text">GET CONSULTING</span>
            </button>
            <button type="button" class="ims-action-btn ims-btn-implement" data-action="implementation" data-std-id="${stdId}" onclick="event.stopPropagation(); window.handleStandardAction('${stdId}', 'implementation')">
              <span class="ims-btn-icon">🚀</span> <span class="ims-btn-text">GET IMPLEMENTATION</span>
            </button>
            <button type="button" class="ims-action-btn ims-btn-audit" data-action="auditing" data-std-id="${stdId}" onclick="event.stopPropagation(); window.handleStandardAction('${stdId}', 'auditing')">
              <span class="ims-btn-icon">🔍</span> <span class="ims-btn-text">GET AUDITING</span>
            </button>
          </div>

          <!-- Read Complete Framework Expand Footer -->
          <div class="excellence-card-footer ims-card-expand-bar" role="button" tabindex="0" aria-label="Toggle details for ${item.name}">
            <span class="excellence-card-link-text expand-bar-text">Read Complete Framework</span>
            <span class="excellence-card-arrow expand-bar-icon">→</span>
          </div>
        </div>

        <!-- Expandable In-Place Drawer Container -->
        <div class="ims-card-expanded-drawer" id="drawer-${stdId}" style="display: none;" aria-hidden="true"></div>
      </div>
    `;
    }).join("");

    // Attach click & keyboard listeners for all excellence cards
    const excCards = excellenceContainer.querySelectorAll(".excellence-card");
    excCards.forEach(card => {
      const stdId = card.getAttribute("data-standard-id");
      const compactBox = card.querySelector(".ims-card-compact");

      const handleCardToggle = (e) => {
        if (
          e.target.closest(".ims-action-btn") ||
          e.target.closest(".excellence-card-tap-indicator") ||
          e.target.closest(".ims-drawer-collapse-btn") ||
          e.target.closest(".ims-track-tab") ||
          e.target.closest(".ims-drawer-body")
        ) {
          return;
        }
        if (stdId && typeof window.toggleStandardCard === "function") {
          window.toggleStandardCard(stdId, 'overview');
        }
      };

      if (compactBox) {
        compactBox.addEventListener("click", handleCardToggle);
        compactBox.addEventListener("keydown", (e) => {
          if ((e.key === "Enter" || e.key === " ") && !e.target.closest(".ims-action-btn") && !e.target.closest(".excellence-card-tap-indicator")) {
            e.preventDefault();
            handleCardToggle(e);
          }
        });
      }
    });
  }

  // Quote triggers inside IMS
  standardsContainer.querySelectorAll(".btn-quote-trigger").forEach(btn => {
    btn.addEventListener("click", () => {
      openQuoteModal(btn.getAttribute("data-service"));
    });
  });
}

/**
 * 4.5 Training, Consulting, Implementation & Auditing Tabs
 */
function renderTrainingServices(cms) {
  const tabsContainer = document.getElementById("training-tabs-nav");
  const viewsContainer = document.getElementById("training-tab-content-container");
  if (!tabsContainer || !viewsContainer) return;

  const trainingData = cms.training || {};
  const tabs = trainingData.tabs || [];

  const tabIcons = {
    training: "🎓",
    consulting: "💡",
    implementation: "🚀",
    auditing: "🛡️"
  };

  // Render top dock buttons
  tabsContainer.innerHTML = tabs.map((tab, idx) => `
    <button class="training-tab-btn ${idx === 0 ? 'active' : ''}" data-target-training-tab="${tab.id}">
      <span class="tab-btn-icon">${tabIcons[tab.id] || '⚡'}</span> ${tab.num || String(idx+1).padStart(2,'0')}. ${(tab.name || tab.id).toUpperCase()}
    </button>
  `).join("");

  const trackMetadata = [
    { code: "TRACK 01 // QMS", demand: "FOUNDATIONAL", filter: "iso", days: "3–5 Days", mode: "Classroom / Virtual", acc: "IRCA Certified" },
    { code: "TRACK 02 // API-QMS", demand: "FLAGSHIP (10TH ED)", filter: "api", days: "4–5 Days", mode: "Onsite Plant / Live", acc: "API Spec Aligned" },
    { code: "TRACK 03 // AUTO-CORE", demand: "IATF & VDA 6.3", filter: "auto", days: "3–4 Days", mode: "Engineering Workshop", acc: "AIAG-VDA Aligned" },
    { code: "TRACK 04 // EHS-OHSAS", demand: "HIRA SPECIALIST", filter: "eohs", days: "3–5 Days", mode: "Site / Virtual", acc: "ISO 14001 & 45001" },
    { code: "TRACK 05 // IMS-INTEGRATED", demand: "MULTI-STANDARD", filter: "iso", days: "5 Days", mode: "Executive Masterclass", acc: "Integrated Lead Auditor" },
    { code: "TRACK 06 // LAB-TESTING", demand: "NABL 17025", filter: "iso", days: "4 Days", mode: "Laboratory Immersion", acc: "Measurement Uncertainty" },
    { code: "TRACK 07 // LEAN-SS", demand: "108 MASTER TOOLS", filter: "quality", days: "5–10 Days", mode: "Kaizen Gemba Sprint", acc: "Green / Black Belt" },
    { code: "TRACK 08 // TQM-TPM", demand: "DEMING EXCELLENCE", filter: "other", days: "3–5 Days", mode: "Plant Implementation", acc: "8 Pillars of TPM" },
    { code: "TRACK 09 // QC-TOOLS", demand: "GLOBAL 8D & COPQ", filter: "quality", days: "2–3 Days", mode: "Shop Floor Workshop", acc: "Root Cause CAPA" },
    { code: "TRACK 10 // EXEC-LEAD", demand: "EXECUTIVE SUITE", filter: "quality", days: "2–3 Days", mode: "Leadership Retreat", acc: "7 Habits & TTT" },
  ];

  const categoryIcons = {
    "Quality Management System – ISO 9001": "🛡️",
    "API QMS Training – API Spec Q1 & API Spec Q2": "🛢️",
    "Automotive QMS & Core Tools – IATF 16949": "🚗",
    "Environmental & Safety – ISO 14001 & ISO 45001": "🌿",
    "Integrated Management System (IMS)": "🔄",
    "Laboratory Management – ISO/IEC 17025": "🔬",
    "Lean Manufacturing & Six Sigma": "⚡",
    "TQM & Total Productive Maintenance (TPM)": "🏭",
    "Quality Improvement Tools & Shop Floor Workshops": "🎯",
    "Leadership & Executive Soft Skills": "👥"
  };

  // Render Views
  viewsContainer.innerHTML = tabs.map((tab, idx) => {
    let bodyMarkup = "";

    if (tab.id === "training") {
      const trainingTables = tab.trainingTables || [];
      const courseCategories = tab.courseCategories || [];

      bodyMarkup = `
        <!-- 10 In-Depth Course Syllabi Tracks -->
        <div class="training-syllabi-section" id="training-syllabi-container" style="margin-top: 3.5rem;">
          <div class="section-sub-heading-bar">
            <div>
              <span class="tech-badge blue">EXECUTIVE ACADEMY</span>
              <h3 class="heading-md" style="font-size: 1.6rem; color: #FFFFFF; margin-top: 0.4rem;">
                Modular Masterclass Curriculum Syllabi
              </h3>
            </div>
            <p style="font-size: 0.88rem; color: var(--text-secondary); max-width: 500px;">
              Multi-day technical deep dives, live shop floor implementations, and certified masterclass syllabi.
            </p>
          </div>

          <div class="training-courses-grid">
            ${(() => {
              // Store course data globally so modal can access it
              window._courseDataStore = courseCategories.map((cat, i) => ({
                ...cat,
                meta: trackMetadata[i] || { code: `TRACK ${i+1}`, demand: "INDUSTRIAL", days: "3–5 Days", mode: "Onsite / Live", acc: "Accredited" },
                icon: categoryIcons[cat.category] || "📘"
              }));
              return courseCategories.map((cat, cIdx) => {
              const meta = trackMetadata[cIdx] || {
                code: `TRACK ${cIdx + 1 < 10 ? '0' : ''}${cIdx + 1}`,
                demand: "INDUSTRIAL",
                filter: "iso",
                days: "3–5 Days",
                mode: "Onsite / Live",
                acc: "Accredited"
              };
              const icon = categoryIcons[cat.category] || "📘";

              return `
                <div class="training-course-card" data-category-filter="${meta.filter}">
                  <div class="course-card-top">
                    <div class="course-track-badge">
                      <span class="track-code">${meta.code}</span>
                      <span class="track-demand-pill">${meta.demand}</span>
                    </div>
                    <div class="course-category-header">
                      <div class="course-category-icon">${icon}</div>
                      <h4 class="course-category-name">${cat.category}</h4>
                    </div>
                  </div>

                  <div class="course-card-meta-bar">
                    <div class="course-meta-item">
                      <span class="meta-label">Duration:</span>
                      <span class="meta-value">${meta.days}</span>
                    </div>
                    <div class="course-meta-item">
                      <span class="meta-label">Delivery:</span>
                      <span class="meta-value">${meta.mode}</span>
                    </div>
                    <div class="course-meta-item">
                      <span class="meta-label">Standard:</span>
                      <span class="meta-value">${meta.acc}</span>
                    </div>
                  </div>

                  <div class="course-modules-wrapper">
                    <div class="course-modules-label">CURRICULUM SYLLABUS (${cat.modules.length} MODULES):</div>
                    <ul class="course-topics-list">
                      ${cat.modules.map(mod => `
                        <li class="course-topic-item">
                          <span class="topic-dot">▸</span>
                          <span class="topic-name">${mod}</span>
                        </li>
                      `).join('')}
                    </ul>
                  </div>

                  <div class="course-card-footer">
                    <button class="btn btn-primary-orange btn-sm btn-open-course-modal" data-course-idx="${cIdx}" data-course-name="${cat.category}">
                      Enroll / Book Cohort →
                    </button>
                  </div>
                </div>
              `;
            }).join('');
            })()}
          </div>
        </div>
      `;
    } else if (tab.id === "consulting") {
      const modules = tab.modules || [];
      bodyMarkup = `
        <div class="service-pillar-overview-box">
          <div class="pillar-overview-body">
            <span class="tech-badge orange">${tab.badge || 'VALUE ADDED SERVICES'}</span>
            <h3 class="pillar-overview-title">Process Improvement &amp; Quality System Consulting</h3>
            <p class="pillar-overview-desc">${tab.description}</p>
          </div>
        </div>

        <div class="consulting-modules-grid">
          ${modules.map(m => `
            <div class="consulting-module-card">
              <div class="module-card-header">
                <div class="module-icon-wrap">
                  <span class="module-icon">${m.icon || '💡'}</span>
                  <span class="module-tag">${m.tag || 'Consulting'}</span>
                </div>
              </div>
              <h4 class="module-title">${m.title}</h4>
              <p class="module-desc">${m.desc}</p>
              ${(m.deliverables && m.deliverables.length > 0) ? `
                <div class="module-deliverables">
                  <div class="deliv-label">KEY DELIVERABLES:</div>
                  <ul class="deliv-list">
                    ${m.deliverables.map(d => `<li><span class="deliv-check">✓</span> ${d}</li>`).join('')}
                  </ul>
                </div>
              ` : ''}
              <div class="module-card-footer">
                <button class="btn btn-secondary-blue btn-sm btn-quote-trigger" data-service="${m.title} Consulting">
                  Request Consulting Scope →
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    } else if (tab.id === "implementation") {
      const steps = tab.steps || [];
      bodyMarkup = `
        <div class="service-pillar-overview-box">
          <div class="pillar-overview-body">
            <span class="tech-badge orange">${tab.badge || 'TURNKEY ROADMAP'}</span>
            <h3 class="pillar-overview-title">Turnkey 6-Step Management System Deployment</h3>
            <p class="pillar-overview-desc">${tab.description}</p>
          </div>
        </div>

        <div class="implementation-steps-grid">
          ${steps.map(s => `
            <div class="implementation-step-card">
              <div class="step-card-num-badge">STEP ${s.step}</div>
              <h4 class="step-card-title">${s.title}</h4>
              <p class="step-card-desc">${s.desc}</p>
            </div>
          `).join('')}
        </div>

        <div style="margin-top: 3rem; text-align: center;">
          <button class="btn btn-primary-orange btn-quote-trigger" data-service="Turnkey 6-Step Implementation">
            Initiate Turnkey Implementation →
          </button>
        </div>
      `;
    } else if (tab.id === "auditing") {
      const standards = tab.standardsCovered || [];
      const obstacles = tab.obstaclesSolved || [];
      const advantages = tab.advantages || [];
      const workflow = tab.processAuditWorkflow || [];
      const deliverables = tab.deliverables || [];

      bodyMarkup = `
        <div class="service-pillar-overview-box">
          <div class="pillar-overview-body">
            <span class="tech-badge orange">${tab.badge || 'SURGICAL PRECISION'}</span>
            <h3 class="pillar-overview-title">Best-in-Class Value-Added Management System Audits</h3>
            <p class="pillar-overview-desc">${tab.description}</p>
          </div>
        </div>

        <!-- Standards Covered Badges -->
        <div class="auditing-standards-strip">
          <div class="strip-label">INTERNAL AUDIT SERVICES OFFERED FOR:</div>
          <div class="standards-pill-wrap">
            ${standards.map(st => `<span class="standard-pill">🛡️ ${st}</span>`).join('')}
          </div>
        </div>

        <!-- The 3 Obstacles Solved -->
        <div class="auditing-section-block">
          <h4 class="auditing-block-title">Overcoming Key Internal Auditing Obstacles</h4>
          <div class="obstacles-grid">
            ${obstacles.map(obs => `
              <div class="obstacle-card">
                <div class="obstacle-card-icon">⚠️</div>
                <div class="obstacle-title">${obs.title}</div>
                <p class="obstacle-desc">${obs.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Advantages & Workflow Grid -->
        <div class="auditing-dual-grid">
          <div class="auditing-content-box">
            <h4 class="box-heading"><span class="box-dot orange"></span> Reva Phoenix Advantages</h4>
            <ul class="advantage-checklist">
              ${advantages.map(adv => `
                <li>
                  <span class="adv-check">✓</span>
                  <span>${adv}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <div class="auditing-content-box">
            <h4 class="box-heading"><span class="box-dot blue"></span> Guaranteed Audit Deliverables</h4>
            <ul class="advantage-checklist">
              ${deliverables.map(del => `
                <li>
                  <span class="adv-check blue">◆</span>
                  <span>${del}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>

        <!-- Process Auditing Workflow -->
        <div class="auditing-section-block">
          <h4 class="auditing-block-title">The Reva Phoenix Process Auditing Workflow</h4>
          <div class="workflow-steps-row">
            ${workflow.map(wf => `
              <div class="workflow-step-box">
                <div class="wf-stage-num">${wf.stage}</div>
                <p class="wf-stage-desc">${wf.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <div style="margin-top: 3rem; text-align: center;">
          <a
            href="https://wa.me/919940564261?text=Hello%2C%20I%20would%20like%20to%20book%20an%20Audit%20Assessment.%20Please%20share%20details."
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary-orange"
            style="display: inline-flex; align-items: center; gap: 0.5rem; text-decoration: none;"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink:0;">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Book An Audit Assessment →
          </a>
        </div>
      `;
    }

    return `
      <div class="training-tab-view ${idx === 0 ? 'active' : ''}" id="training-view-${tab.id}">
        ${bodyMarkup}
      </div>
    `;
  }).join("");

  // Tab switching interaction
  const tabBtns = tabsContainer.querySelectorAll(".training-tab-btn");
  const tabViews = viewsContainer.querySelectorAll(".training-tab-view");

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetTab = btn.getAttribute("data-target-training-tab");
      tabBtns.forEach(b => b.classList.remove("active"));
      tabViews.forEach(v => v.classList.remove("active"));

      btn.classList.add("active");
      const targetView = document.getElementById(`training-view-${targetTab}`);
      if (targetView) {
        targetView.classList.add("active");
      }
    });
  });



  // Quote triggers inside all views
  viewsContainer.querySelectorAll(".btn-quote-trigger").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const serviceName = e.currentTarget.getAttribute("data-service") || "Training Services";
      openQuoteModal(serviceName);
    });
  });

  // Global deep-link helper — called by GET TRAINED / GET CONSULTING / GET IMPLEMENTATION / GET AUDITING buttons on MSS cards
  window._navigateToTrainingTab = function(tabId) {
    const trainingSection = document.getElementById("training");
    if (trainingSection) {
      trainingSection.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        const allTabBtns  = document.querySelectorAll(".training-tab-btn");
        const allTabViews = document.querySelectorAll(".training-tab-view");

        allTabBtns.forEach(b  => b.classList.remove("active"));
        allTabViews.forEach(v => v.classList.remove("active"));

        const targetBtn  = document.querySelector(`[data-target-training-tab="${tabId}"]`);
        const targetView = document.getElementById(`training-view-${tabId}`);

        if (targetBtn)  targetBtn.classList.add("active");
        if (targetView) targetView.classList.add("active");
      }, 550);
    } else {
      const serviceTitles = {
        training: "Industrial Training Program",
        consulting: "Consulting & Management Advisory",
        implementation: "Turnkey System Implementation",
        auditing: "Comprehensive Auditing & Assessment"
      };
      if (typeof openQuoteModal === "function") {
        openQuoteModal(serviceTitles[tabId] || "Consulting Services");
      }
    }
  };

  // Dedicated standard action handler for MSS cards — expands card in place with selected track
  window.handleStandardAction = function(standardId, actionType) {
    if (typeof window.expandStandardCard === "function") {
      window.expandStandardCard(standardId, actionType, true);
    } else if (typeof window.openStandardDetail === "function") {
      window.openStandardDetail(standardId, actionType);
    }
  };
}


/**
 * 5. Industries Showcase
 */
function renderIndustries(cms) {
  const container = document.getElementById("industries-container");
  if (!container) return;

  const indSection = cms.industries || {};
  const items = indSection.items || (Array.isArray(indSection) ? indSection : []);

  container.innerHTML = items.map(ind => {
    const mid = Math.ceil(ind.name.length / 2);
    const part1 = ind.name.slice(0, mid);
    const part2 = ind.name.slice(mid);

    return `
      <div class="industry-block" id="ind-${ind.id}">
        <div class="industry-image-panel">
          <img src="${ind.image}" alt="${ind.title}" class="industry-bg-image" loading="lazy" />
        </div>
        <div class="industry-info-panel">
          <div class="industry-name-hover">
            <span class="part-blue">${part1}</span><span class="part-orange">${part2}</span>
          </div>
          <div class="industry-sub">${ind.title}</div>
          <div class="industry-desc">${ind.description}</div>
          <div class="industry-tags-list">
            ${(ind.standards || []).map(std => `<span class="tech-badge">${std}</span>`).join("")}
          </div>
          <div style="margin-top: 1rem;">
            <button class="btn btn-secondary-blue btn-sm btn-quote-trigger" data-service="${ind.name} Industry Consulting">
              Explore Industry Solutions <span class="arrow-icon">→</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  container.querySelectorAll(".btn-quote-trigger").forEach(btn => {
    btn.addEventListener("click", () => {
      openQuoteModal(btn.getAttribute("data-service"));
    });
  });
}

/**
 * 6. Clients Marquee
 */
function renderClientsMarquee(cms) {
  const track = document.getElementById("clients-marquee-track");
  if (!track) return;

  const clients = cms.portfolio?.clients || [];
  const doubleClients = [...clients, ...clients];

  track.innerHTML = doubleClients.map(client => `
    <div class="client-logo-card" title="${client.name} (${client.location})">
      <img src="${client.logo}" alt="${client.name}" class="client-logo-img" loading="lazy" />
    </div>
  `).join("");
}

/**
 * 7. Infrastructure Showcase
 */
function renderInfrastructure(cms) {
  const container = document.getElementById("infra-grid-container");
  if (!container) return;

  const images = cms.portfolio?.infrastructureImages || [];
  container.innerHTML = images.map(img => `
    <div class="infra-card">
      <div class="infra-img-box">
        <img src="${img.src}" alt="${img.caption}" class="infra-img" loading="lazy" />
      </div>
      <div class="infra-meta">
        <div class="infra-tag">${img.tag}</div>
        <div class="infra-caption">${img.caption}</div>
      </div>
    </div>
  `).join("");
}

/**
 * 8. Event Gallery & Masonry
 */
function renderGallery(cms) {
  const container = document.getElementById("gallery-grid-container");
  if (!container) return;

  const gallery = cms.portfolio?.gallery || [];
  container.innerHTML = gallery.map(item => `
    <div class="gallery-item" data-src="${item.src}" data-title="${item.title}" data-category="${item.category}">
      <img src="${item.src}" alt="${item.title}" class="gallery-thumb" loading="lazy" />
      <div class="gallery-overlay">
        <span class="gallery-cat">${item.category}</span>
        <div class="gallery-name">${item.title}</div>
      </div>
    </div>
  `).join("");

  container.querySelectorAll(".gallery-item").forEach(item => {
    item.addEventListener("click", () => {
      const src = item.getAttribute("data-src");
      const title = item.getAttribute("data-title");
      openLightbox(src, title);
    });
  });
}

/**
 * 9. Videos Showcase
 */
function renderVideos(cms) {
  const container = document.getElementById("videos-grid-container");
  if (!container) return;

  const videos = cms.portfolio?.videos || [];
  container.innerHTML = videos.map(video => `
    <div class="video-card" data-video-id="${video.id}" data-title="${video.title}">
      <div class="video-thumbnail-box">
        <img src="${video.thumbnail}" alt="${video.title}" class="video-thumb-img" loading="lazy" />
        <div class="video-play-btn">▶</div>
      </div>
      <div class="video-info">
        <div class="video-category">${video.category}</div>
        <div class="video-card-title">${video.title}</div>
        <div class="video-card-sub">${video.subtitle}</div>
      </div>
    </div>
  `).join("");

  container.querySelectorAll(".video-card").forEach(card => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-video-id");
      const title = card.getAttribute("data-title");
      openVideoPlayer(id, title);
    });
  });
}

/**
 * 10. Testimonials
 */
function renderTestimonials(cms) {
  const container = document.getElementById("testimonials-grid-container");
  if (!container) return;

  const testimonials = cms.portfolio?.testimonials || [];
  container.innerHTML = testimonials.map(t => `
    <div class="testimonial-card">
      <div>
        <div class="testimonial-quote-icon">“</div>
        <p class="testimonial-text">${t.quote}</p>
      </div>
      <div class="testimonial-author-box">
        <div>
          <div class="author-name">${t.author}</div>
          <div class="author-role">${t.company}</div>
        </div>
        <div class="testimonial-stars">★★★★★</div>
      </div>
    </div>
  `).join("");
}

/**
 * 11. Careers
 */
function renderCareers(cms) {
  const container = document.getElementById("careers-list-container");
  if (!container) return;

  const jobs = cms.careers?.jobs || cms.careers || [];
  container.innerHTML = jobs.map(job => `
    <div class="career-card">
      <div class="career-header">
        <div class="career-title">${job.title}</div>
        <div class="career-tags">
          <span class="tech-badge orange">${job.location}</span>
          <span class="tech-badge blue">${job.experience}</span>
          ${job.status ? `<span class="tech-badge ${job.status === 'Open' ? 'green' : 'gray'}">${job.status}</span>` : ''}
        </div>
      </div>
      <div class="career-requirements">
        <strong>Eligibility:</strong> ${job.qualification || job.requirements || ''}
      </div>
      <ul class="career-responsibilities-list">
        ${(job.responsibilities || []).map(r => `<li>${r}</li>`).join("")}
      </ul>
      <a href="mailto:${job.submissionEmail || 'careers@revaphoenix.com'}?subject=Application for ${encodeURIComponent(job.title)}" class="btn btn-secondary-blue btn-sm">
        Send Your Resume →
      </a>
    </div>
  `).join("");
}

/**
 * 12. Downloads
 */
function renderDownloads(cms) {
  const container = document.getElementById("downloads-grid-container");
  if (!container) return;

  const downloads = cms.portfolio?.downloads || [];
  container.innerHTML = downloads.map(doc => `
    <div class="download-card">
      <div>
        <div class="download-icon">📄</div>
        <div class="download-title">${doc.title}</div>
        <div class="download-desc">${doc.description}</div>
      </div>
      <div>
        <div class="download-meta">
          <span class="tech-badge">${doc.fileType}</span>
          <span class="tech-badge orange">${doc.size}</span>
          <span class="tech-badge blue">${doc.verified}</span>
        </div>
        <div class="download-actions">
          <a href="${doc.filePath}" download class="btn btn-primary-orange btn-sm">
            Download Document ↓
          </a>
          <button class="btn btn-secondary-blue btn-sm btn-preview-pdf" data-path="${doc.filePath}" data-title="${doc.title}">
            Preview 👁
          </button>
        </div>
      </div>
    </div>
  `).join("");

  container.querySelectorAll(".btn-preview-pdf").forEach(btn => {
    btn.addEventListener("click", () => {
      const path = btn.getAttribute("data-path");
      const title = btn.getAttribute("data-title");
      openPdfPreview(path, title);
    });
  });
}

/**
 * 13. Departmental Contacts
 */
function renderDepartmentalContacts(cms) {
  const container = document.getElementById("department-contacts-container");
  if (!container) return;

  const contactData = cms.contact || {};
  const depts = contactData.departments || [];

  container.innerHTML = depts.map(dept => `
    <div class="dept-box">
      <div class="dept-title">${dept.title}</div>
      <a href="tel:${(dept.phone || '').replace(/\s+/g, '')}" class="dept-phone">${dept.phone}</a>
      <a href="mailto:${dept.email}" class="dept-email">${dept.email}</a>
    </div>
  `).join("");
}

/**
 * 14. Footer
 */
function renderFooter(cms) {
  const settings = cms.siteSettings || {};
  const footer = cms.footer || {};
  const contact = cms.contact || {};

  const brandEl = document.querySelector('#site-footer .brand-name');
  if (brandEl && (footer.brandName || settings.siteName)) {
    brandEl.textContent = footer.brandName || settings.siteName;
  }

  const descEl = document.querySelector('#site-footer .footer-about-text');
  if (descEl && (footer.companyDescription || settings.tagline)) {
    descEl.textContent = footer.companyDescription || settings.tagline;
  }

  const copyEl = document.querySelector('#site-footer .footer-bottom-bar div:first-child');
  if (copyEl && footer.copyright) {
    copyEl.innerHTML = footer.copyright;
  }

  const taxEl = document.querySelector('#site-footer .footer-tax-info');
  const gst = footer.gst || cms.companyInfo?.tax?.gst || "33AAFCR4885G1Z6";
  const sac = footer.sac || cms.companyInfo?.tax?.sac || "998313";
  if (taxEl && (gst || sac)) {
    taxEl.innerHTML = `
      <span>GSTIN: <span class="footer-tax-val" style="color: var(--text-primary); font-weight: 600;">${gst}</span></span>
      <span style="color: var(--border-medium); opacity: 0.5;">•</span>
      <span>SAC: <span class="footer-tax-val" style="color: var(--text-primary); font-weight: 600;">${sac}</span></span>
    `;
  }
}
