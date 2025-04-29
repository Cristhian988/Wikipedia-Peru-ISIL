import React from "react";
import { Contenidos } from "../Data";
import { ChevronRight } from "lucide-react";

export default function LeftSidebar() {
  return (
    <div className="w-1/5 mt-12">
      <aside className="px-8 py-6">
        <div className="flex items-center gap-3">
          <h2 className="text-black font-semibold">Contenidos</h2>
          <button className="bg-gray-100 px-2 py-0.5 rounded cursor-pointer text-sm hover:bg-gray-50">
            ocultar
          </button>
        </div>

        <hr className="text-gray-200 my-2" />

        <div className="space-y-2 text-primary">
          <h2 className="text-black font-semibold hover:underline cursor-pointer">
            Inicio
          </h2>

          {Contenidos.map((item, index) => (
            <details key={index} className="list-none marker:hidden">
              <summary className="hover:underline cursor-pointer">
                {item.title}
              </summary>
              <div className="accordion-panel">
                <ul>
                  {item.items.map((link, index) => {
                    return (
                      <li className="pl-6" key={index}>
                        <button>
                          <ChevronRight />
                        </button>
                        <a
                          className="hover:underline text-sm"
                          href={link.label}
                        >
                          {link.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </details>
          ))}
        </div>
      </aside>
    </div>
  );
}
