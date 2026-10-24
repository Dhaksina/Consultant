/**
 * Corporate Archival Gallery Modal & In-App Browser
 * Displays all 69 corporate event cohorts, training sessions & audit photos inside the application
 */

import { CORPORATE_GALLERY_EVENTS } from './corporate-gallery-data.js';
import { openLightbox } from './modals.js';
import { pauseScroll, resumeScroll } from './smooth-scroll.js';

let activeCategory = 'all';
let searchQuery = '';
let isEventsRendered = false;

export function initCorporateGalleryModal() {
  const modal = document.getElementById('modal-corporate-gallery');
  if (!modal) return;

  // Global document delegation for any explore button (handles static and dynamically rendered buttons)
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.gallery-explore-btn, #open-corporate-gallery-btn');
    if (btn) {
      e.preventDefault();
      openCorporateGalleryModal();
    }
  });

  // Close button
  const closeBtn = modal.querySelector('.modal-close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      closeCorporateGalleryModal();
    });
  }

  // Backdrop click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeCorporateGalleryModal();
    }
  });

  // Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeCorporateGalleryModal();
    }
  });

  // Category filter tabs
  modal.querySelectorAll('.cgm-filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      modal.querySelectorAll('.cgm-filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      activeCategory = this.getAttribute('data-cat') || 'all';
      renderGalleryEvents();
    });
  });

  // Live search input
  const searchInput = document.getElementById('cgm-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      renderGalleryEvents();
    });
  }

  // Single delegated click listener on events grid
  const grid = document.getElementById('cgm-events-grid');
  if (grid) {
    grid.addEventListener('click', (e) => {
      // Check if mini thumbnail clicked
      const mini = e.target.closest('.cgm-mini-thumb');
      if (mini) {
        e.stopPropagation();
        const fullSrc = mini.getAttribute('data-full-src');
        const title = mini.getAttribute('data-title');
        openLightbox(fullSrc, title);
        return;
      }

      // Check if event card clicked
      const card = e.target.closest('.cgm-event-card');
      if (card) {
        const id = parseInt(card.getAttribute('data-event-id'), 10);
        const ev = CORPORATE_GALLERY_EVENTS.find(x => x.id === id);
        if (ev) {
          openLightbox(ev.thumbnail, ev.title);
        }
      }
    });
  }

  // Initial render
  renderGalleryEvents();
}

export function openCorporateGalleryModal() {
  const modal = document.getElementById('modal-corporate-gallery');
  if (!modal) {
    console.error('modal-corporate-gallery element not found in DOM');
    return;
  }

  if (!isEventsRendered) {
    renderGalleryEvents();
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  pauseScroll();
}

export function closeCorporateGalleryModal() {
  const modal = document.getElementById('modal-corporate-gallery');
  if (!modal) return;

  modal.classList.remove('active');
  document.body.style.overflow = '';
  resumeScroll();
}

function renderGalleryEvents() {
  const grid = document.getElementById('cgm-events-grid');
  const countEl = document.getElementById('cgm-results-count');
  if (!grid) return;

  const filtered = CORPORATE_GALLERY_EVENTS.filter(event => {
    // Category match
    const catMatch = activeCategory === 'all' || event.category === activeCategory;
    if (!catMatch) return false;

    // Search query match
    if (searchQuery) {
      const haystack = (event.title + ' ' + event.category + ' ' + event.year).toLowerCase();
      if (!haystack.includes(searchQuery)) return false;
    }
    return true;
  });

  if (countEl) {
    countEl.textContent = `Showing ${filtered.length} Events`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="cgm-empty-state">
        <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🔍</div>
        <div style="font-weight: 700; font-size: 1.1rem; color: #fff;">No events match your search</div>
        <div style="color: #94a3b8; font-size: 0.85rem; margin-top: 0.25rem;">Try a different keyword or reset category filter.</div>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(ev => {
    const photoCount = ev.images ? ev.images.length : 1;
    const catBadgeClass = ev.category === 'Global Programs' ? 'blue' : (ev.category === 'Auditing & Compliance' ? 'green' : 'orange');

    return `
      <div class="cgm-event-card" data-event-id="${ev.id}">
        <div class="cgm-thumb-wrap">
          <img src="${ev.thumbnail}" alt="${ev.title}" class="cgm-thumb-img" loading="lazy" />
          <div class="cgm-thumb-overlay">
            <span class="cgm-zoom-icon">🔍 View High-Res</span>
          </div>
          <div class="cgm-photo-counter">📸 ${photoCount} Photo${photoCount > 1 ? 's' : ''}</div>
          <div class="cgm-year-badge">${ev.year}</div>
        </div>
        <div class="cgm-card-body">
          <div class="cgm-card-cat tech-badge ${catBadgeClass}">${ev.category}</div>
          <div class="cgm-card-title">${ev.title}</div>
          ${ev.images && ev.images.length > 1 ? `
            <div class="cgm-mini-gallery">
              ${ev.images.slice(0, 4).map((img, i) => `
                <div class="cgm-mini-thumb" data-full-src="${img}" data-title="${ev.title} (Photo ${i + 1})">
                  <img src="${img}" alt="Thumb" loading="lazy" />
                </div>
              `).join('')}
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');

  isEventsRendered = true;
}
