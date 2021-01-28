import React, { Component } from 'react'
import imagen1 from '../../../images/AdminDB/boundaries/imagen1.png'


export class infoBoundaries extends Component {
    render() {
        return (
            <div style={{marginTop:"1rem"}}>
            <p className="h3 pt-2">Contexto</p>
            <p className="h6 text-justify mr-4">
                La definición de frontera comercial en la base de datos de Power Factory se realiza por medio de los elementos 
                que separan de forma comercial los activos de los diferentes operadores de red, estos activos no necesariamente 
                pertenecen al operador de red.
            </p>
            <p className="h6 text-justify mr-4">
                Las fronteras son activos del sistema que permiten conocer el flujo de potencia de entrada y salida de un operador. 
                En la siguiente imagen se pueden observar los elementos que limitan la frontera del operador de red
                <a href="https://www.ceoesp.com.co/" className="h5 font-italic" style={{color:"black"}}> CEO </a>
                y los elementos internos en la frontera.                 
            </p>
            <div className="mt-4 mb-4 d-flex justify-content-center">
                <img style={{width:"40rem", height:"20rem"}} src={imagen1} />
            </div>
            <p className="h6 text-justify mr-4">
                Las fronteras no tienen en cuenta elementos de generación, por tanto, la frontera se define desde los trasformadores 
                de cada generación. la separación en Power Factory por fronteras separa a los diferentes operadores de red del país, 
                para que el LAC, realice los cálculos de índices de perdidas con base en la sumatoria de las energías importadas y 
                exportadas por los STR, respecto a las energías importadas (para mayor información ver 
                <a href="http://www.cenace.org.ec/" className="h5 font-italic" style={{color:"black"}}> CREG 015 </a> ) 
            </p>            
        </div>
        )
    }
}

export default infoBoundaries
