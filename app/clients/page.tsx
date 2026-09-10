import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar/Navbar";
import { Footer } from "@/components/layout/Footer/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact/FloatingContact";
import { Container } from "@/components/layout/Container/Container";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { Badge } from "@/components/ui/Badge/Badge";
import { CTASection } from "@/components/sections/CTASection/CTASection";
import { clientsData } from "@/content/clients";
import { Building2, Globe, Shield, Info, CheckCircle2, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Clients & Industries Served | sysTROL",
  description:
    "Review sysTROL's client portfolio across Integrated Steel Plants, Process Industries, and International Rolling Mills.",
};

const sectors: Array<"Steel & Integrated Plants" | "Process Industries" | "International"> = [
  "Steel & Integrated Plants",
  "Process Industries",
  "International",
];

export default function ClientsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section
          style={{
            backgroundColor: "var(--color-brand-navy-900)",
            color: "var(--color-surface-0)",
            paddingTop: "var(--space-16)",
            paddingBottom: "var(--space-20)",
            borderBottom: "1px solid var(--color-border-dark)",
          }}
        >
          <Container size="wide">
            <SectionHeading
              eyebrow="Industrial Relationships"
              eyebrowVariant="dark"
              theme="dark"
              title="Trusted by Premier Steel & Process Manufacturers"
              subtitle="sysTROL has delivered mission-critical Level-2 automation engineering and specialized machinery spares to leading integrated plants in India and abroad."
              align="left"
            />
          </Container>
        </section>

        <section
          style={{
            paddingTop: "var(--space-16)",
            paddingBottom: "var(--space-16)",
            backgroundColor: "var(--color-surface-50)",
          }}
        >
          <Container size="wide">
            <div
              style={{
                backgroundColor: "#FEF3C7",
                border: "1px solid #FCD34D",
                borderRadius: "var(--radius-md)",
                padding: "var(--space-4)",
                fontSize: "var(--text-xs)",
                color: "#92400E",
                marginBottom: "var(--space-12)",
                display: "flex",
                alignItems: "flex-start",
                gap: "12px",
              }}
            >
              <Info size={18} style={{ flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Client Sign-Off & Confidentiality Protocol:</strong> Certain client names
                and project particulars are presented in representative form pending formal public
                marketing authorization. Full project dossiers and formal references are shared
                during direct technical qualifications.
              </div>
            </div>

            {sectors.map((sector) => {
              const sectorClients = clientsData.filter((c) => c.sector === sector);

              return (
                <div key={sector} style={{ marginBottom: "var(--space-16)" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "var(--space-6)",
                      paddingBottom: "var(--space-3)",
                      borderBottom: "2px solid var(--color-border)",
                    }}
                  >
                    {sector === "International" ? (
                      <Globe size={22} color="var(--color-accent-teal-500)" />
                    ) : (
                      <Building2 size={22} color="var(--color-brand-green-600)" />
                    )}
                    <h2
                      style={{
                        fontSize: "var(--text-2xl)",
                        fontWeight: 700,
                        color: "var(--color-ink-900)",
                      }}
                    >
                      {sector}
                    </h2>
                    <Badge variant="brand" size="sm">
                      {sectorClients.length} Engagements
                    </Badge>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                      gap: "var(--space-6)",
                    }}
                  >
                    {sectorClients.map((client) => (
                      <div
                        key={client.id}
                        style={{
                          backgroundColor: "var(--color-surface-0)",
                          border: "1px solid var(--color-border)",
                          borderRadius: "var(--radius-md)",
                          padding: "var(--space-6)",
                          boxShadow: "var(--shadow-sm)",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              marginBottom: "12px",
                            }}
                          >
                            <Badge variant="accent" size="sm">
                              {client.statusBadge || "Verified Client"}
                            </Badge>
                            <span
                              style={{
                                fontSize: "11px",
                                color: "var(--color-ink-500)",
                                fontFamily: "var(--font-mono)",
                              }}
                            >
                              {client.location}
                            </span>
                          </div>

                          <h3
                            style={{
                              fontSize: "var(--text-xl)",
                              fontWeight: 700,
                              color: "var(--color-ink-900)",
                              marginBottom: "8px",
                            }}
                          >
                            {client.name}
                          </h3>

                          <p
                            style={{
                              fontSize: "var(--text-sm)",
                              color: "var(--color-ink-700)",
                              lineHeight: 1.5,
                            }}
                          >
                            {client.engagement}
                          </p>
                        </div>

                        <div
                          style={{
                            marginTop: "16px",
                            paddingTop: "12px",
                            borderTop: "1px solid var(--color-border)",
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            fontSize: "11px",
                            color: "var(--color-brand-green-700)",
                            fontWeight: 600,
                          }}
                        >
                          <CheckCircle2 size={13} />
                          <span>Delivered by sysTROL Senior Engineers</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </Container>
        </section>

        <CTASection />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
