import { Menu } from "lucide-react";
import React from "react";

export default function MenuMobile() {
  return (
    <div>
      <div className="text-gray-500 cursor-pointer hover:bg-gray-100 rounded p-1">
        <Menu width={28} height={28} />
      </div>
    </div>
  );
}
