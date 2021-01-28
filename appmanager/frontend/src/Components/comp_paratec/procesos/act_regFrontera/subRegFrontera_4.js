import React, { Component } from 'react'

export class subRegFrontera_4 extends Component {
    render() {
        return (
            <div>
                <p className="h4 pt-2">Contexto</p>
                <p className="h6 text-justify mr-4">
                    Para que los diferentes aplicativos que leen la información de la base de datos
                    visualicen los nuevos elementos creados estos deben ser ingresados en las colecciones
                    correspondientes a través del Administrador MID. Para saber en cuáles colecciones deben
                    ser ingresados los elementos creados consultar el documento de PROCESO DE PARÁMETROS en                       
                    la esta ruta del servidor. (<b><i>En esta etapa solo se debe ingresar los elementos
                        a la colección Col0082 para que el aplicativo de fronteras vea el recurso
                        y el agente pueda solicitar la frontera. No se deben ingresar en ningun otra colección.</i></b>)
                    \\archivosxm\PlaneacionOperacion\PARATEC\42. Procedimientos\PROCESO PARÁMETROS TÉCNICOS
                </p>                
            </div>
        )
    }
}

export default subRegFrontera_4
