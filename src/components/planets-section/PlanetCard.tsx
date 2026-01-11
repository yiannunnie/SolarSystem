import { useNavigate } from "react-router-dom";
import { use3DTilt } from "../../hooks";

interface PlanetCardProps {
  to: string;
  videoSrc: string;
  title: string;
  description: string;
  className?: string;
}

export const PlanetCard = ({ to, videoSrc, title, description, className = "" }: PlanetCardProps) => {
  const navigate = useNavigate();
  const { itemRef, transform, handleMouseMove, handleMouseLeave } = use3DTilt();
  const handleClick = () => navigate(to);

  return (
    <div
      className={className}
      onClick={handleClick}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform }}
    >
      <div className="relative size-full cursor-grow">
        <img
          src={videoSrc}
          className={`
    absolute left-1/2 top-1/2
    object-contain
    -translate-x-1/2 -translate-y-1/2
    ${title === "Mercury" ? "w-24 md:w-40" : title === "Jupiter" ? "w-64 md:w-[95vh]" : "w-48 md:w-80"}
    `}
        />
        <div className="relative z-10 flex size-full flex-col justify-between p-5 text-white">
          <div>
            <h1 className="card-title zentry tracking-wide">{title}</h1>
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
