import React, { Component } from 'react'

import imagen1 from '../../../../images/AdminDB/Dplvalidation/imagen15_1.png'

export class subDPLvalidation_15 extends Component {
    render() {
        return (
            <div>
               <p className="h4 pt-2">Contexto</p>
                <p className="h6 text-justify mr-4">
                    Los DPLs se encuentra en la siguiente ruta Varios\A01-AdministracionDB\Comandos\Validar_Todo 
                    con los nombres:
                </p> 
                <p className="h6 text-justify mr-4">
                    -	Validar_Sobrecarga_Lineas
                </p> 
                <p className="h6 text-justify mr-4">
                    -	Validar_Sobrecarga_Trafos
                </p>     
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen1} />
                </div>
                <p className="h6 text-justify mr-4">
                    Estos DPLs validan que la información de las sobrecargas del elemento y del tipo correspondan. 
                </p> 
            </div>
        )
    }
}

export default subDPLvalidation_15
