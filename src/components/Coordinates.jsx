import React from "react";

export default function Coordinates() {
  return (
    <div className="hidden md:flex items-center justify-end text-xs gap-1.5 py-2.5 cursor-pointer">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Art%C3%ADculo_bueno.svg/40px-Art%C3%ADculo_bueno.svg.png"
        alt="checks"
        className="w-4"
      />
      <a
        href="https://es.wikipedia.org/wiki/Coordenadas_geogr%C3%A1ficas"
        className="text-primary hover:underline"
      >
        Coordenadas:
      </a>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/WMA_button2b.png/34px-WMA_button2b.png"
        alt=""
        className="w-5"
      />
      <a
        href="https://geohack.toolforge.org/geohack.php?language=es&pagename=Pa%C3%ADses_Bajos&params=52.316666666667_N_5.55_E_type:city"
        className="text-primary hover:underline"
      >
        52°19′00″N 5°33′00″E
      </a>
      <p className="text-primary hover:underline">(mapa)</p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Royal_coat_of_arms_of_the_Netherlands.svg/40px-Royal_coat_of_arms_of_the_Netherlands.svg.png"
        alt=""
        className="w-4"
      />
    </div>
  );
}
