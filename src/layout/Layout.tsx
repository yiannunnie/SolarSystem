import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar";
import { ScrollRestoration } from "react-router";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <ScrollRestoration/>
    </>
  );
};
