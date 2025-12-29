import { useEffect, useRef, useState } from "react";
import { useWindowScroll } from "react-use";
import { gsap } from "gsap";

/**
 * Hook para manejar la visibilidad del navbar con scroll
 * Oculta el navbar al hacer scroll hacia abajo y lo muestra al hacer scroll hacia arriba
 */
export const useNavbarScroll = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const navRef = useRef<HTMLDivElement | null>(null);

  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsVisible(true);
      navRef.current?.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsVisible(false);
      navRef.current?.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsVisible(true);
      navRef.current?.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navRef.current, {
      y: isVisible ? 0 : -100,
      opacity: isVisible ? 1 : 0,
    });
  }, [isVisible]);

  return { navRef, isVisible };
};
