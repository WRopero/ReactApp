import imagen1 from '../../../images/AdminDB/ecuador/imagen1.png'
import imagen2 from '../../../images/AdminDB/ecuador/imagen2.png'
import imagen3 from '../../../images/AdminDB/ecuador/imagen3.png'

import React, { Component } from 'react'

export class infoEcuador extends Component {
    render() {
        return (
            <div style={{marginTop:"1rem"}}>
                <p className="h3 pt-2">Contexto</p>
                <p className="h6 text-justify mr-4">
                    La red eléctrica del SIN tiene conexión con la red eléctrica de Ecuador, esto se hace por 
                    medio de los enlaces que permiten transferir potencia entre los dos países. Las subestaciones 
                    de conexión son en Colombia Jamondino 220kV y en Ecuador Pomasqui 230kV, también se tiene un 
                    enlace a 138kV que se encuentra fuera de servicio. 
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen1} />
                </div>
                <p className="h6 text-justify mr-4">
                    La actualización del modelo se hace por medio del software 
                    <a href="https://www.digsilent.de/en/powerfactory.html" className="h6 font-italic" style={{color:"black"}}> Power Factory – DigSILENT, </a>
                    con los insumos enviados por
                    <a href="http://www.cenace.org.ec/" className="h5 font-italic" style={{color:"black"}}> Cenace</a>. 
                    En el correo recibido se encuentra dos archivos denominados Intercopnexiones CAN.dz y Ecuador.dz
                    
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img style={{width:"40rem", height:"20rem"}} src={imagen2} />
                </div>
                <p className="h6 text-justify mr-4">
                    En el archivo de Interconexiones CAN, se encuentran todos los elementos que permiten realizar de forma 
                    correcta la unión de los dos modelos eléctricos de ambos países, esto con el objetivo de evitar errores 
                    en la integración. En el archivo de Ecuador se encuentra la red eléctrica del Ecuador, este modelo es 
                    necesario para realizar los análisis de los correctos intercambios de potencia entre Colombia y Ecuador. 
                </p>
                <p className="h6 text-justify mr-4">
                    Los archivos compartidos en el correo se envían por requerimiento de
                    <a href="http://www.cenace.org.ec/" className="h5 font-italic" style={{color:"black"}}> Cenace</a>, 
                    para actualizar el modelo a las 
                    condiciones actuales de la red de Ecuador, de igual manera desde 
                    <a href="https://www.xm.com.co/Paginas/Home.aspx" className="h5 font-italic" style={{color:"black"}}> XM</a>, 
                    se le hace envió de la red de Colombia 
                    al Cenace por medio de un correo electrónico adjuntado el archivo de Interconexiones CAN.dz y Colombia.dz. 
                    Estos con el fin de tener los modelos eléctricos de Colombia y Ecuador actualizados. 
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img style={{width:"40rem", height:"20rem"}} src={imagen3} />
                </div>  
                <p className="h6 text-justify mr-4">
                    Derechos reservados a XM
                </p>              
            </div>
        )
    }
}

export default infoEcuador
