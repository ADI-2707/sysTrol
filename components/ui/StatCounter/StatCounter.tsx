"use client";

import React, { useEffect, useState, useRef } from "react";
import styles from "./StatCounter.module.css";

export interface StatCounterProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  description?: string;
  duration?: number;
  theme?: "light" | "dark";
  className?: string;
}

export const StatCounter: React.FC<StatCounterProps> = ({
  value,
  label,
  suffix = "",
  prefix = "",
  description,
  duration = 1500,
  theme = "light",
  className = "",
}) => {
  const [count, setCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: number | null = null;

          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeProgress * value));

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(value);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    const currentElem = containerRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem);
      }
    };
  }, [value, duration]);

  return (
    <div
      ref={containerRef}
      className={`${styles.container} ${styles[theme]} ${className}`.trim()}
    >
      <div className={styles.numberRow}>
        {prefix && <span className={styles.prefix}>{prefix}</span>}
        <span className={styles.number}>{count}</span>
        {suffix && <span className={styles.suffix}>{suffix}</span>}
      </div>
      <div className={styles.label}>{label}</div>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
};
