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
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.4;

    const startPlayback = () => {
      audio.play()
        .then(() => {
          setIsPlaying(true);
          // Remove listeners once successfully playing
          removeInteractionListeners();
        })
        .catch(err => {
          console.log("Initial autoplay blocked, waiting for interaction.");
        });
    };

    const handleInteraction = () => {
      startPlayback();
    };

    const removeInteractionListeners = () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };

    // Initial attempt
    startPlayback();

    // Interaction listeners as fallback for browser policy
    window.addEventListener('click', handleInteraction);
    window.addEventListener('touchstart', handleInteraction);
    window.addEventListener('keydown', handleInteraction);

    return () => {
      removeInteractionListeners();
    };
  }, []);

  return (
    <div 
      className={`${styles.container} ${isPlaying ? styles.playing : ''}`} 
      onClick={(e) => {
        // Stop propagation so the global listener doesn't trigger immediately if clicking the button specifically
        e.stopPropagation();
        togglePlay();
      }}
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
