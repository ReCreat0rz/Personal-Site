'use client';

import { useState, useRef, useEffect } from 'react';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.4;
    
    
    if (typeof window !== 'undefined') {
      localStorage.removeItem('password_attempts');
    }

    const attemptPlay = () => {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            removeInteractionListeners();
          })
          .catch(() => {
            console.log("Initial playback blocked, waiting for interaction.");
          });
      }
    };

    const handleInteraction = (e) => {
      console.log("User interaction detected, unlocking audio...");
      

      attemptPlay();
    };

    const removeInteractionListeners = () => {
      const events = ['click', 'touchstart', 'touchend', 'mousedown', 'keydown'];
      events.forEach(event => window.removeEventListener(event, handleInteraction));
    };

    
    attemptPlay();

    
    const events = ['click', 'touchstart', 'touchend', 'mousedown', 'keydown'];
    events.forEach(event => window.addEventListener(event, handleInteraction));

    
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        attemptPlay();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      removeInteractionListeners();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <audio 
      ref={audioRef}
      src="/the_day_the_starlight_arrived.mp3"
      loop
      preload="auto"
      style={{ display: 'none' }}
      playsInline 

    />
  );
};

export default BackgroundMusic;
