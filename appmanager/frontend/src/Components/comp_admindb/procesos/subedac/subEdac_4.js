import React, { Component } from 'react'

import imagen1 from '../../../../images/AdminDB/EDAC/imagen4_1.png'
import imagen2 from '../../../../images/AdminDB/EDAC/imagen4_2.png'


export class subEdac_4 extends Component {
    render() {
        return (
            <div>
                <p className="h4 pt-2">Contexto</p>
                <p className="h6 text-justify mr-4">
                    El DPL se encuentra en la siguiente ruta Varios\A01-AdministraciónDB\Comandos con el 
                    nombre de Crear y dentro vamos a encontrar otro DPL con el nombre CrearRelesEDAC. 
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen1} />
                </div>
                <p className="h6 text-justify mr-4">
                    Al ejecutar el DPL se puede observar que ingresa los DSL en la ruta de la red por cada 
                    área del país, en la siguiente imagen se puede ver la actualización que hace para la 
                    subárea Atlántico del área Caribe.               
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen2} />
                </div>    
            </div>
        )
    }
}

export default subEdac_4
