import React, { Component } from 'react'

import imagen1 from '../../imagenes_Transmision/agc_1.PNG'

export class subFC_6 extends Component {
    render() {
        return (
            <div>
                <p className="h4 pt-2">Contexto</p>
                <p className="h6 text-justify mr-4">
                    Informar sobre la actualización realizada a las diferentes areas de interés de la empresa
                    y a la UPME. Esta comunicación se remite a partir de un correo generado automáticamente 
                    utilizando la APParatec el cual incluye todos los destinatarios predefinidos. <br></br><br></br>
                

                    <div align="center">
                        <b>Correo informativo</b>
                    </div>
                    <div className="mt-4 mb-4 d-flex justify-content-center">                        
                        <img src={imagen1}  width="950" height="418" />
                    </div>   

                </p>                
            </div>
        )
    }
}

export default subFC_6
