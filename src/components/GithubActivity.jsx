import React, { useState, useEffect } from 'react';
import { meta } from '../portfolioData';
import { GithubIcon, ExternalLinkIcon, GitBranchIcon } from './Icons';
import styles from './GithubActivity.module.css';

// Exactly the 3 requested repositories with verified, technically meaningful descriptions
const EXACT_REPOS = [
  {
    name: 'sticker-shop',
    description: 'Service appointment scheduling and customer review web application built with Next.js, TypeScript, Tailwind CSS, and Supabase PostgreSQL with Row-Level Security.',
    language: 'TypeScript / Next.js',
    html_url: 'https://github.com/Upadhya82/sticker-shop',
    updated_at: '2026-06-01T00:00:00Z',
  },
  {
    name: 'ai-smart-traffic-management',
    description: 'Vision-based adaptive traffic signal simulation modeling intersection demand, queue dynamics, and vehicle arrival delays, with planned OpenCV and deep learning detection.',
    language: 'Python',
    html_url: 'https://github.com/Upadhya82/ai-smart-traffic-management',
    updated_at: '2026-06-12T00:00:00Z',
  },
  {
    name: 'cost-manager',
    description: 'React & TypeScript production costing system for calculating accurate per-packet product costs, raw material wastage, processing expenses, and profit margins.',
    language: 'TypeScript / React',
    html_url: 'https://github.com/Upadhya82/cost-manager',
    updated_at: '2026-05-20T00:00:00Z',
  },
];

const ALLOWED_NAMES = ['sticker-shop', 'ai-smart-traffic-management', 'cost-manager'];

export default function GithubActivity() {
  const [repos, setRepos] = useState(EXACT_REPOS);
  const [statusText, setStatusText] = useState('Synchronized');

  useEffect(() => {
    let isMounted = true;
    async function fetchRepos() {
      try {
        const res = await fetch(`https://api.github.com/users/${meta.githubUsername}/repos?sort=updated&per_page=20`, {
          headers: {
            Accept: 'application/vnd.github.v3+json',
          },
        });
        if (res.ok) {
          const data = await res.json();
          if (isMounted && Array.isArray(data)) {
            // Build map of dynamic GitHub data matching only the allowed 3 repositories
            const liveMap = new Map();
            data.forEach(repo => {
              const lower = repo.name.toLowerCase();
              if (ALLOWED_NAMES.includes(lower)) {
                liveMap.set(lower, repo);
              }
            });

            // Maintain strictly the three target repositories in exact order
            const merged = EXACT_REPOS.map(fallback => {
              const live = liveMap.get(fallback.name.toLowerCase());
              if (live) {
                return {
                  ...fallback,
                  html_url: live.html_url || fallback.html_url,
                  language: live.language || fallback.language,
                  updated_at: live.updated_at || fallback.updated_at,
                };
              }
              return fallback;
            });

            setRepos(merged);
            setStatusText('Live GitHub Data');
          }
        } else {
          setStatusText('Curated Repositories');
        }
      } catch (err) {
        setStatusText('Curated Repositories');
      }
    }

    fetchRepos();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <div>
            <div className={styles.badgeLabel}>
              <span className={styles.labelDot} />
              <span>Open Source &amp; Version Control</span>
            </div>
            <h2 className={styles.sectionTitle}>
              GitHub <span className={styles.cyanText}>Activity</span> &amp; Repositories
            </h2>
          </div>

          <div className={styles.statusIndicator}>
            <span className={styles.liveDot} />
            <span className={styles.statusLabel}>{statusText}</span>
            <a
              href={meta.github}
              target="_blank"
              rel="noreferrer"
              className={styles.profileBtn}
            >
              <GithubIcon size={16} />
              <span>@{meta.githubUsername}</span>
              <ExternalLinkIcon size={14} />
            </a>
          </div>
        </div>

        <div className={styles.reposGrid}>
          {repos.map(repo => (
            <div key={repo.name} className={styles.repoCard}>
              <div className={styles.repoTop}>
                <div className={styles.repoNameGroup}>
                  <GitBranchIcon size={16} className={styles.branchIcon} />
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.repoName}
                  >
                    {repo.name}
                  </a>
                </div>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.repoLinkIcon}
                  aria-label={`Open ${repo.name}`}
                >
                  <ExternalLinkIcon size={15} />
                </a>
              </div>

              <p className={styles.repoDesc}>{repo.description}</p>

              <div className={styles.repoMeta}>
                <div className={styles.metaLang}>
                  <span className={styles.langColor} />
                  <span>{repo.language || 'Code'}</span>
                </div>
                <div className={styles.metaVisibility}>Public</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
