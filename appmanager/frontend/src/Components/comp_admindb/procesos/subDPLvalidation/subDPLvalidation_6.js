import React, { Component } from 'react'

import imagen1 from '../../../../images/AdminDB/Dplvalidation/imagen6_1.png'


export class subDPLvalidation_6 extends Component {
    render() {
        return (
            <div>
                <p className="h4 pt-2">Contexto</p>
                <p className="h6 text-justify mr-4">
                    El DPL se encuentra en la siguiente ruta Varios\A01-AdministracionDB\Comandos\Validar_Todo 
                    con el nombre de Validar_Control_Cambios_Despacho.
                </p>    
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen1} />
                </div>
                <p>
                    Este DPL verifica que todos los elementos tengan Foreign key.
                </p>
            </div>
        )
    }
}

export default subDPLvalidation_6
