import { useEffect, useState } from "react";

/**
 * Hook para manejar la carga de videos
 * Rastrea cuántos videos se han cargado del total esperado
 */
export const useVideoLoader = (totalVideos: number) => {
  const [loadedVideos, setLoadedVideos] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (loadedVideos === totalVideos - 1) {
      setIsLoading(false);
    }
  }, [loadedVideos, totalVideos]);

  const handleVideoLoaded = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  return {
    isLoading,
    handleVideoLoaded,
    loadedVideos,
  };
};
