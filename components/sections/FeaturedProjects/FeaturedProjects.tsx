import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container/Container";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { Badge } from "@/components/ui/Badge/Badge";
import { Button } from "@/components/ui/Button/Button";
import { projectsData } from "@/content/projects";
import styles from "./FeaturedProjects.module.css";

export const FeaturedProjects: React.FC = () => {
  const featured = projectsData.filter((p) => p.featured).slice(0, 3);

  return (
    <section className={styles.section} aria-label="Featured Projects">
      <Container size="wide">
        <div className={styles.topBar}>
          <SectionHeading
            eyebrow="Case Studies & Track Record"
            eyebrowVariant="brand"
            title="Recent Industrial Implementations"
            subtitle="Representative project summaries demonstrating Level-2 model accuracy, mill speed synchronization, and rapid spare parts turnaround."
            align="left"
            style={{ marginBottom: 0 }}
          />
          <Button href="/projects" variant="secondary" size="md" rightIcon={<ArrowRight size={16} />}>
            View All Projects
          </Button>
        </div>

        <div className={styles.grid}>
          {featured.map((project) => (
            <div key={project.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <Badge variant="accent" size="sm">
                  {project.industry}
                </Badge>
                <span className={styles.clientRepresentative}>
                  {project.location} • {project.year}
                </span>
              </div>

              <h3 className={styles.title}>
                <Link href={`/projects/${project.slug}`}>
                  {project.title}
                </Link>
              </h3>

              <p className={styles.blurb}>{project.shortBlurb}</p>

              {project.metrics && project.metrics.length > 0 && (
                <div className={styles.metricsBox}>
                  {project.metrics.slice(0, 2).map((m, idx) => (
                    <div key={idx}>
                      <div className={styles.metricValue}>{m.value}</div>
                      <div className={styles.metricLabel}>{m.label}</div>
                    </div>
                  ))}
                </div>
              )}

              <div className={styles.tagRow}>
                {project.technologies.slice(0, 3).map((tech, idx) => (
                  <Badge key={idx} variant="mono" size="sm">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className={styles.cardFooter}>
                <span style={{ fontSize: "11px", color: "var(--color-ink-500)", fontFamily: "var(--font-mono)" }}>
                  {project.serviceType}
                </span>
                <Link
                  href={`/projects/${project.slug}`}
                  className={styles.viewDetailsLink}
                >
                  <span>Read Case Study</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
