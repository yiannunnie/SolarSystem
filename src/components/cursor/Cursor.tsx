import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";

export const Cursor = () => {
  const location = useLocation();
  
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      gsap.to("#custom-cursor", {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    const shrinkCursor = () => {
      gsap.to("#custom-cursor", {
        scale: 1,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    const growCursor = () => {
      gsap.to("#custom-cursor", {
        scale: 2,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches("a, button, .cursor-grow")) shrinkCursor();
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches("a, button, .cursor-grow")) growCursor();
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
    };
  }, []);

  useEffect(() => {
    gsap.to("#custom-cursor", { scale: 2, duration: 0 });
  }, [location]);

  return (
    <div
      id="custom-cursor"
      className="hidden md:block fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-9999 mix-blend-difference"
    />
  );
};
