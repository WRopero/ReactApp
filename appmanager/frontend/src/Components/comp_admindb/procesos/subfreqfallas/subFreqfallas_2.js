import React, { Component } from 'react'

import imagen1 from '../../../../images/AdminDB/FreqFallas/imagen2_1.png'
import imagen2 from '../../../../images/AdminDB/FreqFallas/imagen2_2.png'

export class subFreqfallas_2 extends Component {
    render() {
        return (
            <div>
                <p className="h4 pt-2">Contexto</p>
                <p className="h6 text-justify mr-4">
                    Este DPL se encuentra en la capeta Varios\ A01-AdministracionDB\Comandos en el proyecto 
                    de Power Factory con nombre Stochastic_TypData.  
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen1} />
                </div>
                <p className="h6 text-justify mr-4">
                    En la opción editar, el DPL cuanta en los parámetros de entradas con la ruta donde se le 
                    agrega la ruta de la carpeta creada para esta actualización, y el nombre del archivo Unificar 
                    agregado a la carpeta en el paso anterior. 
                </p> 
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen2} />
                </div>  
                <p className="h6 text-justify mr-4">
                    Para la ejecución del DPL importante estar en el caso base y sin ninguna variación activa. 
                </p>             
            </div>
        )
    }
}

export default subFreqfallas_2
