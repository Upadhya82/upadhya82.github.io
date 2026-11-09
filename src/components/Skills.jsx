import React, { useState } from 'react';
import { skillCategories } from '../portfolioData';
import {
  ServerIcon,
  DatabaseIcon,
  CodeIcon,
  CpuIcon,
  LayersIcon,
  SmartphoneIcon,
  CheckCircleIcon,
} from './Icons';
import styles from './Skills.module.css';

const ICONS = {
  server: ServerIcon,
  database: DatabaseIcon,
  code: CodeIcon,
  cpu: CpuIcon,
  layers: LayersIcon,
  smartphone: SmartphoneIcon,
};

export default function Skills() {
  const [selectedCat, setSelectedCat] = useState('all');

  const filteredCategories =
    selectedCat === 'all'
      ? skillCategories
      : skillCategories.filter(c => c.id === selectedCat);

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.badgeLabel}>
            <span className={styles.labelDot} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Tools, Technologies &amp; <span className={styles.cyanText}>Stack</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Organized transparently by domain and practical proficiency level.
          </p>

          {/* Category Filter Pills */}
          <div className={styles.categoryFilters}>
            <button
              onClick={() => setSelectedCat('all')}
              className={`${styles.filterBtn} ${selectedCat === 'all' ? styles.filterBtnActive : ''}`}
            >
              All Domains
            </button>
            {skillCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat.id)}
                className={`${styles.filterBtn} ${selectedCat === cat.id ? styles.filterBtnActive : ''}`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className={styles.categoriesGrid}>
          {filteredCategories.map(category => {
            const IconComponent = ICONS[category.icon] || ServerIcon;
            return (
              <div key={category.id} className={styles.categoryCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconBox}>
                    <IconComponent size={20} />
                  </div>
                  <div>
                    <h3 className={styles.categoryTitle}>{category.title}</h3>
                    <p className={styles.categoryDesc}>{category.description}</p>
                  </div>
                </div>

                <div className={styles.skillsList}>
                  {category.skills.map(s => {
                    const isCore = s.badge === 'Core';
                    const isLearning = s.badge === 'Learning';
                    return (
                      <div key={s.name} className={styles.skillItem}>
                        <div className={styles.skillMain}>
                          <div className={styles.skillNameGroup}>
                            <CheckCircleIcon size={14} className={styles.checkIcon} />
                            <span className={styles.skillName}>{s.name}</span>
                          </div>
                          <span
                            className={`${styles.badge} ${
                              isCore ? styles.badgeCore : isLearning ? styles.badgeLearning : styles.badgeActive
                            }`}
                          >
                            {s.badge}
                          </span>
                        </div>
                        <div className={styles.skillLevel}>{s.level}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
