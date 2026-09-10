import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar/Navbar";
import { Footer } from "@/components/layout/Footer/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact/FloatingContact";
import { Container } from "@/components/layout/Container/Container";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { Badge } from "@/components/ui/Badge/Badge";
import { Button } from "@/components/ui/Button/Button";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { CTASection } from "@/components/sections/CTASection/CTASection";
import { servicesData } from "@/content/services";
import { ArrowRight, Cpu, Truck } from "lucide-react";
import styles from "./Services.module.css";

export const metadata: Metadata = {
  title: "Engineering Services & Trading | sysTROL",
  description:
    "Explore sysTROL's two divisions: Level-2 Process Automation software for steel rolling mills and Global Machinery Spares Trading.",
};

export default function ServicesPage() {
  const [automation, trading] = servicesData;

  return (
    <>
      <Navbar />
      <main>
        <section className={styles.hero}>
          <Container size="wide">
            <Reveal>
              <SectionHeading
                eyebrow="Specialized Capabilities"
                eyebrowVariant="dark"
                theme="dark"
                title="End-to-End Industrial Process Solutions"
                subtitle="From custom Level-2 supervisory algorithms and thermal pacing models to the urgent air-freight of certified European servo valves, we support the operational heartbeat of steel manufacturing plants."
                align="left"
              />
            </Reveal>
          </Container>
        </section>

        <section className={styles.overviewSection}>
          <Container size="wide">
            <Reveal delay={100}>
              <div className={styles.divisionCard}>
                <div className={styles.divisionLeft}>
                  <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "var(--radius-md)",
                        backgroundColor: "var(--color-brand-green-100)",
                        color: "var(--color-brand-green-700)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Cpu size={22} />
                    </div>
                    <Badge variant="brand" size="sm">
                      Division 01 • Core Engineering
                    </Badge>
                  </div>

                  <h2 className={styles.divisionTitle}>{automation.title}</h2>
                  <p className={styles.divisionText}>{automation.fullOverview}</p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "8px" }}>
                    {automation.domainTags.slice(0, 5).map((tag, idx) => (
                      <Badge key={idx} variant="mono" size="sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div style={{ marginTop: "16px" }}>
                    <Button
                      href={`/services/${automation.slug}`}
                      variant="primary"
                      size="md"
                      rightIcon={<ArrowRight size={16} />}
                    >
                      View Automation Scope & Stepper
                    </Button>
                  </div>
                </div>

                <div className={styles.capabilitiesGrid}>
                  <h4 style={{ fontSize: "var(--text-sm)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--color-ink-900)" }}>
                    Key Engineering Capabilities
                  </h4>
                  {automation.capabilities.map((cap, idx) => (
                    <div key={idx} className={styles.capabilityItem}>
                      <div className={styles.capBullet} />
                      <div>
                        <div className={styles.capTitle}>{cap.title}</div>
                        <div className={styles.capDesc}>{cap.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className={styles.divisionCard}>
                <div className={styles.divisionLeft}>
                  <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "var(--radius-md)",
                        backgroundColor: "var(--color-accent-teal-100)",
                        color: "var(--color-accent-teal-600)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Truck size={22} />
                    </div>
                    <Badge variant="accent" size="sm">
                      Division 02 • Global Sourcing
                    </Badge>
                  </div>

                  <h2 className={styles.divisionTitle}>{trading.title}</h2>
                  <p className={styles.divisionText}>{trading.fullOverview}</p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "8px" }}>
                    {trading.domainTags.slice(0, 5).map((tag, idx) => (
                      <Badge key={idx} variant="mono" size="sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div style={{ marginTop: "16px" }}>
                    <Button
                      href={`/services/${trading.slug}`}
                      variant="teal"
                      size="md"
                      rightIcon={<ArrowRight size={16} />}
                    >
                      View Sourcing Categories & Origins
                    </Button>
                  </div>
                </div>

                <div className={styles.capabilitiesGrid}>
                  <h4 style={{ fontSize: "var(--text-sm)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--color-ink-900)" }}>
                    Sourcing & Inspection Guarantees
                  </h4>
                  {trading.capabilities.map((cap, idx) => (
                    <div key={idx} className={styles.capabilityItem}>
                      <div className={styles.capBullet} style={{ backgroundColor: "var(--color-accent-teal-500)" }} />
                      <div>
                        <div className={styles.capTitle}>{cap.title}</div>
                        <div className={styles.capDesc}>{cap.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        <CTASection />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
