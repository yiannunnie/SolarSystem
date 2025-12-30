import { SUN_DATA } from "../../data/sun"
import { SunContent, SunGallery } from "../../components/sun"

export const Sol = () => {
  const sunInfo = SUN_DATA.sun;

  return (
    <section className="min-h-screen bg-black text-white pt-20">
          <div className="container mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row md:gap-12">
              <SunContent sunInfo={sunInfo}/>
              <SunGallery
                gallery={sunInfo.gallery}
                name={sunInfo.name}
                imgdes1={sunInfo.imgdes1}
                imgdes2={sunInfo.imgdes2}
                imgdes3={sunInfo.imgdes3}
                imgdes4={sunInfo.imgdes4}
                imgdes5={sunInfo.imgdes5}
                imgdes6={sunInfo.imgdes6}
              />
            </div>
          </div>
        </section>
  )
}
