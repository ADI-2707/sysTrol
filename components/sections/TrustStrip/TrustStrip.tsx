import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container/Container";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { clientsData } from "@/content/clients";
import styles from "./TrustStrip.module.css";

export const TrustStrip: React.FC = () => {
  return (
    <section className={styles.trustStrip} aria-label="Client Trust Strip">
      <Container size="wide">
        <Reveal>
          <p className={styles.caption}>
            Trusted by leading steel & process manufacturers in India and abroad
          </p>

          <div className={styles.clientGrid}>
            {clientsData.slice(0, 6).map((client) => (
              <Link
                key={client.id}
                href="/clients"
                className={styles.clientBadge}
                title={`${client.name} — ${client.engagement}`}
              >
                <span className={styles.clientDot} />
                <div>
                  <span className={styles.clientName}>{client.name}</span>
                  <span className={styles.sectorSub}> • {client.location}</span>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
};
