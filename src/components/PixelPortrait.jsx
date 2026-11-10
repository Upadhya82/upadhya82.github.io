import React, { useEffect, useRef, useState, useCallback } from 'react';
import profileImg from '../assets/profile.jpg';
import styles from './PixelPortrait.module.css';

export default function PixelPortrait() {
  const canvasRef = useRef(null);
  const [isAssembled, setIsAssembled] = useState(false);
  const animFrameRef = useRef(null);
  const imageObjRef = useRef(null);

  const startAssembly = useCallback(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsAssembled(true);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const displaySize = 270;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = displaySize * dpr;
    canvas.height = displaySize * dpr;
    ctx.scale(dpr, dpr);

    setIsAssembled(false);

    const img = imageObjRef.current;
    if (!img || !img.complete) return;

    // 18x18 grid of pixel squares (~15px per square - clearly visible digital pixel tiles)
    const gridCount = 18;
    const tileSize = displaySize / gridCount;
    const particles = [];

    for (let gy = 0; gy < gridCount; gy++) {
      for (let gx = 0; gx < gridCount; gx++) {
        const targetX = gx * tileSize;
        const targetY = gy * tileSize;

        // Disperse squares in an orbital pattern around the frame
        const angle = Math.random() * Math.PI * 2;
        const distance = 50 + Math.random() * 110;
        const startX = targetX + Math.cos(angle) * distance;
        const startY = targetY + Math.sin(angle) * distance;

        // Staggered arrival delays
        const delay = Math.random() * 450;
        const duration = 1100 + Math.random() * 400;

        particles.push({
          gx,
          gy,
          targetX,
          targetY,
          startX,
          startY,
          currentX: startX,
          currentY: startY,
          delay,
          duration,
          alpha: 0,
          rotation: (Math.random() - 0.5) * 1.2,
        });
      }
    }

    const startTime = performance.now();

    function render(now) {
      const elapsed = now - startTime;
      ctx.clearRect(0, 0, displaySize, displaySize);

      let allDone = true;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (elapsed < p.delay) {
          allDone = false;
          // Pre-assembly: faint scattered cyan pixel beacons
          ctx.fillStyle = 'rgba(34, 211, 238, 0.3)';
          ctx.fillRect(p.startX + tileSize / 4, p.startY + tileSize / 4, tileSize / 2, tileSize / 2);
          continue;
        }

        const progress = Math.min(1, (elapsed - p.delay) / p.duration);
        if (progress < 1) allDone = false;

        // Smooth cubic ease-out
        const ease = 1 - Math.pow(1 - progress, 3);
        p.currentX = p.startX + (p.targetX - p.startX) * ease;
        p.currentY = p.startY + (p.targetY - p.startY) * ease;
        p.alpha = Math.min(1, ease * 1.2);
        const currentRot = p.rotation * (1 - ease);

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.translate(p.currentX + tileSize / 2, p.currentY + tileSize / 2);
        if (currentRot !== 0) ctx.rotate(currentRot);

        // Draw exact slice of user photograph
        const imgTileW = img.naturalWidth / gridCount;
        const imgTileH = img.naturalHeight / gridCount;
        ctx.drawImage(
          img,
          p.gx * imgTileW,
          p.gy * imgTileH,
          imgTileW,
          imgTileH,
          -tileSize / 2,
          -tileSize / 2,
          tileSize + 0.5,
          tileSize + 0.5
        );

        // Glowing cyan/blue pixel border during digital assembly
        if (progress < 0.95) {
          ctx.strokeStyle = `rgba(56, 189, 248, ${0.55 * (1 - progress)})`;
          ctx.lineWidth = 1.2;
          ctx.strokeRect(-tileSize / 2, -tileSize / 2, tileSize, tileSize);
        }

        ctx.restore();
      }

      if (!allDone) {
        animFrameRef.current = requestAnimationFrame(render);
      } else {
        // Assembly complete
        setIsAssembled(true);
      }
    }

    animFrameRef.current = requestAnimationFrame(render);
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = profileImg;
    img.onload = () => {
      imageObjRef.current = img;
      startAssembly();
    };

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [startAssembly]);

  return (
    <div className={styles.portraitWrapper}>
      {/* Outer Futuristic Glowing Cyber Frame */}
      <div
        className={`${styles.frameBorder} ${isAssembled ? styles.frameGlow : ''}`}
        onClick={startAssembly}
        title="Click to replay pixel reconstruction"
      >
        <div className={styles.innerContainer}>
          {/* Canvas for Pixel Assembly Animation */}
          <canvas
            ref={canvasRef}
            className={`${styles.canvas} ${isAssembled ? styles.canvasFadeOut : ''}`}
            aria-hidden="true"
          />

          {/* High-Resolution Fully Reconstructed Portrait */}
          <img
            src={profileImg}
            alt="Upadhya Senanayaka"
            className={`${styles.photo} ${isAssembled ? styles.photoVisible : ''}`}
          />

          {/* Cybernetic Scanline Overlay */}
          <div className={`${styles.scanOverlay} ${isAssembled ? styles.scanSubtle : ''}`} />

          {/* Digital Grid HUD Corners */}
          <span className={`${styles.corner} ${styles.cornerTL}`} />
          <span className={`${styles.corner} ${styles.cornerTR}`} />
          <span className={`${styles.corner} ${styles.cornerBL}`} />
          <span className={`${styles.corner} ${styles.cornerBR}`} />
        </div>
      </div>

      {/* Cyber Status Card Tag */}
      <div className={styles.tagBar}>
        <div className={styles.statusDot}>
          <span className={styles.dotPing} />
          <span className={styles.dotCore} />
        </div>
        <div className={styles.tagText}>
          <span className={styles.tagTitle}>Upadhya Senanayaka</span>
          <span className={styles.tagRole}>DevOps &amp; Cloud Aspirant</span>
        </div>
        <span className={styles.verifiedBadge}>Verified</span>
      </div>
    </div>
  );
}
