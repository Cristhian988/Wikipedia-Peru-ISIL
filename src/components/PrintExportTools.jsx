import React from "react";
import { ToolsPrintExport } from "../Data";

export default function PrintExportTools() {
  return (
    <div>
      <p className="text-gray-700 py-1">Imprimir/exportar</p>

      <hr className="text-gray-200 mb-2" />
      {/* {links} */}
      <ul className="pb-2">
        {ToolsPrintExport.map((link, index) => {
          return (
            <li key={index} className="leading-4 py-2">
              <a href={link.href} className="text-primary hover:underline">
                {link.link}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
