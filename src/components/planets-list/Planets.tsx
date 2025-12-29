import { PlanetCard } from "./PlanetCard";
import { PLANETS_LIST_CONTENT, PLANETS_LAYOUT } from "../../data/planetsListContent";

export const Planets = () => {
  const { title, introduction, innerPlanets, outerPlanets } = PLANETS_LIST_CONTENT;

  return (
    <section className="bg-black pb-32 md:-mb-100" id="planets">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-15 md:py-32">
          <p className="general tracking-wide text-lg md:text-xl text-white mb-5 uppercase">
            {title}
          </p>
          <div className="max-w-md md:max-w-full circularfont text-sm md:text-base text-white">
            {introduction.map((paragraph, index) => (
              <p key={index} className={index === 0 ? "mb-2" : "mb-8"}>
                {paragraph}
              </p>
            ))}
            <p className="circularfont text-base mb-3 font-semibold">
              {innerPlanets.title}
            </p>
            <p className="mb-5">{innerPlanets.description}</p>
            <p className="circularfont text-base mb-3 font-semibold">
              {outerPlanets.title}
            </p>
            <p className="mb-3">{outerPlanets.description}</p>
          </div>
        </div>

        {PLANETS_LAYOUT.map((group, groupIndex) => {
          const wrapperProps = group.containerClass ? { className: group.containerClass } : {};

          return (
            <div key={groupIndex} {...(group.containerClass && wrapperProps)}>
              {group.planets.map((planet) => (
                <PlanetCard
                  key={planet.id}
                  to={`/planetas/${planet.id}`}
                  videoSrc={planet.videoSrc}
                  title={planet.title}
                  description={planet.description}
                  className={planet.className}
                />
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
};
