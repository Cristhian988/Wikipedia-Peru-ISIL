import React from "react";

export default function TableHero() {
  return (
    <div className="mb-2 w-full md:w-8/12 border border-gray-400">
      <div className="bg-gray-100 h-full w-full text-center cursor-pointer">
        <h3 className="text-2xl font-semibold pt-2 text-black">Países Bajos</h3>
        <p className="text-lg font-semibold italic pb-2">Nederland</p>

        <div className="border-t border-gray-400 py-1 bg-[#cddeff] font-semibold">
          <p>
            <a href="" className="text-primary hover:underline">
              Nación constituyente
            </a>{" "}
            del <br />{" "}
            <a href="" className="text-primary hover:underline">
              Reino de los Países Bajos
            </a>
          </p>
          <p className="border-t border-gray-400 pt-1">
            <a href="" className="text-primary hover:underline">
              Estado miembro
            </a>{" "}
            de la{" "}
            <a href="" className="text-primary hover:underline">
              Unión Europea
            </a>
          </p>
        </div>

        <div className="flex justify-center items-center gap-8 border-y border-gray-400 py-4">
          <div className="flex flex-col gap-2">
            <a href="https://es.wikipedia.org/wiki/Per%C3%BA#/media/Archivo:Flag_of_Peru.svg">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/330px-Flag_of_the_Netherlands.svg.png"
                alt=""
                className="w-32"
              />
            </a>

            <a
              href="https://es.wikipedia.org/wiki/Bandera_del_Per%C3%BA"
              className="text-primary hover:underline"
            >
              Bandera
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <a href="https://es.wikipedia.org/wiki/Archivo:Escudo_nacional_del_Per%C3%BA.svg">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/State_coat_of_arms_of_the_Netherlands.svg/250px-State_coat_of_arms_of_the_Netherlands.svg.png"
                alt=""
                className="w-26"
              />
            </a>

            <a
              href="https://es.wikipedia.org/wiki/Escudo_del_Per%C3%BA"
              className="text-primary hover:underline"
            >
              Escudo
            </a>
          </div>
        </div>

        <p className="text-primary border-b border-gray-400 py-1">
          <a
            href="https://es.wikipedia.org/wiki/Anexo:Lemas_nacionales"
            className="hover:underline"
          >
            Lema
          </a>
          :{" "}
          <a
            href="https://es.wikipedia.org/wiki/Firme_y_feliz_por_la_uni%C3%B3n"
            className="hover:underline"
          >
            «Firme y feliz por la unión»
          </a>
        </p>
        <div className="text-primary border-b border-gray-400 py-1">
          <a
            href="https://es.wikipedia.org/wiki/Himno_nacional"
            className="hover:underline"
          >
            Himno
          </a>
          :{" "}
          <a
            href="https://es.wikipedia.org/wiki/Himno_Nacional_del_Per%C3%BA"
            className="hover:underline italic"
          >
            Himno nacional del Perú
          </a>
          <audio controls className="mx-auto">
            <source src="/public/HIMNO PERÚ - OFICIAL.mp3" type="audio/mpeg" />
          </audio>
          <a
            href="https://es.wikipedia.org/wiki/Ayuda:Multimedia"
            className="text-sm italic hover:underline"
          >
            ¿Problemas al reproducir este archivo?
          </a>
        </div>
        <div className="py-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/PER_orthographic.svg/250px-PER_orthographic.svg.png"
            alt=""
            className="mx-auto"
          />
        </div>
        <div className="flex gap-8 text-left text-primary border-t border-gray-400 py-2">
          <p className="font-bold w-36 pl-2 hover:underline">
            Capital (y ciudad más poblada)
          </p>
          <div className="flex flex-col gap-3 w-full pr-2">
            <div className="flex items-center justify-between w-auto">
              <p className="hover:underline">Lima</p>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Coat_of_arms_of_Lima.svg/20px-Coat_of_arms_of_Lima.svg.png"
                alt=""
                className="w-5 h-5"
              />
            </div>
            <div className="flex items-center gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Erioll_world.svg/15px-Erioll_world.svg.png"
                alt=""
                className="w-4 h-4"
              />
              <p className="hover:underline">12°03′36″S 77°02′15″O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
