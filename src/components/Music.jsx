import React, { useEffect, useRef } from 'react';
import music from './music.mp3';

const BackgroundMusic = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    const handleUserInteraction = async () => {
      try {
        await audio.play();
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('scroll', handleUserInteraction);
      } catch (error) {
        console.error('Error al reproducir el audio:', error);
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 0) {
        handleUserInteraction();
      }
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <audio ref={audioRef} loop>
      <source src={music} type="audio/mpeg" />
    </audio>
  );
};

export default BackgroundMusic;
