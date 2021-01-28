import React, { Component } from 'react'

export class subOperacionPlanta_8 extends Component {
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
                    <i>"EMPRESAS PÚBLICAS DE MEDELLÍN E.S.P. declara en operación comercial la planta de 
                        generación PTAR Bello, con capacidad efectiva neta de 5 MW, a partir de las 00:00 
                        horas del 30 de noviembre de 2020 "</i>
                </p>                
            </div>
        )
    }
}

export default subOperacionPlanta_8
