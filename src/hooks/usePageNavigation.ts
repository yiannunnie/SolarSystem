import { useNavigate } from "react-router-dom";

export const usePageNavigation = () => {
  const navigate = useNavigate();

  return {
    goHome: () => navigate("/"),
    goBack: () => navigate(-1),
    goSun: () => navigate("/sol"),
    goCuriosities: () => navigate("/curiosities"),
  };
};