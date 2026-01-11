import { useRef, useState } from "react";
import { Button } from "../ui";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useVideoLoader, useSectionNavigation } from "../../hooks";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [hasClicked, setHasClicked] = useState<boolean>(false);

  const totalVideos = 4;
  const { isLoading, handleVideoLoaded } = useVideoLoader(1);
  const { navigateToSection } = useSectionNavigation();

  const nextVdRef = useRef<HTMLVideoElement | null>(null);
  const isDesktop = window.matchMedia("(hover: hover)").matches;

  const proxVideoIndex = (currentIndex % totalVideos) + 1;

  const miniVidClick = () => {
    setHasClicked(true);
    setCurrentIndex(proxVideoIndex);
  };

  useGSAP(
    () => {
      if (hasClicked && isDesktop) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => {
            nextVdRef.current?.play();
          },
        });

        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "circle(50% at 50% 50%);",
      borderRadius: "0 0 50% 50%",
    });

    gsap.from("#video-frame", {
      clipPath: "circle(50% at 50% 50%);",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  const getVideoSrc = (index: number) => `videos/planet-${index}.mp4`;

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {isDesktop && isLoading && (
        <div className="flex-center absolute z-100 h-dvh w-screen overflow-hidden bg-black">
          <div className="load">
            <div className="load_dot"></div>
            <div className="load_dot"></div>
            <div className="load_dot"></div>
          </div>
        </div>
      )}

      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-white"
      >
        {isDesktop ? (
          <>
            <div className="mask-clip-path absolute-center absolute z-50 size-64 overflow-hidden rounded-lg">
              <div
                onClick={miniVidClick}
                className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100 cursor-grow"
              >
                <video
                  ref={nextVdRef}
                  src={getVideoSrc(proxVideoIndex)}
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  id="current-video"
                  className="size-64 origin-center scale-150 object-cover object-center"
                />
              </div>
            </div>

            <video
              ref={nextVdRef}
              src={getVideoSrc(currentIndex)}
              loop
              muted
              preload="none"
              id="next-video"
              className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            />


            <video
              src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="absolute left-0 top-0 size-full object-cover object-center"
              onLoadedMetadata={handleVideoLoaded}
            />
          </>
        ) : (

          <img
            src= "img/bigbang.webp"
            className="absolute left-0 top-0 size-full object-cover object-center"
          />
        )}

        <div>
          <h1 className="hero-heading absolute bottom-5 tracking-wide right-5 z-40 text-white zentry">
            OUR SOLAR SYSTEM
          </h1>

          <div className="absolute left-0 top-0 z-40 size-full">
            <div className="mt-30 px-6 sm:px-10">
              <h1 className="hero-heading text-white tracking-wide zentry pb-5">
                WELCOME TO
              </h1>

              <p className="mb-5 md:mb-8 text-sm md:text-base text-white ">
                Solar System exploration <br /> Explore with us our solar system
              </p>
              <Button
                id="more"
                title="Find More"
                leftIcon={<TiLocationArrow />}
                containerClass="flex-center gap-1 font-semibold hover:bg-white hover:text-black hover:border-0 !font-regular"
                onClick={() => navigateToSection("about")}
              />
            </div>
          </div>
        </div>
      </div>

      <h1 className="hero-heading absolute bottom-5 tracking-wide right-5 text-black zentry">
        OUR SOLAR SYSTEM
      </h1>
    </div>
  );
};
