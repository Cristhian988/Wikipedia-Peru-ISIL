import { ChevronDown, Languages, Plus, Search } from "lucide-react";
import React, { useState } from "react";
import { DiAptana } from "react-icons/di";

export default function HeadingNav() {
  const [languages, setLanguages] = useState(false);
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-3xl font-medium pb-1 !font-serif">Países Bajos</h1>
      <div className="relative group">
        <button
          className={`${
            languages ? "" : "border-none"
          } hover:bg-blue-50 py-1.5 px-2.5 flex items-center justify-center gap-3 cursor-pointer text-primary font-bold -mr-2 rounded text-sm`}
          onClick={() => setLanguages(!languages)}
        >
          <Languages width={24} height={24} />
          289 idiomas
          <ChevronDown width={18} height={18} />
        </button>

        <div
          className={`${
            languages ? "" : "hidden"
          } flex flex-col bg-white pb-4 absolute top-9 right-0 w-96 lg:w-[700px] h-[380px] z-100 transition-all duration-300 shadow-lg border border-gray-300 `}
        >
          <div className="flex items-center gap-3 border-b border-gray-300 py-2 px-4 w-full">
            <Search width={20} height={20} className="text-gray-400" />
            <input
              type="text"
              placeholder="Buscar un idioma"
              className="w-full outline-none"
            />
          </div>
          <div className="p-4 overflow-y-scroll">
            <h2 className="text-base font-bold text-gray-600 pb-2.5 pl-3">
              Idiomas sugeridos
            </h2>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-primary hover:bg-blue-50 px-2.5 py-1.5 pr-16"
                >
                  Aymar aru
                </a>
              </li>
              <li className="leading-4">
                <a
                  href="#"
                  className="text-primary hover:bg-blue-50 px-2.5 py-1.5 pr-16"
                >
                  Runa Simi
                </a>
              </li>
            </ul>

            <br />
            <br />

            <h2 className="text-base font-bold text-gray-600 pb-2.5 pl-3">
              Idiomas sugeridos
            </h2>
            <div className="grid grid-cols-2">
              <div className="col">
                <ul className="space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-primary hover:bg-blue-50 px-2.5 py-1.5 pr-24"
                    >
                      中文
                    </a>
                  </li>
                  <li className="leading-4">
                    <a
                      href="#"
                      className="text-primary hover:bg-blue-50 px-2.5 py-1.5 pr-16"
                    >
                      English
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-primary hover:bg-blue-50 px-2.5 py-1.5 pr-16"
                    >
                      Esperanto
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <ul className="space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-primary hover:bg-blue-50 px-2.5 py-1.5 pr-16"
                    >
                      Lingua Franca Nova
                    </a>
                  </li>
                  <li className="leading-4">
                    <a
                      href="#"
                      className="text-primary hover:bg-blue-50 px-2.5 py-1.5 pr-16"
                    >
                      La .lojban.
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-primary hover:bg-blue-50 px-2.5 py-1.5 pr-24"
                    >
                      Novial
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between gap-3 px-4 pt-2.5 border-t border-gray-300">
            <div className="flex items-center gap-3 cursor-pointer">
              <Plus width={20} height={20} />
              <h2 className="font-bold text-gray-600">Añadir idiomas</h2>
            </div>
            <div className="cursor-pointer text-gray-600">
              <DiAptana className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
