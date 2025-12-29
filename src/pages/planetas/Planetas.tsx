import { Navigate, useParams, useNavigate } from "react-router-dom";
import { PLANET_DATA, PLANET_ORDER } from "../../data/planets";
import { PlanetContent, PlanetGallery } from "../../components/planet";

export const Planetas = () => {
  const { planet } = useParams<{ planet: string }>();

  if (!planet || !PLANET_DATA[planet]) {
    return <Navigate to="/planetas" replace />;
  }

  const planetInfo = PLANET_DATA[planet];

  const navigate = useNavigate();

const currentIndex = PLANET_ORDER.indexOf(planet);
const nextPlanet =
  currentIndex === PLANET_ORDER.length - 1
    ? PLANET_ORDER[0] 
    : PLANET_ORDER[currentIndex + 1];
const nextPlanetName = PLANET_DATA[nextPlanet].name;

const prevPlanet =
  currentIndex === 0
    ? PLANET_ORDER[PLANET_ORDER.length - 1]
    : PLANET_ORDER[currentIndex - 1];
const prevPlanetName = PLANET_DATA[prevPlanet].name;

  return (
    <section className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:gap-12">
          <PlanetContent planetInfo={planetInfo}
          nextPlanet={() => navigate(`/planetas/${nextPlanet}`)}
          prevPlanet={() => navigate(`/planetas/${prevPlanet}`)}
          nextPlanetName={nextPlanetName}
          previousPlanetName={prevPlanetName}/>
          <PlanetGallery
            gallery={planetInfo.gallery}
            name={planetInfo.name}
            imgdes1={planetInfo.imgdes1}
            imgdes2={planetInfo.imgdes2}
            imgdes3={planetInfo.imgdes3}
          />
        </div>
      </div>
    </section>
  );
}
