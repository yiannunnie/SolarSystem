import { useEffect, useRef, useState } from "react";
import { useWindowScroll } from "react-use";
import { gsap } from "gsap";

const NavItems = [ "About", "Planets", "Sun", ];

export const Navbar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
  const [isAudioActive, setIsAudioActive] = useState<boolean>(false);

  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState<boolean>(true);

  const navContainerRef = useRef<HTMLDivElement | null>(null);
  const audioElementRef = useRef<HTMLAudioElement | null>(null);

  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current?.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
    });
  }, [isNavVisible]);

  useEffect(() => {
    const startInterstellar = () => {
      if (!audioElementRef.current) return;

      audioElementRef.current
        .play()
        .then(() => {
          setIsAudioPlaying(true);
          setIsAudioActive(true);
        })
        .catch(() => {
          setIsAudioPlaying(false);
          setIsAudioActive(false);
        });

      window.removeEventListener("click", startInterstellar);
    };

    window.addEventListener("click", startInterstellar);

    return () => {
      window.removeEventListener("click", startInterstellar);
    };
  }, []);

  const toggleAudio = () => {
    if (!audioElementRef.current) return;

    if (isAudioPlaying) {
      audioElementRef.current.pause();
      setIsAudioPlaying(false);
      setIsAudioActive(false);
    } else {
      audioElementRef.current.play();
      setIsAudioPlaying(true);
      setIsAudioActive(true);
    }
  };

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7 w-full justify-between">
            <button className="text-white zentry text-lg font-semibold tracking-wider hover:opacity-80 transition">
                YIYI'S SPACE
            </button>

            <div className="flex h-full items-center">
              <div className="hidden md:block">
                {NavItems.map((item, index) => (
                  <a
                    key={index}
                    href={`#${item.toLowerCase()}`}
                    className="nav-hover-btn"
                  >
                    {item}
                  </a>
                ))}
              </div>
              <button
                className="group relative ml-10 flex items-center space-x-0.5 cursor-pointer"
                onClick={toggleAudio}
              >
                <audio
                  ref={audioElementRef}
                  className="hidden"
                  src="/audio/interstellar.mp3"
                  loop
                />
            

                {[1, 2, 3, 4].map((bar) => (
                  <div
                    key={bar}
                    className={`indicator-line ${
                      isAudioActive ? "active" : ""
                    }`}
                    style={{ animationDelay: `${bar * 0.1}s` }}
                  >
                  </div>
                ))}
                <span
                className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white
                opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                >
                  {isAudioPlaying ? "Stop music" : "Play music"}
                </span>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};
