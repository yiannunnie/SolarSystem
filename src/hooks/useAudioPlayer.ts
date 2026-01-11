import { useEffect, useRef, useState } from "react";


export const useAudioPlayer = (audioSrc?: string) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const startAudio = () => {
      if (!audioRef.current) return;

      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setIsActive(true);
        })
        .catch(() => {
          setIsPlaying(false);
          setIsActive(false);
        });

      window.removeEventListener("click", startAudio);
    };

    window.addEventListener("click", startAudio);

    return () => {
      window.removeEventListener("click", startAudio);
    };
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      setIsActive(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
      setIsActive(true);
    }
  };

  return {
    audioRef,
    audioSrc, 
    isPlaying,
    isActive,
    toggle,
  };
};
