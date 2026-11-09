import React, { useState, useEffect } from 'react';
import { meta } from '../portfolioData';
import { DownloadIcon, MailIcon, ServerIcon } from './Icons';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map(l => l.href.substring(1));
      const scrollPos = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#hero" className={styles.logoGroup} aria-label="Home">
          <div className={styles.logoIcon}>
            <ServerIcon size={18} />
          </div>
          <div className={styles.logoText}>
            <span className={styles.logoName}>{meta.initials}</span>
            <span className={styles.logoTag}>DevOps</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className={styles.navDesktop} aria-label="Main Navigation">
          <ul className={styles.links}>
            {NAV_LINKS.map(link => {
              const secId = link.href.substring(1);
              const isActive = activeSection === secId;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`${styles.navLink} ${isActive ? styles.activeLink : ''}`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className={styles.actions}>
          <button
            onClick={onOpenResume}
            className={styles.cvBtn}
            title="View or Download Resume"
          >
            <DownloadIcon size={15} />
            <span>CV</span>
          </button>

          <a href="#contact" className={styles.contactBtn}>
            <MailIcon size={15} />
            <span>Connect</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`${styles.mobileDrawer} ${menuOpen ? styles.mobileOpen : ''}`}>
        <ul className={styles.mobileLinks}>
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={styles.mobileLink}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className={styles.mobileDrawerActions}>
            <button
              onClick={() => {
                setMenuOpen(false);
                if (onOpenResume) onOpenResume();
              }}
              className={styles.mobileCvBtn}
            >
              <DownloadIcon size={16} />
              <span>Download CV</span>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
