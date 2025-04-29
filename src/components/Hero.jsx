import React from "react";
import TitleNav from "./TitleNav";
import HeroContent from "./HeroContent";
import TableHero from "./TableHero";

export default function Hero() {
  return (
    <div className="w-full md:w-[60%]">
      <TitleNav />
      <div className="flex flex-col md:flex-row gap-4">
        <HeroContent />
        <TableHero />
      </div>
    </div>
  );
}
