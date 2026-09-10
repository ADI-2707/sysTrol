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
            Proven Engineering & Spares Deployments Across Process Plants
          </p>

          <div className={styles.clientGrid}>
            {clientsData.slice(0, 6).map((client) => (
              <Link
                key={client.id}
                href="/clients"
                className={styles.clientWordmark}
                title={`${client.name} — ${client.engagement}`}
              >
                <span className={styles.clientName}>{client.name}</span>
              </Link>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
};
