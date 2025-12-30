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
      <div className="relative size-full cursor-pointer">
        <video
          src={videoSrc}
          loop
          muted
          autoPlay
          className="absolute left-0 top-0 size-full object-cover object-center"
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
