import { Route, Routes } from "react-router-dom";
import { Hero } from "./components/hero.jsx";
import  Shop  from "./pages/Shop.jsx";

export const RouterElement = () => {
  return (
    <Routes>
      <Route index path="/" element={<Hero />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  );
};
