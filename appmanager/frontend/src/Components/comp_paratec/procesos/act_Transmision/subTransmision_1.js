import React, { Component } from 'react'

export class subTransmision_1 extends Component {
    render() {
        return (
            <div>
                <p className="h4 pt-2">Contexto</p>
                <p className="h6 text-justify mr-4">
                El proceso inicia con la recepción de la solicitud de actualización de parámetros enviada por el agente al correo info@xm.com.co 
                Una vez radicada, esta es asignada a la ventana <a href='https://appsaigroup.com/crmxm'>Gestión Parámetros Técnicos</a> y 
                reasignada por parte del coordinador del equipo (@EMMA) al analista encargado.  
                    <br></br><br></br>
                    A continuación se muestran las revisiones iniciales:
                    <br></br><br></br>
                    <ul>
                        <li>Descargar el correo y revisarlo</li>
                        <li>Verificar que sea una solicitud relacionada con el proceso</li>
                        <li>Identificar el agente que envia</li>
                        <li>Verificar la solicitud claramente del agente</li>
                        <li>Verificar los archivos adjuntos</li>
                        <li>Verificar que el solicitante sea un agente registrado y relacionado con los activos</li>
                        <li>Guardar el correo o solicitud en la ruta: 
                            <i> \\archivosxm\PlaneacionOperacion\PARATEC\05. Transporte\02.Comunicaciones recibidas</i></li>                       
                    </ul>
                    El correo se guarda con la estructura: Sigla agente + Fecha + Asunto del correo. Por ejemplo <i>EPM_20-10-01_Asunto.msg</i>
                </p>                
            </div>
        )
    }
}

export default subTransmision_1
