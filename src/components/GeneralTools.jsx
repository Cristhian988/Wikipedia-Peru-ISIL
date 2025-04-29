import React from "react";
import { ToolsGeneral } from "../Data";

export default function GeneralTools() {
  return (
    <div>
      <p className="text-gray-700 py-1">General</p>

      <hr className="text-gray-200 mb-2" />
      {/* {links} */}
      <ul className="pb-2">
        {ToolsGeneral.map((link, index) => {
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
