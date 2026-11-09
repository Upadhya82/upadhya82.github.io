import React, { useState } from 'react';
import { projects } from '../portfolioData';
import {
  GithubIcon,
  ExternalLinkIcon,
  CheckCircleIcon,
  LayersIcon,
} from './Icons';
import styles from './Projects.module.css';

const FILTER_TABS = [
  { key: 'all', label: 'All Projects' },
  { key: 'fullstack', label: 'Full-Stack & Systems' },
  { key: 'ai-ml', label: 'AI & Computer Vision' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.badgeLabel}>
            <span className={styles.labelDot} />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Architected &amp; <span className={styles.cyanText}>Built</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Real-world systems highlighting scalable backend architectures, containerized designs, computer vision pipelines, and clean frontend engineering.
          </p>

          {/* Filter Pills */}
          <div className={styles.filterPills}>
            {FILTER_TABS.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key)}
                className={`${styles.filterBtn} ${activeFilter === tab.key ? styles.filterBtnActive : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className={styles.projectsGrid}>
          {filteredProjects.map(project => {
            const isPending =
              project.status.includes('Development') ||
              project.status.includes('Progress');
            return (
              <div key={project.id} className={styles.projectCard}>
                {/* Header with Category & Status */}
                <div className={styles.cardHeader}>
                  <span className={styles.categoryBadge}>{project.categoryLabel}</span>
                  <span
                    className={`${styles.statusBadge} ${
                      isPending ? styles.statusInDev : styles.statusCompleted
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectTagline}>{project.tagline}</p>

                {/* Description */}
                <p className={styles.projectDesc}>{project.description}</p>

                {/* Architecture Highlights */}
                {project.highlights && (
                  <div className={styles.highlightsBox}>
                    <div className={styles.highlightsHeader}>Key Engineering Highlights:</div>
                    <ul className={styles.highlightsList}>
                      {project.highlights.map((h, idx) => (
                        <li key={idx} className={styles.highlightItem}>
                          <CheckCircleIcon size={13} className={styles.highlightIcon} />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies List */}
                <div className={styles.techPills}>
                  {project.technologies.map(tech => (
                    <span key={tech} className={styles.techPill}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Actions Footer */}
                <div className={styles.cardFooter}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.actionBtn}
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <GithubIcon size={16} />
                      <span>Source Code</span>
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.actionBtn} ${styles.demoBtn}`}
                      aria-label={`${project.title} Live Demo`}
                    >
                      <ExternalLinkIcon size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}

                  {isPending && (
                    <span className={styles.devNote}>
                      Active Development Phase
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
