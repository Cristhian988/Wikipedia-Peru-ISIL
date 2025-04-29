import React from "react";

export default function InfoBox() {
  return (
    <div className="mb-2 w-8/12 border border-gray-400">
      <div className="bg-gray-100 h-full w-full text-center cursor-pointer">
        <h3 className="text-2xl font-semibold pt-2 text-black">
          República del Perú
        </h3>
        <div className="pb-2">
          <p>
            <em>Piruw Ripuwlika </em>(
            <a href="#" className="text-primary hover:underline">
              quechua
            </a>
            )
            <br />
          </p>
          <p>
            <em>Piruwxa Ripuwlika </em>(
            <a href="#" className="text-primary hover:underline">
              aimara
            </a>
            )
          </p>
        </div>

        <div className="flex justify-center items-center gap-8 border-y border-gray-400 py-4">
          <div className="flex flex-col gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/250px-Flag_of_Peru.svg.png"
              alt=""
              className="w-32"
            />
            <p className="text-primary hover:underline">Bandera</p>
          </div>
          <div className="flex flex-col gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Escudo_nacional_del_Per%C3%BA.svg/525px-Escudo_nacional_del_Per%C3%BA.svg.png"
              alt=""
              className="w-20"
            />
            <p className="text-primary hover:underline">Escudo</p>
          </div>
        </div>

        <p className="text-primary border-b border-gray-400 py-1">
          <span className="hover:underline">Lema</span>:{" "}
          <span className="hover:underline">«Firme y feliz por la unión»</span>
        </p>
        <div className="text-primary border-b border-gray-400 py-1">
          <span className="hover:underline">Himno</span>:{" "}
          <span className="hover:underline italic">
            Himno nacional del Perú
          </span>
          <audio controls className="mx-auto">
            <source src="/public/HIMNO PERÚ - OFICIAL.mp3" type="audio/mpeg" />
          </audio>
          <p className="text-sm italic hover:underline">
            ¿Problemas al reproducir este archivo?
          </p>
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
