import React, { Component } from 'react'

import imagen1 from '../../../../images/AdminDB/Dplvalidation/imagen4_1.png'


export class subDPLvalidation_4 extends Component {
    render() {
        return (
            <div>
                <p className="h4 pt-2">Contexto</p>
                <p className="h6 text-justify mr-4">
                    El DPL se encuentra en la siguiente ruta Varios\A01-AdministracionDB\Comandos\Validar_Todo 
                    con el nombre de Validar_CaracterPeligroso.
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen1} />
                </div>
                <p className="h6 text-justify mr-4">
                    Este DPL permite validar que los nombres de los elementos no tenga caracteres como “\” o “–“ en 
                    los nombres, dado que estos ocasionan un mal funcionamiento del programa ESTYRA. 
                </p>
            </div>
        )
    }
}

export default subDPLvalidation_4
