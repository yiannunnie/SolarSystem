import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

interface AnimTitleProps {
  title: string;
  containerClass?: string;
}

interface AnimatedLineProps {
  line: string;
  index: number;
}

const AnimatedLine = ({ line }: AnimatedLineProps) => {
  return (
    <div className="flex-center max-w-full flex-wrap gap-1 px-10 md:gap-3">
      {line.split("").map((char, i) => (
        <span key={i} className="animated-word">
          {char}
        </span>
      ))}
    </div>
  );
};

export const AnimTitle = ({ title, containerClass = "" }: AnimTitleProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "bottom 100%",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });

      titleAnimation.to(
        ".animated-word",
        {
          opacity: 1,
          transform: "translate3d(0px, 0px, 0px) rotateY(0deg) rotateX(0deg)",
          ease: "power2.inOut",
          stagger: 0.02,
        },
        0
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const lines = title.split("<br/>");

  return (
    <div ref={containerRef} className={`animated-title ${containerClass}`}>
      {lines.map((line, index) => (
        <AnimatedLine key={index} line={line} index={index} />
      ))}
    </div>
  );
};
