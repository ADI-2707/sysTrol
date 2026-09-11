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
                <div className={styles.iconBox}>{prop.icon}</div>
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
