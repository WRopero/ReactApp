import React, { Component } from 'react'

import imagen1 from '../../../../images/AdminDB/ESPS/imagen1_1.png'
import imagen2 from '../../../../images/AdminDB/ESPS/imagen1_2.png'


export class subEsps_1 extends Component {
    render() {
        return (
            <div>
                <p className="h4 pt-2">Contexto</p>
                <p className="h6 text-justify mr-4">
                    El archivo se encuentra en la intranet y se envía la notificación de actualización 
                    a diferentes grupos del CND por medio de correo electrónico, entre estos a los 
                    administradores de la base de datos de Power Factory. En el correo se encuentra 
                    en enlace para descargar el archivo.  
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen1} />
                </div>
                <p className="h6 text-justify mr-4">
                    El archivo de sebe descargar en una ruta local para realizar la integración a Power Factory. 
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen2} />
                </div>
                <p className="h6 text-justify mr-4">
                    En el video tutorial se puede observar la información que posee el documento y como está 
                    configurado todas las columnas y la forma en donde se encuentra información de los esquemas 
                    en Power Factory, adicional, se muestra un ejemplo de la forma en que se prueban, actúan y 
                    evalúan los esquemas en la red de potencia. 
                </p>
            </div>
        )
    }
}

export default subEsps_1
