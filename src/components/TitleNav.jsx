import React from "react";
import HeadingNav from "./HeadingNav";
import LinksNav from "./LinksNav";
import Coordinates from "./Coordinates";

export default function TitleNav() {
  return (
    <div className="mt-4">
      <HeadingNav />
      <hr className="border-gray-400" />
      <LinksNav />
      <hr className="border-gray-400" />
      <Coordinates />
    </div>
  );
}
