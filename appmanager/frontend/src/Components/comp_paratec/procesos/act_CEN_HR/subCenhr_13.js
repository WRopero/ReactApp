import React, { Component } from 'react'
import imagen1 from '../../imagenes_Transmision/gen_correo.PNG'

export class subCenhr_13 extends Component {
    render() {
        return (
            <div>
                <p className="h4 pt-2">Contexto</p>
                <p className="h6 text-justify mr-4">
                Informar sobre la actualización realizada a las diferentes areas de interés de la empresa y a la UPME. Esta comunicación se remite 
                a partir de un correo generado automáticamente utilizando la APParatec el cual incluye todos los destinatarios predefinidos.
                Se deben corregir temas esteticos del mismo, como combinar filas y agregar firmas del proceso. La fecha a usar en la APParatec
                es la fecha para la cual se aplicarón los cambios en la base de datos. <br></br><br></br>

                Importante tener en cuenta que se el correo debe salir desde la bandeja de parámetros técnicos y se deben anexar
                el pdf de acuerdo CNO y anexos que contenga el mismo.
                               
                <div align="center">
                    <b>Parámetros para generar el correo.</b>
                </div>
                <div className="mt-4 mb-4 d-flex justify-content-center">                        
                    <img src={imagen1} />
                </div>
                </p>                
            </div>
        )
    }
}

export default subCenhr_13
