import React, { Component } from 'react'

import imagen1 from '../../imagenes_Transmision/app_paratec.png'


export class subTransmision_2 extends Component {
    render() {
        return (
            <div>
                <p className="h4 pt-2">Contexto</p>
                <p className="h6 text-justify mr-4">                
                    Empleando la APParatec es posible realizar una verificación preliminar a través de la cual se identifican las diferencias 
                    entre los parámetros existentes en la base de datos BDMIDXM y los reportados por el agente en la solicitud. Para esto emplear 
                    la ventana "Verificador de Parámetros"<br></br><br></br>

                    <b>Nota:</b> En caso que no se encuentre disponible la aplicación debe realizarse la consulta en la base de datos del MID
                    y comparar la información registrada actualmente, de forma manual, con la nueva información reportada por el agente.                    
                   </p>   

                    <div align="center">
                        <b>APParatec</b>
                    </div>
                    <div className="mt-4 mb-4 d-flex justify-content-center">                        
                        <img src={imagen1} />
                    </div>                  
                         
            </div>
        )
    }
}

export default subTransmision_2