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

function ContributionsGraph() {
  const [contributionData, setContributionData] = useState(null);
  const [contributionError, setContributionError] = useState(false);

  useEffect(() => {
    let active = true;
    fetch(`https://github-contributions-api.jogruber.de/v4/${meta.githubUsername}?y=last`)
      .then(response => {
        if (!response.ok) throw new Error('Could not load contribution data');
        return response.json();
      })
      .then(data => {
        if (active && Array.isArray(data.contributions)) setContributionData(data);
        else if (active) setContributionError(true);
      })
      .catch(() => { if (active) setContributionError(true); });
    return () => { active = false; };
  }, []);

  const weeks = [];
  if (contributionData) {
    const days = contributionData.contributions;
    const leadingBlanks = new Date(`${days[0].date}T00:00:00`).getDay();
    const alignedDays = [...Array(leadingBlanks).fill(null), ...days];
    while (alignedDays.length % 7) alignedDays.push(null);
    for (let i = 0; i < alignedDays.length; i += 7) weeks.push(alignedDays.slice(i, i + 7));
  }
  const total = contributionData?.total?.lastYear ?? Object.values(contributionData?.total || {}).reduce((sum, n) => sum + n, 0);

  return (
    <section className={styles.contributions} aria-label="GitHub contributions">
      <div className={styles.contributionsHeading}>
        <h3>Contribution activity</h3>
        <span>{contributionData ? `${total} contributions in the last year` : contributionError ? 'Contribution data unavailable' : 'Loading contributions…'}</span>
      </div>
      <div className={styles.contributionsCard}>
        <div className={styles.monthLabels} aria-hidden="true">{weeks.map((week, i) => {
          const firstDay = week.find(Boolean);
          const previousDay = i ? weeks[i - 1].find(Boolean) : null;
          const isNewMonth = firstDay && (!previousDay || new Date(`${firstDay.date}T00:00:00`).getMonth() !== new Date(`${previousDay.date}T00:00:00`).getMonth());
          return <span key={i}>{isNewMonth ? new Date(`${firstDay.date}T00:00:00`).toLocaleString('en', { month: 'short' }) : ''}</span>;
        })}</div>
        <div className={styles.graphBody}>
          <div className={styles.weekdayLabels} aria-hidden="true"><span>Mon</span><span>Wed</span><span>Fri</span></div>
          <div className={styles.contributionGrid} role="img" aria-label="GitHub contributions for the last year">
            {weeks.length ? weeks.map((week, column) => (
              <div className={styles.week} key={column}>
                {week.map((day, row) => (
                  <span key={row} className={`${styles.cell} ${styles[`level${day?.level ?? 0}`]}`} title={day ? `${day.count} contributions on ${day.date}` : undefined} />
                ))}
              </div>
            )) : Array.from({ length: 53 }, (_, column) => <div className={styles.week} key={column}>{Array.from({ length: 7 }, (_, row) => <span key={row} className={`${styles.cell} ${styles.level0}`} />)}</div>)}
          </div>
        </div>
        <div className={styles.graphFooter}>
          <span>{contributionError ? 'Could not load public GitHub contribution data' : 'Public GitHub contribution data'}</span>
          <span className={styles.legend}><i className={styles.level0} /> Less <i className={styles.level2} /><i className={styles.level3} /><i className={styles.level4} /> More</span>
        </div>
      </div>
    </section>
  );
}

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

        <ContributionsGraph />

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
