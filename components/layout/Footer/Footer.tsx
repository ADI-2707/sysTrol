import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import { Container } from "../Container/Container";
import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
  const currentYear = 2026;

  return (
    <footer className={styles.footer} role="contentinfo">
      <Container size="wide">
        <div className={styles.topGrid}>
          <div className={styles.brandCol}>
            <div className={styles.logoWrapper}>
              <Image
                src="/images/systrol-logo.jpeg"
                alt="sysTROL Engineering & Consultancy Pvt. Ltd."
                width={180}
                height={52}
                className={styles.logoImage}
              />
            </div>
            <p className={styles.brandDesc}>
              Precision Level-2 (L2) process automation software engineered in C#
              and OEM-grade imported machinery spares trading for steel rolling
              mills and continuous process plants.
            </p>
            <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
              <a
                href="https://www.linkedin.com/company/systrol-engineering-consultancy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="sysTROL on LinkedIn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "rgba(255,255,255,0.08)",
                  color: "var(--color-surface-0)",
                  transition: "background-color var(--duration-fast)",
                }}
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className={styles.colTitle}>Business Divisions</h4>
            <ul className={styles.linkList}>
              <li>
                <Link
                  href="/services/automation-consultancy"
                  className={styles.footerLink}
                >
                  <span>Level-2 Automation</span>
                  <ArrowUpRight size={13} />
                </Link>
              </li>
              <li>
                <Link
                  href="/services/automation-consultancy"
                  className={styles.footerLink}
                >
                  <span>Mathematical Process Models</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/automation-consultancy"
                  className={styles.footerLink}
                >
                  <span>C# / .NET Supervisory Services</span>
                </Link>
              </li>
              <li>
                <Link href="/services/trading" className={styles.footerLink}>
                  <span>Imported Mill Spares</span>
                  <ArrowUpRight size={13} />
                </Link>
              </li>
              <li>
                <Link href="/services/trading" className={styles.footerLink}>
                  <span>Tungsten Carbide Roll Rings</span>
                </Link>
              </li>
              <li>
                <Link href="/services/trading" className={styles.footerLink}>
                  <span>Hydraulic AGC Servo Valves</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className={styles.colTitle}>Company & Work</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/about" className={styles.footerLink}>
                  About sysTROL
                </Link>
              </li>
              <li>
                <Link href="/projects" className={styles.footerLink}>
                  Project Portfolio
                </Link>
              </li>
              <li>
                <Link href="/clients" className={styles.footerLink}>
                  Clients & Industries
                </Link>
              </li>
              <li>
                <Link href="/services" className={styles.footerLink}>
                  Capabilities Overview
                </Link>
              </li>
              <li>
                <Link href="/careers" className={styles.footerLink}>
                  Careers at sysTROL
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.footerLink}>
                  Contact Engineering Desk
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className={styles.colTitle}>Corporate Office</h4>
            <div className={styles.contactInfoList}>
              <div className={styles.contactItem}>
                <MapPin size={18} className={styles.contactIcon} />
                <span>
                  Bengaluru, Karnataka, India
                  <br />
                  <span style={{ fontSize: "12px", color: "var(--color-ink-500)" }}>
                    Serving steel & process clients across India and globally
                  </span>
                </span>
              </div>

              <a href="tel:+919845012345" className={styles.contactItem}>
                <Phone size={18} className={styles.contactIcon} />
                <span>+91 (80) 2845-XXXX / Direct Line</span>
              </a>

              <a href="mailto:info@sys-trol.com" className={styles.contactItem}>
                <Mail size={18} className={styles.contactIcon} />
                <span>info@sys-trol.com</span>
              </a>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginTop: "8px",
                  padding: "8px 12px",
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "rgba(31, 122, 77, 0.15)",
                  border: "1px solid rgba(31, 122, 77, 0.3)",
                }}
              >
                <ShieldCheck size={16} color="var(--color-success-500)" />
                <span style={{ fontSize: "12px", color: "var(--color-surface-0)" }}>
                  Registered Engineering Firm
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <div>
            © {currentYear} sysTROL Engineering & Consultancy Pvt. Ltd. All rights
            reserved.
          </div>
          <div className={styles.legalLinks}>
            <span style={{ color: "var(--color-ink-500)" }}>
              Phase 1 Digital Card & Architectural Preview
            </span>
            <Link href="/contact" className={styles.legalLink}>
              Enquiry
            </Link>
            <Link href="/about" className={styles.legalLink}>
              Leadership Note
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
