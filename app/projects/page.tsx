"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar/Navbar";
import { Footer } from "@/components/layout/Footer/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact/FloatingContact";
import { Container } from "@/components/layout/Container/Container";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { Badge } from "@/components/ui/Badge/Badge";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { CTASection } from "@/components/sections/CTASection/CTASection";
import { projectsData } from "@/content/projects";
import { ArrowRight, Info, Filter } from "lucide-react";
import styles from "./Projects.module.css";

const sectors = [
  "All",
  "Steel Rolling Mills",
  "Integrated Steel Plants",
  "Process Industries",
  "International Plants",
];

const serviceTypes = ["All", "Automation & Consultancy", "Trading & Spares"];

export default function ProjectsPage() {
  const [selectedSector, setSelectedSector] = useState("All");
  const [selectedService, setSelectedService] = useState("All");

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchSector =
        selectedSector === "All" || project.industry === selectedSector;
      const matchService =
        selectedService === "All" || project.serviceType === selectedService;
      return matchSector && matchService;
    });
  }, [selectedSector, selectedService]);

  return (
    <>
      <Navbar />
      <main>
        <section className={styles.heroHeader}>
          <Container size="wide">
            <Reveal>
              <SectionHeading
                eyebrow="Case Studies & Technical Deliverables"
                eyebrowVariant="dark"
                theme="dark"
                title="Industrial Automation & Mill Modernization Track Record"
                subtitle="Browse our representative project portfolio across bar mills, wire rod blocks, reheating furnaces, and precision spares turnarounds."
                align="left"
              />
            </Reveal>
          </Container>
        </section>

        <section className={styles.filterSection}>
          <Container size="wide">
            <Reveal>
              <div className={styles.disclaimerBanner}>
                <Info size={16} style={{ flexShrink: 0 }} />
                <span>
                  <strong>Confidentiality Notice:</strong> Project details reflect representative
                  engineering scopes and anonymized client parameters in accordance with corporate
                  NDA agreements. Full site-specific engineering schematics are available upon NDA
                  execution.
                </span>
              </div>

              <div className={styles.filterBar}>
                <div className={styles.filterGroup}>
                  <span className={styles.filterLabel}>Industry:</span>
                  {sectors.map((sec) => (
                    <button
                      key={sec}
                      type="button"
                      className={`${styles.filterButton} ${
                        selectedSector === sec ? styles.filterButtonActive : ""
                      }`}
                      onClick={() => setSelectedSector(sec)}
                    >
                      {sec}
                    </button>
                  ))}
                </div>

                <div className={styles.filterGroup}>
                  <span className={styles.filterLabel}>Division:</span>
                  {serviceTypes.map((serv) => (
                    <button
                      key={serv}
                      type="button"
                      className={`${styles.filterButton} ${
                        selectedService === serv ? styles.filterButtonActive : ""
                      }`}
                      onClick={() => setSelectedService(serv)}
                    >
                      {serv}
                    </button>
                  ))}
                </div>
              </div>
            </Reveal>

            {filteredProjects.length === 0 ? (
              <div className={styles.emptyState}>
                <Filter size={32} color="var(--color-ink-400)" style={{ margin: "0 auto 12px" }} />
                <h3 style={{ fontSize: "var(--text-lg)", color: "var(--color-ink-900)", fontWeight: 600 }}>
                  No case studies match this filter combination
                </h3>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--color-ink-500)", marginTop: "4px" }}>
                  Try resetting the filter options above to view all projects.
                </p>
                <button
                  type="button"
                  className={styles.filterButton}
                  style={{ marginTop: "16px" }}
                  onClick={() => {
                    setSelectedSector("All");
                    setSelectedService("All");
                  }}
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className={styles.projectsGrid}>
                {filteredProjects.map((project, idx) => (
                  <Reveal key={project.id} delay={idx * 60}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "var(--color-surface-0)",
                        border: "1px solid var(--color-border)",
                        borderRadius: "var(--radius-md)",
                        padding: "var(--space-6)",
                        boxShadow: "var(--shadow-sm)",
                        height: "100%",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginBottom: "12px",
                        }}
                      >
                        <Badge variant="accent" size="sm">
                          {project.industry}
                        </Badge>
                        <span
                          style={{
                            fontSize: "var(--text-xs)",
                            color: "var(--color-ink-500)",
                            fontFamily: "var(--font-mono)",
                          }}
                        >
                          {project.location} • {project.year}
                        </span>
                      </div>

                      <h3
                        style={{
                          fontSize: "var(--text-lg)",
                          fontWeight: 700,
                          color: "var(--color-ink-900)",
                          lineHeight: 1.3,
                          marginBottom: "10px",
                        }}
                      >
                        <Link href={`/projects/${project.slug}`}>
                          {project.title}
                        </Link>
                      </h3>

                      <p
                        style={{
                          fontSize: "var(--text-sm)",
                          color: "var(--color-ink-700)",
                          lineHeight: 1.5,
                          marginBottom: "16px",
                          flex: 1,
                        }}
                      >
                        {project.shortBlurb}
                      </p>

                      {project.metrics && project.metrics.length > 0 && (
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(2, 1fr)",
                            gap: "8px",
                            padding: "10px",
                            backgroundColor: "var(--color-surface-50)",
                            borderRadius: "var(--radius-sm)",
                            marginBottom: "16px",
                          }}
                        >
                          {project.metrics.slice(0, 2).map((m, mIdx) => (
                            <div key={mIdx}>
                              <div
                                style={{
                                  fontFamily: "var(--font-heading)",
                                  fontSize: "var(--text-base)",
                                  fontWeight: 700,
                                  color: "var(--color-brand-green-600)",
                                }}
                              >
                                {m.value}
                              </div>
                              <div style={{ fontSize: "11px", color: "var(--color-ink-500)" }}>
                                {m.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
                        {project.technologies.slice(0, 3).map((t, tIdx) => (
                          <Badge key={tIdx} variant="mono" size="sm">
                            {t}
                          </Badge>
                        ))}
                      </div>

                      <div
                        style={{
                          paddingTop: "14px",
                          borderTop: "1px solid var(--color-border)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "11px",
                            color: "var(--color-ink-500)",
                            fontFamily: "var(--font-mono)",
                          }}
                        >
                          {project.serviceType}
                        </span>
                        <Link
                          href={`/projects/${project.slug}`}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "4px",
                            fontSize: "var(--text-xs)",
                            fontWeight: 600,
                            color: "var(--color-brand-green-600)",
                            textDecoration: "none",
                          }}
                        >
                          <span>View Details</span>
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            )}
          </Container>
        </section>

        <CTASection />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
