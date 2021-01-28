import React, { Component } from 'react'

import imagen1 from '../../../images/AdminDB/ESPS/imagen1.png'


export class infoEsps extends Component {
    render() {
        return (
            <div style={{marginTop:"1rem"}}>
                <p className="h3 pt-2">Contexto</p>
                <p className="h6 text-justify mr-4">
                    Los esquemas suplementarios de protección del sistema eléctrico (ESPS) son un conjunto de 
                    elementos de protección y control para detectar condiciones anormales de operación en el 
                    sistema y actuar con el fin de minimizar la extensión del evento y minimizar la demanda no 
                    atendida
                    <a href="http://apolo.creg.gov.co/Publicac.nsf/52188526a7290f8505256eee0072eba7/3aba1f9bf9bb3c650525785a007a7648/$FILE/CIRCULAR087-2010%20Anexo1.pdf" 
                        className="h6 font-italic" 
                        style={{color:"black"}}> (ver información).
                    </a> 
                </p>
                <p className="h6 text-justify mr-4">
                    Su función principal es mitigar eventos que no son cubiertos mediante generación de seguridad o 
                    expansión del sistema, pues son de baja probabilidad de ocurrencia y no hay posibilidad de protegerse 
                    ante ellos o la protección es muy costosa.
                </p>
                <p className="h6 text-justify mr-4">
                    Los ESPS usan elementos diferentes a los de las protecciones del sistema para no interferir con ellas o 
                    porque estas no pueden actuar por los valores que toman las variables de operación durante el evento.
                </p>
                <p className="h6 text-justify mr-4">
                    Un ESPS permite la detección de las variables de cada evento específico, determinando su severidad y 
                    actuando para mitigar su impacto sobre la atención de la demanda.
                </p>
                <p className="h6 text-justify mr-4">
                    Las variables detectadas son voltajes en los nodos, corrientes y flujos por líneas y transformadores, 
                    cambios en la frecuencia, etc. Pueden actuar sobre la demanda, sobre la generación, sobre otros elementos 
                    de la red o sobre una combinación de los anteriores.
                </p>
                <p className="h6 text-justify mr-4">
                    Los ESPS requieren comunicaciones entre diferentes instalaciones y diferentes agentes pueden ser propietarios 
                    de equipos que hacen parte de un mismo ESPS.
                </p>
                <p className="h6 text-justify mr-4">
                    La siguiente imagen se muestra los ESPS de la subestación Valledupar 220kV y Guatapurí 34.5kV, estos actúan 
                    sobres las respectivas cargas de estas subestaciones, realizando deslastre de parte de la carga de las 
                    subestaciones mencionadas si se  presenta un estado atípico de operación en estas subestaciones del área de GCM. 
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen1} />
                </div>
            </div>
        )
    }
}

export default infoEsps
