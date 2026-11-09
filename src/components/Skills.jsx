import React, { useState } from 'react';
import {
  ServerIcon,
  DatabaseIcon,
  CodeIcon,
  CpuIcon,
  LayersIcon,
  SmartphoneIcon,
} from './Icons';
import { TECH_LOGO_MAP } from './TechLogos';
import styles from './Skills.module.css';

const SHOWCASE_GROUPS = [
  {
    id: 'devops',
    title: 'DevOps & Infrastructure',
    icon: 'server',
    badge: 'Core Focus',
    items: [
      { name: 'Docker', logo: 'docker', desc: 'Containers & Compose' },
      { name: 'Linux', logo: 'linux', desc: 'System Administration' },
      { name: 'Git', logo: 'git', desc: 'Version Control' },
      { name: 'GitHub Actions', logo: 'githubactions', desc: 'CI/CD Pipelines' },
      { name: 'Bash', logo: 'bash', desc: 'Shell Automation' },
      { name: 'AWS', logo: 'aws', desc: 'Cloud Primitives', status: 'Learning' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: 'code',
    badge: 'APIs & Logic',
    items: [
      { name: 'Python', logo: 'python', desc: 'Core Backend Logic' },
      { name: 'FastAPI', logo: 'fastapi', desc: 'Asynchronous APIs' },
      { name: 'REST APIs', logo: 'restapis', desc: 'API Architecture' },
      { name: 'Redis', logo: 'redis', desc: 'Caching & Sessions' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: 'layers',
    badge: 'Modern Web',
    items: [
      { name: 'React', logo: 'react', desc: 'Reactive Interfaces' },
      { name: 'JavaScript', logo: 'javascript', desc: 'ES6+ Architecture' },
      { name: 'TypeScript', logo: 'typescript', desc: 'Type Safety' },
      { name: 'Tailwind CSS', logo: 'tailwindcss', desc: 'Utility Design' },
      { name: 'HTML5', logo: 'html5', desc: 'Semantic Layouts' },
      { name: 'CSS3', logo: 'css3', desc: 'Visual Transitions' },
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile Application Development',
    icon: 'smartphone',
    badge: 'Cross-Platform',
    items: [
      { name: 'Flutter', logo: 'flutter', desc: 'Cross-Platform App UI' },
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI & Computer Vision',
    icon: 'cpu',
    badge: 'Vision & Models',
    items: [
      { name: 'OpenCV', logo: 'opencv', desc: 'Computer Vision' },
      { name: 'YOLO', logo: 'yolo', desc: 'Object Detection' },
      { name: 'Python', logo: 'python', desc: 'Model Scripting' },
      { name: 'NumPy', logo: 'numpy', desc: 'Array Mathematics' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases & Tools',
    icon: 'database',
    badge: 'Persistence',
    items: [
      { name: 'PostgreSQL', logo: 'postgresql', desc: 'Relational Schema' },
      { name: 'Redis', logo: 'redis', desc: 'In-Memory Cache' },
      { name: 'VS Code', logo: 'vscode', desc: 'Engineering IDE' },
      { name: 'Git Flow', logo: 'git', desc: 'Branch Strategies' },
    ],
  },
];

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

  const filteredGroups =
    selectedCat === 'all'
      ? SHOWCASE_GROUPS
      : SHOWCASE_GROUPS.filter(g => g.id === selectedCat);

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.badgeLabel}>
            <span className={styles.labelDot} />
            <span>3D Technology Showcase</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Tools, Technologies &amp; <span className={styles.cyanText}>Stack</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Zero-gravity technology showcase featuring active tools, frameworks, and infrastructure primitives.
          </p>

          {/* Quick Category Filter Pills */}
          <div className={styles.categoryFilters}>
            <button
              onClick={() => setSelectedCat('all')}
              className={`${styles.filterBtn} ${selectedCat === 'all' ? styles.filterBtnActive : ''}`}
            >
              All Technologies
            </button>
            {SHOWCASE_GROUPS.map(group => (
              <button
                key={group.id}
                onClick={() => setSelectedCat(group.id)}
                className={`${styles.filterBtn} ${selectedCat === group.id ? styles.filterBtnActive : ''}`}
              >
                {group.title}
              </button>
            ))}
          </div>
        </div>

        {/* Compact 3D Floating Showcase Grid */}
        <div className={styles.showcaseGrid}>
          {filteredGroups.map(group => {
            const IconComponent = ICONS[group.icon] || ServerIcon;
            return (
              <div key={group.id} className={styles.glassCard}>
                {/* Minimal Card Header */}
                <div className={styles.cardHeader}>
                  <div className={styles.categoryTitleGroup}>
                    <div className={styles.iconMini}>
                      <IconComponent size={15} />
                    </div>
                    <h3 className={styles.categoryTitle}>{group.title}</h3>
                  </div>
                  <span className={styles.countBadge}>{group.badge}</span>
                </div>

                {/* Floating 3D Logos Cluster */}
                <div className={styles.logoCluster}>
                  {group.items.map((item, idx) => {
                    const LogoComponent = TECH_LOGO_MAP[item.logo] || CodeIcon;
                    // Stagger floating animations (3 cadence variations)
                    const floatClass =
                      idx % 3 === 0
                        ? styles.floatA
                        : idx % 3 === 1
                        ? styles.floatB
                        : styles.floatC;

                    return (
                      <div
                        key={item.name + idx}
                        className={`${styles.floatingPod} ${floatClass}`}
                        title={`${item.name} • ${item.desc}`}
                      >
                        {/* 3D Glass Floating Puck */}
                        <div className={styles.puck}>
                          <div className={styles.logoGlow} />
                          <div className={styles.logoContainer}>
                            <LogoComponent size={30} />
                          </div>
                          {item.status && (
                            <span className={styles.learningDot} title={item.status} />
                          )}
                        </div>

                        {/* Tech Name Label */}
                        <span className={styles.techName}>{item.name}</span>
                        {item.status && (
                          <span className={styles.learningBadge}>{item.status}</span>
                        )}
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
