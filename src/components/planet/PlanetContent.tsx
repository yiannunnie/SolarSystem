import type { PlanetInfo } from "../../data/planets";
import { ContentStyle } from "../contentStyle/ContentStyle";

interface PlanetContentProps {
  planetInfo: PlanetInfo;
  nextPlanet: () => void;
  prevPlanet: () => void;
  nextPlanetName: string;
  previousPlanetName: string;
}

export const PlanetContent = ({ planetInfo, nextPlanet, prevPlanet, nextPlanetName, previousPlanetName }: PlanetContentProps) => {
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
      <div className="flex items-baseline justify-between md:pb-5">
        <h1 className="text-2xl md:text-4xl font-bold uppercase">
          {name}
        </h1>
        <div className="flex justify-end item-end gap-4">
          <button
          onClick={prevPlanet}
          className="text-xs text-gray-500 md:text-sm hover:underline uppercase"
        >
          ← {previousPlanetName} 
        </button>
        <button
          onClick={nextPlanet}
          className="text-xs text-gray-500 md:text-sm hover:underline uppercase"
        >
          {nextPlanetName} → 
        </button>
  </div>
</div>

      <div className="circularfont min-h-screen md:h-[120vh] md:overflow-y-auto no-scrollbar pt-10 md:pt-0">
        <p className="pspace">{description}</p>
        {description2.map((p, i) => (
          <p className="pspace" key={i}>
            {p}
          </p>
        ))}

        <ContentStyle title="Nameshake" content={nameshake} />
        <ContentStyle title="Potential for Scientific Discovery" content={potential} />
        <ContentStyle title="Size" content={size} />
        <ContentStyle title="Orbit and Rotation" content={orbital} />
        <ContentStyle title="Moons" content={moons} />
        <ContentStyle title="Structure" content={structure} />
        <ContentStyle title="Surface" content={surface} />
        <ContentStyle title="Atmosphere" content={atmosphere} />
        <ContentStyle title="Magnetic Field" content={magnethosphere} />
      </div>
    </div>
  );
}
