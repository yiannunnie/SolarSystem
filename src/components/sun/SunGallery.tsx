interface SunGalleryProps {
    gallery: string[]
    name: string
    imgdes1?: string
    imgdes2?: string
    imgdes3?: string
    imgdes4?: string
    imgdes5?: string
    imgdes6?: string
}

export const SunGallery = ({
    gallery,
    name,
    imgdes1,
    imgdes2,
    imgdes3,
    imgdes4,
    imgdes5,
    imgdes6,
    }: SunGalleryProps) => {
        const descriptions = [imgdes1, imgdes2, imgdes3, imgdes4, imgdes5, imgdes6];
  return (
    <>
    <div className="md:w-1/2 min-h-screen md:h-auto pt-15 md:pt-0">
      <div className="flex flex-col items-center gap-15">
        {gallery.map((src, i) => (
          <div key={i} className="relative group w-full h-80">
            <img
              src={src}
              alt={`${name} image ${i + 1}`}
              className="h-80 w-full object-contain rounded-xl"
            />
            {descriptions[i] && (
              <div className="circularfont absolute bottom-0 left-0 w-full bg-stone-900/50 text-white text-start text-sm py-4 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div>{descriptions[i]}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
