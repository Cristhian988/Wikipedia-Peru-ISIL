import React from "react";

export default function RightSidebar() {
  return (
    <div className="mt-12">
      <aside className="px-8 py-6">
        <div className="flex items-center gap-3">
          <h2 className="text-black font-semibold">Apariencia</h2>
          <button className="bg-gray-100 px-2 py-0.5 rounded cursor-pointer text-sm hover:bg-gray-50">
            ocultar
          </button>
        </div>

        <hr className="text-gray-200 my-2" />

        <div className="accordion space-y-1">
          <h2 className="text-black">Texto</h2>
          <hr className="text-gray-200 my-2" />
          <div className="flex flex-col gap-2 pl-1 pb-4">
            <div className="flex items-center gap-3">
              <input
                className="scale-150 accent-primary"
                type="radio"
                name="texto"
                id="small"
              />
              <label className="text-lg" htmlFor="small">
                Pequeño
              </label>
            </div>
            <div className="flex items-center gap-3">
              <input
                className="scale-150 accent-primary"
                type="radio"
                name="texto"
                id="standard"
                checked
              />
              <label className="text-lg" htmlFor="standard">
                Estándar
              </label>
            </div>
            <div className="flex items-center gap-3">
              <input
                className="scale-150 accent-primary"
                type="radio"
                name="texto"
                id="big"
              />
              <label className="text-lg" htmlFor="big">
                Grande
              </label>
            </div>
          </div>

          <h2 className="text-black">Anchura</h2>
          <hr className="text-gray-200 my-2" />
          <div className="flex flex-col gap-2 pl-1 pb-3">
            <div className="flex items-center gap-3">
              <input
                className="scale-150 accent-primary"
                type="radio"
                name="anchura"
                id="wide"
                checked
              />
              <label htmlFor="wide">Estándar</label>
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

          <h2 className="text-black">Color (beta)</h2>
          <hr className="text-gray-200 my-2" />
          <div className="flex flex-col gap-2 pl-1 pb-3">
            <div className="flex items-center gap-3">
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
                checked
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
