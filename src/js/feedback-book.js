/**
 * Reva Phoenix — Customer Feedback Book Interactive Viewer (40 Pages)
 * Full flipbook / booklet reader with preloading, scrubber, and keyboard navigation.
 */

const TOTAL_PAGES = 40;
const PAGES = Array.from({ length: TOTAL_PAGES }, (_, i) => {
  const pageNum = String(i + 1).padStart(2, '0');
  return `assets/documents/customer-feedback-book/page-${pageNum}.jpg`;
});

let currentPage = 1;
let modalEl = null;
let pageImgEl = null;
let currentTextEl = null;
let scrubberEl = null;
let prevBtn = null;
let nextBtn = null;
let isPreloaded = false;

function preloadAdjacentPages(page) {
  const toPreload = [page - 1, page + 1, page + 2];
  toPreload.forEach(p => {
    if (p >= 1 && p <= TOTAL_PAGES) {
      const img = new Image();
      img.src = PAGES[p - 1];
    }
  });
}

export function updatePage(page, animate = true) {
  if (page < 1) page = 1;
  if (page > TOTAL_PAGES) page = TOTAL_PAGES;
  currentPage = page;

  if (pageImgEl) {
    if (animate) {
      pageImgEl.style.opacity = '0.4';
      pageImgEl.style.transform = 'scale(0.98)';
      setTimeout(() => {
        pageImgEl.src = PAGES[currentPage - 1];
        pageImgEl.style.opacity = '1';
        pageImgEl.style.transform = 'scale(1)';
      }, 100);
    } else {
      pageImgEl.src = PAGES[currentPage - 1];
      pageImgEl.style.opacity = '1';
      pageImgEl.style.transform = 'scale(1)';
    }
  }

  if (currentTextEl) {
    currentTextEl.textContent = currentPage;
  }

  if (scrubberEl) {
    scrubberEl.value = currentPage;
  }

  if (prevBtn) {
    prevBtn.disabled = currentPage === 1;
  }

  if (nextBtn) {
    nextBtn.disabled = currentPage === TOTAL_PAGES;
  }

  preloadAdjacentPages(currentPage);
}

export function nextPage() {
  if (currentPage < TOTAL_PAGES) {
    updatePage(currentPage + 1);
  }
}

export function prevPage() {
  if (currentPage > 1) {
    updatePage(currentPage - 1);
  }
}

export function openFeedbackBook(targetPage = 1) {
  if (!modalEl) {
    modalEl = document.getElementById('modal-feedback-book');
    pageImgEl = document.getElementById('fb-book-img');
    currentTextEl = document.getElementById('fb-book-current-page');
    scrubberEl = document.getElementById('fb-book-scrubber');
    prevBtn = document.getElementById('fb-book-prev-btn');
    nextBtn = document.getElementById('fb-book-next-btn');
  }

  if (!modalEl) return;

  // Preload first 5 pages on first open
  if (!isPreloaded) {
    for (let i = 0; i < Math.min(5, TOTAL_PAGES); i++) {
      const img = new Image();
      img.src = PAGES[i];
    }
    isPreloaded = true;
  }

  updatePage(targetPage, false);
  modalEl.classList.add('active');
  document.body.style.overflow = 'hidden';
}

export function closeFeedbackBook() {
  if (!modalEl) modalEl = document.getElementById('modal-feedback-book');
  if (modalEl) {
    modalEl.classList.remove('active');
  }
  document.body.style.overflow = '';
}

export function initFeedbackBook() {
  modalEl = document.getElementById('modal-feedback-book');
  pageImgEl = document.getElementById('fb-book-img');
  currentTextEl = document.getElementById('fb-book-current-page');
  scrubberEl = document.getElementById('fb-book-scrubber');
  prevBtn = document.getElementById('fb-book-prev-btn');
  nextBtn = document.getElementById('fb-book-next-btn');

  // Arrow buttons
  const arrowPrev = document.getElementById('fb-book-arrow-prev');
  const arrowNext = document.getElementById('fb-book-arrow-next');
  if (arrowPrev) arrowPrev.addEventListener('click', prevPage);
  if (arrowNext) arrowNext.addEventListener('click', nextPage);
  if (prevBtn) prevBtn.addEventListener('click', prevPage);
  if (nextBtn) nextBtn.addEventListener('click', nextPage);

  // First & Last buttons
  const firstBtn = document.getElementById('fb-book-first-btn');
  const lastBtn = document.getElementById('fb-book-last-btn');
  if (firstBtn) firstBtn.addEventListener('click', () => updatePage(1));
  if (lastBtn) lastBtn.addEventListener('click', () => updatePage(TOTAL_PAGES));

  // Scrubber slider
  if (scrubberEl) {
    scrubberEl.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      if (!isNaN(val)) updatePage(val, false);
    });
  }

  // Close triggers
  const closeBtns = document.querySelectorAll('.fb-book-close-trigger');
  closeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      closeFeedbackBook();
    });
  });

  // Fullscreen button
  const fsBtn = document.getElementById('fb-book-fs-btn');
  if (fsBtn) {
    fsBtn.addEventListener('click', () => {
      const container = modalEl.querySelector('.modal-container');
      if (!document.fullscreenElement) {
        if (container.requestFullscreen) container.requestFullscreen();
        fsBtn.innerHTML = '⛶ Minimize';
      } else {
        if (document.exitFullscreen) document.exitFullscreen();
        fsBtn.innerHTML = '⛶ Fullscreen';
      }
    });
  }

  // Keyboard controls
  document.addEventListener('keydown', (e) => {
    if (!modalEl || !modalEl.classList.contains('active')) return;
    if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
      e.preventDefault();
      nextPage();
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      prevPage();
    } else if (e.key === 'Escape') {
      closeFeedbackBook();
    } else if (e.key === 'Home') {
      e.preventDefault();
      updatePage(1);
    } else if (e.key === 'End') {
      e.preventDefault();
      updatePage(TOTAL_PAGES);
    }
  });

  // Global delegation for open book triggers
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.trigger-open-book, [data-open-book]');
    if (trigger) {
      e.preventDefault();
      const page = parseInt(trigger.getAttribute('data-book-page') || '1', 10);
      openFeedbackBook(page);
    }
  });
}

// Global expose
window.openFeedbackBook = openFeedbackBook;
window.closeFeedbackBook = closeFeedbackBook;
