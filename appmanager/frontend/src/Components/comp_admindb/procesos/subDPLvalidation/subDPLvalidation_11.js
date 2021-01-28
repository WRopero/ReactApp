import React, { Component } from 'react'

import imagen1 from '../../../../images/AdminDB/Dplvalidation/imagen11_1.png'


export class subDPLvalidation_11 extends Component {
    render() {
        return (
            <div>
                <p className="h4 pt-2">Contexto</p>
                <p className="h6 text-justify mr-4">
                    Los DPLs se encuentra en la siguiente ruta Varios\A01-AdministracionDB\Comandos\Validar_Todo 
                    con los siguientes nombres: 
                </p> 
                <p className="h6 text-justify mr-4">
                    -	Validar_Existencia_For_names
                </p> 
                <p className="h6 text-justify mr-4">
                    -	Validar_Existencia_For_names_ESTYRA
                </p>   
                <p className="h6 text-justify mr-4">
                    -	Validar_For_names_Largos
                </p>   
                <p className="h6 text-justify mr-4">
                    -	Validar_For_names_Repetidos
                </p>     
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen1} />
                </div>
                <p className="h6 text-justify mr-4">
                    Estos DPLs permite verificar que todos los elementos tengan Foreign Key, que funcionen para 
                    ESTYRA, que no estén largos y no estén repetidos.
                </p>
            </div>
        )
    }
}

export default subDPLvalidation_11
