import React, { Component } from 'react'


export class subTransmision_2 extends Component {
    render() {
        return (
            <div>
                <p className="h4 pt-2">Contexto</p>
                <p className="h6 text-justify mr-4">
                Una vez aprobadas las modificaciones se debe proceder a realizar la actualización de parámetros en la base de datos BDMIDXM. 
                Para esto se debe ingresar al <a href='http://intranetxm/administradormid/Pages/inicio.aspx#/Pages/MIDObject.xaml'> administrador del MID</a> 
                y crear nuevas versiones de los elementos a actualizar. Dichas versiones deben ser creadas con fecha de inicio del martes 
                (fecha en la cual aplica para la Operación) siguiente ó del miércoles para las semanas con lunes festivo.
                </p>                
            </div>
        )
    }
}

export default subTransmision_2