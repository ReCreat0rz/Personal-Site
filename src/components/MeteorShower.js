'use client';

import { useEffect, useState } from 'react';
import styles from './MeteorShower.module.css';

export default function MeteorShower() {
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    // Reduce number of meteors on mobile for performance
    const count = typeof window !== 'undefined' && window.innerWidth < 768 ? 10 : 20;
    
    const newMeteors = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100 + '%',
      delay: Math.random() * 15 + 's',
      duration: Math.random() * 3 + 2 + 's', // 2-5 seconds
      angle: '-45deg'
    }));
    
    setMeteors(newMeteors);
  }, []);

  return (
    <div className={styles.meteorContainer}>
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className={styles.meteor}
          style={{
            '--left': meteor.left,
            '--delay': meteor.delay,
            '--duration': meteor.duration,
            '--angle': meteor.angle
          }}
        />
      ))}
    </div>
  );
}
