"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, ArrowUpRight } from "lucide-react";
import { Container } from "../Container/Container";
import { Button } from "@/components/ui/Button/Button";
import { MobileDrawer } from "../MobileDrawer/MobileDrawer";
import styles from "./Navbar.module.css";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/clients", label: "Clients" },
  { href: "/contact", label: "Contact" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
        <Container size="wide">
          <div className={styles.inner}>
            <Link href="/" className={styles.brand} aria-label="sysTROL Home">
              <Image
                src="/images/systrol-logo.jpeg"
                alt="sysTROL Engineering & Consultancy Pvt. Ltd."
                width={180}
                height={52}
                priority
                className={styles.logoImage}
              />
            </Link>

            <nav className={styles.nav} aria-label="Main Navigation">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`${styles.navLink} ${isActive ? styles.activeNavLink : ""}`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className={styles.actions}>
              <Button
                href="/contact"
                variant="primary"
                size="sm"
                rightIcon={<ArrowUpRight size={16} />}
              >
                Get in Touch
              </Button>
            </div>

            <button
              type="button"
              className={styles.hamburger}
              onClick={() => setIsDrawerOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </Container>
      </header>

      <MobileDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
};
