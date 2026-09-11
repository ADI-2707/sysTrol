"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useAnimate } from "motion/react";
import styles from "./LogoIntro.module.css";

const SESSION_KEY = "systrol-intro-played";

export const LogoIntro: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scope, animate] = useAnimate();
  const stageRef = useRef<HTMLDivElement>(null);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    // 1. SSR & session check
    if (typeof window === "undefined") return;

    try {
      if (sessionStorage.getItem(SESSION_KEY) === "true") {
        return;
      }
    } catch {
      // In case storage is blocked
    }

    // 2. Accessibility: Reduced motion check
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      try {
        sessionStorage.setItem(SESSION_KEY, "true");
      } catch {}
      return;
    }

    // Lock scrolling during intro
    document.body.style.overflow = "hidden";
    setIsVisible(true);

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!isVisible || hasStartedRef.current) return;
    hasStartedRef.current = true;

    let isMounted = true;

    const runSequence = async () => {
      // Wait for fonts & layout stabilization
      await new Promise((resolve) => requestAnimationFrame(resolve));
      if (!isMounted || !scope.current || !stageRef.current) return;

      const stageEl = stageRef.current;
      const stageRect = stageEl.getBoundingClientRect();
      const stageWidth = stageRect.width || 320;
      const initialOffset = Math.max(window.innerWidth * 0.6, 350);

      // Elements
      const leftEl = stageEl.querySelector(`.${styles.leftIcon}`);
      const rightEl = stageEl.querySelector(`.${styles.rightIcon}`);
      const markWrapper = stageEl.querySelector(`.${styles.markWrapper}`);
      const wordmarkEl = stageEl.querySelector(`.${styles.wordmark}`);
      const fullLogoEl = stageEl.querySelector(`.${styles.fullLogo}`);

      if (!leftEl || !rightEl || !markWrapper || !wordmarkEl || !fullLogoEl) {
        return;
      }

      // 1. Slide in from off-screen left and right to touch with 0 gap / 0 overlap
      await Promise.all([
        animate(
          leftEl,
          { x: [-initialOffset, 0] },
          { duration: 0.85, ease: [0.22, 1, 0.36, 1] }
        ),
        animate(
          rightEl,
          { x: [initialOffset, 0] },
          { duration: 0.85, ease: [0.22, 1, 0.36, 1] }
        ),
      ]);

      if (!isMounted) return;

      // 2. Rotate circular joined mark 360 degrees as a single disc
      await animate(
        markWrapper,
        { rotate: [0, 360] },
        { duration: 1.0, ease: [0.4, 0, 0.2, 1] }
      );

      if (!isMounted) return;

      // 3. Ease apart symmetrically by (84.5 / 400) * stageWidth, revealing center wordmark
      const splitDistance = (84.5 / 400) * stageWidth;
      await Promise.all([
        animate(
          leftEl,
          { x: -splitDistance },
          { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        ),
        animate(
          rightEl,
          { x: splitDistance },
          { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        ),
        animate(
          wordmarkEl,
          { opacity: [0, 1], scale: [0.94, 1] },
          { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        ),
      ]);

      if (!isMounted) return;

      // 4. Brief hold for brand legibility
      await new Promise((resolve) => setTimeout(resolve, 450));
      if (!isMounted) return;

      // 5. Crossfade 3-part assembly into the official logo
      await Promise.all([
        animate(markWrapper, { opacity: 0 }, { duration: 0.28 }),
        animate(wordmarkEl, { opacity: 0 }, { duration: 0.28 }),
        animate(fullLogoEl, { opacity: 1 }, { duration: 0.28 }),
      ]);

      if (!isMounted) return;

      // 6. Measure live navbar logo target
      const target = document.getElementById("site-logo-target");
      const targetEl = target?.querySelector("img") || target;

      let deltaX = 0;
      let deltaY = 0;
      let scale = 0.5;

      if (targetEl) {
        const targetRect = targetEl.getBoundingClientRect();
        const currentStageRect = stageEl.getBoundingClientRect();

        const targetCenterX = targetRect.left + targetRect.width / 2;
        const targetCenterY = targetRect.top + targetRect.height / 2;
        const stageCenterX = currentStageRect.left + currentStageRect.width / 2;
        const stageCenterY = currentStageRect.top + currentStageRect.height / 2;

        deltaX = targetCenterX - stageCenterX;
        deltaY = targetCenterY - stageCenterY;
        scale = targetRect.height / currentStageRect.height;
      }

      // 7. Glide and scale logo to the navbar while fading out the overlay
      await Promise.all([
        animate(
          fullLogoEl,
          { x: deltaX, y: deltaY, scale },
          { duration: 0.85, ease: [0.22, 1, 0.36, 1] }
        ),
        animate(
          scope.current,
          { opacity: 0 },
          { duration: 0.85, ease: [0.22, 1, 0.36, 1] }
        ),
      ]);

      // 8. Completed: set session flag, restore overflow, unmount
      try {
        sessionStorage.setItem(SESSION_KEY, "true");
      } catch {}
      document.body.style.overflow = "";
      if (isMounted) {
        setIsVisible(false);
      }
    };

    runSequence();

    return () => {
      isMounted = false;
    };
  }, [isVisible, animate, scope]);

  if (!isVisible) {
    return null;
  }

  return (
    <div ref={scope} className={styles.overlay} aria-hidden="true">
      <div ref={stageRef} className={styles.stage}>
        {/* Joined circular mark group */}
        <div className={styles.markWrapper}>
          <div className={styles.leftIcon}>
            <Image
              src="/images/intro/systrol-icon-left.png"
              alt=""
              width={104}
              height={400}
              priority
              className={styles.partImage}
            />
          </div>
          <div className={styles.rightIcon}>
            <Image
              src="/images/intro/systrol-icon-right.png"
              alt=""
              width={127}
              height={400}
              priority
              className={styles.partImage}
            />
          </div>
        </div>

        {/* Wordmark revealed in the gap */}
        <div className={styles.wordmark}>
          <Image
            src="/images/intro/systrol-wordmark-center.png"
            alt="sysTROL Engineering Redefined"
            width={169}
            height={210}
            priority
            className={styles.wordmarkImage}
          />
        </div>

        {/* Real logo for pixel-exact handoff and glide */}
        <div className={styles.fullLogo}>
          <Image
            src="/images/systrol-logo.jpeg"
            alt="sysTROL Engineering & Consultancy"
            width={400}
            height={400}
            priority
            className={styles.fullLogoImage}
          />
        </div>
      </div>
    </div>
  );
};
