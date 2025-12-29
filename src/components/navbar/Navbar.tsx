import { Link } from "react-router-dom";
import { useAudioPlayer, useNavbarScroll, useSectionNavigation } from "../../hooks";
import { AudioIndicator } from "./AudioIndicator";

const NAV_ITEMS = ["About", "Planets", "Sun"];

export const Navbar = () => {
  const { navRef } = useNavbarScroll();
  const { audioRef, isPlaying, isActive, toggle } = useAudioPlayer();
  const { navigateToSection } = useSectionNavigation();

  return (
    <div
      ref={navRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7 w-full justify-between">
            <Link
              to="/"
              className="text-white zentry text-lg font-semibold tracking-wider hover:opacity-80 transition"
            >
              YIYI'S SPACE
            </Link>

            <div className="flex h-full items-center">
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
                  {isPlaying ? "Stop music" : "Play music"}
                </span>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
