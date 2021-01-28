import React, { Component } from 'react'

import imagen1 from '../../../../images/AdminDB/Dplvalidation/imagen3_1.png'
import imagen2 from '../../../../images/AdminDB/Dplvalidation/imagen3_2.png'

export class subDPLvalidation_3 extends Component {
    render() {
        return (
            <div>
                <p className="h4 pt-2">Contexto</p>
                <p className="h6 text-justify mr-4">
                    El DPL se encuentra en la siguiente ruta Varios\A01-AdministracionDB\Comandos\Validar_Todo 
                    con el nombre de Validar_CapBarrasDiferentes.
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen1} />
                </div>
                <p className="h6 text-justify mr-4">
                    Este DPL permite modificar el rango operativo de las barras de elementos como el STATCOM, 
                    para permitir que trabajen en un rango más amplio, como se puede observar en esta imagen. 
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen2} />
                </div>
                <p className="h6 text-justify mr-4">
                    En el video se muestra como funciona y como validar que los cambios que realiza se hagan 
                    de manera correcta.
                </p>
            </div>
        )
    }
}

export default subDPLvalidation_3
