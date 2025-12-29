import { useLocation, useNavigate } from "react-router-dom";

/**
 * Hook para manejar la navegación a secciones específicas
 * Si no estás en home, navega primero a home y luego hace scroll a la sección
 */
export const useSectionNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return { navigateToSection };
};
