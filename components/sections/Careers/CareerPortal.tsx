"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/Badge/Badge";
import { Button } from "@/components/ui/Button/Button";
import {
  Briefcase,
  MapPin,
  Clock,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Mail,
  X,
  Send,
  Sparkles,
} from "lucide-react";
import styles from "./CareerPortal.module.css";

interface Vacancy {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  skills: string[];
}

const VACANCIES: Vacancy[] = [
  {
    id: "l2-lead-engineer",
    title: "Lead Level-2 Automation Engineer (C# / .NET 8)",
    department: "L2 Software Engineering",
    location: "Bengaluru, India (Hybrid)",
    type: "Full-time",
    experience: "5 - 8 Years",
    description:
      "Architect and deploy high-performance Level-2 mathematical mill-tracking, pass schedule calculation engines, and Level-1 PLC gateway services for heavy industrial rolling mills.",
    responsibilities: [
      "Develop multithreaded C# microservices communicating via high-throughput OPC UA and TCP/IP sockets.",
      "Formulate mathematical roll force, torque, and temperature decay models for billet reheating and continuous rolling.",
      "Lead factory acceptance testing (FAT) and coordinate live plant hot metal trials with on-site automation teams.",
    ],
    requirements: [
      "5+ years of production C# / .NET engineering with deep knowledge of multithreading, socket IPC, and memory efficiency.",
      "Practical experience with industrial protocols (OPC UA, Modbus TCP, Siemens S7Comm).",
      "Background in steel rolling mills, metallurgy, or heavy process manufacturing is a strong advantage.",
    ],
    skills: ["C# / .NET 8", "OPC UA", "Mathematical Modeling", "SQL Server", "TCP/IP Sockets"],
  },
  {
    id: "commissioning-specialist",
    title: "Rolling Mill Level-1 & Level-2 Commissioning Specialist",
    department: "Field Engineering & Commissioning",
    location: "Bengaluru HQ (Overseas & Domestic Travel ~40%)",
    type: "Full-time",
    experience: "3 - 7 Years",
    description:
      "Direct on-site hot metal trials, finishing block speed cascade tuning, looper control calibration, and hydraulic AGC integration during high-speed bar and wire rod mill revamps.",
    responsibilities: [
      "Calibrate finishing block speed cascades, hydraulic roll gaps, and flying shear synchronization during live rolling.",
      "Conduct site acceptance testing (SAT) protocols directly with plant chief engineers and mechanical leads.",
      "Diagnose mill cobbles, tracking mismatches, and drive trip telemetry using high-speed data loggers.",
    ],
    requirements: [
      "Degree in Electrical, Instrumentation, or Mechanical Engineering.",
      "3+ years in continuous bar, wire rod, or section rolling mill commissioning.",
      "Willingness for domestic and international client site deployments across India, Oman, UAE, and GCC.",
    ],
    skills: ["Mill Kinematics", "Hydraulic AGC", "Drive Cascades", "SAT Protocols", "Cobble Diagnosis"],
  },
  {
    id: "scada-hmi-developer",
    title: "Industrial SCADA & Real-Time HMI Developer",
    department: "L2 Software Engineering",
    location: "Bengaluru HQ",
    type: "Full-time",
    experience: "2 - 5 Years",
    description:
      "Design operator console HMIs, live roll-line mimic screens, real-time alarm telemetry, and production KPI dashboards for 24/7 industrial steel plant control rooms.",
    responsibilities: [
      "Build responsive, high-contrast operator interfaces conforming to ISA-101 high-performance HMI standards.",
      "Interface real-time mill tracking telemetry from Level-2 C# engines into graphical visual displays.",
      "Create historical trend graphs, shift production reporting, and heat tracking visualization tools.",
    ],
    requirements: [
      "2+ years designing industrial HMIs, SCADA packages, or modern desktop UI (WPF / React / Web-based SCADA).",
      "Solid understanding of operator ergonomics and visual hierarchy in continuous industrial plant environments.",
      "Experience with WebSocket streams, REST APIs, and time-series database visualization.",
    ],
    skills: ["WPF / Modern UI", "SCADA / ISA-101", "WebSockets", "Data Visualization", "C#"],
  },
  {
    id: "process-metallurgist",
    title: "Process Metallurgist & Roll Pass Schedule Designer",
    department: "Process Engineering",
    location: "Bengaluru HQ",
    type: "Full-time",
    experience: "4 - 8 Years",
    description:
      "Calculate roll pass designs, groove geometries, elongation ratios, and temperature cooling pacing for structural sections, rebar, and specialty alloy wire rods.",
    responsibilities: [
      "Compute pass sequences and roll groove drawings for oval-round, diamond-square, and slit-rolling schedules.",
      "Validate Level-2 mathematical coefficients against actual finished product tolerances and grain structures.",
      "Consult steel plant clients on roll wear minimization and tungsten carbide composite roll longevity.",
    ],
    requirements: [
      "B.Tech or M.Tech in Metallurgical or Mechanical Engineering.",
      "4+ years of hands-on pass design or roll shop engineering in hot rolling mills.",
      "Familiarity with tungsten carbide rolls, guide systems, and TMT slitting technology.",
    ],
    skills: ["Roll Pass Design", "Metallurgy", "TMT / Rebar Slitting", "CAD Drawings", "Pass Schedules"],
  },
  {
    id: "procurement-specialist",
    title: "International Technical Procurement Specialist",
    department: "Spares Trading & Logistics",
    location: "Bengaluru HQ",
    type: "Full-time",
    experience: "3 - 6 Years",
    description:
      "Oversee cross-border sourcing, mill inspection certification (EN 10204 3.1), customs compliance, and expedited freight logistics for precision imported rolling mill spares.",
    responsibilities: [
      "Manage OEM vendor relations with manufacturers across Germany, Italy, Japan, and India.",
      "Examine mill test certificates, dimensional tolerances, and heat-treatment specifications before dispatch.",
      "Coordinate international air and ocean logistics, bonded warehouse clearance, and customs tariffs.",
    ],
    requirements: [
      "Proven background in industrial machinery procurement or international engineering trading.",
      "Understanding of mechanical drawings, metallurgy basics, and Incoterms 2020.",
      "Excellent commercial negotiation and documentation auditing skills.",
    ],
    skills: ["Import/Export Compliance", "EN 10204 3.1", "Vendor Management", "Incoterms 2020", "Spares Sourcing"],
  },
  {
    id: "instrumentation-engineer",
    title: "Industrial Instrumentation & Drive Systems Engineer",
    department: "Hardware & Electrical",
    location: "Bengaluru HQ (with site visits)",
    type: "Full-time",
    experience: "2 - 5 Years",
    description:
      "Interface optical pyrometers, hot metal detectors, laser diameter gauges, load cells, and variable frequency drives (VFD) with automation control systems.",
    responsibilities: [
      "Specify and calibrate mill optical pyrometers, laser scanners, and loop height sensors.",
      "Commission drive communications over Profinet / Profibus to synchronize multi-stand speed references.",
      "Generate electrical schematics, loop drawings, and junction box termination schedules.",
    ],
    requirements: [
      "Bachelor's in Instrumentation & Control or Electrical Engineering.",
      "Hands-on experience with field sensors, ABB/Siemens drive systems, and electrical schematics.",
      "Familiarity with industrial grounding, noise shielding, and harsh plant installation environments.",
    ],
    skills: ["Profinet / Profibus", "Drive Systems (VFD)", "Field Sensors", "Electrical Schematics", "Calibration"],
  },
];

