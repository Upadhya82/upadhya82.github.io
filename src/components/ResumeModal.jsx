import React, { useEffect } from 'react';
import { meta, skillCategories, projects, education } from '../portfolioData';
import { CloseIcon, DownloadIcon, MailIcon, GithubIcon, LinkedinIcon } from './Icons';
import styles from './ResumeModal.module.css';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true" aria-label="Resume Modal">
      <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
        {/* Modal Toolbar */}
        <div className={styles.toolbar}>
          <div className={styles.toolbarTitle}>
            <span>Curriculum Vitae</span>
            <span className={styles.verifiedTag}>Verified Profile</span>
          </div>
          <div className={styles.toolbarActions}>
            <button onClick={handlePrint} className={styles.printBtn}>
              <DownloadIcon size={15} />
              <span>Print / Save as PDF</span>
            </button>
            <button onClick={onClose} className={styles.closeBtn} aria-label="Close modal">
              <CloseIcon size={18} />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className={styles.resumePaper}>
          <header className={styles.resumeHeader}>
            <h1 className={styles.candidateName}>{meta.name}</h1>
            <p className={styles.candidateSubtitle}>{meta.subtitle}</p>
            <div className={styles.contactRow}>
              <span>{meta.location}</span>
              <span>•</span>
              <a href={`mailto:${meta.email}`}>{meta.email}</a>
              <span>•</span>
              <a href={meta.github} target="_blank" rel="noreferrer">github.com/Upadhya82</a>
              <span>•</span>
              <a href={meta.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/upadhya-senanayaka</a>
            </div>
          </header>

          <section className={styles.resumeSection}>
            <h2 className={styles.sectionHeading}>Professional Summary</h2>
            <p className={styles.summaryText}>{meta.bio}</p>
          </section>

          <section className={styles.resumeSection}>
            <h2 className={styles.sectionHeading}>Education</h2>
            {education.map((item, idx) => (
              <div key={idx} className={styles.entryBlock}>
                <div className={styles.entryHeader}>
                  <strong className={styles.entryTitle}>{item.degree}</strong>
                  <span className={styles.entryPeriod}>{item.period}</span>
                </div>
                <div className={styles.entrySub}>{item.institution}</div>
                <p className={styles.entryDesc}>{item.description}</p>
              </div>
            ))}
          </section>

          <section className={styles.resumeSection}>
            <h2 className={styles.sectionHeading}>Technical Skills</h2>
            <div className={styles.skillsTable}>
              {skillCategories.map(cat => (
                <div key={cat.id} className={styles.skillRow}>
                  <strong className={styles.skillCategoryName}>{cat.title}:</strong>
                  <span>{cat.skills.map(s => s.name).join(', ')}</span>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.resumeSection}>
            <h2 className={styles.sectionHeading}>Featured Projects</h2>
            {projects.map(p => (
              <div key={p.id} className={styles.entryBlock}>
                <div className={styles.entryHeader}>
                  <strong className={styles.entryTitle}>{p.title} – {p.tagline}</strong>
                  <span className={styles.entryPeriod}>{p.status}</span>
                </div>
                <p className={styles.entryDesc}>{p.description}</p>
                <div className={styles.techStackNote}>
                  <strong>Technologies:</strong> {p.technologies.join(', ')}
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
