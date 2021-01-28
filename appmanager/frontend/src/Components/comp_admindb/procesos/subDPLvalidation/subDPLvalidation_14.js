import React, { Component } from 'react'

import imagen1 from '../../../../images/AdminDB/Dplvalidation/imagen14_1.png'
import imagen2 from '../../../../images/AdminDB/Dplvalidation/imagen14_2.png'

export class subDPLvalidation_14 extends Component {
    render() {
        return (    
            <div>
                <p className="h4 pt-2">Contexto</p>
                <p className="h6 text-justify mr-4">
                    El DPL se encuentra en la siguiente ruta Varios\A01-AdministracionDB\Comandos\Validar_Todo con nombre 
                    Validar_ParamReferencias.
                </p>    
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen1} />
                </div>
                <p>
                    Saca información de los elementos que les hace falta alguna referencia (área, zona, operador, propietario 
                    o código MID) como se muestra en la siguiente imagen. 
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen2} />
                </div>
            </div>
        )
    }
}

export default subDPLvalidation_14
