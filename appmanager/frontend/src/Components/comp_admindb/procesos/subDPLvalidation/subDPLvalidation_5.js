import React, { Component } from 'react'

import imagen1 from '../../../../images/AdminDB/Dplvalidation/imagen5_1.png'


export class subDPLvalidation_5 extends Component {
    render() {
        return (
            <div>
                <p className="h4 pt-2">Contexto</p>
                <p className="h6 text-justify mr-4">
                    El DPL se encuentra en la siguiente ruta Varios\A01-AdministracionDB\Comandos\Validar_Todo con el 
                    nombre de Validar_CompensacionSwitch.
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen1} />
                </div>
                <p>
                    Permite verificar los reactores que tiene un Switch para ser operados. En la red se encuentra elementos 
                    que no tiene Switch y por tanto en cao que se les agregue uno, el DPL manda la alerta. 
                </p>
            </div>
        )
    }
}

export default subDPLvalidation_5
