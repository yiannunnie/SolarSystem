import { useEffect } from "react";

/**
 * Hook para bloquear el scroll del body mientras `locked` sea true
 */
export const useLockBodyScroll = (locked: boolean) => {
  useEffect(() => {
    if (locked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [locked]);
};
