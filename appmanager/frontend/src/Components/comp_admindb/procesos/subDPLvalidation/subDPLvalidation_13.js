import React, { Component } from 'react'

import imagen1 from '../../../../images/AdminDB/Dplvalidation/imagen13_1.png'
import imagen2 from '../../../../images/AdminDB/Dplvalidation/imagen13_1.png'


export class subDPLvalidation_13 extends Component {
    render() {
        return (
            <div>
                <p className="h4 pt-2">Contexto</p>
                <p className="h6 text-justify mr-4">
                    El DPL se encuentra en la siguiente ruta Varios\A01-AdministracionDB\Comandos\Validar_Todo 
                    con nombre Validar_ModelosEncriptados.
                </p>    
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen1} />
                </div>
                <p>
                    Valida que los modelo en la siguiente imagen de plantas eólicas estén encriptados. 
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen2} />
                </div>
            </div>
        )
    }
}

export default subDPLvalidation_13
