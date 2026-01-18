'use client';

import { useState, useRef, useEffect } from 'react';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.4;

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
      // Mobile browsers (especially Safari) often require a direct .play() call 
      // in the same tick as the interaction.
      attemptPlay();
    };

    const removeInteractionListeners = () => {
      const events = ['click', 'touchstart', 'touchend', 'mousedown', 'keydown'];
      events.forEach(event => window.removeEventListener(event, handleInteraction));
    };

    // 1. Initial attempt (might work on Desktop or some Android browsers)
    attemptPlay();

    // 2. Add interaction listeners for the "Audio Unlock"
    const events = ['click', 'touchstart', 'touchend', 'mousedown', 'keydown'];
    events.forEach(event => window.addEventListener(event, handleInteraction));

    // 3. Handle visibility changes (resume if tab was hidden and brought back)
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
      src="/unwritten.mp3"
      loop
      preload="auto"
      style={{ display: 'none' }}
      playsInline // Crucial for mobile behavior
    />
  );
};

export default BackgroundMusic;
