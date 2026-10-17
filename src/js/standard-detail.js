/**
 * REVA PHOENIX — 18 Management System Standards (MSS) In-Place Expandable Card Accordion Controller
 * Implements smooth GSAP transitions, height expansion, fade-up text, subtle slide, icon rotation,
 * matching accent glow, single-expanded accordion behavior, and complete non-generic content for all 18 standards.
 */

import { STANDARDS_DATA } from './standards-data.js';
import { STANDARDS_TRACKS, getStandardTrackData } from './standards-tracks.js';
import { openQuoteModal } from './modals.js';

let currentlyExpandedCardId = null;
let currentActiveTrack = 'training';

/**
 * Maps standard codes from data.js/custom_data.json to STANDARDS_DATA keys
 */
export function getStandardIdByCode(code) {
  if (!code) return null;
  const clean = code.trim().toLowerCase();
  
  if (STANDARDS_DATA && STANDARDS_DATA[clean]) return clean;

  if (clean.includes('5s') || clean.includes('6s')) return '5s-6s';
  if (clean.includes('supplier')) return 'supplier-dev';
  if (clean.includes('tpi') || clean.includes('third party')) return 'tpi';
  if (clean.includes('qc tool') || clean.includes('7 qc') || clean.includes('8d')) return 'qc-tools';
  if (clean.includes('leadership') || clean.includes('soft skill')) return 'leadership-soft-skills';

  if (clean.includes('q1')) return 'api-spec-q1';
  if (clean.includes('q2')) return 'api-spec-q2';
  if (clean.includes('monogram')) return 'api-monogram';
  if (clean.includes('9001')) return 'iso-9001';
  if (clean.includes('14001')) return 'iso-14001';
  if (clean.includes('45001')) return 'iso-45001';
  if (clean.includes('50001')) return 'iso-50001';
  if (clean.includes('16949')) return 'iatf-16949';
  if (clean.includes('9100')) return 'as-9100';
  if (clean.includes('17025')) return 'iso-17025';
  if (clean.includes('27001')) return 'iso-27001';
  if (clean.includes('22000')) return 'iso-22000';
  if (clean.includes('13485')) return 'iso-13485';
  if (clean.includes('14064')) return 'iso-14064';
  if (clean.includes('vda')) return 'vda-6-3';
  if (clean.includes('core tools')) return 'quality-core-tools';
  if (clean === 'six-sigma') return 'six-sigma';
  if (clean === 'lean') return 'lean';
  if (clean.includes('six sigma') || clean.includes('lean')) return 'lean-six-sigma';
  if (clean === 'tpm') return 'tpm';
  if (clean === 'tqm') return 'tqm';
  if (clean.includes('tpm') || clean.includes('tqm')) return 'tpm-tqm';

  return null;
}

/**
 * Expand a standard card in place as an interactive accordion section
 */
