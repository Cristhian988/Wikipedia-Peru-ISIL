import React from "react";
import Content from "./Content";
import InfoBox from "./InfoBox";
import { ChevronDown, Languages } from "lucide-react";

export default function RightContent() {
  return (
    <div className="">
      <div className="">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold pb-2">Perú</h1>
          <button className="hover:bg-blue-50 py-1.5 px-2.5 flex items-center justify-center gap-3 cursor-pointer text-primary font-bold -mr-2 rounded">
            <Languages />
            263 idiomas
            <ChevronDown width={18} height={18} />
          </button>
        </div>
        <hr className="border-gray-400" />
        <div className="flex justify-between items-center pt-2 cursor-pointer">
          <div className="flex items-center gap-4">
            <h2 className="underline underline-offset-[9px] decoration-2 ">
              Artículo
            </h2>
            <h2 className="text-primary hover:underline underline-offset-[9px] decoration-2">
              Discusión
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <h2 className="underline underline-offset-[9px] decoration-2">
              Leer
            </h2>
            <h2 className="text-primary hover:underline underline-offset-[9px] decoration-2">
              Ver Código fuente
            </h2>
            <h2 className="text-primary hover:underline underline-offset-[9px] decoration-2">
              Ver historial
            </h2>
            <button className="hover:bg-gray-100 py-1 flex items-center justify-center gap-2 cursor-pointer">
              Herramientas
              <ChevronDown width={20} height={20} />
            </button>
          </div>
        </div>
        <hr className="border-gray-400" />

        <div className="flex items-center justify-end text-sm gap-1 py-2 cursor-pointer">
          <p className="text-primary hover:underline">Coordenadas:</p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Erioll_world.svg/15px-Erioll_world.svg.png"
            alt=""
          />
          <p className="text-primary hover:underline">12°03′36″S 77°02′15″O</p>
          <p className="hover:underline">(mapa)</p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Flag-map_of_Peru.svg/20px-Flag-map_of_Peru.svg.png"
            alt=""
            className="w-3"
          />
        </div>

        <p className="pl-8 mb-3 italic">
          Para otros usos de este término, véase{" "}
          <a href="#" className="text-primary hover:underline">
            Perú (desambiguación)
          </a>
          .
        </p>
        <div className="flex gap-2">
          <Content />
          <InfoBox />
        </div>
      </div>
    </div>
  );
}
