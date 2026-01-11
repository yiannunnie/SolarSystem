import { useRef, useState } from "react";

export const use3DTilt = () => {
  const [transform, setTransform] = useState("");
  const itemRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!itemRef.current) return;

    const { left, top, width, height } = itemRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    const rotateX = (y - 0.5) * 3;
    const rotateY = (x - 0.5) * -3;

    const newTransform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(0.98, 0.98, 0.98)`;
    setTransform(newTransform);
  };

  const handleMouseLeave = () => {
    setTransform("");
  };

  return {
    itemRef,
    transform,
    handleMouseMove,
    handleMouseLeave,
  };
};
