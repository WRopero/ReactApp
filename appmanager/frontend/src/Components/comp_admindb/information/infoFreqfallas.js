import React, { Component } from 'react'

export class infoFreqfallas extends Component {
    render() {
        return (
            <div style={{marginTop:"1rem"}}>
                <p className="h3 pt-2">Contexto</p>
                <p className="h6 text-justify mr-4">
                    En la operación del sistema eléctrico se debe realizar la evaluación de las frecuencias 
                    de salida de los activos pertenecientes al SIN. Las frecuencias de fallas muestran la 
                    confiabilidad del sistema y la operación segura para la correcta atención de la demanda. 
                    La confiabilidad de la operación se debe mantener para las condiciones normales de operación, 
                    como para contingencias. 
                </p>
                <p className="h6 text-justify mr-4">
                    En los criterios de confiabilidad ante contingencias según la resolución 
                    <a href="http://apolo.creg.gov.co/Publicac.nsf/1c09d18d2d5ffb5b05256eee00709c02/971754902d1a4a1a052580890057d42b/$FILE/Creg224-2016.pdf" 
                        className="h5 font-italic" 
                        style={{color:"black"}}> CREG-224, </a> 
                    en caso de presentarse una contingencia que impida que los activos queden incapacitados para alimentar la 
                    demanda de una zona en particular, el CND procederá a realizar desconexión preventiva de demanda, 
                    buscando que no se presenta una afectación mayor o demanda no atendida. 
                </p>
                <p className="h6 text-justify mr-4">
                    El CDN es el encargado de administrar la información de la indisponibilidad de los elementos, realizando 
                    actualizaciones de forma trimestral de está información. El análisis de la información generada permitirá 
                    la clasificación de las contingencias críticas del sistema para garantizar la correcta operación del sistema, 
                    ante eventos programados (manteniendo) o eventos no programados (contingencias). 
                </p>
                <p>
                    El estudio de confiabilidad del sistema eléctrico comprende análisis con criterios probabilísticos                      
                    <a href="http://apolo.creg.gov.co/Publicac.nsf/1c09d18d2d5ffb5b05256eee00709c02/349bada2d93858ea05257f300065cb99/$FILE/D-152-15%20CONFIABILIDAD%20DE%20CORTO%20PLAZO.pdf" 
                        className="h5 font-italic" 
                        style={{color:"black"}}> (ver CREG-152).
                    </a>
                </p>
            </div>
        )
    }
}

export default infoFreqfallas
