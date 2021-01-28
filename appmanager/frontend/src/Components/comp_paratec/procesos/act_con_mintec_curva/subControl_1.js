import React, { Component } from 'react'

export class subControl_1 extends Component {
    render() {
        return (
            <div>
                <p className="h4 pt-2">Contexto</p>
                <p className="h6 text-justify mr-4">
                    Las solicitudes de actualización de parámetros son 
                    asignadas a tráves del <a href='https://appsaigroup.com/crmxm'>CRM XM</a>
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
                            <i> \\archivosxm\PlaneacionOperacion\PARATEC\04. Plantas\02.Comunicaciones recibidas</i></li>                       
                    </ul>
                    El correo se guarda con la estructura: Sigla agente + Fecha + Asunto del correo. Por ejemplo <i>EPM_20-10-01_Asunto.msg</i>
                </p>                
            </div>
        )
    }
}

export default subControl_1
