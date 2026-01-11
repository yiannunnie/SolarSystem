import { HoverDescription } from "../ui";

interface PlanetGalleryProps {
  gallery: string[];
  name: string;
  imgdes1?: string;
  imgdes2?: string;
  imgdes3?: string;
}

export const PlanetGallery = ({
  gallery,
  name,
  imgdes1,
  imgdes2,
  imgdes3,
}: PlanetGalleryProps) => {
  const descriptions = [imgdes1, imgdes2, imgdes3];

  return (
    <>
    <div className="md:w-1/2 min-h-screen pt-15 md:pt-0">
      <div className="flex flex-col items-center gap-15">
        {gallery.map((src, i) => (
          <HoverDescription
            key={i}
            description={descriptions[i] || ""}
            className="w-full h-80 rounded-xl"
          >
            <img
              src={src}
              alt={`${name} image ${i + 1}`}
              className="h-80 w-full object-contain rounded-xl"
            />
          </HoverDescription>
        ))}
      </div>
    </div>
    </>
  );
}
