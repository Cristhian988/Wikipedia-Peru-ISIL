import React from "react";

export default function RightSide() {
  return (
    <div className=" w-1/5 mt-7 hidden md:block">
      <aside className="px-8 py-6">
        <div className="flex items-center gap-3">
          <h2 className="text-black font-semibold text-sm">Apariencia</h2>
          <button className="bg-gray-100 px-2 py-0.5 rounded cursor-pointer text-xs hover:bg-gray-50">
            ocultar
          </button>
        </div>

        <hr className="text-gray-200 my-2" />

        <div className="accordion space-y-1">
          <h2 className="text-black text-sm">Texto</h2>
          <hr className="text-gray-200 my-2" />
          <div className="flex flex-col gap-2 pl-1 pb-4 pt-1 text-sm space-y-1.5">
            <div className="flex items-center gap-3 text-sm">
              <input
                className="scale-150 accent-primary"
                type="radio"
                name="texto"
                id="small"
              />
              <label htmlFor="small">Pequeño</label>
            </div>
            <div className="flex items-center gap-3">
              <input
                className="scale-150 accent-primary"
                type="radio"
                name="texto"
                id="standard"
                defaultChecked
              />
              <label htmlFor="standard">Estándar</label>
            </div>
            <div className="flex items-center gap-3">
              <input
                className="scale-150 accent-primary"
                type="radio"
                name="texto"
                id="big"
              />
              <label className="text-sm" htmlFor="big">
                Grande
              </label>
            </div>
          </div>

          <h2 className="text-black text-sm">Anchura</h2>
          <hr className="text-gray-200 my-2" />
          <div className="flex flex-col gap-2 pl-1 pb-3 text-sm pt-1 space-y-1.5">
            <div className="flex items-center gap-3">
              <input
                className="scale-150 accent-primary"
                type="radio"
                name="anchura"
                id="normal"
                defaultChecked
              />
              <label htmlFor="normal">Estándar</label>
            </div>
            <div className="flex items-center gap-3">
              <input
                className="scale-150 accent-primary"
                type="radio"
                name="anchura"
                id="wide"
              />
              <label htmlFor="wide">Ancho</label>
            </div>
          </div>

          <h2 className="text-black text-sm">Color (beta)</h2>
          <hr className="text-gray-200 my-2" />
          <div className="flex flex-col gap-2 pl-1 pb-3 text-sm space-y-1.5">
            <div className="flex items-center gap-3 pt-2">
              <input
                className="scale-150 accent-primary"
                type="radio"
                name="color"
                id="automatic"
              />
              <label htmlFor="automatic">Automático</label>
            </div>
            <div className="flex items-center gap-3">
              <input
                className="scale-150 accent-primary"
                type="radio"
                name="color"
                id="light"
                defaultChecked
              />
              <label htmlFor="light">Claro</label>
            </div>
            <div className="flex items-center gap-3">
              <input
                className="scale-150 accent-primary"
                type="radio"
                name="color"
                id="dark"
              />
              <label htmlFor="dark">Oscuro</label>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
