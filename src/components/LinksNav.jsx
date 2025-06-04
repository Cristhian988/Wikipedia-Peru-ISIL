import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import GeneralTools from "./GeneralTools";
import PrintExportTools from "./PrintExportTools";
import OthersTools from "./OthersTools";

export default function LinksNav() {
  const [tools, setTools] = useState(false);
  return (
    <div className="hidden md:flex justify-between items-center pt-2 cursor-pointer">
      <div className="flex items-center gap-4">
        <a href="/" className="underline underline-offset-[9px] decoration-2 ">
          Artículo
        </a>
        <a
          href="https://es.wikipedia.org/wiki/Discusi%C3%B3n:Per%C3%BA"
          className="text-primary hover:underline underline-offset-[9px] decoration-2"
        >
          Discusión
        </a>
      </div>

      <div className="flex items-center gap-4">
        <a href="/" className="underline underline-offset-[9px] decoration-2">
          Leer
        </a>
        <a
          href="https://es.wikipedia.org/w/index.php?title=Per%C3%BA&action=edit"
          className="text-primary hover:underline underline-offset-[9px] decoration-2"
        >
          Editar
        </a>
        <a
          href="https://es.wikipedia.org/w/index.php?title=Per%C3%BA&action=history"
          className="text-primary hover:underline underline-offset-[9px] decoration-2"
        >
          Ver historial
        </a>
        <div className="relative group">
          <button
            className={`${
              tools ? "" : "border-none"
            }  py-1 hover:bg-gray-100 cursor-pointer flex items-center justify-center gap-2`}
            onClick={() => setTools(!tools)}
          >
            Herramientas
            <ChevronDown width={20} height={20} />
          </button>
          <div
            className={`${
              tools ? "" : "hidden"
            } flex flex-col bg-white rounded p-4 absolute top-9 right-0 w-[250px] h-[650px] z-50 transition-all duration-300 shadow-xl overflow-y-scroll`}
          >
            <h2 className="text-base font-bold pb-1">Herramientas</h2>
            <button className="block w-40 text-left bg-gray-200 py-0.5 px-2 rounded cursor-pointer text-sm hover:bg-gray-100">
              mover a la barra lateral
            </button>

            <hr className="text-gray-200 mt-2" />

            <GeneralTools />
            <PrintExportTools />
            <OthersTools />
          </div>
        </div>
      </div>
    </div>
  );
}
