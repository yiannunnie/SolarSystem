import { useRef} from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CURIOSITIES_DATA } from "../../data/curiosities";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { Footer } from "../../components/footer";
import { useTouchNav } from "../../hooks/useTouchNav";

export const Curiosities = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const {
    index,
    next,
    prev,
    swipeHandlers,
  } = useTouchNav({
    length: CURIOSITIES_DATA.length,
  });

  const current = CURIOSITIES_DATA[index];
  const prevItem =
    CURIOSITIES_DATA[
      (index - 1 + CURIOSITIES_DATA.length) %
        CURIOSITIES_DATA.length
    ];
  const nextItem =
    CURIOSITIES_DATA[
      (index + 1) % CURIOSITIES_DATA.length
    ];

useGSAP(() => {
  gsap.fromTo(
    ".animate-title",
    { opacity: 0 },
    { opacity: 1, duration: 1, ease: "power1.inOut" }
  );
  }, []);

  useGSAP(() => {
 gsap.fromTo(
      ".animate-img",
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );
    gsap.fromTo(
      ".animate-content",
      { yPercent: 100, opacity: 0 },
      { yPercent: 0, opacity: 1 }
    );
  }, [index]);


  return (
    <>
    <section
      id="curiosities"
      aria-labelledby="curiosity-heading"
      className="bg-black relative min-h-screen px-5 md:px-20 pb-40"
    >
      <h2 className="text-white text-3xl md:text-5xl zentry tracking-wider font-bold -mb-20 md:mb-35 pt-30 text-center px-15 animate-title"
      >
        Curiosities about the Solar System
      </h2>

      <div className="relative max-w-5xl container mx-auto"{...swipeHandlers}>
        <div className="hidden md:flex items-center justify-between w-full px-2 md:px-0 absolute top-1/2 -translate-y-1/2 z-10 circularfont text-sm">
          <button
            onClick={prev}
            className="flex items-center space-x-2 text-white hover:text-gray-400 transition-colors"
            onMouseEnter={() => gsap.to("#custom-cursor", { scale: 1, duration: 0.2, ease: "power2.inOut" })}
            onMouseLeave={() => gsap.to("#custom-cursor", { scale: 2, duration: 0 })}
          >
            <MdArrowBackIos className="h-6 w-6" />
            <span className="hidden md:block font-medium">{prevItem.title}</span>
          </button>

          <button
            onClick={next}
            className="flex items-center space-x-2 text-white hover:text-gray-400 transition-colors"
            onMouseEnter={() => gsap.to("#custom-cursor", { scale: 1, duration: 0.2, ease: "power2.inOut" })}
            onMouseLeave={() => gsap.to("#custom-cursor", { scale: 2, duration: 0 })}
          >
            <span className="hidden md:block font-medium">{nextItem.title}</span>
            <MdArrowForwardIos className="h-6 w-6" />
          </button>
        </div>

        <div className="flex justify-center items-center w-full animate-img">
          <img
            src={current.image}
            className="object-contain h-[60vh] w-80 md:w-[50vw] fade-img"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-20 w-full -mt-15 md:mt-20">
          <div ref={contentRef} className="space-y-4 text-left">
            <p className="text-white text-sm md:text-base uppercase md:w-50">
              Some Facts that you might not know about
            </p>
            <p
              id="title"
              className="text-gray-400 text-sm md:text-base font-regular circularfont animate-content"
            >
              {current.facts}
            </p>
          </div>


          <div className="space-y-3 max-w-2xl text-left">
            <h2
              className="text-white text-xl md:text-2xl font-semibold circularfont animate-content"
            >
              {current.title}
            </h2>
            <p
              className="text-white text-base md:text-base circularfont animate-content"
            >
              {current.description}
            </p>
          </div>

          
        </div>
      </div>
    </section>
    <Footer />
    </>
    
  );
};
