import React, { Component } from 'react'

import imagen1 from '../../../../images/AdminDB/Dplvalidation/imagen10_1.png'
import imagen2 from '../../../../images/AdminDB/Dplvalidation/imagen10_2.png'


export class subDPLvalidation_10 extends Component {
    render() {
        return (
            <div>
                <p className="h4 pt-2">Contexto</p>
                <p className="h6 text-justify mr-4">
                    El DPL se encuentra en la siguiente ruta Varios\A01-AdministracionDB\Comandos\Validar_Todo 
                    con el nombre de Validar_DispatchGen.
                </p>    
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen1} />
                </div>
                <p className="h6 text-justify mr-4">
                    Este DPL permite verificar que los generadores menores a 20MW tengan la opción Fixed y los 
                    mayores o iguales la opción Dispatchable. Para mirar los recursos que se pueden despachar 
                    y los que no. 
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen2} />
                </div>
            </div>
        )
    }
}

export default subDPLvalidation_10
