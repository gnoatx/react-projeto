import { Outlet } from "react-router-dom";
import { Background } from "../components/Background";

import "../styles/global.css"

export function DefaultLayout() {
  return (
    <>
      <Outlet />
      <Background />
    </>
  );
}