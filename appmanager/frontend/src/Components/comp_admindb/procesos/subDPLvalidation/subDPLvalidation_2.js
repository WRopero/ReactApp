import React, { Component } from 'react'

import imagen1 from '../../../../images/AdminDB/Dplvalidation/imagen2_1.png'
import imagen2 from '../../../../images/AdminDB/Dplvalidation/imagen2_2.png'
import imagen3 from '../../../../images/AdminDB/Dplvalidation/imagen2_3.png'

export class subDPLvalidation_2 extends Component {
    render() {
        return (
            <div>
                <p className="h4 pt-2">Contexto</p>
                <p className="h6 text-justify mr-4">
                    El DPL se encuentra en la siguiente ruta Varios\A01-AdministracionDB\Comandos\Validar_Todo `
                    con el nombre de Validar_According_Measurement_Trfs.
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen1} />
                </div>
                <p className="h6 text-justify mr-4">
                    Este DPL permite validar la información del transformador y su tipo asociado, comparando la
                    información de la impedancia, esto para no tener inconsistencias entre los elementos y los tipos. 
                    La validación se realiza entre la tabla de According to Measurement Report de los Taps y los 
                    valores internos de la impedancia en los tipos. 
                </p>
                <p className="h6 text-justify mr-4">
                    Si se presenta inconsistencia en algún elemento, esto se puede observar en la información generada 
                    al correr el DPL anterior, como se muestra en la siguiente imagen. 
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen2} />
                </div>
                <p className="h6 text-justify mr-4">
                    Se debe correr el DPL que se encuentra en la misma ruta con el nombre Validar_PerdidasTrafos_Impedancia 
                    y este DPL itera por los distintos transformadores y toma el valor de impedancia de los tipos y los 
                    reemplazara en la tabla de According to Measurement Report de los Taps, esto para tener la misma 
                    información entre los elementos y los tipos internos. Con esto al volver a ejecutar el DPL de 
                    Validar_According_Measurement_Trfs se puede observar la correcta validación. 
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen3} />
                </div>
                <p className="h6 text-justify mr-4">
                    En el video instructivo se muestra un ejemplo del uso de los dos DPLs. 
                </p>
            </div>
        )
    }
}

export default subDPLvalidation_2
