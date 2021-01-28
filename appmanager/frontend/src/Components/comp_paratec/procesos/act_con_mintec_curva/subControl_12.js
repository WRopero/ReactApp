import React, { Component } from 'react'

export class subControl_12 extends Component {
    render() {
        return (
            <div>
                <p className="h4 pt-2">Contexto</p>
                <p className="h6 text-justify mr-4">
                Una vez publicado el acuerdo CNO en la <a href='https://www.cno.org.co/acuerdos'>página oficial </a>  
                se debe proceder a realizar la actualización de parámetros en la base de datos BDMIDXM. 
                Para esto se debe ingresar al administrador del MID  (http://intranetxm/administradormid/Pages/inicio.aspx#/Pages/MIDObject.xaml) 
                y crear nuevas versiones de los elementos a actualizar. Dichas versiones deben ser creadas con fecha de inicio 
                según la fecha detallada en el acuerdo CNO
                <br></br><br></br>
                Un ejemplo para la fecha utilizada (para la operación) para las versiones y la base de datos sale del siguiente parrafo al final del acuerdo emitido:
                <br></br><br></br>
                <i>"El presente Acuerdo rige a partir del despacho que se realizará el 18 de enero de 2021 para <b>la operación del 19 de enero de 2021</b>"</i>
                <br></br><br></br>
                Esta fecha también es utilizada para la noticia que se pública en PARATEC.                
                </p>         
            </div>
        )
    }
}

export default subControl_12
