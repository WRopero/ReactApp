import React, { Component } from 'react'

import imagen1 from '../../../../images/AdminDB/Dplvalidation/imagen1_1.png'

export class subDPLvalidation_1 extends Component {
    render() {
        return (
            <div>
                <p className="h4 pt-2">Contexto</p>
                <p className="h6 text-justify mr-4">
                    El DPL se encuentra en la siguiente ruta \Script\CrearCasosDespacho con el nombre 
                    de LimpiarPrj, este DPL permite limpiar el proyecto y deja solo el caso base. 
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen1} />
                </div>
            </div>
        )
    }
}

export default subDPLvalidation_1
