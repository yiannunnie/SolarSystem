import { useRef, useState } from "react";

type UseTouchNavProps = {
  length: number;
  initialIndex?: number;
};

export const useTouchNav = ({ length, initialIndex = 0 }: UseTouchNavProps) => {
  const [index, setIndex] = useState(initialIndex);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchMoved = useRef(false);

  const goTo = (i: number) => setIndex((i + length) % length);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  const onTouchStart = (e: React.TouchEvent) => {
    if (window.innerWidth >= 768) return; // Desktop ignore
    const touch = e.targetTouches[0];
    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
    touchMoved.current = false;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!touchStartX.current || !touchStartY.current) return;
    const touch = e.targetTouches[0];
    const dx = Math.abs(touch.clientX - touchStartX.current);
    const dy = Math.abs(touch.clientY - touchStartY.current);
    if (dx > 10 || dy > 10) touchMoved.current = true; // Detect scroll
  };

  const onTouchEnd = () => {
    if (touchMoved.current) {
      touchStartX.current = null;
      touchStartY.current = null;
      return; // Fue scroll, no avanzar
    }

    // Solo un tap
    next();

    touchStartX.current = null;
    touchStartY.current = null;
  };

  return {
    index,
    next,
    prev,
    swipeHandlers: {
      onTouchStart,
      onTouchMove,
      onTouchEnd,
    },
  };
};
