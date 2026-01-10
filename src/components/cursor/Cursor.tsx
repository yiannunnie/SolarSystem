import { useEffect } from "react"
import { gsap } from "gsap"

export const Cursor = () => {
    useEffect(() => {
        if (!window.matchMedia("(pointer: fine)").matches) return;
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            gsap.to("#custom-cursor", {
                x: clientX,
                y: clientY,
                duration: 0.1,
                delay: 0,
                ease: "power2.out",
            });
        };
        const growCursor = () => {
            gsap.to("#custom-cursor", {
                scale: 2,
                duration: 0.1,
                delay: 0,
                ease: "power2.out",
            });
        };
        const shrinkCursor = () => {
            gsap.to("#custom-cursor", {
                scale: 1,
                duration: 0.1,
                delay: 0,
                ease: "power2.out",
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        document.querySelectorAll("a, button").forEach((el) => {
            el.addEventListener("mouseenter", growCursor);
            el.addEventListener("mouseleave", shrinkCursor);
        });
        
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.querySelectorAll("a, button").forEach((el) => {
                el.removeEventListener("mouseenter", growCursor);
                el.removeEventListener("mouseleave", shrinkCursor);
            });
        };
        
    }, []);
    
    return (
        <> 
            <div 
            id="custom-cursor" 
            className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-9999 mix-blend-difference"
            />
        </>
    )
}   