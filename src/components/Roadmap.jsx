import React, { useState } from 'react';
import { devopsRoadmap, journeyTimeline } from '../portfolioData';
import { ServerIcon, CheckCircleIcon, ClockIcon, ArrowRightIcon } from './Icons';
import styles from './Roadmap.module.css';

export default function Roadmap() {
  const [activeTab, setActiveTab] = useState('roadmap');

  return (
    <section id="roadmap" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.badgeLabel}>
            <span className={styles.labelDot} />
            <span>DevOps Evolution</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Engineering <span className={styles.cyanText}>Roadmap</span> &amp; <span className={styles.blueText}>Journey</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            A structured path from core computer systems fundamentals to modern automated cloud infrastructure.
          </p>

          {/* View Switcher Tabs */}
          <div className={styles.tabButtons}>
            <button
              onClick={() => setActiveTab('roadmap')}
              className={`${styles.tabBtn} ${activeTab === 'roadmap' ? styles.tabBtnActive : ''}`}
            >
              <ServerIcon size={16} />
              <span>DevOps Competency Roadmap</span>
            </button>
            <button
              onClick={() => setActiveTab('timeline')}
              className={`${styles.tabBtn} ${activeTab === 'timeline' ? styles.tabBtnActive : ''}`}
            >
              <ClockIcon size={16} />
              <span>Learning Timeline</span>
            </button>
          </div>
        </div>

        {/* Tab 1: DevOps Roadmap */}
        {activeTab === 'roadmap' && (
          <div className={styles.roadmapGrid}>
            {devopsRoadmap.map((item, index) => {
              const isCore = item.status.includes('Proficient');
              const isActive = item.status.includes('Active') || item.status.includes('Practicing');
              return (
                <div key={item.step} className={styles.roadmapCard}>
                  <div className={styles.cardTop}>
                    <span className={styles.stepNumber}>{item.step}</span>
                    <span
                      className={`${styles.statusPill} ${
                        isCore ? styles.statusCore : isActive ? styles.statusPracticing : styles.statusUpcoming
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <h3 className={styles.stepTitle}>{item.title}</h3>
                  <p className={styles.stepDesc}>{item.desc}</p>

                  <div className={styles.stepTags}>
                    {item.tags.map(tag => (
                      <span key={tag} className={styles.tagPill}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className={styles.cardConnector}>
                    {index < devopsRoadmap.length - 1 && (
                      <div className={styles.connectorLine} />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Learning Timeline */}
        {activeTab === 'timeline' && (
          <div className={styles.timelineList}>
            {journeyTimeline.map((item, idx) => (
              <div key={idx} className={styles.timelineItem}>
                <div className={styles.timelineYearBadge}>
                  <span>{item.year}</span>
                </div>
                <div className={styles.timelineDot}>
                  <div className={styles.timelineInnerDot} />
                </div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineHeader}>
                    <h3 className={styles.timelineTitle}>{item.title}</h3>
                    <span className={styles.timelineBadge}>{item.badge}</span>
                  </div>
                  <div className={styles.timelineSubtitle}>{item.subtitle}</div>
                  <p className={styles.timelineDesc}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
