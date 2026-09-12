import React from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container/Container";
import { Badge } from "@/components/ui/Badge/Badge";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { Cpu, ShieldCheck, Wrench, Quote } from "lucide-react";
import styles from "./TeamSection.module.css";

interface TeamMember {
  id: string;
  role: string;
  discipline: string;
  description: string;
  image: string;
  tags: string[];
}

const teamDisciplines: TeamMember[] = [
  {
    id: "software-simulation",
    role: "Level-2 Software Engineering",
    discipline: "Process Modeling Core",
    description:
      "Mathematical modelers and C# software engineers designing stand-by-stand speed cascades, hydraulic AGC algorithms, and real-time physics-based pass schedule engines.",
    image: "/images/about/team/team-software.jpg",
    tags: ["C# / .NET", "Python Modeling", "HIL Simulation", "OPC UA"],
  },
  {
    id: "spares-metallurgy",
    role: "Mill Spares & Metallurgical Sourcing",
    discipline: "Global Procurement & QC",
    description:
      "Procurement specialists and metallurgists managing factory audits, ultrasonic defect tests, and EN 10204 3.1 certification across certified European and Japanese manufacturers.",
    image: "/images/about/team/team-spares.jpg",
    tags: ["EN 10204 3.1", "Tungsten Carbide", "Servo Valves", "Global QC"],
  },
  {
    id: "field-commissioning",
    role: "Field Commissioning & PLC Integration",
    discipline: "Site Systems Deployment",
    description:
      "Senior field automation engineers handling mill pulpit integration, shadow commissioning, Level-1 PLC interfacing, and zero-downtime hot metal cutovers.",
    image: "/images/about/team/team-field.jpg",
    tags: ["Siemens S7/TIA", "ABB 800xA", "Rockwell", "FAT/SAT Protocol"],
  },
];

export const TeamSection: React.FC = () => {
  return (
    <section className={styles.teamSection} aria-label="Our Team & Leadership">
      <Container size="wide">
        <div className={styles.headerWrap}>
          <Reveal>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", maxWidth: "700px" }}>
              <Badge variant="brand" size="md" style={{ width: "fit-content" }}>
                Leadership & Engineering Team
              </Badge>
              <h2 style={{ fontSize: "var(--text-3xl)", fontWeight: 700, color: "var(--color-ink-900)", lineHeight: "var(--leading-tight)" }}>
                Guided by Mill Automation Pioneers & Metallurgical Practitioners
              </h2>
              <p style={{ fontSize: "var(--text-base)", color: "var(--color-ink-700)", lineHeight: "var(--leading-relaxed)" }}>
                sysTROL is powered by senior engineers, mathematical modelers, and industrial supply specialists who combine deep computational capability with hands-on steel rolling mill floor experience.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div className={styles.directorCard}>
            <div className={styles.directorImageWrap}>
              <Image
                src="/images/about/team/preet-tripathi.jpg"
                alt="Preet Tripathi - Director, sysTROL Engineering & Consultancy"
                fill
                sizes="(max-width: 900px) 100vw, 360px"
                className={styles.directorImage}
                priority
              />
            </div>
            <div className={styles.directorContent}>
              <div className={styles.directorHeader}>
                <div className={styles.directorBadgeRow}>
                  <Badge variant="brand" size="sm" icon={<Cpu size={12} />}>
                    Executive Leadership
                  </Badge>
                  <Badge variant="accent" size="sm" icon={<ShieldCheck size={12} />}>
                    Principal Consultant
                  </Badge>
                </div>
                <h3 className={styles.directorName}>Preet Tripathi</h3>
                <div className={styles.directorRole}>Director, sysTROL Engineering & Consultancy</div>
              </div>

              <div className={styles.directorBio}>
                <p>
                  As Director of sysTROL, Preet Tripathi spearheads the firm's strategic vision, uniting real-time supervisory automation engineering with high-reliability international machinery procurement. Under his stewardship, sysTROL has engineered Level-2 software systems and delivered mission-critical mill equipment across continuous steel rolling plants globally.
                </p>
                <p>
                  With extensive practical experience in hot metal rolling kinetics, deterministic pass schedule computation, and vendor qualification, he has championed the elimination of proprietary black-box software in favor of open, verifiable C# architectures that grant steelmakers full transparency and continuous operational control.
                </p>
              </div>

              <div className={styles.directorQuote}>
                <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                  <Quote size={18} color="var(--color-brand-green-700)" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    &quot;Our engineering responsibility extends far beyond code compilation or equipment dispatch. We commit to standing shoulder-to-shoulder with mill operators until the line runs with zero cobbles, strict metallurgical tolerances, and enduring process stability.&quot;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className={styles.teamGrid}>
          {teamDisciplines.map((team, idx) => (
            <Reveal key={team.id} delay={150 + idx * 100}>
              <div className={styles.teamCard}>
                <div className={styles.teamImageWrap}>
                  <Image
                    src={team.image}
                    alt={team.role}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={styles.teamImage}
                  />
                </div>
                <div className={styles.teamCardBody}>
                  <span className={styles.teamPill}>{team.discipline}</span>
                  <h4 className={styles.teamTitle}>{team.role}</h4>
                  <p className={styles.teamDesc}>{team.description}</p>
                  <div className={styles.techTagRow}>
                    {team.tags.map((tag) => (
                      <span key={tag} className={styles.techTag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};
