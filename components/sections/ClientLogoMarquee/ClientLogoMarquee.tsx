import React from "react";
import { Building2, Factory, ShieldCheck, Flame, Layers } from "lucide-react";
import styles from "./ClientLogoMarquee.module.css";

interface ClientBrand {
  id: string;
  name: string;
  division: string;
  sectorTag: string;
  icon: "factory" | "building" | "shield" | "flame" | "layers";
}

const enterpriseBrands: ClientBrand[] = [
  {
    id: "tata",
    name: "TATA STEEL",
    division: "Jamshedpur & Kalinganagar Works",
    sectorTag: "Tier-1 Integrated",
    icon: "factory",
  },
  {
    id: "jsw",
    name: "JSW STEEL",
    division: "Vijayanagar & Dolvi Hot Mills",
    sectorTag: "Strip & Wire Rod",
    icon: "building",
  },
  {
    id: "sail",
    name: "SAIL",
    division: "Bhilai, Bokaro & Rourkela Plants",
    sectorTag: "Central PSU Core",
    icon: "shield",
  },
  {
    id: "jspl",
    name: "JINDAL STEEL & POWER",
    division: "Angul & Raigarh Heavy Mills",
    sectorTag: "Rails & Heavy Plates",
    icon: "flame",
  },
  {
    id: "amns",
    name: "AM / NS INDIA",
    division: "Hazira Hot Strip Complex",
    sectorTag: "Automotive Grades",
    icon: "layers",
  },
  {
    id: "vedanta",
    name: "VEDANTA / ESL STEEL",
    division: "Bokaro Long Products Facility",
    sectorTag: "Continuous Bar Mill",
    icon: "factory",
  },
  {
    id: "jsl",
    name: "JINDAL STAINLESS",
    division: "Jajpur & Hisar Cold Rolling Works",
    sectorTag: "Special Stainless",
    icon: "shield",
  },
  {
    id: "rinl",
    name: "RINL / VIZAG STEEL",
    division: "Visakhapatnam Special Bar Mill",
    sectorTag: "Wire Rod & Rebar",
    icon: "building",
  },
];

export const ClientLogoMarquee: React.FC = () => {
  const marqueeBrands = [...enterpriseBrands, ...enterpriseBrands];

  const renderIcon = (type: ClientBrand["icon"]) => {
    switch (type) {
      case "factory":
        return <Factory size={16} />;
      case "shield":
        return <ShieldCheck size={16} />;
      case "flame":
        return <Flame size={16} />;
      case "layers":
        return <Layers size={16} />;
      default:
        return <Building2 size={16} />;
    }
  };

  return (
    <section className={styles.section} aria-label="Enterprise Client Roster">
      <div className={styles.header}>
        <div className={styles.eyebrow}>
          <ShieldCheck size={14} />
          <span>Tier-1 Enterprise Engagements</span>
        </div>
        <h3 className={styles.title}>Premier Steel & Process Manufacturers</h3>
      </div>

      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeTrack}>
          {marqueeBrands.map((brand, idx) => (
            <div key={`${brand.id}-${idx}`} className={styles.card3d}>
              <div className={styles.cardHeader}>
                <div className={styles.logoBadge}>{renderIcon(brand.icon)}</div>
                <span className={styles.sectorTag}>{brand.sectorTag}</span>
              </div>

              <div>
                <div className={styles.companyName}>{brand.name}</div>
                <div className={styles.divisionSubtitle}>{brand.division}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
