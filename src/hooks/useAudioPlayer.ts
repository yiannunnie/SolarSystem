import { useEffect, useRef, useState } from "react";

/** Recordatorio:
 * para el reproductor de audio
 * para la reproducción automática después del primer click y el estado del audio
 * 
 * @param audioSrc - (otro uso) URL del archivo de audio. Si hay, se puede usar directamente en el <audio>
 */
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
