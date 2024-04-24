import React from "react";
import { CarouselWithContent } from "./carousel";
import Latestproducts from "./latestproducts";
import { Footer } from "./footer.jsx";

export const Hero = () => {
  return (
    <div className="lg:w-5/6 lg:h-[60vh]  lg:my-16 lg:mx-32 ">
      <CarouselWithContent />
      <div className="flex justify-between my-8">
        <h1 className="text-white text-2xl ">Shop The Latest</h1>
        <p className="text-[#B4A186] ">View All</p>
      </div>
      <Latestproducts />
      <Footer />
    </div>
  );
};
