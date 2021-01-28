import React, { Component } from 'react'

export class subControl_2 extends Component {
    render() {
        return (
            <div>
                <p className="h4 pt-2">Contexto</p>
                <p className="h6 text-justify mr-4">
                    El objetivo de el análisis exploratorio es identificar inconsistencias en los datos
                    antes de ser enviados para concepto en las demás areas de XM, debe analizar y decidir si
                    los hallazgos constituyen causa para devolución de la solicitud con los comentarios correspondientes.
                    <br></br><br></br>
                    Desde CRM se debe descargar el correo con la solicitud y sus anexos que justifican el cambio de parámetros solicitado. 
                    Verificar que la documentación remitida sea coherente. En caso de identificar incoherencias, errores o documentación 
                    faltante informar al agente y aclarar las inquietudes antes de proceder con el proceso

                    <br></br><br></br>
                    <ul>
                        <li>Para <i>parametros de control</i> verificar los anexos y la solicitud clara.</li>
                        <li>Para <i>mínimo técnico</i> verificar que se encuentre en el anexo CNO correspondiente y los soportes técnicos
                            necesarios.
                        </li>
                        <li>Para <i>curva de carga</i> verificar que los valores de reactiva declarados se encuentren dentro del rango de la
                            curva, en caso de que no, es inconsistencia y causal de devolución.
                        </li>
                     
                    </ul>
                    <b>Nota:</b> Si por alguna razón se debe devolver el requerimiento al agente con comentarios a subsanar, la solicitud se considera
                    atendida, por lo tanto una vez llegue otra vez la solicitud, se reinicia todo el proceso.
                </p>                
            </div>
        )
    }
}

export default subControl_2
