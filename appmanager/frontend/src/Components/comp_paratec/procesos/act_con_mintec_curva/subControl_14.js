import React, { Component } from 'react'

export class subControl_14 extends Component {
    render() {
        return (
            <div>
                <p className="h4 pt-2">Contexto</p>
                <p className="h6 text-justify mr-4">
                Ingresar al portal PARATEC y crear una nueva noticia informando sobre la actualización de parámetros realizada.
                Se debe ingresar a través de <a href='http://paratec.xm.com.co/paratec/SitePages/default.aspx'>PARATEC</a>. 
                Agregar en esta noticia el enlace al archivo pdf con el acuerdo CNO publicado el cual se debe almacenar en la carpeta (Ruta ???)
                El link para la carga del PDF es similar al siguiente: http://sv01.xm.com.co/noticias/Acuerdo1271.pdf
                <br></br><br></br>
                <ul>
                        <li>Pestaña Administración</li>
                        <li>Administración de noticias de novedades de parámetros técnicos</li>
                        <li>Cargar noticia.</li>                                        
                    </ul>
                Un ejemplo de noticia es la siguiente:<br></br><br></br>
                <i>"El acuerdo CNO 1334 aprobó la incorporación de los cambios en los modelos del generador y los sistemas de 
                    control de las unidades 1, 2, 3 y 4 de la planta de generación Urrá (Ver Acuerdo). 
                    Aplica para el despacho del 11 de agosto de 2020 y para la operación del 12 de agosto de 2020."</i>
                </p>                
            </div>
        )
    }
}

export default subControl_14
