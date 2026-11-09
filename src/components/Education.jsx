import React from 'react';
import { education } from '../portfolioData';
import { GraduationCapIcon, CheckCircleIcon } from './Icons';
import styles from './Education.module.css';

export default function Education() {
  return (
    <section id="education" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.badgeLabel}>
            <span className={styles.labelDot} />
            <span>Academic Background</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Formal <span className={styles.cyanText}>Education</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Rigorous foundations in Information Technology and Physical Sciences.
          </p>
        </div>

        <div className={styles.educationGrid}>
          {education.map((item, index) => {
            const isActive = item.status === 'Active';
            return (
              <div key={index} className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconBox}>
                    <GraduationCapIcon size={24} />
                  </div>
                  <div className={styles.titleGroup}>
                    <div className={styles.topRow}>
                      <span className={styles.period}>{item.period}</span>
                      <span
                        className={`${styles.statusBadge} ${
                          isActive ? styles.statusActive : styles.statusCompleted
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                    <h3 className={styles.degree}>{item.degree}</h3>
                    <div className={styles.institution}>{item.institution}</div>
                  </div>
                </div>

                <p className={styles.description}>{item.description}</p>

                {item.highlights && (
                  <div className={styles.highlightsList}>
                    {item.highlights.map((h, hIdx) => (
                      <div key={hIdx} className={styles.highlightItem}>
                        <CheckCircleIcon size={14} className={styles.checkIcon} />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
