import type { SunInfo } from "../../data/sun"
import { ContentStyle } from "../contentStyle/ContentStyle";

interface SunContentProps {
    sunInfo: SunInfo
}
export const SunContent = ( {sunInfo}: SunContentProps) => {
    const {
        name,
        description,
        lifecycle, 
        orbit, 
        structure, 
        spaceweather, 
        solarobservation
    } = sunInfo

  return (
    <div className="md:w-1/2 md:flex md:flex-col md:justify-start space-y-4">
      <div className="flex items-baseline justify-between md:pb-5">
        <h1 className="text-2xl md:text-4xl font-bold uppercase">{name}</h1>
      </div>

      <div className="circularfont md:h-auto pt-10 md:pt-0">
        <p className="pspace">{description}</p>

        <ContentStyle title="Description" content={description} />
      <ContentStyle title="Lifecycle" content={lifecycle} />
      <ContentStyle title="Orbit" content={orbit} />
      <ContentStyle title="Structure" content={structure} />
      <ContentStyle title="Space Weather" content={spaceweather} />
      <ContentStyle title="Solar Observation" content={solarobservation} />
      </div>
    </div>
  );
};
