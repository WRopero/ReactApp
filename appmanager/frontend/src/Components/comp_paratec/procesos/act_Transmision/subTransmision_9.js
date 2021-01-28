import React, { Component } from 'react'

export class subTransmision_2 extends Component {
    render() {
        return (
            <div>
                <p className="h4 pt-2">Contexto</p>
                <p className="h6 text-justify mr-4">
                Ingresar al portal PARATEC y crear una nueva noticia informando sobre la actualización de parámetros realizada.
                Se debe ingresar a través de <a href='http://paratec.xm.com.co/paratec/SitePages/default.aspx'>PARATEC</a>.<br></br><br></br>
                <ul>
                        <li>Pestaña Administración</li>
                        <li>Administración de noticias de novedades de parámetros técnicos</li>
                        <li>Cargar noticia.</li>                                        
                    </ul>
                Un ejemplo de noticia es la siguiente:<br></br><br></br>
                <i>"Por solicitud de ELECTRIFICADORA DEL META S.A. E.S.P. se actualizan parámetros técnicos de algunas líneas. 
                    A partir de la operación del 10 de diciembre de 2020."</i>
                   </p>                
            </div>
        )
    }
}

export default subTransmision_2