import React from "react";
import { ShieldCheck } from "lucide-react";
import styles from "./ClientLogoMarquee.module.css";

interface ClientBrand {
  id: string;
  name: string;
  sub: string;
  sectorTag: string;
}

const enterpriseBrands: ClientBrand[] = [
  {
    id: "tata",
    name: "TATA STEEL",
    sub: "Jamshedpur & Kalinganagar",
    sectorTag: "Tier-1 Integrated",
  },
  {
    id: "jsw",
    name: "JSW STEEL",
    sub: "Vijayanagar & Dolvi Mills",
    sectorTag: "Strip & Wire Rod",
  },
  {
    id: "sail",
    name: "SAIL",
    sub: "Bhilai, Bokaro & Rourkela",
    sectorTag: "Central PSU Core",
  },
  {
    id: "jspl",
    name: "JINDAL STEEL & POWER",
    sub: "Angul & Raigarh Heavy Mills",
    sectorTag: "Rails & Heavy Plates",
  },
  {
    id: "amns",
    name: "AM / NS INDIA",
    sub: "Hazira Hot Strip Complex",
    sectorTag: "Automotive Grades",
  },
  {
    id: "vedanta",
    name: "VEDANTA / ESL STEEL",
    sub: "Bokaro Long Products Works",
    sectorTag: "Continuous Bar Mill",
  },
  {
    id: "jsl",
    name: "JINDAL STAINLESS",
    sub: "Jajpur & Hisar Works",
    sectorTag: "Special Stainless",
  },
  {
    id: "rinl",
    name: "RINL / VIZAG STEEL",
    sub: "Visakhapatnam Special Bar",
    sectorTag: "Wire Rod & Rebar",
  },
];

