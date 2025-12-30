
import { useState } from "react";
import { useAudioPlayer, useNavbarScroll, useSectionNavigation, useLockBodyScroll, usePageNavigation } from "../../hooks";
import { AudioIndicator } from "./AudioIndicator";

const NAV_ITEMS = ["About", "Planets", "Sun"];

export const Navbar = () => {
  const { navRef } = useNavbarScroll();
  const { audioRef, isPlaying, isActive, toggle } = useAudioPlayer();
  const { navigateToSection } = useSectionNavigation();
  const { goHome } = usePageNavigation();

  const [menuMini, setMenuMini] = useState(false);

  const toggleMenu = (section:string) => {
    navigateToSection(section.toLowerCase());
    setMenuMini(false);
  }

  useLockBodyScroll(menuMini);

  return (
    <>
    <div
      ref={navRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-5"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7 w-full justify-between">
            <button
              onClick={goHome}
              className="text-white zentry text-lg font-semibold tracking-wider hover:opacity-80 transition cursor-pointer"
            >
              YIYI'S SPACE
            </button>

            <div className="flex h-full items-center gap-8">
              <div className="hidden md:block">
                {NAV_ITEMS.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => navigateToSection(item.toLowerCase())}
                    className="nav-hover-btn"
                  >
                    {item}
                  </button>
                ))}
              </div>
              
              <button
                className="group relative ml-10 flex items-center space-x-0.5 cursor-pointer"
                onClick={toggle}
              >
                <audio
                  ref={audioRef}
                  className="hidden"
                  src="/audio/interstellar.mp3"
                  loop
                />
                <AudioIndicator isActive={isActive} />
                <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  {isPlaying ? "Stop" : "Play"}
                </span>
              </button>

              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setMenuMini(!menuMini)}
                  className="nav-hover-btn ms-0!"
                >
                  {menuMini ? "Close" : "Menu"}
                </button>
              </div>

            </div>
          </div>
        </nav>
      </header>
    </div>

     {menuMini && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black space-y-8 md:hidden">
          {NAV_ITEMS.map((item, idx) => (
            <button
              key={idx}
              onClick={() => toggleMenu(item)}
              className="nav-hover-btn ms-0!"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
