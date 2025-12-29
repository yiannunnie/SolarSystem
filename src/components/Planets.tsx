import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

interface CardTiltProps {
  children: React.ReactNode;
  className?: string;
  to?: string;
}

interface CardProps {
  src: string;
  title: React.ReactNode;
  description: string;
}

const CardTilt: React.FC<CardTiltProps> = ({ children, className = "", to }) => {
  const [cardEffect, setCardEffect] = useState<string>("");
  const itemRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const handleClick = () => {
    if (to) {
      navigate(to);
    }
  };
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    const rotateX = (y - 0.5) * 3;
    const rotateY = (x - 0.5) * -3;

    const transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(0.98, 0.98, 0.98)`;
    setCardEffect(transform);
  };
  const handleMouseLeave = () => {
    setCardEffect("");
  };

  return (
    <div
      className={className}
      onClick={handleClick}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: cardEffect }}
    >
      {children}
    </div>
  );
};


const Card: React.FC<CardProps> = ({
  src,
  title,
  description,
}) => {

  return (
    <div className="relative size-full cursor-pointer">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-white">
        <div>
          <h1 className="card-title zentry tracking-wide">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export const Planets = () => {
  return (
    <section className="bg-black pb-32 md:-mb-100" id="planets">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-15 md:py-32">
          <p className="general tracking-wide text-lg md:text-xl text-white mb-5 uppercase">The planets</p>
          <div className="max-w-md md:max-w-full circularfont text-sm md:text-base text-white">
            <p className="mb-2">What is a planet? The word goes back to the ancient Greek word planēt, and it means "wanderer."
              A more modern definition can be found in the Merriam-Webster dictionary which defines a planet as "any of the large bodies that revolve around the Sun in the solar system."</p>
              <p className="mb-8">In 2006, the International Astronomical Union (IAU) - a group of astronomers that names objects in our solar system - agreed on their own definition of the word "planet." This new definition changed caused Pluto's famous "demotion" to a dwarf planet.</p>
            <p className="circularfont text-base mb-3 font-semibold">Inner planets</p>
            <p className="mb-5">The first four, Mercury, Venus, Earth, and Mars, have something in common: they are located in the closest orbits to the Sun, have a metallic core, and are composed of solid materials, which is why they are called rocky planets or inner planets.</p>
            <p className="circularfont text-base mb-3 font-semibold">Outer planets</p>
            <p className="mb-3">On the other hand, the orbits of Jupiter, Saturn, Uranus, and Neptune are much farther from the Sun, in the outer part of the solar system, and they are mostly made of gas, which is why they are known as outer planets or Jovian planets.</p>
          </div>
        </div>

        <CardTilt to="/planetas/mercury" className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <Card
            src="videos/mercury.mp4"
            title={<>Mercury</>}
            description="Mercury is the planet nearest to the Sun, and the smallest planet in our solar system."
          />
        </CardTilt>

        <div className="grid pb-7 grid-cols-2 grid-rows-2 gap-7">
          <CardTilt to="/planetas/venus" className="card-tilt_1 h-[60vh] border-hsla row-span-1 md:col-span-1 md:row-span-2 ms-32 md:ms-0">
            <Card
              src="videos/venus.mp4"
              title={<>Venus</>}
              description="Venus is the second planet from the Sun, and the sixth largest planet."
            />
          </CardTilt>

          <CardTilt to="/planetas/mars" className="card-tilt_1 border-hsla row-span-1 md:col-span-1 md:row-span-2 me-30 md:me-0">
            <Card
              src="videos/mars.mp4"
              title={<>Mars</>}
              description="Mars is the fourth planet from the Sun, and the seventh largest planet."
            />
          </CardTilt>
        </div>

        <CardTilt to="/planetas/earth" className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <Card
            src="videos/earth.mp4"
            title={<>Earth</>}
            description="Earth our home planet is the third planet from the Sun, and the fifth largest planet."
          />
        </CardTilt>

      <div className="grid grid-cols-2 grid-rows-3 gap-7">
        <CardTilt to="/planetas/jupiter" className="card-tilt_1 border-hsla row-span-1 ms-32 md:ms-0 h-[40vh] md:h-[65vh]">
            <Card
              src="videos/jupiter.mp4"
              title={<>Jupiter</>}
              description="Jupiter is the fifth planet from the Sun, and the largest planet in our solar system."
            />
          </CardTilt>

          <CardTilt to="/planetas/saturn" className="card-tilt_1 border-hsla me-30 md:me-0">
            <Card
              src="videos/saturn.mp4"
              title={<>Saturn</>}
              description="Saturn is the sixth planet from the Sun, and the second largest planet in our solar system."
            />
          </CardTilt>

          <CardTilt to="/planetas/uranus" className="card-tilt_1 border-hsla">
            <Card
              src="videos/uranus.mp4"
              title={<>Uranus</>}
              description="Uranus is the seventh planet from the Sun, and the third largest planet in our solar system."
            />
          </CardTilt>

          <CardTilt to="/planetas/neptune" className="card-tilt_1 border-hsla h-[30vh] md:h-auto">
            <Card
              src="videos/neptune.mp4"
              title={<>Neptune</>}
              description="Neptune is the eighth and most distant planet in our solar system. It's the fourth largest planet."
            />
          </CardTilt>
        </div>
      </div>
    </section>
  );
};
