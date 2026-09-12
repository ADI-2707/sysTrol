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
                    className={styles.rollStandWatermark}
                    viewBox="0 0 120 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <rect x="20" y="8" width="80" height="104" rx="4" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                    <circle cx="60" cy="28" r="16" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="60" cy="53" r="8" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="60" cy="67" r="8" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="60" cy="92" r="16" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M10 60h100" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M60 4v112" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
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
                <div
                  className={`${styles.iconBox} ${
                    idx === 0
                      ? styles.iconBoxRollingMill
                      : idx === 1
                      ? styles.iconBoxMathModels
                      : ""
                  }`.trim()}
                >
                  {prop.icon}
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
