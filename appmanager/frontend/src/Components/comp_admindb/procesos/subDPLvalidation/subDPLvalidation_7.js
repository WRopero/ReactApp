import React, { Component } from 'react'

import imagen1 from '../../../../images/AdminDB/Dplvalidation/imagen7_1.png'


export class subDPLvalidation_7 extends Component {
    render() {
        return (
            <div>
                <p className="h4 pt-2">Contexto</p>
                <p className="h6 text-justify mr-4">
                    El DPL se encuentra en la siguiente ruta Varios\A01-AdministracionDB\Comandos\Validar_Todo con el 
                    nombre de Validar_DPL_ESPS.
                </p>    
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen1} />
                </div>
                <p className="h6 text-justify mr-4">
                    Este DPL permite validar que la información de los ESPS que se está actualizando, corresponda con la 
                    información que tiene guardado en la memoria, en caso de realizar cambios en los ESPS se debe actualizar 
                    la memoria. 
                </p>
                <p className="h6 text-justify mr-4">
                    El video muestra los esquemas, ejemplos y la forma de actualizar los ESPS y la memoria.
                </p>
            </div>
        )
    }
}

export default subDPLvalidation_7
