'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './BackgroundMusic.module.css';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => {
          console.error("Playback failed:", err);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    // Attempt to autoplay might fail due to browser policies
    // but the UI will reflect the initial paused state correctly.
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.4;
    }
  }, []);

  return (
    <div 
      className={`${styles.container} ${isPlaying ? styles.playing : ''}`} 
      onClick={togglePlay}
      title={isPlaying ? "Pause Music" : "Play Music"}
    >
      <audio 
        ref={audioRef}
        src="/Lisa_CrossingField.mp3"
        loop
        preload="auto"
      />
      
      <div className={styles.iconWrapper}>
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
        )}
      </div>

      <div className={styles.visualizer}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>

      <span className={styles.label}>
        {isPlaying ? "OST: Crossing Field" : "Music Off"}
      </span>
    </div>
  );
};

export default BackgroundMusic;
