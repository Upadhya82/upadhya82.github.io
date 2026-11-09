import React from 'react';
import { meta } from '../portfolioData';
import { GithubIcon, LinkedinIcon, MailIcon, ServerIcon } from './Icons';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          <div className={styles.brandCol}>
            <div className={styles.brandLogo}>
              <ServerIcon size={18} className={styles.brandIcon} />
              <span className={styles.brandName}>{meta.name}</span>
            </div>
            <p className={styles.brandTagline}>{meta.subtitle}</p>
            <div className={styles.ciBadge}>
              <span className={styles.ciDot} />
              <span>CI/CD Validated • React 18</span>
            </div>
          </div>

          <div className={styles.linksCol}>
            <div className={styles.colHeader}>Navigation</div>
            <ul className={styles.linksList}>
              <li><a href="#about">About Me</a></li>
              <li><a href="#roadmap">DevOps Roadmap</a></li>
              <li><a href="#skills">Technical Skills</a></li>
              <li><a href="#projects">Featured Projects</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className={styles.socialCol}>
            <div className={styles.colHeader}>Connect</div>
            <div className={styles.socialIcons}>
              <a
                href={meta.github}
                target="_blank"
                rel="noreferrer"
                className={styles.socialIconBtn}
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={meta.linkedin}
                target="_blank"
                rel="noreferrer"
                className={styles.socialIconBtn}
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={`mailto:${meta.email}`}
                className={styles.socialIconBtn}
                aria-label="Email"
              >
                <MailIcon size={18} />
              </a>
            </div>
            <p className={styles.locationNote}>{meta.location}</p>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {currentYear} {meta.name}. All rights reserved.
          </p>
          <p className={styles.quote}>
            "Building. Automating. Innovating."
          </p>
        </div>
      </div>
    </footer>
  );
}
