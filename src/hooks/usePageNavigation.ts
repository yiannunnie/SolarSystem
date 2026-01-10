import { useNavigate } from "react-router-dom";

/** Recordatorio: esto es para la navegación entre páginas */
export const usePageNavigation = () => {
  const navigate = useNavigate();

  return {
    goHome: () => navigate("/"),
    goBack: () => navigate(-1),
    goSun: () => navigate("/sol"),
    goCuriosities: () => navigate("/curiosities"),
  };
};