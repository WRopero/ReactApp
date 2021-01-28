import React, { Component } from 'react'

import imagen1 from '../../../../images/AdminDB/Dplvalidation/imagen16_1.png'
import imagen2 from '../../../../images/AdminDB/Dplvalidation/imagen16_2.png'


export class subDPLvalidation_16 extends Component {
    render() {
        return (
            <div>
                <p className="h4 pt-2">Contexto</p>
                <p className="h6 text-justify mr-4">
                    Los DPLs se encuentra en la siguiente ruta Varios\A01-AdministracionDB\Comandos\Validar_Todo 
                    con los nombres:
                </p> 
                <p className="h6 text-justify mr-4">
                    -	Validar_TapModelled_Terminals
                </p> 
                <p className="h6 text-justify mr-4">
                    -	Validar_TiposCargas_Y_Switch
                </p>   
                <p className="h6 text-justify mr-4">
                    -	Validar_forTapat_Trafos
                </p>      
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen1} />
                </div>
                <p className="h6 text-justify mr-4">
                    El primer DPL valida que los transformadores no estén modelados con Tap Modelled at (itapos) 
                    en Star Point, porque puede generar diferencias en los resultados de flujo de carga. El segundo 
                    verifica que las cargas y los Switch tegan tipos asignados y el tercero permite validar que los 
                    trasformadores tengan en la variable Controller fo Tap el lado asignado del Tap (HV, MV o LV), 
                    como se observa en la siguiente imagen.
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen2} />
                </div>
            </div>
        )
    }
}

export default subDPLvalidation_16
