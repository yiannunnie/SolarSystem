import type { PlanetInfo } from "../../data/planets";
import { PlanetSection } from "./PlanetSection";

interface PlanetContentProps {
  planetInfo: PlanetInfo;
}

export const PlanetContent = ({ planetInfo }: PlanetContentProps) => {
  const {
    name,
    description,
    description2,
    nameshake,
    potential,
    size,
    orbital,
    moons,
    structure,
    surface,
    atmosphere,
    magnethosphere,
  } = planetInfo;

  return (
    <div className="md:w-1/2 md:flex md:flex-col md:justify-start space-y-4 md:order-2">
      <h1 className="text-2xl font-bold uppercase md:hidden">{name}</h1>
      <h1 className="hidden md:block font-bold md:text-4xl md:pb-5 uppercase">
        {name}
      </h1>

      <div className="circularfont md:h-[120vh] md:overflow-y-auto no-scrollbar pt-10 md:pt-0">
        <p className="pspace">{description}</p>
        {description2.map((p, i) => (
          <p className="pspace" key={i}>
            {p}
          </p>
        ))}

        <PlanetSection title="Nameshake" content={nameshake} />
        <PlanetSection title="Potential for Scientific Discovery" content={potential} />
        <PlanetSection title="Size" content={size} />
        <PlanetSection title="Orbit and Rotation" content={orbital} />
        <PlanetSection title="Moons" content={moons} />
        <PlanetSection title="Structure" content={structure} />
        <PlanetSection title="Surface" content={surface} />
        <PlanetSection title="Atmosphere" content={atmosphere} />
        <PlanetSection title="Magnetic Field" content={magnethosphere} />
      </div>
    </div>
  );
}
