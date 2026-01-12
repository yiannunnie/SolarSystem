import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { AnimTitle } from "../ui";
import { ABOUT_DATA } from "../../data/about";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const { subtitle, content } = ABOUT_DATA;

  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });
    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: "0px",
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen bg-white">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="general text-sm uppercase md:text-[20px]">
          Solar system
        </h2>

        <AnimTitle
          title="Explore the wonders <br/> of our universe"
          containerClass="mt-5 roc !text-black text-center"
        />

        <div className="container mx-auto px-10 md:px-10 max-w-2xl text-center py-10">
          <div className="circularfont text-sm md:text-base">
          <p className="pb-5 font-medium">{subtitle}</p>
          <p className="font-light">{content}</p>
          </div>
        </div>

        <div className="about-subtext circularfont text-sm md:text-base">
          <p className="font-medium pb-2"> Do you want to know more?</p>
          <p className="font-light">Scroll and start the journey!</p>
        </div>
      </div>
      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.webp"
            alt="bckground"
            className="absolute left-0 top-0 size-full object-cover"
          ></img>
        </div>
      </div>
    </div>
  );
};
