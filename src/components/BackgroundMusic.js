'use client';

import { useState, useRef, useEffect } from 'react';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

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
      window.removeEventListener('touchend', handleInteraction);
      window.removeEventListener('mousedown', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };

    // Initial attempt
    startPlayback();

    // Interaction listeners as fallback for browser policy
    window.addEventListener('click', handleInteraction);
    window.addEventListener('touchstart', handleInteraction);
    window.addEventListener('touchend', handleInteraction);
    window.addEventListener('mousedown', handleInteraction);
    window.addEventListener('keydown', handleInteraction);

    return () => {
      removeInteractionListeners();
    };
  }, []);

  return (
    <audio 
      ref={audioRef}
      src="/Lisa_CrossingField.mp3"
      loop
      preload="auto"
      style={{ display: 'none' }}
    />
  );
};

export default BackgroundMusic;
