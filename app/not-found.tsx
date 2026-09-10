import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar/Navbar";
import { Footer } from "@/components/layout/Footer/Footer";
import { Container } from "@/components/layout/Container/Container";
import { Button } from "@/components/ui/Button/Button";
import { Badge } from "@/components/ui/Badge/Badge";
import { Home, ArrowLeft, HelpCircle } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main
        style={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "var(--color-surface-50)",
          padding: "var(--space-16) 0",
        }}
      >
        <Container size="narrow">
          <div
            style={{
              backgroundColor: "var(--color-surface-0)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-xl)",
              padding: "var(--space-10)",
              textAlign: "center",
              boxShadow: "var(--shadow-md)",
            }}
          >
            <Badge variant="accent" size="sm" style={{ marginBottom: "16px" }}>
              HTTP 404 • Resource Not Located
            </Badge>

            <h1
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "var(--text-5xl)",
                fontWeight: 800,
                color: "var(--color-ink-900)",
                lineHeight: 1,
                marginBottom: "12px",
              }}
            >
              404
            </h1>

            <h2
              style={{
                fontSize: "var(--text-xl)",
                fontWeight: 600,
                color: "var(--color-ink-900)",
                marginBottom: "12px",
              }}
            >
              Plant Route or Specification Not Found
            </h2>

            <p
              style={{
                fontSize: "var(--text-base)",
                color: "var(--color-ink-500)",
                maxWidth: "480px",
                margin: "0 auto 24px",
                lineHeight: 1.6,
              }}
            >
              The link you accessed may be under maintenance, relocated, or temporarily
              offline as part of the sysTROL corporate web architecture upgrade.
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              <Button href="/" variant="primary" size="md" leftIcon={<Home size={16} />}>
                Return to Homepage
              </Button>
              <Button href="/contact" variant="secondary" size="md">
                Contact Support Desk
              </Button>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
