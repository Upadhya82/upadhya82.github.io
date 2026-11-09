import React from 'react';
import { meta } from '../portfolioData';
import Terminal from './Terminal';
import {
  GithubIcon,
  LinkedinIcon,
  DownloadIcon,
  MailIcon,
  ArrowRightIcon,
  ServerIcon,
  CloudIcon,
  CpuIcon,
} from './Icons';
import styles from './Hero.module.css';

export default function Hero({ onOpenResume }) {
  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.container}>
        {/* Left Column: Hero Introduction */}
        <div className={styles.introCol}>
          {/* Status Badge */}
          <div className={styles.statusBadge}>
            <span className={styles.beaconPing} />
            <span className={styles.beaconDot} />
            <span className={styles.badgeText}>{meta.badge}</span>
          </div>

          {/* Headline & Name */}
          <div className={styles.nameGroup}>
            <p className={styles.greeting}>Hello, I'm</p>
            <h1 className={styles.name}>{meta.name}</h1>
            <h2 className={styles.headline}>
              <span>Building. </span>
              <span className={styles.gradientText}>Automating. </span>
              <span>Innovating.</span>
            </h2>
          </div>

          {/* Professional Subtitle */}
          <p className={styles.subtitle}>{meta.subtitle}</p>

          {/* Description */}
          <p className={styles.bio}>
            Information Technology undergraduate at the{' '}
            <strong className={styles.highlight}>Institute of Technology, University of Moratuwa</strong>, 
            focusing on DevOps, cloud infrastructure, containerized environments, and full-stack software development.
          </p>

          {/* Key Engineering Pillars */}
          <div className={styles.pillars}>
            <div className={styles.pillar}>
              <ServerIcon size={16} className={styles.pillarIcon} />
              <span>CI/CD & Docker</span>
            </div>
            <div className={styles.pillar}>
              <CloudIcon size={16} className={styles.pillarIcon} />
              <span>Cloud Foundations</span>
            </div>
            <div className={styles.pillar}>
              <CpuIcon size={16} className={styles.pillarIcon} />
              <span>AI / ML Vision</span>
            </div>
          </div>

          {/* Action Button Row */}
          <div className={styles.btnRow}>
            <a href="#projects" className={styles.btnPrimary}>
              <span>Explore Projects</span>
              <ArrowRightIcon size={16} />
            </a>

            <button onClick={onOpenResume} className={styles.btnSecondary}>
              <DownloadIcon size={16} />
              <span>Resume / CV</span>
            </button>

            <a href="#contact" className={styles.btnOutline}>
              <MailIcon size={16} />
              <span>Contact</span>
            </a>
          </div>

          {/* Social Links */}
          <div className={styles.socialRow}>
            <span className={styles.socialLabel}>Profiles:</span>
            <a
              href={meta.github}
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
              aria-label="GitHub Profile"
            >
              <GithubIcon size={18} />
              <span>GitHub</span>
            </a>
            <a
              href={meta.linkedin}
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Terminal & Avatar Frame */}
        <div className={styles.terminalCol}>
          <div className={styles.avatarBar}>
            <div className={styles.avatarGlowRing}>
              <div className={styles.avatarInner}>
                <span className={styles.avatarInitials}>{meta.initials}</span>
              </div>
            </div>
            <div className={styles.avatarDetails}>
              <div className={styles.avatarName}>{meta.name}</div>
              <div className={styles.avatarRole}>DevOps & Cloud Aspirant</div>
            </div>
            <div className={styles.onlineBadge}>
              <span className={styles.onlineDot} />
              <span>Online</span>
            </div>
          </div>

          {/* Interactive Terminal Panel */}
          <Terminal />
        </div>
      </div>
    </section>
  );
}
