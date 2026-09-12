import React from "react";
import { Factory, Code2, Globe2, ShieldCheck } from "lucide-react";
import { Container } from "@/components/layout/Container/Container";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import styles from "./WhyUs.module.css";

const valueProps = [
  {
    icon: <Factory size={22} />,
    title: "Rolling Mill Specialists",
    description:
      "Deep domain knowledge in continuous bar, rod, structural, and flat rolling processes. We understand roll kinematics, tension loops, and inter-stand pacing intimately.",
    tag: "Process Domain Mastery",
  },
  {
    icon: <Code2 size={22} />,
    title: "C# & Python Math Models",
    description:
      "High-performance C# services and deterministic Python mathematical models. Rigorous calculation matrices and grade-based calculation rules (pure physics, non-AI/ML) replacing brittle legacy code.",
    tag: "Deterministic Calculation Matrices",
  },
  {
    icon: <Globe2 size={22} />,
    title: "Domestic & Global Delivery",
    description:
      "Proven on-site and remote execution for Tier-1 integrated steel manufacturers in India, alongside international commissioning across the Middle East.",
    tag: "India & International Footprint",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Turnkey: Code to Sparing",
    description:
      "A unique combined capability: software engineers who calibrate mathematical models and trade OEM-grade mechanical spares with certified metallurgical integrity.",
    tag: "Hardware & Software Synergy",
  },
];

export const WhyUs: React.FC = () => {
  return (
    <section className={styles.section} aria-label="Why sysTROL">
      <Container size="wide">
        <Reveal>
          <SectionHeading
            eyebrow="Why Choose sysTROL"
            eyebrowVariant="accent"
            title="Engineering Credibility Built on Field Results"
            subtitle="We bridge the gap between heavy mechanical process realities and modern high-speed software automation."
            align="left"
          />
        </Reveal>

        <div className={styles.grid}>
          {valueProps.map((prop, idx) => (
            <Reveal key={idx} delay={idx * 80}>
              <div className={styles.card}>
                {idx === 0 && (
                  <svg
                    className={styles.rollMillWatermark}
                    viewBox="0 0 110 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      className={styles.rollingBelt}
                      d="M 18 8 L 92 8 A 10 10 0 0 1 92 28 L 18 28 A 10 10 0 0 1 18 8 Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <g className={styles.rollerLeft}>
                      <circle cx="18" cy="18" r="9" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="18" cy="18" r="2.5" fill="currentColor" />
                      <path d="M 18 9 v 18 M 9 18 h 18" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                    </g>
                    <g className={styles.rollerRight}>
                      <circle cx="92" cy="18" r="9" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="92" cy="18" r="2.5" fill="currentColor" />
                      <path d="M 92 9 v 18 M 83 18 h 18" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                    </g>
                  </svg>
                )}
                {idx === 1 && (
                  <svg
                    className={styles.mathCurveWatermark}
                    viewBox="0 0 160 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M10 90h140" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
                    <path d="M20 10v80" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
                    <path
                      className={styles.mathCurveLine}
                      d="M20 85 C 40 85, 60 75, 80 50 C 100 25, 120 15, 150 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <circle cx="80" cy="50" r="3" fill="currentColor" opacity="0.8" />
                    <circle cx="150" cy="15" r="3" fill="currentColor" opacity="0.8" />
                    <path d="M80 50v35" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
                  </svg>
                )}
                {idx === 3 && (
                  <svg
                    className={styles.blueprintWatermark}
                    viewBox="0 0 140 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <defs>
                      <pattern id="cadGrid" width="14" height="14" patternUnits="userSpaceOnUse">
                        <path d="M 14 0 L 0 0 0 14" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
                        <circle cx="14" cy="14" r="1" fill="currentColor" opacity="0.4" />
                      </pattern>
                    </defs>
                    <rect width="140" height="100" fill="url(#cadGrid)" />
                    <path d="M 20 20 L 50 20 L 50 50" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" />
                    <circle cx="50" cy="50" r="16" stroke="currentColor" strokeWidth="1.2" />
                    <circle cx="50" cy="50" r="4" fill="currentColor" opacity="0.6" />
                    <path d="M 50 30 L 50 70 M 30 50 L 70 50" stroke="currentColor" strokeWidth="0.8" strokeDasharray="1 2" />
                  </svg>
                )}
                <div
                  className={`${styles.iconBox} ${
                    idx === 0
                      ? styles.iconBoxRollingMill
                      : idx === 1
                      ? styles.iconBoxMathModels
                      : idx === 2
                      ? styles.iconBoxGlobal
                      : idx === 3
                      ? styles.iconBoxTurnkey
                      : ""
                  }`.trim()}
                >
                  {idx === 2 && (
                    <div className={styles.orbitalContainer}>
                      <svg
                        className={styles.orbitalPathSvg}
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M 6 48 C 6 20 26 8 50 14 C 60 18 56 36 42 46 C 28 54 12 54 6 48"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeDasharray="3 3"
                        />
                      </svg>
                      <svg
                        className={styles.flightPlane}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                      </svg>
                    </div>
                  )}
                  {idx === 3 ? (
                    <svg
                      className={styles.shieldLockSvg}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path
                        className={styles.shieldBody}
                        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                      />
                      <path
                        className={styles.shieldCheckmark}
                        d="M9 12l2 2 4-4"
                      />
                    </svg>
                  ) : (
                    prop.icon
                  )}
                </div>
                <h3 className={styles.title}>{prop.title}</h3>
                <p className={styles.description}>{prop.description}</p>
                <div className={styles.footerTag}>[ {prop.tag} ]</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};
