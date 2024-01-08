import { Component } from "../components/Component"
import { componentList } from "../assets/constants"
import { useState } from "react"

export default function Home() {
  const [components, setComponents] = useState(componentList)

  return (
    <>
      <div className="container mx-auto text-white">

        <h1 className="text-3xl font-semibold border text-center py-3 rounded-3xl">Prometeo1.0</h1>

        <div className="flex flex-row py-5">
          <div className="basis-1/2 px-3">
            <h3 className="pb-5 text-center font-semibold text-xl">Descripcion General</h3>

            <p>
              La calidad del aire es un factor muy esencial para mantener la salud y el bienestar de la sociedad y el ecosistema, y si no se tiene un control monitoreado podría llegar a ser un gran riesgo y en algunos casos letal.
              <br/>
              En la actualidad, el monitoreo de la calidad del aire en la ciudad de Cochabamba llega a ser complicado debido a la extensión de la mancha urbana, que, a mayor crecimiento de esta, mayor llega a ser la contaminación y cada vez mucho menos controlable.
              <br/>
              Según la Organización Mundial de la Salud (OMS, 2018):
              <br/>
              Alrededor de 249 mil muertes prematuras fueron atribuibles a la contaminación del aire debido a las substancias nocivas que producen algunas fábricas, incendios y desechos químicos a gran nivel, como también a la contaminación a bajos niveles pero nocivos debido a la cantidad en la que se producen como la contaminación que generan los automóviles.
              <br/>
              El dióxido de carbono (CO2) y el Metano son los gases contaminantes más famosos del mundo en los último años, y los que dañan mucho más la capa atmosférica y el aire debido a su producción en gran escala.

            </p>

          </div>
          <div className="basis-1/2 items-center justify-center">
            <img src="src/assets/images/cansat.jpg" alt="" className="w-96 mx-auto rounded-2xl" />
          </div>
        </div>

        <div className="flex flex-col">
          {
            components.map(item =>
              <Component id={item.id} key={item.id} img={item.img} desc={item.desc} title={item.title} />
            )
          }
        </div>
      </div>
    </>
  )
} 