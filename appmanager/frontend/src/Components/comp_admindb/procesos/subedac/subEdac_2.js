import React, { Component } from 'react'

import imagen1 from '../../../../images/AdminDB/EDAC/imagen2_1.png'
import imagen2 from '../../../../images/AdminDB/EDAC/imagen2_2.png'
import imagen3 from '../../../../images/AdminDB/EDAC/imagen2_3.png'


export class subEdac_2 extends Component {
    render() {
        return (
            <div>
                <p className="h4 pt-2">Contexto</p>
                <p className="h6 text-justify mr-4">
                    El DPL se encuentra en la siguiente ruta Varios\A01-AdministraciónDB\Comandos con el nombre 
                    de CargarInfoEDACyCreacionReles y dentro vamos a encontrar otro DPL con el nombre CargarInfoTablasEDADC 
                    que sería el que permitiría cargas los datos entregados para actualizar las tablas del EDAC. 
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen1} />
                </div>
                <p className="h6 text-justify mr-4">
                    Este DPL se configura con la información recibida y se carga para realizar la actualización, 
                    antes de ejecutar el DPL debemos tener todas las variaciones apagadas.                 
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen2} />
                </div>
                <p className="h6 text-justify mr-4">
                    El archivo de Excel con nombre Reporte, contiene los 24 periodos, uno por cada hoja y las cargas 
                    con sus respectivos porcentajes a deslastras para cada una de las 8 etapas. 
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen3} />
                </div>
                <p className="h6 text-justify mr-4">
                    Luego de ejecutar el DPL se actualizan las tablas que se encuentra dentro de este, con la misma 
                    información del archivo Excel. 
                </p>
            </div>
        )
    }
}

export default subEdac_2