export function expandStandardCard(standardId, trackId = 'training', smoothScroll = true) {
  const stdData = STANDARDS_DATA[standardId];
  if (!stdData) {
    console.warn(`Standard ID not found: ${standardId}`);
    return;
  }

  const targetCard = document.getElementById(`ims-card-${standardId}`) || 
                     document.querySelector(`.ims-standard-card[data-standard-id="${standardId}"]`);
  if (!targetCard) {
    console.warn(`Card element not found for standard: ${standardId}`);
    return;
  }

  // If another card is already expanded, collapse it first smoothly
  if (currentlyExpandedCardId && currentlyExpandedCardId !== standardId) {
    collapseStandardCard(currentlyExpandedCardId, false);
  }

  // Locate or create drawer inside targetCard
  let drawer = targetCard.querySelector('.ims-card-expanded-drawer');
  if (!drawer) {
    drawer = document.createElement('div');
    drawer.className = 'ims-card-expanded-drawer';
    drawer.id = `drawer-${standardId}`;
    targetCard.appendChild(drawer);
  }

  // Set card state
  targetCard.classList.add('is-expanded');
  targetCard.setAttribute('data-active-track', trackId);
  targetCard.setAttribute('aria-expanded', 'true');

  // Synchronize active indicator on compact action buttons
  const actionBtns = targetCard.querySelectorAll('.ims-card-actions .ims-action-btn');
  actionBtns.forEach(btn => {
    const btnTrack = btn.getAttribute('data-action');
    btn.classList.toggle('active', btnTrack === trackId);
  });

  // Update expand bar state if present
  const expandBar = targetCard.querySelector('.ims-card-expand-bar');
  if (expandBar) {
    expandBar.setAttribute('aria-expanded', 'true');
    const expandText = expandBar.querySelector('.expand-bar-text');
    if (expandText) expandText.textContent = 'Collapse Card';
  }

  // Render comprehensive drawer markup
  drawer.innerHTML = renderDrawerMarkup(stdData, trackId);
  drawer.style.display = 'block';

  // Attach interactive listeners inside the drawer
  attachDrawerListeners(drawer, stdData, trackId);

  // GSAP Smooth Expansion Animation
  if (window.gsap) {
    window.gsap.killTweensOf(drawer);
    window.gsap.fromTo(drawer,
      { height: 0, opacity: 0 },
      { 
        height: 'auto', 
        opacity: 1, 
        duration: 0.45, 
        ease: 'power3.out',
        onComplete: () => {
          drawer.style.height = 'auto'; // allow responsive resizing
        }
      }
    );

    // Fade-up animation for inner content blocks
    const fadeElements = drawer.querySelectorAll('.ims-animate-fade');
    if (fadeElements.length > 0) {
      window.gsap.fromTo(fadeElements,
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.035, duration: 0.35, ease: 'power2.out', delay: 0.05 }
      );
    }
  } else {
    drawer.style.height = 'auto';
    drawer.style.opacity = '1';
  }

  currentlyExpandedCardId = standardId;
  currentActiveTrack = trackId;

  // Smooth scroll into comfortable view
  if (smoothScroll) {
    setTimeout(() => {
      const navHeader = document.querySelector('.site-header') || document.querySelector('header');
      const headerOffset = navHeader ? navHeader.offsetHeight + 24 : 90;
      const cardRect = targetCard.getBoundingClientRect();
      const targetY = window.pageYOffset + cardRect.top - headerOffset;
      
      if (window.lenis && typeof window.lenis.scrollTo === 'function') {
        window.lenis.scrollTo(targetY, { duration: 0.8, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
      } else {
        window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
      }
    }, 100);
  }

  // Update browser hash state for deep linking
  try {
    history.replaceState({ standardExpanded: true, standardId, trackId }, '', `#standard-${standardId}`);
  } catch (e) {
    // Ignore history error in restricted frames
  }
}

/**
 * Collapse an expanded standard card smoothly
 */
export function collapseStandardCard(standardId, restoreHash = true) {
  const targetId = standardId || currentlyExpandedCardId;
  if (!targetId) return;

  const targetCard = document.getElementById(`ims-card-${targetId}`) || 
                     document.querySelector(`.ims-standard-card[data-standard-id="${targetId}"]`);
  if (!targetCard) return;

  const drawer = targetCard.querySelector('.ims-card-expanded-drawer');
  
  const finalizeCollapse = () => {
    targetCard.classList.remove('is-expanded');
    targetCard.removeAttribute('data-active-track');
    targetCard.setAttribute('aria-expanded', 'false');
    if (drawer) {
      drawer.style.display = 'none';
      drawer.innerHTML = '';
    }
    const actionBtns = targetCard.querySelectorAll('.ims-card-actions .ims-action-btn');
    actionBtns.forEach(btn => btn.classList.remove('active'));
    const expandBar = targetCard.querySelector('.ims-card-expand-bar');
    if (expandBar) {
      expandBar.setAttribute('aria-expanded', 'false');
      const expandText = expandBar.querySelector('.expand-bar-text');
      if (expandText) expandText.textContent = 'Explore Framework & Tracks';
    }
    if (currentlyExpandedCardId === targetId) {
      currentlyExpandedCardId = null;
    }
    if (restoreHash && window.location.hash.startsWith('#standard-')) {
      try {
        history.replaceState(null, '', window.location.pathname + '#ims-services');
      } catch (e) {}
    }
  };

  if (drawer && window.gsap) {
    window.gsap.killTweensOf(drawer);
    window.gsap.to(drawer, {
      height: 0,
      opacity: 0,
      duration: 0.32,
      ease: 'power3.in',
      onComplete: finalizeCollapse
    });
  } else {
    finalizeCollapse();
  }
}

/**
 * Toggle card expansion (expand if closed, collapse if open)
 */
export function toggleStandardCard(standardId, trackId = 'training') {
  if (currentlyExpandedCardId === standardId) {
    collapseStandardCard(standardId);
  } else {
    expandStandardCard(standardId, trackId, true);
  }
}

/**
 * Switch track inside an already expanded card smoothly
 */
export function switchStandardTrack(standardId, trackId) {
  const targetCard = document.getElementById(`ims-card-${standardId}`) || 
                     document.querySelector(`.ims-standard-card[data-standard-id="${standardId}"]`);
  if (!targetCard) return;

  if (!targetCard.classList.contains('is-expanded')) {
    expandStandardCard(standardId, trackId, true);
    return;
  }

  const stdData = STANDARDS_DATA[standardId];
  if (!stdData) return;

  targetCard.setAttribute('data-active-track', trackId);
  currentActiveTrack = trackId;

  // Update tabs active state in drawer topbar
  const allTabs = targetCard.querySelectorAll('.ims-track-tab');
  allTabs.forEach(tab => {
    const tabTrack = tab.getAttribute('data-track');
    const isActive = tabTrack === trackId;
    tab.classList.toggle('active', isActive);
    tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
  });

  // Synchronize compact action buttons
  const actionBtns = targetCard.querySelectorAll('.ims-card-actions .ims-action-btn');
  actionBtns.forEach(btn => {
    const btnTrack = btn.getAttribute('data-action');
    btn.classList.toggle('active', btnTrack === trackId);
  });

  // Cross-fade drawer body content
  const drawerBody = targetCard.querySelector('.ims-drawer-body');
  if (drawerBody) {
    if (window.gsap) {
      window.gsap.to(drawerBody, {
        opacity: 0,
        y: -8,
        duration: 0.16,
        ease: 'power2.in',
        onComplete: () => {
          drawerBody.innerHTML = renderTrackBodyContent(stdData, trackId);
          attachDrawerListeners(targetCard.querySelector('.ims-card-expanded-drawer'), stdData, trackId);
          window.gsap.fromTo(drawerBody,
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.28, ease: 'power2.out' }
          );
        }
      });
    } else {
      drawerBody.innerHTML = renderTrackBodyContent(stdData, trackId);
      attachDrawerListeners(targetCard.querySelector('.ims-card-expanded-drawer'), stdData, trackId);
    }
  }
}

