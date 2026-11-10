import React, { useEffect, useState } from 'react';
import styles from './DesignPortfolio.module.css';

const works = [
  {
    src: `${process.env.PUBLIC_URL}/assets/design/graphic-design/biryani-poster.jpg`,
    title: 'Special Tasty Biryani',
    category: 'Posters & Flyers',
    alt: 'Colorful Sinhala and English biryani food advertisement poster',
  },
  {
    src: `${process.env.PUBLIC_URL}/assets/design/graphic-design/applied-maths-flyer.jpg`,
    title: 'Applied Maths 2026',
    category: 'Posters & Flyers',
    alt: 'Black and white applied maths group class flyer with a runner and clock',
  },
  {
    src: `${process.env.PUBLIC_URL}/assets/design/graphic-design/ol-history-poster.jpg`,
    title: 'O/L History 2024',
    category: 'Posters & Flyers',
    alt: 'Sinhala O/L history tuition poster featuring a temple illustration',
  },
  {
    src: `${process.env.PUBLIC_URL}/assets/design/graphic-design/al-combined-maths-poster.jpg`,
    title: 'A/L Combined Maths 2025',
    category: 'Posters & Flyers',
    alt: 'Red and white A/L Combined Maths 2025 class poster shown as a tabletop mockup',
  },
];

export default function DesignPortfolio() {
  const [filter, setFilter] = useState('All Work');
  const [selected, setSelected] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const filters = ['All Work', ...new Set(works.map(work => work.category))];
  const visibleWorks = filter === 'All Work' ? works : works.filter(work => work.category === filter);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide(current => current + 1);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [visibleWorks.length]);

  const handleCarouselEnd = () => {
    if (activeSlide >= visibleWorks.length) {
      setActiveSlide(0);
    }
  };

  useEffect(() => {
    if (!selected) return undefined;
    const onKeyDown = event => {
      if (event.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selected]);

  return (
    <>
      <section className={styles.section} id="ui-ux-design" aria-labelledby="ui-ux-title">
        <div className={styles.container}>
          <p className={styles.eyebrow}>Interface design</p>
          <h2 className={styles.heading} id="ui-ux-title">UI/UX &amp; Interface Design</h2>
          <p className={styles.intro}>Mobile and web interface work created with Figma.</p>
          <div className={styles.emptyState}>
            <span className={styles.emptyIcon} aria-hidden="true">✳</span>
            <div>
              <h3>Interface projects coming soon</h3>
              <p>App screens and web interface previews will be featured here when those project images are added.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.graphicSection}`} id="graphic-design" aria-labelledby="graphic-title">
        <div className={styles.container}>
          <div className={styles.headerRow}>
            <div>
              <p className={styles.eyebrow}>Selected creative work</p>
              <h2 className={styles.heading} id="graphic-title">Graphic Design &amp; Creative Works</h2>
              <p className={styles.intro}>4 Years of Graphic Design Experience</p>
            </div>
            <div className={styles.filters} aria-label="Filter graphic design work">
              {filters.map(item => (
                <button key={item} type="button" className={`${styles.filter} ${filter === item ? styles.activeFilter : ''}`} aria-pressed={filter === item} onClick={() => { setFilter(item); setActiveSlide(0); }}>
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.carousel} aria-roledescription="carousel" aria-label="Graphic design portfolio">
            <div className={styles.carouselViewport}>
              <div className={styles.carouselTrack} onTransitionEnd={handleCarouselEnd} style={{ transform: `translateX(-${activeSlide * 12.5}%)` }}>
                {[...visibleWorks, ...visibleWorks].map((work, index) => (
                  <div className={styles.slide} key={`${work.src}-${index}`} aria-hidden={index >= visibleWorks.length}>
                    <button className={styles.card} type="button" onClick={() => setSelected(work)} aria-label={`Enlarge ${work.title}`} tabIndex={index >= visibleWorks.length ? -1 : 0}>
                      <span className={styles.imageFrame}>
                        <img src={work.src} alt={work.alt} loading="lazy" decoding="async" />
                        <span className={styles.zoomHint}>View artwork <span aria-hidden="true">↗</span></span>
                      </span>
                      <span className={styles.caption}>
                        <span><strong>{work.title}</strong><small>{work.category}</small></span>
                        <span className={styles.arrow} aria-hidden="true">↗</span>
                      </span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.carouselControls}>
              <button type="button" className={styles.carouselArrow} aria-label="Previous artwork" onClick={() => setActiveSlide(current => Math.max(0, current - 1))}>←</button>
              <div className={styles.dots} aria-label="Choose artwork">
                {visibleWorks.map((work, index) => (
                  <button key={work.src} type="button" className={`${styles.dot} ${index === activeSlide ? styles.activeDot : ''}`} aria-label={`Show artwork ${index + 1}: ${work.title}`} aria-current={index === activeSlide ? 'true' : undefined} onClick={() => setActiveSlide(index)} />
                ))}
              </div>
              <span className={styles.slideCount}>{String(activeSlide + 1).padStart(2, '0')} <span>/</span> {String(visibleWorks.length).padStart(2, '0')}</span>
              <button type="button" className={styles.carouselArrow} aria-label="Next artwork" onClick={() => setActiveSlide(current => Math.min(visibleWorks.length, current + 1))}>→</button>
            </div>
          </div>
        </div>
      </section>

      {selected && (
        <div className={styles.lightbox} role="presentation" onMouseDown={event => { if (event.target === event.currentTarget) setSelected(null); }}>
          <div className={styles.lightboxPanel} role="dialog" aria-modal="true" aria-label={`${selected.title} enlarged preview`}>
            <button type="button" className={styles.closeButton} onClick={() => setSelected(null)} aria-label="Close preview">×</button>
            <img src={selected.src} alt={selected.alt} />
            <p>{selected.title}</p>
          </div>
        </div>
      )}
    </>
  );
}
