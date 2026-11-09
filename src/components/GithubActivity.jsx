import React, { useState, useEffect } from 'react';
import { meta } from '../portfolioData';
import { GithubIcon, ExternalLinkIcon, GitBranchIcon, CheckCircleIcon } from './Icons';
import styles from './GithubActivity.module.css';

const FALLBACK_REPOS = [
  {
    name: 'ai-smart-traffic-management',
    description: 'AI-based smart traffic management system using OpenCV and YOLO computer vision for vehicular flow optimization.',
    language: 'Python',
    html_url: 'https://github.com/Upadhya82/ai-smart-traffic-management',
    updated_at: '2026-06-12T00:00:00Z',
  },
  {
    name: 'cost-manager',
    description: 'Personal expense and financial management application with real-time budget tracking and modular component design.',
    language: 'JavaScript / React',
    html_url: 'https://github.com/Upadhya82/cost-manager',
    updated_at: '2026-05-20T00:00:00Z',
  },
  {
    name: 'Upadhya82.github.io',
    description: 'Personal engineering portfolio showcasing DevOps learning roadmap, automated CI/CD workflows, and full-stack projects.',
    language: 'React / CSS Modules',
    html_url: 'https://github.com/Upadhya82/Upadhya82.github.io',
    updated_at: '2026-11-09T00:00:00Z',
  },
];

export default function GithubActivity() {
  const [repos, setRepos] = useState(FALLBACK_REPOS);
  const [loading, setLoading] = useState(false);
  const [statusText, setStatusText] = useState('Synchronized');

  useEffect(() => {
    let isMounted = true;
    async function fetchRepos() {
      setLoading(true);
      try {
        const res = await fetch(`https://api.github.com/users/${meta.githubUsername}/repos?sort=updated&per_page=6`, {
          headers: {
            Accept: 'application/vnd.github.v3+json',
          },
        });
        if (res.ok) {
          const data = await res.json();
          if (isMounted && Array.isArray(data) && data.length > 0) {
            setRepos(data.slice(0, 4));
            setStatusText('Live GitHub Data');
          }
        } else {
          setStatusText('Curated Repositories');
        }
      } catch (err) {
        setStatusText('Curated Repositories');
      } finally {
        if (isMounted) setLoading(false);
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

              <p className={styles.repoDesc}>
                {repo.description || 'DevOps and software engineering repository.'}
              </p>

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
