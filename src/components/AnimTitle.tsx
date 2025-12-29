import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
interface AnimTitleProps {
  title: string;
  containerClass?: string;
}

export const AnimTitle: React.FC<AnimTitleProps> = ({ title, containerClass }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
        const titleAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "bottom 100%",
                end: "center bottom",
                toggleActions: "play none none reverse",
            }
        });
        titleAnimation.to(".animated-word", {
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

  return (
    <div
      ref={containerRef}
      className={`animated-title ${containerClass}`}
    >
      {title.split("<br/>").map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-1 px-10 md:gap-3"
        >
          {line.split("").map((word, i) => (
            <span key={i} className="animated-word">
              {word}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};
