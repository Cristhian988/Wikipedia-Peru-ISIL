import React from "react";

export default function TableHero() {
  return (
    <div className="mb-2 w-full md:w-8/12 border border-gray-400">
      <div className="bg-gray-100 h-full w-full text-center text-sm cursor-pointer">
        <h3 className="text-xl font-semibold pt-2 text-black">Países Bajos</h3>
        <p className="text-base font-semibold italic pb-2">Nederland</p>

        <div className="border-t border-gray-400 py-1.5 bg-[#cddeff] font-semibold text-sm">
          <p className="pb-1.5">
            <a
              href="https://es.wikipedia.org/wiki/Naci%C3%B3n_constitutiva"
              className="text-primary hover:underline"
            >
              Nación constituyente
            </a>{" "}
            del <br />{" "}
            <a
              href="https://es.wikipedia.org/wiki/Reino_de_los_Pa%C3%ADses_Bajos"
              className="text-primary hover:underline"
            >
              Reino de los Países Bajos
            </a>
          </p>
          <p className="border-t border-gray-400 pt-1.5">
            <a
              href="https://es.wikipedia.org/wiki/Estado_miembro_de_la_Uni%C3%B3n_Europea"
              className="text-primary hover:underline"
            >
              Estado miembro
            </a>{" "}
            de la{" "}
            <a
              href="https://es.wikipedia.org/wiki/Uni%C3%B3n_Europea"
              className="text-primary hover:underline"
            >
              Unión Europea
            </a>
          </p>
        </div>

        <div className="flex justify-center items-center gap-8 border-y border-gray-400 py-4 text-xs">
          <div className="flex flex-col gap-2">
            <a href="https://es.wikipedia.org/wiki/Pa%C3%ADses_Bajos#/media/Archivo:Flag_of_the_Netherlands.svg">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/330px-Flag_of_the_Netherlands.svg.png"
                alt=""
                className="w-32"
              />
            </a>

            <a
              href="https://es.wikipedia.org/wiki/Bandera_de_los_Pa%C3%ADses_Bajos"
              className="text-primary hover:underline"
            >
              Bandera
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <a href="https://es.wikipedia.org/wiki/Pa%C3%ADses_Bajos#/media/Archivo:State_coat_of_arms_of_the_Netherlands.svg">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/State_coat_of_arms_of_the_Netherlands.svg/250px-State_coat_of_arms_of_the_Netherlands.svg.png"
                alt=""
                className="w-26"
              />
            </a>

            <a
              href="https://es.wikipedia.org/wiki/Escudo_de_los_Pa%C3%ADses_Bajos"
              className="text-primary hover:underline"
            >
              Escudo
            </a>
          </div>
        </div>

        <div className="border-b border-gray-400 py-1">
          <p className="italic">
            <a
              href="https://es.wikipedia.org/wiki/Anexo:Lemas_nacionales"
              className="text-primary hover:underline not-italic"
            >
              Lema
            </a>
            : Ik zal handhaven
          </p>
          <p>
            (en{" "}
            <a
              href="https://es.wikipedia.org/wiki/Idioma_neerland%C3%A9s"
              className="text-primary hover:underline"
            >
              neerlandés
            </a>
            : «Mantendré»)
          </p>
        </div>
        <div className="border-b border-gray-400 py-1">
          <a
            href="https://es.wikipedia.org/wiki/Himno_nacional"
            className="text-primary hover:underline"
          >
            Himno
          </a>
          :{" "}
          <a
            href="https://es.wikipedia.org/wiki/Himno_Nacional_del_Per%C3%BA"
            className="text-primary hover:underline italic"
          >
            Het Wilhelmus
          </a>
          <p>
            (en{" "}
            <a href="" className="text-primary hover:underline">
              neerlandés
            </a>{" "}
            : «El Guillermo»)
          </p>
          <audio controls className="mx-auto">
            <source src="/Netherlands-National.mp3" type="audio/mpeg" />
          </audio>
          <a
            href="https://es.wikipedia.org/wiki/Ayuda:Multimedia"
            className="text-primary text-sm italic hover:underline"
          >
            ¿Problemas al reproducir este archivo?
          </a>
        </div>
        <div className="py-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/EU-Netherlands.svg/330px-EU-Netherlands.svg.png"
            alt=""
            className="mx-auto"
          />
          <div className="py-2 text-xs space-y-1">
            <p className="font-bold">
              <span className="bg-[#008000] border py-[.3px] px-[7px] mr-1.5"></span>{" "}
              Países Bajos
            </p>
            <p>
              <span className="bg-[#90EE90] border py-[.3px] px-[7px] mr-1.5"></span>{" "}
              Resto de la{" "}
              <a
                href="https://es.wikipedia.org/wiki/Uni%C3%B3n_Europea"
                className="text-primary hover:underline font-bold"
              >
                Unión Europea
              </a>
            </p>
            <p>
              <span className="bg-[#A9A9A9] border py-[.3px] px-[7px] mr-1.5"></span>{" "}
              Resto de Europa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
