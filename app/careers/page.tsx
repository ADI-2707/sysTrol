import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar/Navbar";
import { Footer } from "@/components/layout/Footer/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact/FloatingContact";
import { Container } from "@/components/layout/Container/Container";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { Badge } from "@/components/ui/Badge/Badge";
import { Button } from "@/components/ui/Button/Button";
import { CTASection } from "@/components/sections/CTASection/CTASection";
import { Briefcase, Code2, Cpu, Wrench, Mail, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | sysTROL Engineering & Consultancy",
  description:
    "Explore engineering opportunities in Level-2 automation, C# software architecture, and process mill commissioning at sysTROL Bengaluru.",
};

const openRoles = [
  {
    title: "Senior Level-2 Automation Engineer (C# / .NET)",
    location: "Bengaluru, India (with site commissioning)",
    type: "Full-time",
    description:
      "Design and deploy mathematical pass-schedule algorithms and real-time mill tracking services interfacing with Siemens/ABB Level-1 PLCs.",
    skills: ["C# / .NET 8", "OPC UA", "Rolling Mill Modeling", "SCADA / HMI"],
  },
  {
    title: "Rolling Mill Commissioning Specialist",
    location: "Bengaluru HQ (Domestic & Overseas Travel)",
    type: "Full-time",
    description:
      "Lead hot-metal trials, roll gap stiffness calibrations, and finishing block speed cascade tuning across bar and wire rod rolling mills.",
    skills: ["Mill Kinematics", "Hydraulic AGC", "FAT / SAT Protocols", "On-site Tuning"],
  },
  {
    title: "International Technical Procurement Executive",
    location: "Bengaluru, India",
    type: "Full-time",
    description:
      "Coordinate OEM technical sourcing, EN 10204 3.1 inspection paperwork, and emergency air-freight logistics for imported mill spares and consumables.",
    skills: ["Import/Export Compliance", "Vendor Management (Europe/Japan)", "Metallurgy Basics"],
  },
];

export default function CareersPage() {
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
              eyebrow="Join Our Engineering Core"
              eyebrowVariant="dark"
              theme="dark"
              title="Work on Heavy Industrial Automation That Truly Matters"
              subtitle="At sysTROL, software engineers solve real-world physical problems in high-speed steel rolling mills. We write deterministic C# code that controls megawatts of drive power and millions of dollars of mill machinery."
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
            <div style={{ marginBottom: "var(--space-12)" }}>
              <h2 style={{ fontSize: "var(--text-2xl)", fontWeight: 700, color: "var(--color-ink-900)", marginBottom: "8px" }}>
                Active Opportunities
              </h2>
              <p style={{ fontSize: "var(--text-base)", color: "var(--color-ink-500)" }}>
                We are always seeking passionate engineers who understand both software logic and
                plant floor reality.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "var(--space-6)" }}>
              {openRoles.map((role, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: "var(--color-surface-0)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-lg)",
                    padding: "var(--space-6)",
                    boxShadow: "var(--shadow-sm)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
                    <h3 style={{ fontSize: "var(--text-xl)", fontWeight: 700, color: "var(--color-ink-900)" }}>
                      {role.title}
                    </h3>
                    <div style={{ display: "flex", gap: "6px" }}>
                      <Badge variant="brand" size="sm">{role.type}</Badge>
                      <Badge variant="default" size="sm">{role.location}</Badge>
                    </div>
                  </div>

                  <p style={{ fontSize: "var(--text-sm)", color: "var(--color-ink-700)", lineHeight: 1.6 }}>
                    {role.description}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {role.skills.map((skill, sIdx) => (
                      <Badge key={sIdx} variant="mono" size="sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div style={{ marginTop: "8px", paddingTop: "12px", borderTop: "1px solid var(--color-border)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "var(--text-xs)", color: "var(--color-ink-500)" }}>
                      Send CV quoting role title to: <strong>careers@sys-trol.com</strong>
                    </span>
                    <Button
                      href="mailto:careers@sys-trol.com?subject=Application%20for%20Engineering%20Role"
                      variant="outline"
                      size="sm"
                      leftIcon={<Mail size={14} />}
                    >
                      Apply via Email
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <CTASection />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
