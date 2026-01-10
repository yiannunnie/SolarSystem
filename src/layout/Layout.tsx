import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar";
import { ScrollRestoration } from "react-router";
import { Cursor } from "../components/cursor";



export const Layout = () => {
  return (
    <>
      <Cursor />
      <Navbar />
      <Outlet />
      <ScrollRestoration/>
    </>
  );
};
