import React, { Component } from 'react'

import imagen1 from '../../../../images/AdminDB/FreqFallas/imagen3_1.png'
import imagen2 from '../../../../images/AdminDB/FreqFallas/imagen3_2.png'

export class subFreqfallas_3 extends Component {
    render() {
        return (
            <div>
                <p className="h4 pt-2">Contexto</p>
                <p className="h6 text-justify mr-4">
                    La validación de la información se debe realizar teniendo en cuenta los datos actualizados 
                    en los elementos de Power Factory, estos se encuentran en la sección de Reliability de 
                    los elementos. 
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen1} />
                </div>  
                <p>
                    El valor anterior debe corresponder al presente en el archivo de Excel, está verificación 
                    se puede realizar para varios valores seleccionados de forma aleatoria y con esto se puede 
                    garantizar la correcta actualización de frecuencia de fallas. 
                </p> 
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen2} />
                </div>              
            </div>
        )
    }
}

export default subFreqfallas_3
