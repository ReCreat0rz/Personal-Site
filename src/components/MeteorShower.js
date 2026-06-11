'use client';

import { useEffect, useState } from 'react';
import styles from './MeteorShower.module.css';

const METEOR_VARIANTS = [
  {
    color: 'rgba(180, 210, 255, 0.4)',
    colorBright: 'rgba(200, 225, 255, 0.95)',
    glow: 'rgba(96, 165, 250, 0.7)',
    head: 'rgba(220, 240, 255, 1)',
    headGlow: 'rgba(180, 220, 255, 0.9)',
  },
  {
    color: 'rgba(255, 255, 255, 0.3)',
    colorBright: 'rgba(255, 255, 255, 0.9)',
    glow: 'rgba(200, 220, 255, 0.5)',
    head: 'rgba(255, 255, 255, 1)',
    headGlow: 'rgba(220, 240, 255, 0.8)',
  },
  {
    color: 'rgba(255, 200, 120, 0.3)',
    colorBright: 'rgba(255, 220, 160, 0.85)',
    glow: 'rgba(255, 180, 80, 0.6)',
    head: 'rgba(255, 230, 180, 1)',
    headGlow: 'rgba(255, 200, 120, 0.8)',
  },
  {
    color: 'rgba(140, 180, 255, 0.35)',
    colorBright: 'rgba(160, 200, 255, 0.9)',
    glow: 'rgba(120, 160, 255, 0.6)',
    head: 'rgba(180, 210, 255, 1)',
    headGlow: 'rgba(140, 190, 255, 0.85)',
  },
];

export default function MeteorShower() {
  const [meteors, setMeteors] = useState([]);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const meteorCount = isMobile ? 18 : 35;

    const newMeteors = Array.from({ length: meteorCount }).map((_, i) => {
      const variant = METEOR_VARIANTS[i % METEOR_VARIANTS.length];
      return {
        id: i,
        left: Math.random() * 120 + '%',
        delay: Math.random() * 18 + 's',
        duration: Math.random() * 4 + 2.5 + 's',
        angle: -(30 + Math.random() * 30) + 'deg',
        width: (150 + Math.random() * 350) + 'px',
        height: (1 + Math.random() * 1.5) + 'px',
        headLength: (60 + Math.random() * 60) + 'px',
        glowSize: (6 + Math.random() * 10) + 'px',
        easing: Math.random() > 0.5 ? 'ease-out' : 'cubic-bezier(0.4, 0, 0.2, 1)',
        ...variant,
      };
    });

    const starCount = isMobile ? 40 : 80;
    const newStars = Array.from({ length: starCount }).map((_, i) => ({
      id: i,
      left: Math.random() * 100 + '%',
      top: Math.random() * 100 + '%',
      size: (0.5 + Math.random() * 2) + 'px',
      brightness: 0.3 + Math.random() * 0.7,
      twinkleDuration: (2 + Math.random() * 4) + 's',
      twinkleDelay: Math.random() * 5 + 's',
    }));

    setMeteors(newMeteors);
    setStars(newStars);
  }, []);

  return (
    <>
      <div className={styles.stars} suppressHydrationWarning>
        {stars.map((star) => (
          <span
            key={star.id}
            className={styles.star}
            suppressHydrationWarning
            style={{
              left: star.left,
              top: star.top,
              '--size': star.size,
              '--brightness': star.brightness,
              '--twinkle-duration': star.twinkleDuration,
              '--twinkle-delay': star.twinkleDelay,
            }}
          />
        ))}
      </div>
      <div className={styles.meteorContainer} suppressHydrationWarning>
        {meteors.map((meteor) => (
          <span
            key={meteor.id}
            className={styles.meteor}
            suppressHydrationWarning
            style={{
              '--left': meteor.left,
              '--delay': meteor.delay,
              '--duration': meteor.duration,
              '--angle': meteor.angle,
              '--width': meteor.width,
              '--height': meteor.height,
              '--head-length': meteor.headLength,
              '--glow-size': meteor.glowSize,
              '--easing': meteor.easing,
              '--meteor-color': meteor.color,
              '--meteor-color-bright': meteor.colorBright,
              '--meteor-glow': meteor.glow,
              '--meteor-head': meteor.head,
              '--meteor-head-glow': meteor.headGlow,
            }}
          />
        ))}
      </div>
    </>
  );
}
