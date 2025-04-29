import React from "react";

export default function Coordinates() {
  return (
    <div className="hidden md:flex items-center justify-end text-sm gap-1 py-2 cursor-pointer">
      <a
        href="https://es.wikipedia.org/wiki/Coordenadas_geogr%C3%A1ficas"
        className="text-primary hover:underline"
      >
        Coordenadas:
      </a>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Erioll_world.svg/15px-Erioll_world.svg.png"
        alt=""
      />
      <a
        href="https://geohack.toolforge.org/geohack.php?language=es&pagename=Per%C3%BA&params=-12.06_N_-77.0375_E_type:city"
        className="text-primary hover:underline"
      >
        12°03′36″S 77°02′15″O
      </a>
      <p className="hover:underline">(mapa)</p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Flag-map_of_Peru.svg/20px-Flag-map_of_Peru.svg.png"
        alt=""
        className="w-3"
      />
    </div>
  );
}
