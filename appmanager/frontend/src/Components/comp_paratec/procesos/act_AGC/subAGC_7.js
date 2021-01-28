import React, { Component } from 'react'

export class subFC_7 extends Component {
    render() {
        return (
            <div>
                <p className="h4 pt-2">Contexto</p>
                <p className="h6 text-justify mr-4">

                    Ingresar al portal PARATEC y crear una nueva noticia informando sobre la actualización de parámetros realizada.
                    Se debe ingresar a través de <a href='http://paratec.xm.com.co/paratec/SitePages/default.aspx'>PARATEC</a>.                     
                    <br></br><br></br>
                    <ul>
                            <li>Pestaña Administración</li>
                            <li>Administración de noticias de novedades de parámetros técnicos</li>
                            <li>Cargar noticia.</li>                                        
                        </ul>
                    Un ejemplo de noticia es la siguiente:<br></br><br></br>
                    <i>"La unidad 2 de la central Porce III recupera elegibilidad para prestar el servicio de AGC tras pruebas 
                    exitosas de sintonía. Aplica a partir de la operación del 2 de diciembre de 2020."</i>


                </p>                
            </div>
        )
    }
}

export default subFC_7
