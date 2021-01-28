import React, { Component } from 'react'

import imagen1 from '../../../../images/AdminDB/Dplvalidation/imagen9_1.png'
import imagen2 from '../../../../images/AdminDB/Dplvalidation/imagen9_2.png'


export class subDPLvalidation_9 extends Component {
    render() {
        return (
            <div>
                <p className="h4 pt-2">Contexto</p>
                <p className="h6 text-justify mr-4">
                    El DPL se encuentra en la siguiente ruta Varios\A01-AdministracionDB\Comandos\Validar_Todo 
                    con el nombre de Validar_Detailed_for_calculation.
                </p>    
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen1} />
                </div>
                <p className="h6 text-justify mr-4">
                    Este DPL permite verificar que los interruptores que tienen un capacidad reportada y modelada 
                    de sobrecarga se muestren en los resultados de análisis. Pero los que tiene tipos genéricos 
                    no se han reportados en los resultados porque su capacidad no es igual a la real del equipo. 
                </p>
                <p>
                    La siguiente imagen muestra un interuptoir que no tien un tipo genérico y por tanto que debe 
                    tener seleccionado Detailed for calculation. 
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen2} />
                </div>
            </div>
        )
    }
}

export default subDPLvalidation_9