/**
 * Backwards compatible alias for opening standard details
 */
export function openStandardDetail(standardId, trackId = 'training') {
  expandStandardCard(standardId, trackId, true);
}

/**
 * Backwards compatible alias for closing standard details
 */
export function closeStandardDetail() {
  if (currentlyExpandedCardId) {
    collapseStandardCard(currentlyExpandedCardId);
  }
}

/**
 * Render the full drawer HTML (topbar + track body)
 */
function renderDrawerMarkup(stdData, activeTrackId) {
  const stdId = stdData.id;
  const trackInfo = getStandardTrackData(stdId, activeTrackId) || {};
  const accentColorMap = {
    training: '#00d4aa',
    consulting: '#4a9eff',
    implementation: '#a855f7',
    auditing: '#f59e0b',
    overview: '#FFFFFF'
  };
  const activeColor = accentColorMap[activeTrackId] || '#00d4aa';

  return `
    <div class="ims-drawer-inner">
      <!-- Drawer Top Bar -->
      <div class="ims-drawer-topbar ims-animate-fade">
        <div class="ims-drawer-meta">
          <span class="ims-drawer-code">${stdData.code}</span>
          <span class="ims-drawer-edition">${stdData.edition || 'Current'}</span>
          <span class="ims-drawer-badge">${stdData.badge || stdData.category}</span>
          <span class="ims-active-track-indicator" style="color: ${activeColor}; font-family: var(--font-mono); font-size: 0.74rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; margin-left: 0.4rem;">
            ● ACTIVE: ${activeTrackId.toUpperCase()}
          </span>
        </div>

        <!-- Drawer Action Controls (Full Spec & Collapse) -->
        <div class="ims-drawer-controls" style="display: flex; align-items: center; gap: 0.65rem;">
          <button type="button" class="ims-track-tab ims-tab-overview ${activeTrackId === 'overview' ? 'active' : ''}" 
                  data-track="overview" role="tab" aria-selected="${activeTrackId === 'overview'}"
                  onclick="event.stopPropagation(); window.switchStandardTrack('${stdId}', 'overview')">
            <span class="track-tab-icon">📋</span> <span class="track-tab-text">${activeTrackId === 'overview' ? 'Showing All Specs' : 'Full Spec View'}</span>
          </button>
          <button type="button" class="ims-drawer-collapse-btn" 
                  onclick="event.stopPropagation(); window.collapseStandardCard('${stdId}')" 
                  aria-label="Collapse section">
            <span class="collapse-icon">▲</span> Collapse
          </button>
        </div>
      </div>

      <!-- Drawer Body Container -->
      <div class="ims-drawer-body">
        ${renderTrackBodyContent(stdData, activeTrackId)}
      </div>
    </div>
  `;
}

