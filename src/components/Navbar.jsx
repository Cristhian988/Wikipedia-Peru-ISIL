import { MenuIcon, MoreHorizontal, Search } from "lucide-react";
import React, { useState } from "react";
import { NavLinks } from "../Data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [more, setMore] = useState(false);
  return (
    <header className="container mx-auto px-8 bg-white">
      <nav className="flex items-center justify-between pt-1.5 pb-4 px-6 text-sm">
        <div className="flex items-center">
          <div className="relative group">
            <div
              className={`${
                open ? "border-2" : "border-none"
              } p-1 hover:bg-gray-100 cursor-pointer`}
              onClick={() => setOpen(!open)}
            >
              <MenuIcon />
            </div>
            <div
              className={`${
                open ? "" : "hidden"
              } flex flex-col bg-white rounded p-4 absolute top-9 left-0 w-[250px] z-50 transition-all duration-300 shadow-lg`}
            >
              <h2 className="text-sm font-bold pb-1">Menú principal</h2>
              <button className="block w-36 text-left bg-gray-200 py-0.5 px-2 rounded cursor-pointer text-xs hover:bg-gray-100">
                mover a la barra lateral
              </button>
              <hr className="text-gray-200 mt-2" />
              {/* {links} */}
              <ul className="space-y-1.5 text-primary py-2">
                {NavLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-sm hover:underline">
                      {link.link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* logo */}
          <a href="https://es.wikipedia.org/wiki/Wikipedia:Portada">
            <img className="h-16 w-auto" src="/logo.jpg" alt="logo" />
          </a>
          <div className="relative hidden md:flex items-center justify-between w-[450px] px-2 pr-0 border ml-8">
            {/* search */}
            <Search width={20} height={20} />
            <input
              type="text"
              placeholder="Buscar en Wikipedia"
              className="absolute top-0 left-0 w-[350px] outline-none pl-8 py-1 "
            />
            <button className="border-l px-3 py-1 font-bold bg-gray-100 cursor-pointer">
              Buscar
            </button>
          </div>
        </div>

        <ul className="hidden md:flex items-center gap-3">
          <li>
            <a
              href="https://donate.wikimedia.org/w/index.php?title=Special:LandingPage&country=PE&uselang=en&wmf_medium=sidebar&wmf_source=donate&wmf_campaign=es.wikipedia.org"
              className="text-primary hover:underline"
            >
              Donaciones
            </a>
          </li>
          <li>
            <a
              href="https://auth.wikimedia.org/eswiki/wiki/Especial:Crear_una_cuenta?useformat=desktop&usesul3=1&returnto=Main_Page&centralauthLoginToken=cc8378764973f855605e7a37f464933f"
              className="text-primary hover:underline"
            >
              Crear una cuenta
            </a>
          </li>
          <li>
            <a
              href="https://auth.wikimedia.org/eswiki/wiki/Especial:Entrar?useformat=desktop&usesul3=1&returnto=Main_Page&centralauthLoginToken=37be1f2e8884fdba43c4a1deb3eef98e"
              className="text-primary hover:underline"
            >
              Acceder
            </a>
          </li>
          <div className="relative group">
            <button
              className={`${
                more ? "border-2" : "border-none"
              } p-1 hover:bg-gray-100 cursor-pointer text-lg font-bold `}
              onClick={() => setMore(!more)}
            >
              <MoreHorizontal className="w-6 h-6" />
            </button>
            <div
              className={`${
                more ? "" : "hidden"
              } flex flex-col bg-white rounded p-4 absolute top-9 right-0 w-[250px] z-50 transition-all duration-300 shadow-lg`}
            >
              {/* {links} */}
              <ul className="space-y-1 py-2">
                <li className="leading-4">
                  Páginas para editores desconectados{" "}
                  <a
                    href="https://es.wikipedia.org/wiki/Ayuda:Introducci%C3%B3n"
                    className="text-primary hover:underline"
                  >
                    mas información
                  </a>
                </li>
                <li>
                  <a
                    href="https://es.wikipedia.org/wiki/Especial:Contribuciones/38.25.17.119"
                    className="text-primary hover:underline"
                  >
                    Contribuciones
                  </a>
                </li>
                <li>
                  <a
                    href="https://es.wikipedia.org/wiki/Usuario_discusi%C3%B3n:38.25.17.119"
                    className="text-primary hover:underline"
                  >
                    Discusion
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </ul>
      </nav>
    </header>
  );
}
