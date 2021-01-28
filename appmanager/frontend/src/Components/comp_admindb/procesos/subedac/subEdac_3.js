import React, { Component } from 'react'

import imagen1 from '../../../../images/AdminDB/EDAC/imagen3_1.png'
import imagen2 from '../../../../images/AdminDB/EDAC/imagen3_2.png'


export class subEdac_3 extends Component {
    render() {
        return (
            <div>
                <p className="h4 pt-2">Contexto</p>
                <p className="h6 text-justify mr-4">
                    Luego de realizar la carga de las tablas del EDAC con el DPL anterior se generan las tablas 
                    debidamente diligenciadas con los datos del archivo de Excel. 
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen1} />
                </div>
                <p className="h6 text-justify mr-4">
                    Con las tablas actualizadas, lo que se hace es reemplazar las tablas en la ruta 
                    \Script\CrearCasosDespacho\CargarAjustesRelesEDAC\ en el folder de tablas.               
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen2} />
                </div>    
                <p className="h6 text-justify mr-4">
                    Con esto se tendría actualizado la información del EDAC, las tablas mostrados en la imagen 
                    anterior se usan para crear las variaciones de los 24 periodos para la operación del EDAC.              
                </p>            
            </div>
        )
    }
}

export default subEdac_3
