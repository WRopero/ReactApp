import React, { Component } from 'react'

import imagen1 from '../../../../images/AdminDB/ESPS/imagen2_1.png'
import imagen2 from '../../../../images/AdminDB/ESPS/imagen2_2.png'


export class subEsps_2 extends Component {
    render() {
        return (
            <div>
                <p className="h4 pt-2">Contexto</p>
                <p className="h6 text-justify mr-4">
                    Este DPL se encuentra en la capeta Varios\ A01-AdministracionDB\Comandos\GT ESPS\ 
                    en el proyecto de Power Factory con nombre CargarESPS. 
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen1} />
                </div>
                <p>
                    En la parte de editar datos del DPL se encuentra la opción para ingresar la ruta donde 
                    se encuentra el archivo que se descargo con la información actualizada de los ESPS. 
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen2} />
                </div>
            </div>
        )
    }
}

export default subEsps_2
