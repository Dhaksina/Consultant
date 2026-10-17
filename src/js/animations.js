/**
 * GSAP Typography & ScrollTrigger Motion System
 * Precision industrial motion with reduced-motion accessibility
 */

export function initAnimations() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Verify GSAP and ScrollTrigger are available
  if (typeof gsap === "undefined") {
    console.warn("GSAP library not detected; falling back to CSS transitions.");
    return;
  }

  if (typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  if (prefersReducedMotion) {
    // Show all elements directly without animations for reduced motion
    gsap.set(".reveal-text, .reveal-up, .hero-content, .service-item-row", {
      opacity: 1,
      y: 0,
      clearProps: "all"
    });
    return;
  }

  // 1. Hero Entrance Sequence
  const heroTl = gsap.timeline({ delay: 0.2 });

  heroTl.from(".hero-tech-kicker", {
    opacity: 0,
    y: -20,
    duration: 0.75,
    ease: "power3.out"
  })
  .from(".hero-title-line", {
    opacity: 0,
    y: 45,
    stagger: 0.18,
    duration: 1,
    ease: "power4.out"
  }, "-=0.4")
  .from(".hero-tagline-split span", {
    opacity: 0,
    y: 25,
    stagger: 0.1,
    duration: 0.8,
    ease: "power3.out"
  }, "-=0.5")
  .from(".hero-desc", {
    opacity: 0,
    y: 20,
    duration: 0.75,
    ease: "power3.out"
  }, "-=0.5")
  .from(".hero-cta-group .btn", {
    opacity: 0,
    y: 20,
    stagger: 0.15,
    duration: 0.7,
    ease: "back.out(1.5)"
  }, "-=0.4")
  .from(".hero-showcase-wrapper", {
    opacity: 0,
    scale: 0.94,
    y: 35,
    duration: 1.1,
    ease: "power3.out"
  }, "-=1.2")
  .from(".hud-badge", {
    opacity: 0,
    y: 15,
    scale: 0.92,
    stagger: 0.14,
    duration: 0.6,
    ease: "back.out(1.4)"
  }, "-=0.5");

  // 2. Section Headings Reveal
  if (typeof ScrollTrigger !== "undefined") {
    gsap.utils.toArray(".reveal-heading").forEach((heading) => {
      gsap.from(heading, {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heading,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });
    });

    // 4. About Section Image & Text Stagger
    gsap.from(".about-portrait-card", {
      opacity: 0,
      scale: 0.95,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 75%"
      }
    });

    gsap.from(".about-text-content > *", {
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-text-content",
        start: "top 80%"
      }
    });

    // 5. Statistics Counter Animations
    initStatsCounters();

    // 6. Service Rows Progressive Stagger
    gsap.utils.toArray(".service-item-row").forEach((row, i) => {
      gsap.from(row, {
        opacity: 0,
        y: 30,
        duration: 0.7,
        delay: i * 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: row,
          start: "top 90%"
        }
      });
    });

    // 7. Industry Blocks Parallax & Reveal
    gsap.utils.toArray(".industry-block").forEach((block) => {
      gsap.from(block, {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: block,
          start: "top 80%"
        }
      });
    });

    // 8. Contact Section Dramatic Text Reveal
    gsap.from(".contact-headline", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 75%"
      }
    });
  }
}

/**
 * GSAP Animated Numerical Counters
 */
function initStatsCounters() {
  const counterElements = document.querySelectorAll(".stat-counter");
  if (!counterElements.length) return;

  counterElements.forEach((el) => {
    const targetVal = parseInt(el.getAttribute("data-target"), 10) || 0;

    if (typeof ScrollTrigger !== "undefined") {
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.fromTo(
            el,
            { innerText: 0 },
            {
              innerText: targetVal,
              duration: 2.2,
              ease: "power2.out",
              snap: { innerText: 1 },
              onUpdate: function () {
                el.innerText = Math.floor(el.innerText);
              }
            }
          );
        }
      });
    } else {
      el.innerText = targetVal;
    }
  });
}
