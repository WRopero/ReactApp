import React, { Component } from 'react'

import imagen1 from '../../imagenes_Transmision/lineas_tipicos.PNG'

export class subTransmision_2 extends Component {
    render() {
        return (
            <div>
                <p className="h4 pt-2">Contexto</p>
                <p className="h6 text-justify mr-4">

                    <b>Nota: </b> La mayoria de estas solicitudes no deben llevar un procedimiento ante el CNO, sin embargo se deben presentar
                    en el anexo del <a href='https://www.cno.org.co/content/acuerdo-1362-por-el-cual-se-actualiza-la-definicion-y-los-formatos-de-reporte-de-los'>
                    acuerdo CNO vigente</a>. <br></br><br></br>

                    Es importante tener en cuenta que sí la solicitud corresponde a <b><i>cambio del limite operativo y/o la capacidad de sobrecarga de 
                    los Activos de Uso del STN y Conexión al STN</i></b>, El CND dispondrá de hasta (2) dos días para incluir esta información en la operación. 
                    No obstante lo anterior,el CND podrá implementar el cambio como máximo dentro de los (30) treinta días hábiles siguientes a la solicitud de cambio, 
                    si encuentra necesario la realización de estudios eléctricos adicionales. Ver <a href='https://www.cno.org.co/content/acuerdo-1299-por-el-cual-se-aprueban-los-procedimientos-para-solicitar-el-cambio-de' >
                        acuerdo CNO 1299</a>.

                    <br></br><br></br>

                    Desde CRM se debe descargar el correo con la solicitud y sus anexos que justifican el cambio de parámetros solicitado. 
                    Verificar que la documentación remitida sea coherente. En caso de identificar incoherencias, errores o documentación 
                    faltante informar al agente y aclarar las inquietudes antes de proceder con el proceso.

                    El objetivo de el análisis exploratorio es identificar inconsistencias en los datos
                    antes de ser enviados para concepto en las demás areas de XM, debe analizar y decidir si
                    los hallazgos constituyen causa para devolución de la solicitud con los comentarios correspondientes.
                    <br></br><br></br>
                    <ul>
                        <li>En líneas es posible encontrar que los límites de emergencia son menores a los límites nominales de
                            la línea.</li>
                        <li>En transformadores es recomendable solicitar la placa del transformador, especialmente para validar
                            la información de TAPS e impedancias. Es común que no se diligencien bien. Recordar que en TAPS
                            la magnitud del voltage esta relacionada a la magnitud del número del TAP y no a la magnitud
                            de la tensión como tal.</li>
                        <li>La información se encuentra mal diligenciada.</li>
                        <li>No es clara la solicitud del agente.</li>
                        <li>Parámetros técnicos inconsistentes para líneas de este tipo.</li>
                        <li>No se usa el formato correcto.</li>
                    </ul>

                    Adicionalmente se presentan estadisticas básicas por nivel de tensión para los parámetros 
                    tipicos de líneas registradas actualmente en la base de datos de XM (las siguientes imagenes constituyen una guía
                    para el analisis de este punto):
                    <br></br><br></br>
                    
                    <div align="center">
                        <b>Algunos parámetros típicos para líneas de Transmisión</b>
                    </div>
                    <div className="mt-4 mb-4 d-flex justify-content-center">                        
                        <img src={imagen1} />
                    </div>



                   </p>                
            </div>
        )
    }
}

export default subTransmision_2