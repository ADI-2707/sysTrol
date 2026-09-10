import React from "react";
import Link from "next/link";
import { Cpu, Truck, ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container/Container";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { Badge } from "@/components/ui/Badge/Badge";
import styles from "./WhatWeDo.module.css";

export const WhatWeDo: React.FC = () => {
  return (
    <section className={styles.section} aria-label="Business Lines">
      <Container size="wide">
        <SectionHeading
          eyebrow="Two Synergistic Divisions"
          eyebrowVariant="brand"
          title="Engineered Solutions for Steel & Process Plants"
          subtitle="Combining high-level software engineering with verified international hardware sourcing to eliminate plant downtime and maximize rolling mill yield."
          align="center"
        />

        <div className={styles.grid}>
          {/* Card 1: Automation Engineering & Consultancy */}
          <div className={`${styles.card} ${styles.cardGreen}`}>
            <div className={`${styles.iconWrapper} ${styles.iconGreen}`}>
              <Cpu size={28} />
            </div>

            <Badge variant="brand" size="sm" style={{ width: "fit-content", marginBottom: "8px" }}>
              Division 01 • Engineering & Consultancy
            </Badge>

            <h3 className={styles.cardTitle}>Level-2 Process Automation & Models</h3>

            <p className={styles.cardDescription}>
              High-performance supervisory Level-2 software engineered in C# specifically for
              continuous bar, wire rod, and strip mills. We implement real-time pass schedule
              calculations, billet tracking, thermal pacing, and seamless integration with
              Level-1 PLCs and enterprise MES.
            </p>

            <div className={styles.tagList}>
              <Badge variant="mono" size="sm">C# / .NET Core</Badge>
              <Badge variant="mono" size="sm">Level-2 Supervisory</Badge>
              <Badge variant="mono" size="sm">Roll Force Modeling</Badge>
              <Badge variant="mono" size="sm">OPC UA / Siemens / ABB</Badge>
              <Badge variant="mono" size="sm">Billet Pacing</Badge>
            </div>

            <div className={styles.cardFooter}>
              <span style={{ fontSize: "var(--text-xs)", color: "var(--color-ink-500)" }}>
                End-to-End: Audit → Model → Commission
              </span>
              <Link
                href="/services/automation-consultancy"
                className={styles.learnMoreLink}
              >
                <span>Explore Automation</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Card 2: Imported Machinery & Spares Trading */}
          <div className={`${styles.card} ${styles.cardTeal}`}>
            <div className={`${styles.iconWrapper} ${styles.iconTeal}`}>
              <Truck size={28} />
            </div>

            <Badge variant="accent" size="sm" style={{ width: "fit-content", marginBottom: "8px" }}>
              Division 02 • Global Procurement & Supply
            </Badge>

            <h3 className={styles.cardTitle}>Imported Machinery, Spares & Consumables</h3>

            <p className={styles.cardDescription}>
              Strategic global sourcing and supply of OEM-certified rolling mill components,
              Tungsten Carbide roll rings, high-response hydraulic AGC servo valves, optical
              hot metal detectors, and specialized consumables directly from leading manufacturers
              in Europe, North America, and Japan.
            </p>

            <div className={styles.tagList}>
              <Badge variant="mono" size="sm">TC Roll Rings</Badge>
              <Badge variant="mono" size="sm">Hydraulic Servo Valves</Badge>
              <Badge variant="mono" size="sm">Optical HMD Sensors</Badge>
              <Badge variant="mono" size="sm">EN 10204 3.1 Certified</Badge>
              <Badge variant="mono" size="sm">Consignment Inventory</Badge>
            </div>

            <div className={styles.cardFooter}>
              <span style={{ fontSize: "var(--text-xs)", color: "var(--color-ink-500)" }}>
                Verified OEM Direct Supply Lines
              </span>
              <Link
                href="/services/trading"
                className={styles.learnMoreLink}
                style={{ color: "var(--color-accent-teal-600)" }}
              >
                <span>Explore Trading</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
