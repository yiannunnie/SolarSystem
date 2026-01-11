import { useState } from "react";

interface HoverDescriptionProps {
  children: React.ReactNode;
  description: string;
  className?: string;
}

export const HoverDescription = ({
  children,
  description,
  className = "",
}: HoverDescriptionProps) => {
  const [active, setActive] = useState(false);

  const toggle = () => setActive((prev) => !prev);

  return (
    <div
      className={`relative cursor-pointer circularfont group ${className}`}
      onClick={toggle}
    >
      {children}

      <div
        className={`
          absolute bottom-0 left-0 w-full bg-stone-900/50 text-white text-start text-sm py-4 px-2
          transition-opacity duration-300
          ${active ? "opacity-100" : "opacity-0"}     
          md:opacity-0 md:group-hover:opacity-100  
        `}
      >
        {description}
      </div>
    </div>
  );
};
