import React, { Component } from 'react'

import imagen1 from '../../../images/AdminDB/EDAC/imagen1.png'
import imagen2 from '../../../images/AdminDB/EDAC/imagen2.png'

export class infoEdac extends Component {
    render() {
        return (
            <div style={{marginTop:"1rem"}}>
                <p className="h3 pt-2">Contexto</p>
                <p className="h6 text-justify mr-4">
                    El EDAC es un esquema suplementario diseñado para mitigar el impacto de grandes 
                    desbalances Carga –Generación. 
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen1} />
                </div>
                <p className="h6 text-justify mr-4">
                    Los criterios de diseño del EDAC se establecen en la resolución CREG 061 de 1996:
                </p>
                <p className="h6 text-justify mr-4">
                    -	El disparo de la unidad de mayor capacidad del sistema no deberá activar la 
                        primera etapa de desconexión.
                </p>
                <p className="h6 text-justify mr-4">
                    -	En ningún momento la frecuencia podrá ser inferior a 57.5 Hz.
                </p>
                <p className="h6 text-justify mr-4">
                    -	En contingencias se debe minimizar el tiempo que la frecuencia permanezca 
                        por debajo de 58.5 Hz.
                </p>
                <p className="h6 text-justify mr-4">
                    -	Después de 10 segundos de ocurrido un evento, la frecuencia del sistema 
                        deberá estar por encima del umbral de la primera etapa del EDAC.
                </p>
                <p className="h6 text-justify mr-4">
                    -	Se deberá optimizar la cantidad de carga a desconectar en eventos, evitando 
                        al máximo la sobre frecuencia, es decir, frecuencias superiores a 60 Hz después 
                        de ocurrido un evento.
                </p> 
                <p className="h6 text-justify mr-4">
                    El Esquema de Deslastre Automático de Carga EDAC, con los ajustes detallados, 
                    se presenta en la siguiente tabla:
                </p> 
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen2} />
                </div>   
            </div>
        )
    }
}

export default infoEdac
