import { useRef } from "react"
import { AnimTitle } from "./AnimTitle"
import { gsap } from "gsap";
import { Button } from "./Button";

export const Sun = () => {
    const frameRef = useRef<HTMLImageElement | null>(null);

    const handleMouseLeave = () => {}

    const handleMouseMove = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        const { clientX, clientY } = e;
        const element = frameRef.current;

        if (!element) return;

        const rect = element.getBoundingClientRect();
        //esto pra calcular la posicion del cursor
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        //con esto calculamos el centro
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        //calculamos la rotacion
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(element, {
            duration: 0.3,
            rotateX: rotateX,
            rotateY: rotateY,
            transformPerspective: 500,
            ease: "power1.inOut",
        });
    }

  return (
    <section id="sun" className="min-h-dvh w-screen bg-black text-white">
        <div className="flex size-full flex-col items-center pb-24">
            <p className="general text-sm uppercase md:text-[20px] mt-5">The heart of our solar system</p>
            <div className="relative size-full zentry">
                <AnimTitle
                title="The Sun"
                containerClass="mt-5 pointer-events-none relative z-10 "
                />

                <div className="sun-img">
                    <div className="sun-img-mask">
                        <div className="sun-img-content ">
                            <img
                            ref={frameRef}
                            onMouseLeave={handleMouseLeave}
                            onMouseUp={handleMouseLeave}
                            onMouseEnter={handleMouseLeave}
                            onMouseMove={handleMouseMove}
                            src="/img/sun.webp"
                            alt="Sun"
                            className="size-full object-contain object-center"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="-mt-50 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
                <div className="flex h-full w-fit flex-col items-center md:items-start">
                    <p className="mt-3 max-w-sm text-center text-sm px-5 circularfont text-violet-50 md:text-start md:text-base md:px-0">
                        The Sun is the star at the center of the Solar System. 
                        It is a nearly perfect sphere of hot plasma, with internal convective motion that generates a magnetic field via a dynamo process.
                        It is by far the most important source of energy for life on Earth.
                    </p>
                    <Button title="Learn more" id="sun-btn" containerClass="mt-8 md:mt-5 flex-center gap-1 font-semibold hover:bg-white hover:text-black hover:border-0 !font-regular" onClick={() => {}}/>
                </div>
            </div>
        </div>
    </section>
  )
}
