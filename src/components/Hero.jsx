import React from "react";
import TitleNav from "./TitleNav";
import HeroContent from "./HeroContent";
import TableHero from "./TableHero";

export default function Hero() {
  return (
    <div className="w-full md:w-[70%]">
      <TitleNav />
      <div className="text-balance pl-6 space-y-2 my-3 italic font-medium">
        <p>
          No debe confundirse con el{" "}
          <a
            href="https://es.wikipedia.org/wiki/Reino_de_los_Pa%C3%ADses_Bajos"
            className="text-primary hover:underline"
          >
            Reino de los Países Bajos
          </a>
          , en el que conforma una de sus naciones constituyentes.
        </p>
        <p>
          No debe confundirse con{" "}
          <a
            href="https://es.wikipedia.org/wiki/Holanda"
            className="text-primary hover:underline"
          >
            Holanda
          </a>
          , dos de las regiones del país:
          <a
            href="https://es.wikipedia.org/wiki/Provincia_de_Holanda_Septentrional"
            className="text-primary hover:underline"
          >
            Holanda Septentrional
          </a>{" "}
          y{" "}
          <a
            href="https://es.wikipedia.org/wiki/Provincia_de_Holanda_Meridional"
            className="text-primary hover:underline"
          >
            Holanda Meridional
          </a>
          .
        </p>
        <p>
          Para otros usos de este término, véase{" "}
          <a
            href="https://es.wikipedia.org/wiki/Pa%C3%ADses_Bajos_(desambiguaci%C3%B3n)"
            className="text-primary hover:underline"
          >
            Países Bajos (desambiguación)
          </a>
          .
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <HeroContent />
        <TableHero />
      </div>
    </div>
  );
}