const render3DLogo = (brandId: string) => {
  switch (brandId) {
    case "tata":
      return (
        <svg viewBox="0 0 170 44" className={styles.brandSvg} aria-label="Tata Steel 3D Logo">
          <defs>
            <linearGradient id="tata-base" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e6bb8" />
              <stop offset="45%" stopColor="#0a4b94" />
              <stop offset="100%" stopColor="#002d68" />
            </linearGradient>
            <linearGradient id="tata-bevel" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#4392e6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#00183b" stopOpacity="0.9" />
            </linearGradient>
            <filter id="tata-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="1" dy="2" stdDeviation="1.5" floodColor="#001229" floodOpacity="0.35" />
            </filter>
          </defs>
          {/* 3D Tata Circular Emblem */}
          <g transform="translate(4, 2)" filter="url(#tata-shadow)">
            <circle cx="20" cy="20" r="18" fill="url(#tata-base)" />
            <circle cx="20" cy="20" r="18" fill="url(#tata-bevel)" />
            <circle cx="20" cy="20" r="17" fill="none" stroke="#7bb7ff" strokeWidth="0.75" strokeOpacity="0.6" />
            {/* Iconic Tata 'T' Interlocking Arcs */}
            <path
              d="M 12 11 Q 20 18 20 29 M 28 11 Q 20 18 20 29 M 10 14 Q 20 12 30 14"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 12 11.5 Q 20 18.5 20 29.5"
              fill="none"
              stroke="rgba(0,30,80,0.4)"
              strokeWidth="1"
            />
            {/* Specular Glint */}
            <ellipse cx="14" cy="10" rx="4.5" ry="2" fill="#ffffff" opacity="0.35" transform="rotate(-25 14 10)" />
          </g>
          {/* 3D Typography */}
          <g transform="translate(48, 17)">
            <text
              fontFamily="var(--font-heading), 'Inter', sans-serif"
              fontSize="13"
              fontWeight="850"
              letterSpacing="0.12em"
              fill="#002d68"
            >
              TATA
            </text>
            <text
              x="42"
              fontFamily="var(--font-heading), 'Inter', sans-serif"
              fontSize="12.5"
              fontWeight="700"
              letterSpacing="0.14em"
              fill="#0a4b94"
            >
              STEEL
            </text>
            <text
              y="14"
              fontFamily="var(--font-mono), monospace"
              fontSize="7.5"
              fontWeight="600"
              letterSpacing="0.08em"
              fill="#64748b"
            >
              GLOBAL ENTERPRISE
            </text>
          </g>
        </svg>
      );

    case "jsw":
      return (
        <svg viewBox="0 0 170 44" className={styles.brandSvg} aria-label="JSW Steel 3D Logo">
          <defs>
            <linearGradient id="jsw-red" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f87171" />
              <stop offset="30%" stopColor="#dc2626" />
              <stop offset="100%" stopColor="#991b1b" />
            </linearGradient>
            <linearGradient id="jsw-blue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="40%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#075985" />
            </linearGradient>
            <linearGradient id="jsw-gray" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f1f5f9" />
              <stop offset="50%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>
            <filter id="jsw-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="1" dy="2" stdDeviation="1.5" floodColor="#0f172a" floodOpacity="0.3" />
            </filter>
          </defs>
          {/* 3D Geometric Faceted Chevrons */}
          <g transform="translate(6, 4)" filter="url(#jsw-shadow)">
            {/* Upper Red Wedge */}
            <path d="M 4 8 L 24 8 L 18 19 L 0 19 Z" fill="url(#jsw-red)" />
            <path d="M 4 8 L 24 8 L 22 10 L 5 10 Z" fill="#ffffff" opacity="0.4" />
            {/* Lower Blue Wedge */}
            <path d="M 8 20 L 26 20 L 20 31 L 4 31 Z" fill="url(#jsw-blue)" />
            <path d="M 8 20 L 26 20 L 24 22 L 9 22 Z" fill="#ffffff" opacity="0.4" />
            {/* Steel Accent Corner */}
            <path d="M 27 12 L 35 12 L 30 22 L 23 22 Z" fill="url(#jsw-gray)" />
          </g>
          {/* Wordmark */}
          <g transform="translate(48, 17)">
            <text
              fontFamily="var(--font-heading), 'Inter', sans-serif"
              fontSize="15"
              fontWeight="900"
              fontStyle="italic"
              letterSpacing="0.08em"
              fill="#0f172a"
            >
              JSW
            </text>
            <text
              x="42"
              y="-1"
              fontFamily="var(--font-heading), 'Inter', sans-serif"
              fontSize="13"
              fontWeight="800"
              fontStyle="italic"
              letterSpacing="0.1em"
              fill="#dc2626"
            >
              STEEL
            </text>
            <text
              y="14"
              fontFamily="var(--font-mono), monospace"
              fontSize="7.5"
              fontWeight="600"
              letterSpacing="0.08em"
              fill="#64748b"
            >
              BETTER EVERYDAY
            </text>
          </g>
        </svg>
      );

    case "sail":
      return (
        <svg viewBox="0 0 170 44" className={styles.brandSvg} aria-label="SAIL 3D Logo">
          <defs>
            <linearGradient id="sail-steel" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#475569" />
              <stop offset="40%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="sail-ember" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="40%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#c2410c" />
            </linearGradient>
            <filter id="sail-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="1" dy="2" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.3" />
            </filter>
          </defs>
          {/* 3D Triangular Steel Ingot Emblem */}
          <g transform="translate(6, 4)" filter="url(#sail-shadow)">
            {/* Outer Triangle Frame */}
            <polygon points="18,2 34,32 2,32" fill="url(#sail-steel)" />
            <polygon points="18,2 34,32 32,32 18,5 4,32 2,32" fill="#94a3b8" opacity="0.6" />
            {/* Inverted Ingot Inlay */}
            <polygon points="18,12 26,27 10,27" fill="#f8fafc" />
            {/* Pouring Ladle Ember Dot */}
            <circle cx="18" cy="7" r="3.2" fill="url(#sail-ember)" />
            <ellipse cx="17.2" cy="6" rx="1.2" ry="0.6" fill="#ffffff" opacity="0.8" />
          </g>
          {/* Wordmark */}
          <g transform="translate(48, 18)">
            <text
              fontFamily="var(--font-heading), 'Inter', sans-serif"
              fontSize="16"
              fontWeight="900"
              letterSpacing="0.14em"
              fill="#0f172a"
            >
              SAIL
            </text>
            <text
              y="13"
              fontFamily="var(--font-mono), monospace"
              fontSize="7.5"
              fontWeight="600"
              letterSpacing="0.06em"
              fill="#475569"
            >
              STEEL AUTHORITY OF INDIA
            </text>
          </g>
        </svg>
      );

    case "jspl":
      return (
        <svg viewBox="0 0 170 44" className={styles.brandSvg} aria-label="Jindal Steel and Power 3D Logo">
          <defs>
            <linearGradient id="jspl-crimson" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="50%" stopColor="#b91c1c" />
              <stop offset="100%" stopColor="#7f1d1d" />
            </linearGradient>
            <linearGradient id="jspl-navy" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="60%" stopColor="#1e3a8a" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <filter id="jspl-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="1" dy="2" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.3" />
            </filter>
          </defs>
          {/* Dynamic 3D Chevron Emblem */}
          <g transform="translate(6, 4)" filter="url(#jspl-shadow)">
            <path d="M 6 4 L 18 4 L 10 32 L 2 32 Z" fill="url(#jspl-crimson)" />
            <path d="M 6 4 L 18 4 L 16 6 L 6 6 Z" fill="#ffffff" opacity="0.4" />
            <path d="M 16 4 L 28 4 L 20 32 L 12 32 Z" fill="url(#jspl-navy)" />
            <path d="M 16 4 L 28 4 L 26 6 L 16 6 Z" fill="#ffffff" opacity="0.4" />
            <circle cx="28" cy="8" r="3" fill="#ef4444" />
          </g>
          {/* Wordmark */}
          <g transform="translate(44, 16)">
            <text
              fontFamily="var(--font-heading), 'Inter', sans-serif"
              fontSize="12.5"
              fontWeight="900"
              letterSpacing="0.08em"
              fill="#0f172a"
            >
              JINDAL
            </text>
            <text
              y="11"
              fontFamily="var(--font-heading), 'Inter', sans-serif"
              fontSize="8.5"
              fontWeight="800"
              letterSpacing="0.1em"
              fill="#b91c1c"
            >
              STEEL & POWER
            </text>
            <text
              y="20"
              fontFamily="var(--font-mono), monospace"
              fontSize="6.5"
              fontWeight="600"
              letterSpacing="0.05em"
              fill="#64748b"
            >
              HEAVY PLATES & RAILS
            </text>
          </g>
        </svg>
      );

    case "amns":
      return (
        <svg viewBox="0 0 170 44" className={styles.brandSvg} aria-label="AM/NS India 3D Logo">
          <defs>
            <linearGradient id="amns-orange" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fb923c" />
              <stop offset="40%" stopColor="#ea580c" />
              <stop offset="100%" stopColor="#9a3412" />
            </linearGradient>
            <linearGradient id="amns-blue" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#0369a1" />
              <stop offset="100%" stopColor="#082f49" />
            </linearGradient>
            <filter id="amns-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="1" dy="2" stdDeviation="1.5" floodColor="#082f49" floodOpacity="0.35" />
            </filter>
          </defs>
          {/* 3D Arc Swoosh Emblem */}
          <g transform="translate(6, 4)" filter="url(#amns-shadow)">
            {/* ArcelorMittal Sweeping Orange Arc */}
            <path
              d="M 4 28 C 4 12, 16 4, 32 4 C 20 8, 12 18, 12 28 Z"
              fill="url(#amns-orange)"
            />
            {/* Nippon Steel Dual Blue Accent */}
            <path
              d="M 14 28 C 14 20, 22 14, 32 12 C 24 16, 18 22, 18 28 Z"
              fill="url(#amns-blue)"
            />
            {/* Specular Highlight Rim */}
            <path
              d="M 4 28 C 4 12, 16 4, 32 4"
              fill="none"
              stroke="#fed7aa"
              strokeWidth="0.8"
            />
          </g>
          {/* Wordmark */}
          <g transform="translate(46, 17)">
            <text
              fontFamily="var(--font-heading), 'Inter', sans-serif"
              fontSize="14.5"
              fontWeight="900"
              letterSpacing="0.04em"
              fill="#ea580c"
            >
              AM
            </text>
            <text
              x="26"
              fontFamily="var(--font-heading), 'Inter', sans-serif"
              fontSize="13"
              fontWeight="700"
              fill="#94a3b8"
            >
              /
            </text>
            <text
              x="33"
              fontFamily="var(--font-heading), 'Inter', sans-serif"
              fontSize="14.5"
              fontWeight="900"
              letterSpacing="0.04em"
              fill="#082f49"
            >
              NS
            </text>
            <text
              x="62"
              fontFamily="var(--font-heading), 'Inter', sans-serif"
              fontSize="11.5"
              fontWeight="800"
              letterSpacing="0.08em"
              fill="#475569"
            >
              INDIA
            </text>
            <text
              y="13"
              fontFamily="var(--font-mono), monospace"
              fontSize="7"
              fontWeight="600"
              letterSpacing="0.05em"
              fill="#64748b"
            >
              ARCELORMITTAL NIPPON STEEL
            </text>
          </g>
        </svg>
      );

    case "vedanta":
      return (
        <svg viewBox="0 0 170 44" className={styles.brandSvg} aria-label="Vedanta 3D Logo">
          <defs>
            <linearGradient id="ved-blue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#0c4a6e" />
            </linearGradient>
            <linearGradient id="ved-green" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4ade80" />
              <stop offset="50%" stopColor="#16a34a" />
              <stop offset="100%" stopColor="#14532d" />
            </linearGradient>
            <filter id="ved-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="1" dy="2" stdDeviation="1.5" floodColor="#0c4a6e" floodOpacity="0.3" />
            </filter>
          </defs>
          {/* 3D Globe / Leaf Motifs */}
          <g transform="translate(6, 4)" filter="url(#ved-shadow)">
            <ellipse cx="18" cy="18" rx="14" ry="14" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
            {/* Overlapping 3D V-Leaves */}
            <path
              d="M 18 8 C 24 12, 26 22, 18 28 C 14 22, 14 14, 18 8 Z"
              fill="url(#ved-green)"
            />
            <path
              d="M 18 8 C 12 12, 10 22, 18 28 C 22 22, 22 14, 18 8 Z"
              fill="url(#ved-blue)"
              opacity="0.9"
            />
            <circle cx="18" cy="8" r="2.2" fill="#38bdf8" />
          </g>
          {/* Wordmark */}
          <g transform="translate(46, 18)">
            <text
              fontFamily="var(--font-heading), 'Inter', sans-serif"
              fontSize="14.5"
              fontWeight="800"
              letterSpacing="0.02em"
              fill="#0369a1"
            >
              vedanta
            </text>
            <text
              y="13"
              fontFamily="var(--font-mono), monospace"
              fontSize="7.5"
              fontWeight="600"
              letterSpacing="0.06em"
              fill="#16a34a"
            >
              ESL STEEL LIMITED
            </text>
          </g>
        </svg>
      );

    case "jsl":
      return (
        <svg viewBox="0 0 170 44" className={styles.brandSvg} aria-label="Jindal Stainless 3D Logo">
          <defs>
            <linearGradient id="jsl-steel" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="25%" stopColor="#cbd5e1" />
              <stop offset="50%" stopColor="#64748b" />
              <stop offset="75%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#334155" />
            </linearGradient>
            <linearGradient id="jsl-blue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
            <filter id="jsl-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="1" dy="2" stdDeviation="1.5" floodColor="#0f172a" floodOpacity="0.35" />
            </filter>
          </defs>
          {/* 3D Cold-Rolled Stainless Ribbon Emblem */}
          <g transform="translate(6, 4)" filter="url(#jsl-shadow)">
            <path
              d="M 4 18 C 4 10, 14 6, 20 12 C 26 18, 32 14, 32 24 C 32 30, 24 32, 18 26 C 12 20, 4 24, 4 18 Z"
              fill="url(#jsl-steel)"
            />
            <path
              d="M 4 18 C 4 10, 14 6, 20 12"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.2"
            />
            <circle cx="28" cy="14" r="2.5" fill="url(#jsl-blue)" />
          </g>
          {/* Wordmark */}
          <g transform="translate(46, 17)">
            <text
              fontFamily="var(--font-heading), 'Inter', sans-serif"
              fontSize="12.5"
              fontWeight="900"
              letterSpacing="0.06em"
              fill="#0f172a"
            >
              JINDAL
            </text>
            <text
              y="11"
              fontFamily="var(--font-heading), 'Inter', sans-serif"
              fontSize="9"
              fontWeight="800"
              letterSpacing="0.14em"
              fill="#475569"
            >
              STAINLESS
            </text>
            <text
              y="20"
              fontFamily="var(--font-mono), monospace"
              fontSize="6.5"
              fontWeight="600"
              letterSpacing="0.06em"
              fill="#0284c7"
            >
              COLD ROLLING WORKS
            </text>
          </g>
        </svg>
      );

    case "rinl":
    default:
      return (
        <svg viewBox="0 0 170 44" className={styles.brandSvg} aria-label="Vizag Steel 3D Logo">
          <defs>
            <linearGradient id="rinl-gear" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="40%" stopColor="#1d4ed8" />
              <stop offset="100%" stopColor="#1e3a8a" />
            </linearGradient>
            <linearGradient id="rinl-flame" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fde047" />
              <stop offset="50%" stopColor="#ea580c" />
              <stop offset="100%" stopColor="#991b1b" />
            </linearGradient>
            <filter id="rinl-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="1" dy="2" stdDeviation="1.5" floodColor="#1e3a8a" floodOpacity="0.3" />
            </filter>
          </defs>
          {/* 3D Machined Gear & Crucible Flame */}
          <g transform="translate(6, 4)" filter="url(#rinl-shadow)">
            {/* Gear Outer Rim */}
            <circle cx="18" cy="18" r="14" fill="url(#rinl-gear)" />
            <circle cx="18" cy="18" r="13" fill="none" stroke="#93c5fd" strokeWidth="0.8" opacity="0.7" />
            <circle cx="18" cy="18" r="8" fill="#ffffff" />
            {/* Industrial Crucible Core Flame */}
            <path
              d="M 18 11 C 21 15, 22 19, 18 24 C 14 19, 15 15, 18 11 Z"
              fill="url(#rinl-flame)"
            />
          </g>
          {/* Wordmark */}
          <g transform="translate(46, 17)">
            <text
              fontFamily="var(--font-heading), 'Inter', sans-serif"
              fontSize="12.5"
              fontWeight="900"
              letterSpacing="0.08em"
              fill="#1e3a8a"
            >
              VIZAG STEEL
            </text>
            <text
              y="11"
              fontFamily="var(--font-heading), 'Inter', sans-serif"
              fontSize="8.5"
              fontWeight="700"
              letterSpacing="0.06em"
              fill="#475569"
            >
              RINL ENTERPRISE
            </text>
            <text
              y="20"
              fontFamily="var(--font-mono), monospace"
              fontSize="6.5"
              fontWeight="600"
              letterSpacing="0.05em"
              fill="#ea580c"
            >
              SPECIAL BAR MILL
            </text>
          </g>
        </svg>
      );
  }
};

export const ClientLogoMarquee: React.FC = () => {
  const marqueeBrands = [...enterpriseBrands, ...enterpriseBrands];

  return (
    <section className={styles.section} aria-label="Enterprise Client Roster">
      <div className={styles.header}>
        <div className={styles.eyebrow}>
          <ShieldCheck size={14} />
          <span>Tier-1 Corporate Trademarks</span>
        </div>
        <h3 className={styles.title}>Premier Steel & Process Manufacturers</h3>
      </div>

      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeTrack}>
          {marqueeBrands.map((brand, idx) => (
            <div
              key={`${brand.id}-${idx}`}
              className={styles.logoEmblem3d}
              title={`${brand.name} — ${brand.sub}`}
            >
              <div className={styles.emblemBadgeGleam} />
              <div className={styles.emblemContent}>
                {render3DLogo(brand.id)}
              </div>
              <div className={styles.sectorTag}>{brand.sectorTag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
