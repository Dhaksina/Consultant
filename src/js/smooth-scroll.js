/**
 * Smooth Inertia Scrolling System (Lenis + GSAP ScrollTrigger Integration)
 * Delivers buttery, cinematic scrolling with precision trigger synchronization
 */

let lenisInstance = null;

export function initSmoothScroll() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    console.log("Reduced motion detected; smooth inertia scroll disabled.");
    return null;
  }

  if (typeof Lenis === "undefined") {
    console.warn("Lenis library not loaded; falling back to native browser scrolling.");
    return null;
  }

  try {
    lenisInstance = new Lenis({
      duration: 1.35,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easing for silky cinematic inertia
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.6,
      infinite: false
    });

    // Synchronize Lenis with GSAP ScrollTrigger
    if (typeof ScrollTrigger !== "undefined") {
      lenisInstance.on("scroll", () => {
        ScrollTrigger.update();
      });
    }

    // Connect Lenis animation frame to GSAP ticker for synchronized 60-120fps rendering
    if (typeof gsap !== "undefined") {
      gsap.ticker.add((time) => {
        lenisInstance.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    } else {
      function raf(time) {
        lenisInstance.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }

    console.log("Lenis Smooth Scroll engine initialized successfully.");
    return lenisInstance;
  } catch (err) {
    console.error("Error initializing Lenis:", err);
    return null;
  }
}

export function getLenis() {
  return lenisInstance;
}

export function scrollToTarget(target, offset = -84, duration = 1.3) {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, {
      offset: offset,
      duration: duration,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });
  } else {
    const el = typeof target === "string" ? document.querySelector(target) : target;
    if (el) {
      const topPos = el.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({
        top: topPos,
        behavior: "smooth"
      });
    }
  }
}

export function pauseScroll() {
  if (lenisInstance) {
    lenisInstance.stop();
  }
}

export function resumeScroll() {
  if (lenisInstance) {
    lenisInstance.start();
  }
}
