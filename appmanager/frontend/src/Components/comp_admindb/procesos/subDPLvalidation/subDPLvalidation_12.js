import React, { Component } from 'react'

import imagen1 from '../../../../images/AdminDB/Dplvalidation/imagen12_1.png'


export class subDPLvalidation_12 extends Component {
    render() {
        return (
            <div>
                <p className="h4 pt-2">Contexto</p>
                <p className="h6 text-justify mr-4">
                    El DPL se encuentra en la siguiente ruta Varios\A01-AdministracionDB\Comandos\Validar_Todo 
                    con nombre Validar_FuenteEcuador.
                </p>    
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen1} />
                </div>
                <p className="h6 text-justify mr-4">
                    Permite validar que los elementos que se encuentren en la carpeta de Ecuador contengan en 
                    el Data Source contengan las letras BDC.  
                </p>
            </div>
        )
    }
}

export default subDPLvalidation_12
