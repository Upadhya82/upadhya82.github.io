import React from 'react';
import { meta } from '../portfolioData';
import {
  ServerIcon,
  CloudIcon,
  CodeIcon,
  CpuIcon,
  GraduationCapIcon,
  GitBranchIcon,
} from './Icons';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.badgeLabel}>
            <span className={styles.labelDot} />
            <span>Identity & Philosophy</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Engineering for <span className={styles.cyanText}>Reliability</span> &amp; <span className={styles.blueText}>Scale</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Bridging software development with automated operations and infrastructure.
          </p>
        </div>

        {/* Main About Grid */}
        <div className={styles.mainGrid}>
          {/* Left: Detailed Story Card */}
          <div className={styles.storyCard}>
            <h3 className={styles.cardHeading}>Who I Am</h3>
            <p className={styles.paragraph}>
              I am an Information Technology student at the{' '}
              <strong className={styles.whiteText}>Institute of Technology, University of Moratuwa</strong>, 
              focusing my career path on <strong className={styles.cyanText}>DevOps and Cloud Engineering</strong> alongside modern full-stack development.
            </p>
            <p className={styles.paragraph}>
              My engineering philosophy revolves around creating resilient, maintainable systems. Rather than viewing development and deployment as isolated phases, I aim to automate the entire lifecycle—from containerizing microservices with Docker to writing continuous integration pipelines in GitHub Actions.
            </p>
            <p className={styles.paragraph}>
              Beyond core infrastructure, I build robust backend APIs with Python and FastAPI, develop clean user experiences with React, and experiment with applied AI and Computer Vision using YOLO and OpenCV.
            </p>

            {/* Core Values / Competencies */}
            <div className={styles.valuePoints}>
              <div className={styles.valueItem}>
                <div className={styles.valueIcon}><ServerIcon size={16} /></div>
                <div>
                  <div className={styles.valueTitle}>DevOps &amp; Infrastructure</div>
                  <div className={styles.valueDesc}>Linux environments, Docker containerization, CI/CD pipelines &amp; cloud fundamentals.</div>
                </div>
              </div>

              <div className={styles.valueItem}>
                <div className={styles.valueIcon}><CodeIcon size={16} /></div>
                <div>
                  <div className={styles.valueTitle}>Full-Stack Development</div>
                  <div className={styles.valueDesc}>FastAPI backends, PostgreSQL schemas, Redis caches &amp; responsive React interfaces.</div>
                </div>
              </div>

              <div className={styles.valueItem}>
                <div className={styles.valueIcon}><CpuIcon size={16} /></div>
                <div>
                  <div className={styles.valueTitle}>AI &amp; Computer Vision</div>
                  <div className={styles.valueDesc}>Vehicle detection, model inference pipelines, and real-time vision algorithms.</div>
                </div>
              </div>

              <div className={styles.valueItem}>
                <div className={styles.valueIcon}><GitBranchIcon size={16} /></div>
                <div>
                  <div className={styles.valueTitle}>Team Leadership &amp; Workflows</div>
                  <div className={styles.valueDesc}>Collaborative Git workflows, clear technical documentation &amp; agile execution.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Academic & Engineering Summary Cards */}
          <div className={styles.sideCol}>
            {/* Academic Card */}
            <div className={styles.academicCard}>
              <div className={styles.academicHeader}>
                <GraduationCapIcon size={22} className={styles.academicIcon} />
                <div>
                  <div className={styles.academicTitle}>Higher National Diploma in IT</div>
                  <div className={styles.academicSub}>Institute of Technology, University of Moratuwa</div>
                </div>
              </div>
              <p className={styles.academicText}>
                Active academic coursework in data structures, systems architecture, computer networks, database systems, and object-oriented programming.
              </p>
              <div className={styles.academicTag}>Current Enrollment: 2025 – 2027</div>
            </div>

            {/* Metrics Grid */}
            <div className={styles.statsGrid}>
              {meta.stats.map(s => (
                <div key={s.label} className={styles.statCard}>
                  <div className={styles.statVal}>{s.value}</div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Quick Status Box */}
            <div className={styles.statusBox}>
              <div className={styles.statusBoxHeader}>
                <CloudIcon size={18} className={styles.statusCloudIcon} />
                <span className={styles.statusBoxTitle}>Current Trajectory</span>
              </div>
              <p className={styles.statusBoxDesc}>
                Actively learning and practicing cloud orchestration (Docker, CI/CD, Linux automation) to prepare for internship roles in DevOps, Site Reliability, and Cloud Engineering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
