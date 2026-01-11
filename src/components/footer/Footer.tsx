import { FaGithub, FaInstagram } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { gsap } from "gsap";

const links = [
  {
    href: "https://github.com/yiannunnie",
    icon: <FaGithub size={22} />,
    label: "GitHub",
  },
  {
    href: "https://www.instagram.com/y1ann___/",
    icon: <FaInstagram size={22} />,
    label: "Instagram",
  },
  {
    href: "mailto:itsyix21@gmail.com",
    icon: <MdMail size={22} />,
    label: "Email",
  },
];

export const Footer = () => {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gray-700/60"/>
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between gap-12 pt-15 md:pt-20">
        <div>
          <div className="flex items-center space-x-2">
            <span className="font-bold text-lg tracking-wider zentry">
              Yiyi&apos;s Space
            </span>
            <span className="text-gray-500">|</span>
            <span className="text-gray-400">The Solar System</span>
          </div>
        </div>

        <nav className="flex space-x-24 circularfont">
          <div>
            <h4 className="font-semibold mb-4">Sections</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#planets" className="hover:underline">Planets</a></li>
              <li><a href="#sun" className="hover:underline">Sun</a></li>
              <li><a href="#curiosities" className="hover:underline">Curiosities</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="https://science.nasa.gov/solar-system/planets/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  NASA
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className=" h-72 pb-25 md:h-[60vh] flex items-center justify-center">
        <h2
        onMouseEnter={() => gsap.to("#custom-cursor", { scale: 9, duration: 0.3 })}
        onMouseLeave={() => gsap.to("#custom-cursor", { scale: 2, duration: 0.3 })}
        className="text-[15vw] font-bold uppercase select-none circularfont opacity-90">
          Yiyi&apos;s Space
        </h2>
      </div>

      <div className="absolute bottom-10 w-full">
        <div className="container mx-auto px-6 flex flex-col items-center md:flex-row md:justify-between md: gap-6">
          <p className="text-sm text-gray-500 circularfont">
          © 2026 Yiyi&apos;s Space. All rights reserved.
        </p>

        <div className="flex gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-white hover:opacity-70 transition duration-300"
            >
              {link.icon}
            </a>
          ))}
        </div>
        </div>
        
      </div>
    </footer>
  );
};
