import { Routes, Route } from "react-router-dom"
import { DefaultLayout } from "../layout/DefaultLayout"

import { Home } from "../pages/Home"
import { Favourite } from "../pages/Favourite"

export function Routers(){
return (
  <Routes>
    <Route element={<DefaultLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/favs" element={<Favourite />} />
    </Route>
  </Routes>
);

}