import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Cpu,
  Layers,
  Activity,
  Gauge,
  ShieldCheck,
  Building2,
} from "lucide-react";
import { Container } from "@/components/layout/Container/Container";
import { Button } from "@/components/ui/Button/Button";
import { Badge } from "@/components/ui/Badge/Badge";
import styles from "./Hero.module.css";

export const Hero: React.FC = () => {
  return (
    <section className={styles.hero} aria-label="Hero Section">
      <div className={styles.backgroundPattern} aria-hidden="true" />
      <div className={styles.circuitGlow} aria-hidden="true" />
      <div className={styles.gearGlow} aria-hidden="true" />

      <Container size="wide">
        <div className={styles.contentWrapper}>
          {/* Left Text Content */}
          <div className={styles.textContent}>
            <div className={styles.badgeRow}>
              <Badge variant="dark" size="sm" icon={<Building2 size={12} />}>
                Bengaluru, India
              </Badge>
              <Badge variant="accent" size="sm" icon={<Cpu size={12} />}>
                Level-2 Automation Specialists
              </Badge>
            </div>

            <h1 className={styles.headline}>
              Engineering Redefined.{" "}
              <span className={styles.gradientText}>
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
                variant="outlineDark"
                size="lg"
              >
                View Case Studies
              </Button>
            </div>

            <div className={styles.heroMetrics}>
              <div className={styles.metricItem}>
                <span className={styles.metricValue}>Level-2</span>
                <span className={styles.metricLabel}>C# / .NET Automation Core</span>
              </div>
              <div className={styles.metricItem}>
                <span className={styles.metricValue}>Steel Mills</span>
                <span className={styles.metricLabel}>Long, Flat & Pipe Products</span>
              </div>
              <div className={styles.metricItem}>
                <span className={styles.metricValue}>OEM Sourcing</span>
                <span className={styles.metricLabel}>Europe & Japan Sparing</span>
              </div>
            </div>
          </div>

          {/* Right Architecture Topology Card */}
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
                  SYSTEM ARCHITECTURE
                </span>
                <h3
                  style={{
                    fontSize: "var(--text-lg)",
                    color: "var(--color-surface-0)",
                    fontWeight: "600",
                    marginTop: "2px",
                  }}
                >
                  Plant Automation Stack
                </h3>
              </div>
              <div className={styles.systemStatus}>
                <span className={styles.pulsingDot} />
                <span>ONLINE / ACTIVE</span>
              </div>
            </div>

            <div className={styles.diagramGrid}>
              {/* Layer 3 - ERP / MES */}
              <div className={styles.layerCard}>
                <div className={styles.layerInfo}>
                  <div className={styles.layerIcon}>
                    <Layers size={20} />
                  </div>
                  <div>
                    <div className={styles.layerTitle}>Enterprise Tier (MES / ERP)</div>
                    <div className={styles.layerDesc}>Production planning, heat orders & dispatch</div>
                  </div>
                </div>
                <span className={styles.layerTag}>Level-3</span>
              </div>

              {/* Layer 2 - sysTROL Core */}
              <div
                className={styles.layerCard}
                style={{
                  borderColor: "var(--color-accent-teal-500)",
                  backgroundColor: "rgba(14, 165, 165, 0.08)",
                }}
              >
                <div className={styles.layerInfo}>
                  <div
                    className={styles.layerIcon}
                    style={{
                      backgroundColor: "var(--color-brand-green-600)",
                      color: "#FFFFFF",
                    }}
                  >
                    <Activity size={20} />
                  </div>
                  <div>
                    <div
                      className={styles.layerTitle}
                      style={{ color: "var(--color-accent-teal-500)" }}
                    >
                      sysTROL L2 Supervisory Engine
                    </div>
                    <div className={styles.layerDesc}>
                      C# mathematical models, roll pass scheduling & pacing
                    </div>
                  </div>
                </div>
                <span
                  className={styles.layerTag}
                  style={{
                    backgroundColor: "var(--color-accent-teal-500)",
                    color: "#FFFFFF",
                  }}
                >
                  sysTROL L2
                </span>
              </div>

              {/* Layer 1 - PLCs */}
              <div className={styles.layerCard}>
                <div className={styles.layerInfo}>
                  <div className={styles.layerIcon}>
                    <Gauge size={20} />
                  </div>
                  <div>
                    <div className={styles.layerTitle}>Control & Drives Tier (PLC)</div>
                    <div className={styles.layerDesc}>Siemens S7, ABB, Rockwell drive regulators</div>
                  </div>
                </div>
                <span className={styles.layerTag}>Level-1</span>
              </div>

              {/* Physical Process Tier */}
              <div className={styles.layerCard}>
                <div className={styles.layerInfo}>
                  <div className={styles.layerIcon}>
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <div className={styles.layerTitle}>Mill Field Equipment & Spares</div>
                    <div className={styles.layerDesc}>TC rolls, hydraulic AGC servos, optical HMD sensors</div>
                  </div>
                </div>
                <span className={styles.layerTag}>Field Tier</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
