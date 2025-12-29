import { Navigate, useParams } from "react-router-dom";
import { PLANET_DATA } from "../../data/planets";
import { PlanetContent, PlanetGallery } from "../../components/planet";

export const Planetas = () => {
  const { planet } = useParams<{ planet: string }>();

  if (!planet || !PLANET_DATA[planet]) {
    return <Navigate to="/planetas" replace />;
  }

  const planetInfo = PLANET_DATA[planet];

  return (
    <section className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:gap-12">
          <PlanetContent planetInfo={planetInfo} />
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
