import React, { useState } from 'react';
import { meta } from '../portfolioData';
import {
  MailIcon,
  GithubIcon,
  LinkedinIcon,
  CopyIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  DownloadIcon,
} from './Icons';
import styles from './Contact.module.css';

export default function Contact({ onOpenResume }) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [statusMsg, setStatusMsg] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(meta.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMsg('Please complete all fields.');
      return;
    }
    // Form action fallback to mailto
    const mailtoUrl = `mailto:${meta.email}?subject=Portfolio Contact from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.email)}`;
    window.location.href = mailtoUrl;
    setStatusMsg('Opening mail client to send message...');
    setTimeout(() => setStatusMsg(''), 4000);
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.badgeLabel}>
            <span className={styles.labelDot} />
            <span>Initiate Contact</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Let's <span className={styles.cyanText}>Collaborate</span> &amp; Build
          </h2>
          <p className={styles.sectionSubtitle}>
            Whether you are looking for an aspiring DevOps &amp; Cloud engineer intern, exploring collaboration on full-stack or AI systems, or discussing technology—feel free to reach out.
          </p>
        </div>

        <div className={styles.contactGrid}>
          {/* Left Column: Direct Info Card */}
          <div className={styles.infoCard}>
            <h3 className={styles.infoHeading}>Direct Channels</h3>
            <p className={styles.infoDesc}>
              Available for technical internships, student research projects, and open-source contributions.
            </p>

            {/* Email Box with One-Click Copy */}
            <div className={styles.emailBox}>
              <div className={styles.emailLabel}>Email Address</div>
              <div className={styles.emailRow}>
                <a href={`mailto:${meta.email}`} className={styles.emailAddress}>
                  {meta.email}
                </a>
                <button
                  onClick={copyEmail}
                  className={styles.copyBtn}
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? <CheckCircleIcon size={16} /> : <CopyIcon size={16} />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Location & Status */}
            <div className={styles.metaBox}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Location:</span>
                <span className={styles.metaValue}>{meta.location}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Availability:</span>
                <span className={styles.metaValueGreen}>Open to Internships</span>
              </div>
            </div>

            {/* Resume Callout */}
            <div className={styles.cvCallout}>
              <div>
                <div className={styles.cvTitle}>Need a printable CV?</div>
                <div className={styles.cvSub}>Structured technical resume summary.</div>
              </div>
              <button onClick={onOpenResume} className={styles.cvBtn}>
                <DownloadIcon size={16} />
                <span>View CV</span>
              </button>
            </div>

            {/* Social Links */}
            <div className={styles.socialRow}>
              <a
                href={meta.github}
                target="_blank"
                rel="noreferrer"
                className={styles.socialBtn}
              >
                <GithubIcon size={18} />
                <span>GitHub</span>
              </a>
              <a
                href={meta.linkedin}
                target="_blank"
                rel="noreferrer"
                className={styles.socialBtn}
              >
                <LinkedinIcon size={18} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Message Form */}
          <div className={styles.formCard}>
            <h3 className={styles.formHeading}>Send a Direct Message</h3>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="contact-name" className={styles.label}>
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="e.g. Jane Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="contact-email" className={styles.label}>
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="contact-message" className={styles.label}>
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Tell me about your project, team, or opportunity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={styles.textarea}
                  required
                />
              </div>

              {statusMsg && <div className={styles.statusMsg}>{statusMsg}</div>}

              <button type="submit" className={styles.submitBtn}>
                <span>Send Message</span>
                <ArrowRightIcon size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
