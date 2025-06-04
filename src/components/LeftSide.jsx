import React from "react";
import { Contenidos, LinksEmpty } from "../Data";
import { ChevronRight } from "lucide-react";

export default function LeftSide() {
  return (
    <div className="w-1/5 mt-7 hidden md:block">
      <aside className="px-8 py-6">
        <div className="flex items-center gap-3">
          <h2 className="text-black font-semibold text-sm">Contenidos</h2>
          <button className="bg-gray-100 px-2 py-0.5 rounded cursor-pointer text-xs hover:bg-gray-50">
            ocultar
          </button>
        </div>

        <hr className="text-gray-200 my-2" />

        <div className="space-y-2 text-primary">
          <h2 className="text-black font-semibold text-sm hover:underline cursor-pointer">
            Inicio
          </h2>

          <div className="space-y-1.5 text-sm">
            <a href="#" className="py-8 hover:underline text-primary">
              Etimologia
            </a>
            {Contenidos.map((item, index) => (
              <details
                key={index}
                className="list-none marker:hidden mt-2 -ml-6"
              >
                <summary className="hover:underline cursor-pointer flex items-center">
                  <button className="mr-1">
                    <ChevronRight className="w-4 h-4 text-black" />
                  </button>
                  {item.title}
                </summary>
                <div className="accordion-panel">
                  <ul>
                    {item.items.map((link, index) => {
                      return (
                        <li className="pl-6" key={index}>
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
            <ul className="space-y-1.5">
              {LinksEmpty.map((link, index) => {
                return (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="hover:underline text-primary"
                    >
                      {link.link}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
}