const DEPARTMENTS = [
  "All Roles",
  "L2 Software Engineering",
  "Field Engineering & Commissioning",
  "Process Engineering",
  "Spares Trading & Logistics",
  "Hardware & Electrical",
];

export const CareerPortal: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState("All Roles");
  const [expandedId, setExpandedId] = useState<string | null>("l2-lead-engineer");
  const [activeModalRole, setActiveModalRole] = useState<Vacancy | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    linkedin: "",
    message: "",
  });

  const filteredVacancies =
    selectedDept === "All Roles"
      ? VACANCIES
      : VACANCIES.filter((v) => v.department === selectedDept);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const openApplyModal = (role: Vacancy) => {
    setActiveModalRole(role);
    setSubmitted(false);
  };

  const closeApplyModal = () => {
    setActiveModalRole(null);
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      experience: "",
      linkedin: "",
      message: "",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div>
      <div className={styles.filterBar}>
        {DEPARTMENTS.map((dept) => {
          const count =
            dept === "All Roles"
              ? VACANCIES.length
              : VACANCIES.filter((v) => v.department === dept).length;
          const isActive = selectedDept === dept;
          return (
            <button
              key={dept}
              type="button"
              className={`${styles.filterBtn} ${isActive ? styles.filterBtnActive : ""}`}
              onClick={() => setSelectedDept(dept)}
            >
              <span>{dept}</span>
              <span className={styles.filterCount}>{count}</span>
            </button>
          );
        })}
      </div>

      <div className={styles.jobsGrid}>
        {filteredVacancies.map((vacancy) => {
          const isExpanded = expandedId === vacancy.id;
          return (
            <article key={vacancy.id} className={styles.jobCard}>
              <div className={styles.cardHeader}>
                <div>
                  <h3 className={styles.jobTitle}>{vacancy.title}</h3>
                </div>
                <div className={styles.badgesRow}>
                  <Badge variant="brand" size="sm">
                    {vacancy.department}
                  </Badge>
                  <Badge variant="default" size="sm">
                    {vacancy.type}
                  </Badge>
                </div>
              </div>

              <div className={styles.metaRow}>
                <span className={styles.metaItem}>
                  <MapPin size={15} />
                  {vacancy.location}
                </span>
                <span className={styles.metaItem}>
                  <Briefcase size={15} />
                  {vacancy.experience}
                </span>
                <span className={styles.metaItem}>
                  <Clock size={15} />
                  Immediate Opening
                </span>
              </div>

              <p className={styles.jobDesc}>{vacancy.description}</p>

              <button
                type="button"
                className={styles.detailsToggle}
                onClick={() => toggleExpand(vacancy.id)}
                aria-expanded={isExpanded}
              >
                {isExpanded ? (
                  <>
                    <span>Hide Role Details</span>
                    <ChevronUp size={16} />
                  </>
                ) : (
                  <>
                    <span>View Responsibilities & Qualifications</span>
                    <ChevronDown size={16} />
                  </>
                )}
              </button>

              {isExpanded && (
                <div className={styles.expandedDetails}>
                  <div className={styles.detailColumn}>
                    <h4 className={styles.columnHeading}>Core Responsibilities</h4>
                    <ul className={styles.checkList}>
                      {vacancy.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className={styles.checkItem}>
                          <CheckCircle2 size={16} className={styles.checkIcon} />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.detailColumn}>
                    <h4 className={styles.columnHeading}>Required Qualifications</h4>
                    <ul className={styles.checkList}>
                      {vacancy.requirements.map((req, qIdx) => (
                        <li key={qIdx} className={styles.checkItem}>
                          <CheckCircle2 size={16} className={styles.checkIcon} />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              <div className={styles.skillsRow}>
                {vacancy.skills.map((skill, sIdx) => (
                  <Badge key={sIdx} variant="mono" size="sm">
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className={styles.cardFooter}>
                <span className={styles.applyHint}>
                  Ref: #{vacancy.id.toUpperCase()} • Direct application reviewed by engineering leadership
                </span>
                <div className={styles.applyActions}>
                  <Button
                    variant="outline"
                    size="sm"
                    href={`mailto:careers@sys-trol.com?subject=Application%20for%20${encodeURIComponent(
                      vacancy.title
                    )}%20[${vacancy.id}]`}
                    leftIcon={<Mail size={14} />}
                  >
                    Apply via Email
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => openApplyModal(vacancy)}
                    leftIcon={<Send size={14} />}
                  >
                    Quick Apply
                  </Button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {activeModalRole && (
        <div className={styles.modalOverlay} onClick={closeApplyModal} role="dialog" aria-modal="true">
          <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div>
                <h3 className={styles.modalTitle}>Apply: {activeModalRole.title}</h3>
                <p className={styles.modalSubtitle}>
                  {activeModalRole.department} • {activeModalRole.location}
                </p>
              </div>
              <button
                type="button"
                className={styles.closeBtn}
                onClick={closeApplyModal}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {submitted ? (
              <div className={styles.successBox}>
                <div className={styles.successIcon}>
                  <Sparkles size={28} />
                </div>
                <h4 style={{ fontSize: "var(--text-xl)", fontWeight: 700, color: "var(--color-ink-900)" }}>
                  Application Received
                </h4>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--color-ink-700)", maxWidth: "440px" }}>
                  Thank you for applying for the <strong>{activeModalRole.title}</strong> role. Our engineering recruitment team will review your profile and contact you within 3 business days.
                </p>
                <Button variant="primary" size="md" onClick={closeApplyModal}>
                  Close Window
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className={styles.modalBody}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Full Name *</label>
                      <input
                        type="text"
                        required
                        className={styles.input}
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Email Address *</label>
                      <input
                        type="email"
                        required
                        className={styles.input}
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Phone Number *</label>
                      <input
                        type="tel"
                        required
                        className={styles.input}
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Years of Experience *</label>
                      <input
                        type="text"
                        required
                        className={styles.input}
                        placeholder="e.g. 5 Years"
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>LinkedIn Profile or Online Portfolio</label>
                    <input
                      type="url"
                      className={styles.input}
                      placeholder="https://linkedin.com/in/username"
                      value={formData.linkedin}
                      onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>Introduction or Key Industrial Projects *</label>
                    <textarea
                      required
                      className={styles.textarea}
                      placeholder="Briefly describe your experience with rolling mills, automation software, C# programming, or industrial machinery..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                </div>

                <div className={styles.modalFooter}>
                  <Button variant="ghost" size="md" type="button" onClick={closeApplyModal}>
                    Cancel
                  </Button>
                  <Button
                    variant="primary"
                    size="md"
                    type="submit"
                    isLoading={submitting}
                    leftIcon={<Send size={15} />}
                  >
                    Submit Application
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
