import React, { Component } from 'react'

export class subFC_14 extends Component {
    render() {
        return (
            <div>
                <p className="h4 pt-2">Contexto</p>
                <p className="h6 text-justify mr-4">
                    Ingresar al portal PARATEC y crear una nueva noticia informando sobre la actualización de parámetros realizada.
                    Se debe ingresar a través de <a href='http://paratec.xm.com.co/paratec/SitePages/default.aspx'>PARATEC</a>. 
                    Agregar en esta noticia el enlace al archivo pdf con el acuerdo CNO publicado el cual se debe almacenar en la carpeta (Ruta ???)
                    El link para la carga del PDF es similar al siguiente: http://sv01.xm.com.co/noticias/Acuerdo1351.pdf
                    <br></br><br></br>
                    <ul>
                            <li>Pestaña Administración</li>
                            <li>Administración de noticias de novedades de parámetros técnicos</li>
                            <li>Cargar noticia.</li>                                        
                        </ul>
                    Un ejemplo de noticia es la siguiente:<br></br><br></br>
                    <i>"El acuerdo CNO 1351 aprobó la incorporación de un cambio del  parámetro técnico factor de conversión de la central El Quimbo (Ver Acuerdo). 
                        Aplica para el despacho del 05 de septiembre de 2020 y para la operación del 06 de septiembre de 2020."</i>
                </p>                
            </div>
        )
    }
}

export default subFC_14