/**
 * Render specific track body content inside the drawer
 */
function renderTrackBodyContent(stdData, activeTrackId) {
  const stdId = stdData.id;
  
  if (activeTrackId === 'overview') {
    return renderOverviewTrackMarkup(stdData);
  }

  const track = getStandardTrackData(stdId, activeTrackId);
  if (!track) {
    return renderOverviewTrackMarkup(stdData);
  }

  const trackIcons = {
    training: '🎓',
    consulting: '💼',
    implementation: '🚀',
    auditing: '🔍'
  };
  const icon = trackIcons[activeTrackId] || '⚡';

  return `
    <div class="ims-track-content-layout">
      <!-- Left Column: Core Technical Architecture -->
      <div class="ims-track-main-col">
        <!-- 1. Title & Introduction -->
        <div class="ims-track-hero-box ims-animate-fade">
          <div class="ims-track-tagline">
            <span class="track-pill">${icon} ${(activeTrackId).toUpperCase()} TRACK</span>
            <span class="track-std-code">${stdData.code}</span>
          </div>
          <h3 class="ims-track-heading">${track.title}</h3>
          <p class="ims-track-lead">${track.intro}</p>
          <p class="ims-track-desc">${track.desc}</p>
        </div>

        <!-- 4. Key Services / Features / Programs -->
        ${renderTrackItemsSection(track, activeTrackId)}

        <!-- 5. Process / How It Works -->
        ${renderTrackProcessSection(track, activeTrackId)}
      </div>

      <!-- Right Column: Specs, Benefits, Related Services & CTA -->
      <div class="ims-track-side-col">
        <!-- Technical Details / Topics / Compliance Areas -->
        ${renderTrackSidebarItems(track, stdData, activeTrackId)}

        <!-- 6. Benefits / Applications -->
        <div class="ims-side-block ims-benefits-block ims-animate-fade">
          <h4 class="side-block-title">
            <span class="side-icon">✨</span> Key Tangible Benefits
          </h4>
          <ul class="ims-benefits-list">
            ${(track.benefits || []).map(b => `
              <li>
                <span class="benefit-check">✓</span>
                <span class="benefit-text">${b}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- 7. Related Services -->
        <div class="ims-side-block ims-related-block ims-animate-fade">
          <h4 class="side-block-title">
            <span class="side-icon">🔗</span> Related Standards
          </h4>
          <div class="ims-related-tags">
            ${(stdData.relatedServices || []).map(relId => {
              const relStd = STANDARDS_DATA[relId];
              const relLabel = relStd ? relStd.code : relId.toUpperCase();
              return `<button type="button" class="related-std-pill" onclick="event.stopPropagation(); window.expandStandardCard('${relId}', '${activeTrackId}')">${relLabel}</button>`;
            }).join('')}
          </div>
        </div>

        <!-- 8. Clear CTA -->
        <div class="ims-cta-box ims-animate-fade" data-track="${activeTrackId}">
          <div class="cta-box-badge">Immediate Deployment</div>
          <h4 class="cta-box-title">Ready to Begin with ${stdData.code}?</h4>
          <p class="cta-box-text">Connect directly with our Lead Auditor &amp; Technical Specialist team for cohort schedules, fee structures, and customized proposals.</p>
          <button type="button" class="ims-cta-primary-btn" 
                  data-service="${track.ctaService || stdData.name}"
                  onclick="event.stopPropagation(); window.openQuoteModal('${track.ctaService || stdData.name}')">
            <span>${track.ctaText || 'Get Started'}</span>
            <span class="cta-arrow">→</span>
          </button>
          <a href="https://wa.me/919940669044?text=${encodeURIComponent(`Hello Reva Phoenix, I am interested in ${track.ctaService || stdData.name}. Please share details.`)}" 
             target="_blank" rel="noopener noreferrer" class="ims-cta-secondary-btn" onclick="event.stopPropagation();">
            <span>💬 Inquire on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  `;
}

/**
 * Render Track Key Services / Features / Programs
 */
function renderTrackItemsSection(track, activeTrackId) {
  if (activeTrackId === 'training') {
    return `
      <div class="ims-track-section ims-animate-fade">
        <h4 class="track-section-title">
          <span class="section-title-icon">📚</span> Structured Training Programs &amp; Masterclasses
        </h4>
        <div class="ims-programs-grid">
          ${(track.programs || []).map(prog => `
            <div class="ims-program-card">
              <div class="program-card-top">
                <span class="program-name">${prog.name}</span>
                <span class="program-duration">${prog.duration}</span>
              </div>
              <div class="program-audience">🎯 Target: ${prog.audience}</div>
              <p class="program-desc">${prog.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  if (activeTrackId === 'consulting') {
    return `
      <div class="ims-track-section ims-animate-fade">
        <h4 class="track-section-title">
          <span class="section-title-icon">🛠️</span> Core Consulting Services &amp; Architecture
        </h4>
        <div class="ims-services-grid">
          ${(track.services || []).map(srv => `
            <div class="ims-service-card">
              <div class="service-card-name">${srv.name}</div>
              <p class="service-card-desc">${srv.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  if (activeTrackId === 'implementation') {
    return `
      <div class="ims-track-section ims-animate-fade">
        <h4 class="track-section-title">
          <span class="section-title-icon">⚙️</span> Turnkey Implementation Modules
        </h4>
        <div class="ims-services-grid">
          ${(track.services || []).map(srv => `
            <div class="ims-service-card">
              <div class="service-card-name">${srv.name}</div>
              <p class="service-card-desc">${srv.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  if (activeTrackId === 'auditing') {
    return `
      <div class="ims-track-section ims-animate-fade">
        <h4 class="track-section-title">
          <span class="section-title-icon">🛡️</span> Comprehensive Auditing Services
        </h4>
        <div class="ims-services-grid">
          ${(track.services || []).map(srv => `
            <div class="ims-service-card">
              <div class="service-card-name">${srv.name}</div>
              <p class="service-card-desc">${srv.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  return '';
}

/**
 * Render Process / How It Works Section
 */
function renderTrackProcessSection(track, activeTrackId) {
  const steps = track.workflow || track.process || [];
  if (steps.length === 0) return '';

  const processTitleMap = {
    training: 'Pedagogical Training & Certification Process',
    consulting: 'Strategic Consultation & Architecture Roadmap',
    implementation: 'Turnkey 6-Step Implementation Methodology',
    auditing: 'Surgical Audit Execution & Verification Process'
  };
  const title = processTitleMap[activeTrackId] || 'Process / How It Works';

  return `
    <div class="ims-track-section ims-animate-fade">
      <h4 class="track-section-title">
        <span class="section-title-icon">🔄</span> ${title}
      </h4>
      <div class="ims-process-flow">
        ${steps.map((st, idx) => `
          <div class="ims-process-node">
            <div class="process-node-step">${st.step || String(idx + 1).padStart(2, '0')}</div>
            <div class="process-node-content">
              <div class="process-node-title">${st.name || st.title}</div>
              <p class="process-node-desc">${st.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

/**
 * Render Sidebar Technical Items (Topics, Areas of Expertise, Compliance Areas)
 */
function renderTrackSidebarItems(track, stdData, activeTrackId) {
  if (activeTrackId === 'training') {
    return `
      <div class="ims-side-block ims-animate-fade">
        <h4 class="side-block-title">
          <span class="side-icon">📖</span> Technical Topics Covered
        </h4>
        <ul class="ims-topics-list">
          ${(track.topics || []).map(t => `
            <li>
              <span class="topic-bullet">›</span>
              <span class="topic-text">${t}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  }

  if (activeTrackId === 'consulting') {
    return `
      <div class="ims-side-block ims-animate-fade">
        <h4 class="side-block-title">
          <span class="side-icon">🎯</span> Areas of Advisory Expertise
        </h4>
        <ul class="ims-topics-list">
          ${(track.areasOfExpertise || []).map(t => `
            <li>
              <span class="topic-bullet">›</span>
              <span class="topic-text">${t}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  }

  if (activeTrackId === 'implementation') {
    return `
      <div class="ims-side-block ims-animate-fade">
        <h4 class="side-block-title">
          <span class="side-icon">📋</span> Technical Deliverables &amp; Records
        </h4>
        <ul class="ims-topics-list">
          ${(track.technologyProcess || []).map(t => `
            <li>
              <span class="topic-bullet">›</span>
              <span class="topic-text">${t}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  }

  if (activeTrackId === 'auditing') {
    return `
      <div class="ims-side-block ims-animate-fade">
        <h4 class="side-block-title">
          <span class="side-icon">🔍</span> Compliance &amp; Audit Focus Areas
        </h4>
        <ul class="ims-topics-list">
          ${(track.complianceAreas || []).map(t => `
            <li>
              <span class="topic-bullet">›</span>
              <span class="topic-text">${t}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  }

  return '';
}

/**
 * Render Complete Technical Specification Overview
 */
function renderOverviewTrackMarkup(stdData) {
  const stdId = stdData.id;

  return `
    <div class="ims-track-content-layout">
      <!-- Left Column: Scope, Specs, Workflow -->
      <div class="ims-track-main-col">
        <!-- Title & Intro -->
        <div class="ims-track-hero-box ims-animate-fade">
          <div class="ims-track-tagline">
            <span class="track-pill">📋 COMPLETE FRAMEWORK</span>
            <span class="track-std-code">${stdData.code}</span>
          </div>
          <h3 class="ims-track-heading">${stdData.name}</h3>
          <p class="ims-track-lead">${stdData.intro}</p>
          <p class="ims-track-desc">${stdData.overview}</p>
        </div>

        <!-- Scope of Applicability -->
        <div class="ims-track-section ims-animate-fade">
          <h4 class="track-section-title">
            <span class="section-title-icon">🌐</span> Scope of Applicability
          </h4>
          <div class="ims-scope-callout">
            <p>${stdData.scope}</p>
          </div>
        </div>

        <!-- Technical Specifications Table -->
        <div class="ims-track-section ims-animate-fade">
          <h4 class="track-section-title">
            <span class="section-title-icon">📊</span> Standard Specifications
          </h4>
          <div class="ims-specs-table">
            ${(stdData.specifications || []).map(spec => `
              <div class="ims-spec-row">
                <span class="spec-label">${spec.label}</span>
                <span class="spec-value">${spec.value}</span>
              </div>
            `).join('')}
          </div>
        </div>

        ${(stdData.pillars && stdData.pillars.length > 0) ? `
          <!-- Core Framework Pillars -->
          <div class="ims-track-section ims-animate-fade">
            <h4 class="track-section-title">
              <span class="section-title-icon">🏛️</span> Core Framework Pillars &amp; Standards (${stdData.pillars.length} Pillars)
            </h4>
            <div class="ims-pillars-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 0.9rem; margin-top: 0.75rem;">
              ${stdData.pillars.map((p, pIdx) => `
                <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.09); border-radius: 6px; padding: 1rem 1.15rem;">
                  <div style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--orange-primary); font-weight: 700; margin-bottom: 0.4rem; display: flex; align-items: center; gap: 0.45rem;">
                    <span style="color: var(--text-muted); font-size: 0.7rem;">#${String(pIdx + 1).padStart(2, '0')}</span>
                    ${p.title}
                  </div>
                  <div style="font-size: 0.84rem; color: var(--text-secondary); line-height: 1.5;">
                    ${p.text}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- 6-Stage Turnkey Workflow -->
        <div class="ims-track-section ims-animate-fade">
          <h4 class="track-section-title">
            <span class="section-title-icon">🔄</span> Turnkey 6-Stage Implementation Roadmap
          </h4>
          <div class="ims-process-flow">
            ${(stdData.workflow || []).map(wf => `
              <div class="ims-process-node">
                <div class="process-node-step">${wf.step}</div>
                <div class="process-node-content">
                  <div class="process-node-title">${wf.title}</div>
                  <p class="process-node-desc">${wf.desc}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- FAQs Accordion -->
        <div class="ims-track-section ims-animate-fade">
          <h4 class="track-section-title">
            <span class="section-title-icon">❓</span> Frequently Asked Questions
          </h4>
          <div class="ims-faq-stack">
            ${(stdData.faq || []).map((f, i) => `
              <details class="ims-faq-item" ${i === 0 ? 'open' : ''}>
                <summary class="faq-question">${f.q}</summary>
                <div class="faq-answer">${f.a}</div>
              </details>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Right Column: Target Industries, Benefits, Deliverables, CTA -->
      <div class="ims-track-side-col">
        <!-- Target Industries -->
        <div class="ims-side-block ims-animate-fade">
          <h4 class="side-block-title">
            <span class="side-icon">🏭</span> Target Industries &amp; Applications
          </h4>
          <ul class="ims-topics-list">
            ${(stdData.industries || []).map(ind => `
              <li>
                <span class="topic-bullet">›</span>
                <span class="topic-text">${ind}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- Deliverables -->
        <div class="ims-side-block ims-animate-fade">
          <h4 class="side-block-title">
            <span class="side-icon">📦</span> Complete Deliverables Package
          </h4>
          <ul class="ims-topics-list">
            ${(stdData.deliverables || []).map(deliv => `
              <li>
                <span class="benefit-check">✓</span>
                <span class="topic-text">${deliv}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- Key Benefits -->
        <div class="ims-side-block ims-benefits-block ims-animate-fade">
          <h4 class="side-block-title">
            <span class="side-icon">✨</span> Operational &amp; Commercial Benefits
          </h4>
          <ul class="ims-benefits-list">
            ${(stdData.benefits || []).map(b => `
              <li>
                <span class="benefit-check">✓</span>
                <span class="benefit-text">${b}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- Clear CTA -->
        <div class="ims-cta-box ims-animate-fade" data-track="overview">
          <div class="cta-box-badge">Accreditation Advisory</div>
          <h4 class="cta-box-title">Request Turnkey Proposal for ${stdData.code}</h4>
          <p class="cta-box-text">Receive a customized project plan with Gantt timeline, deliverables breakdown, and fee schedule.</p>
          <button type="button" class="ims-cta-primary-btn" 
                  data-service="${stdData.name} — Turnkey Proposal"
                  onclick="event.stopPropagation(); window.openQuoteModal('${stdData.name} — Turnkey Proposal')">
            <span>Get A Proposal</span>
            <span class="cta-arrow">→</span>
          </button>
          <a href="https://wa.me/919940669044?text=${encodeURIComponent(`Hello Reva Phoenix, I need a proposal for ${stdData.name}. Please connect.`)}" 
             target="_blank" rel="noopener noreferrer" class="ims-cta-secondary-btn" onclick="event.stopPropagation();">
            <span>💬 Instant WhatsApp Inquiry</span>
          </a>
        </div>
      </div>
    </div>
  `;
}

/**
 * Attach listeners inside drawer
 */
function attachDrawerListeners(drawer, stdData, activeTrackId) {
  if (!drawer) return;

  // Quote triggers inside drawer
  drawer.querySelectorAll('.btn-quote-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const service = btn.getAttribute('data-service') || stdData.name;
      openQuoteModal(service);
    });
  });
}

// Global attachments for inline handlers
if (typeof window !== "undefined") {
  window.openStandardDetail = openStandardDetail;
  window.closeStandardDetail = closeStandardDetail;
  window.expandStandardCard = expandStandardCard;
  window.collapseStandardCard = collapseStandardCard;
  window.toggleStandardCard = toggleStandardCard;
  window.switchStandardTrack = switchStandardTrack;
  window.handleStandardAction = function(standardId, actionType) {
    if (currentlyExpandedCardId === standardId) {
      switchStandardTrack(standardId, actionType);
    } else {
      expandStandardCard(standardId, actionType, true);
    }
  };
}
