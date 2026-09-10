import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Cpu,
  ShieldCheck,
  Building2,
  Factory,
  Truck,
  Globe2,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/layout/Container/Container";
import { Button } from "@/components/ui/Button/Button";
import { Badge } from "@/components/ui/Badge/Badge";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import styles from "./Hero.module.css";

export const Hero: React.FC = () => {
  return (
    <section className={styles.hero} aria-label="Hero Section">
      <Container size="wide">
        <div className={styles.heroTop}>
          <Reveal>
            <div className={styles.textContent}>
              <div className={styles.badgeRow}>
                <Badge variant="default" size="sm" icon={<Building2 size={12} />}>
                  Bengaluru, India
                </Badge>
                <Badge variant="accent" size="sm" icon={<Cpu size={12} />}>
                  Level-2 Automation Specialists
                </Badge>
              </div>

              <h1 className={styles.headline}>
                Engineering Redefined.{" "}
                <span className={styles.highlightText}>
                  Supervisory Automation & Industrial Spares.
                </span>
              </h1>

              <p className={styles.subheadline}>
                High-performance Level-2 (L2) process automation software engineered in
                C# for steel rolling mills, coupled with verified international trading
                of critical mill machinery, sensors, and wear parts.
              </p>

              <div className={styles.ctaGroup}>
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight size={18} />}
                >
                  Get in Touch
                </Button>
                <Button
                  href="/projects"
                  variant="outline"
                  size="lg"
                >
                  View Case Studies
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className={styles.visualCard}>
              <div className={styles.visualHeader}>
                <div>
                  <span
                    style={{
                      fontSize: "var(--text-xs)",
                      color: "var(--color-ink-400)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    SUPERVISORY AUTOMATION & SOURCING
                  </span>
                  <h3
                    style={{
                      fontSize: "var(--text-lg)",
                      color: "var(--color-surface-0)",
                      fontWeight: "600",
                      marginTop: "2px",
                    }}
                  >
                    Continuous Mill Performance
                  </h3>
                </div>
                <Badge variant="accent" size="sm">
                  ONLINE / OPERATIONAL
                </Badge>
              </div>

              <div className={styles.visualImageWrap}>
                <Image
                  src="/images/hero-rolling-mill.jpg"
                  alt="Continuous steel rolling mill supervisory operation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className={styles.visualImage}
                  priority
                />
                <div className={styles.visualImageOverlay} />
                <div className={styles.visualImageTag}>
                  <span>SUPERVISORY MILL PACING & AUTOMATION</span>
                </div>
              </div>

              <div className={styles.statHighlightBox}>
                <span className={styles.statBigNumber}>50+</span>
                <div className={styles.statBigDetails}>
                  <span className={styles.statBigTitle}>Rolling Mill Installations</span>
                  <span className={styles.statBigSubtitle}>
                    Commissioned Level-2 automation suites & critical revamps across 3 continents.
                  </span>
                </div>
              </div>

              <ul className={styles.proofList}>
                <li className={styles.proofItem}>
                  <div className={styles.proofIcon}>
                    <CheckCircle2 size={15} />
                  </div>
                  <span>Deterministic C# mathematical pass scheduling & thermal pacing</span>
                </li>
                <li className={styles.proofItem}>
                  <div className={styles.proofIcon}>
                    <ShieldCheck size={15} />
                  </div>
                  <span>EN 10204 3.1 material test certified imported mill tooling & spares</span>
                </li>
                <li className={styles.proofItem}>
                  <div className={styles.proofIcon}>
                    <Factory size={15} />
                  </div>
                  <span>Full-lifecycle commissioning from FAT simulation to live hot metal roll</span>
                </li>
              </ul>

              <div className={styles.visualFooter}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <MapPin size={13} color="var(--color-accent-teal-500)" />
                  <span>Engineering Center: Bengaluru, India</span>
                </div>
                <span>ISO Standards Compliant</span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>

      <div className={styles.colorSection}>
        <Container size="wide">
          <div className={styles.cardsGrid}>
            <Reveal delay={100}>
              <div className={styles.metricCard}>
                <div className={styles.metricCardHeader}>
                  <div className={styles.metricCardIcon}>
                    <Cpu size={20} />
                  </div>
                  <span className={styles.metricCardTag}>Supervisory</span>
                </div>
                <div className={styles.metricCardValue}>Level-2</div>
                <div className={styles.metricCardLabel}>C# / .NET Automation Core</div>
                <p className={styles.metricCardDesc}>
                  High-performance supervisory services executing real-time pass schedules, roll force calculations, and mill pacing.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className={styles.metricCard}>
                <div className={styles.metricCardHeader}>
                  <div className={styles.metricCardIcon} style={{ backgroundColor: "rgba(31, 122, 77, 0.2)", color: "#34D399" }}>
                    <Factory size={20} />
                  </div>
                  <span className={styles.metricCardTag}>Process Domain</span>
                </div>
                <div className={styles.metricCardValue}>Steel Mills</div>
                <div className={styles.metricCardLabel}>Long, Flat & Pipe Products</div>
                <p className={styles.metricCardDesc}>
                  Specialized engineering for continuous bar mills, high-speed wire rod finishing blocks, and structural tube mills.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className={styles.metricCard}>
                <div className={styles.metricCardHeader}>
                  <div className={styles.metricCardIcon} style={{ backgroundColor: "rgba(14, 165, 165, 0.2)", color: "#0EA5A5" }}>
                    <Truck size={20} />
                  </div>
                  <span className={styles.metricCardTag}>Global Sourcing</span>
                </div>
                <div className={styles.metricCardValue}>OEM Sourcing</div>
                <div className={styles.metricCardLabel}>Europe & Japan Sparing</div>
                <p className={styles.metricCardDesc}>
                  Direct certified procurement of Tungsten Carbide rolls, high-response hydraulic AGC servos, and optical HMD sensors.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </div>
    </section>
  );
};
