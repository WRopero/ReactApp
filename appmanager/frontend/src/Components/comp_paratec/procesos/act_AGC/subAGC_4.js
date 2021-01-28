import React, { Component } from 'react'
import imagen1 from '../../imagenes_Transmision/agc_2.PNG'

export class subFC_4 extends Component {
    render() {
        return (
            <div>
                <p className="h4 pt-2">Contexto</p>
                <p className="h6 text-justify mr-4">
                    Enviar un correo informativo sobre las versiones creadas para pruebas 
                    de sintonía de AGC a los equipos de @DESPACHO ENERGIA CND y @CONTROLES

                    <br></br><br></br>
                

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

export default subFC_4
