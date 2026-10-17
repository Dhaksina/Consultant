import { scrollToTarget } from './smooth-scroll.js';

/**
 * Navigation, Sticky Header, Scroll Spy & Mobile Drawer
 */

export function initNavigation() {
  const header = document.querySelector(".site-header");
  const mobileBtn = document.getElementById("mobile-menu-toggle");
  const mobileDrawer = document.getElementById("mobile-nav-drawer");
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");
  const sections = document.querySelectorAll("section[id]");

  // 1. Sticky Header Scroll Effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }
  }, { passive: true });

  // 2. Mobile Drawer Toggle
  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener("click", () => {
      const isOpen = mobileDrawer.classList.contains("open");
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    // Close mobile menu on clicking any navigation link
    mobileDrawer.querySelectorAll(".mobile-nav-link, .btn").forEach(link => {
      link.addEventListener("click", () => {
        closeMobileMenu();
      });
    });
  }

  function openMobileMenu() {
    mobileBtn?.classList.add("active");
    mobileDrawer?.classList.add("open");
    document.body.style.overflow = "hidden";

    // GSAP stagger on mobile links if available
    if (typeof gsap !== "undefined") {
      gsap.fromTo(
        ".mobile-nav-link",
        { opacity: 0, x: -25 },
        { opacity: 1, x: 0, stagger: 0.08, duration: 0.5, ease: "power2.out" }
      );
    }
  }

  function closeMobileMenu() {
    mobileBtn?.classList.remove("active");
    mobileDrawer?.classList.remove("open");
    document.body.style.overflow = "";
  }

  // 3. Scroll Spy for Active Navigation Links
  window.addEventListener("scroll", () => {
    let currentSectionId = "";
    const scrollPos = window.scrollY + 180;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSectionId = section.getAttribute("id");
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        const href = link.getAttribute("href");
        if (href === `#${currentSectionId}` || href === `/#${currentSectionId}`) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  }, { passive: true });

  // 4. Smooth Anchor Scrolling via Lenis
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href === "#") return;

      const targetEl = document.querySelector(href);
      if (targetEl) {
        e.preventDefault();
        scrollToTarget(targetEl, -84, 1.4);
        history.pushState(null, null, href);

        // If this link targets a specific API sub-tab, activate it
        if (this.hasAttribute("data-api-tab")) {
          const tabId = this.getAttribute("data-api-tab");
          const tabBtn = document.querySelector(`.api-tab-btn[data-target-tab="${tabId}"]`);
          if (tabBtn) {
            tabBtn.click();
          }
        }

        // If this link targets a specific Training sub-tab, activate it
        if (this.hasAttribute("data-training-tab")) {
          const tabId = this.getAttribute("data-training-tab");
          const tabBtn = document.querySelector(`.training-tab-btn[data-target-training-tab="${tabId}"]`);
          if (tabBtn) {
            tabBtn.click();
          }
        }
      }
    });
  });
}
