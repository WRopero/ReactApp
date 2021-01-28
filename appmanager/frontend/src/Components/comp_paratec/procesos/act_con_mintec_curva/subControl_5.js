import React, { Component } from 'react'
import imagen1 from '../../imagenes_Transmision/gen_cartas.PNG'
export class subControl_5 extends Component {
    render() {
        return (
            <div>
                <p className="h4 pt-2">Contexto</p>
                <p className="h6 text-justify mr-4">
                El proceso continua con la emisión del concepto CND remitido al subcomité de controles del CNO. 
                Dicho concepto consiste en una comunicación formal firmada por el director de la DPO. La información de esta 
                comunicación también debe ser enviada al agente. Para su redacción se dispone de la herramienta APParatec (Lanzador) 
                y de conceptos anteriores disponibles en la carpeta del servidor  \\archivosxm\PlaneacionOperacion\PARATEC\08. Cartas\00.CartasCNO
                <br></br><br></br>
                Para usar la herramienta de la AppParatec se debe actualizar la base de datos con los requerimientos asociados.
                </p>
                <div align="center">
                        <b>Generador de cartas</b>
                    </div>
                    <div className="mt-4 mb-4 d-flex justify-content-center">                        
                        <img src={imagen1} />
                    </div>                  
            </div>
        )
    }
}

export default subControl_5
