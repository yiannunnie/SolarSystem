import { useRef, useState } from "react";

type UseTouchNavProps = {
  length: number;
  initialIndex?: number;
};

export const useTouchNav = ({ length, initialIndex = 0 }: UseTouchNavProps) => {
  const [index, setIndex] = useState(initialIndex);
  const touchX = useRef<number | null>(null);

  const goTo = (i: number) => setIndex((i + length) % length);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  const onTouchStart = (e: React.TouchEvent) => {
    if (window.innerWidth >= 768) return; 
    touchX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (touchX.current === null) return;

    const screenMiddle = window.innerWidth / 2;
    touchX.current > screenMiddle ? next() : prev();
    touchX.current = null;
  };

  return {
    index,
    next,
    prev,
    swipeHandlers: {
      onTouchStart,
      onTouchEnd,
    },
  };
};
