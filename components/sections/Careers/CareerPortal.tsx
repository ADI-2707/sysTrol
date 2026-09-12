"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge/Badge";
import { Button } from "@/components/ui/Button/Button";
import {
  Briefcase,
  MapPin,
  X,
  Send,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { Vacancy, vacanciesData, careerDepartments } from "@/content/careers";
import styles from "./CareerPortal.module.css";

export const CareerPortal: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState("All Roles");
  const [activeApplyRole, setActiveApplyRole] = useState<Vacancy | null>(null);
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
      ? vacanciesData
      : vacanciesData.filter((v) => v.department === selectedDept);

  const openApplyModal = (role: Vacancy) => {
    setActiveApplyRole(role);
    setSubmitted(false);
  };

  const closeApplyModal = () => {
    setActiveApplyRole(null);
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
        {careerDepartments.map((dept) => {
          const count =
            dept === "All Roles"
              ? vacanciesData.length
              : vacanciesData.filter((v) => v.department === dept).length;
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
        {filteredVacancies.map((vacancy) => (
          <article key={vacancy.id} className={styles.jobCard}>
            <div className={styles.cardTop}>
              <div className={styles.badgesRow}>
                <Badge variant="brand" size="sm">
                  {vacancy.department}
                </Badge>
                <Badge variant="default" size="sm">
                  {vacancy.type}
                </Badge>
              </div>

              <h3 className={styles.jobTitle}>{vacancy.title}</h3>

              <div className={styles.metaRow}>
                <span className={styles.metaItem}>
                  <MapPin size={13} />
                  {vacancy.location}
                </span>
                <span className={styles.metaItem}>
                  <Briefcase size={13} />
                  {vacancy.experience}
                </span>
              </div>
            </div>

            <p className={styles.jobDesc}>{vacancy.description}</p>

            <div className={styles.skillsRow}>
              {vacancy.skills.slice(0, 3).map((skill, sIdx) => (
                <Badge key={sIdx} variant="mono" size="sm">
                  {skill}
                </Badge>
              ))}
              {vacancy.skills.length > 3 && (
                <Badge variant="default" size="sm">
                  +{vacancy.skills.length - 3}
                </Badge>
              )}
            </div>

            <div className={styles.cardFooter}>
              <Link
                href={`/careers/${vacancy.id}`}
                className={styles.viewDetailsBtn}
              >
                <span>View Details</span>
                <ArrowUpRight size={14} />
              </Link>
              <Button
                variant="primary"
                size="sm"
                onClick={() => openApplyModal(vacancy)}
                leftIcon={<Send size={13} />}
              >
                Apply
              </Button>
            </div>
          </article>
        ))}
      </div>

      {activeApplyRole && (
        <div
          className={styles.modalOverlay}
          onClick={closeApplyModal}
          role="dialog"
          aria-modal="true"
        >
          <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div>
                <h3 className={styles.modalTitle}>Apply: {activeApplyRole.title}</h3>
                <p className={styles.modalSubtitle}>
                  {activeApplyRole.department} • {activeApplyRole.location}
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
                  Thank you for applying for the <strong>{activeApplyRole.title}</strong> role. Our engineering recruitment team will review your profile and contact you within 3 business days.
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
