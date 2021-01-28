import Pdf1 from '../pdfs/PROCESO_parametros_v2.pdf'
//import imagen3 from '../../../images/AdminDB/ecuador/imagen3.png'

import React, { Component } from 'react'
import { Document, Page } from 'react-pdf'

import {Modal, Button, Row, Col} from 'react-bootstrap'
import imagen1 from '../imagenes_Transmision/curvacarga.PNG'

export class infoControl extends Component {
    
    state={
        show: false
    }

    render() {

        const handleClose = () => this.setState({show:false});
        const handleShow = () => this.setState({show:true});

        return (
            <div>

                <p className="h6 text-justify mr-4">

                    Estas solicitudes se atienden de acuerdo con el <a href='https://www.cno.org.co/content/acuerdo-1299-por-el-cual-se-aprueban-los-procedimientos-para-solicitar-el-cambio-de' >acuerdo CNO 1299</a>, 
                    entonces se deben tener en cuenta lo siguiente: <br></br><br></br>
                    <ul>
                        <li>El agente debe presentar la solicitud de cambio del parámetro técnico ante el CND antes del día 20 de cada mes.
                            si llega depués del 20 se consideran los tiempos del siguiente mes.</li>
                        <li>El CND emitirá su concepto sobre la solicitud y lo remitirá junto con la solicitud del agente y el soporte técnico a los miembros del Subcomité respectivo, 
                            antes del primer día hábil del mes siguiente.</li>
                    </ul>
                    Para el correcto trámite de estas solicitudes se requieren las siguientes definiciones:<br></br><br></br>

                    <h4>PARAMETROS DE CONTROL</h4>

                        <a href='https://www.cno.org.co/content/acuerdo-1358-por-el-cual-se-establecen-los-requerimientos-para-la-obtencion-y-validacion-de'>Acuerdo CNO de referencia (1358)</a>
                        <br></br><br></br>

                        <ul>
                        <li><i><b>Parámetros validados de los generadores:</b></i> son los parámetros del modelo del generador que permiten representar su respuesta real a eventos en el sistema y pruebas de campo.</li>

                        <li><i><b>Modelo validado:</b></i> es el modelo matemático en el que se ha comprobado la capacidad de reproducir dentro de márgenes razonables el comportamiento del: Regulador de velocidad, 
                        Sistema de excitación y Estabilizador del Sistema de Potencia asociado, mediante la contrastación entre ensayos de campo y eventos reales, y la simulación de condiciones equivalentes.</li>

                        <li><i><b>Control de generación:</b></i> es uno de los siguientes controles: regulador de velocidad / potencia, sistema de excitación, estabilizador del sistema de potencia y 
                        los limitadores asociados a estos controles.</li>

                        <li><i><b>Estabilidad:</b></i> es la característica de respuesta del sistema en la que se verifica que las señales de salida de los modelos validados son amortiguadas en el tiempo ante 
                        señales de entrada estables, para los modos y condiciones operativas analizadas.</li>

                        <li><i><b>Modelo Estable:</b></i> es el modelo en el que se verifica que las señales de salida son amortiguadas en el tiempo ante señales de entrada amortiguadas en el tiempo, para todos 
                        los modos y condiciones operativas analizadas.</li>

                        <li><i><b>Modelo tipo 6 máquina sincrónica:</b></i> es un modelo matemático de la máquina sincrónica representado por 6 variables de estado. Los modelos de orden superior contienen más de 6 
                        variables de estado y representan con mayor fidelidad el comportamiento dinámico del generador.</li>

                        <li><i><b>Sbase:</b></i> Potencia aparente base del generador. Normalmente es la potencia aparente nominal en MVA.</li>

                        <li><i><b>Vbase:</b></i> Tensión base del generador. Normalmente es la tensión en bornes nominal en kV.</li>

                        <li><i><b>fpn:</b></i> Factor de potencia nominal del generador.</li>

                        <li><i><b>Registro de Evento de frecuencia para validación de modelo del regulador de velocidad/potencia:</b></i> Registro asociado a la excursión de la frecuencia del sistema superior a 0.2 Hz.</li>
                        </ul>
                        

                    <h4>MÍNIMO TÉCNICO</h4>
                    <a href='https://www.cno.org.co/content/acuerdo-1361-por-el-cual-se-establecen-y-actualizan-las-definiciones-y-los-formatos-de'>Acuerdo CNO de referencia (1361)</a>
                    <br></br><br></br>
                    Potencia mínima a la que puede operar la unidad, en condiciones normales de operación.
                    * Para unidades que comparten activos este parámetro está referido al punto de conexión compartido.

                        <br></br><br></br>

                    <h4>CURVA DE CARGA</h4>

                    <a href='https://www.cno.org.co/content/acuerdo-1357-por-el-cual-se-modifica-el-procedimiento-para-la-realizacion-de-las-pruebas-de'>Acuerdo CNO de referencia (1357)</a>

                    <br></br><br></br>

                    Que en la Resolución CREG 025 de 1995 se previó que todas las plantas del SIN están obligadas a participar en el control de la tensión, 
                    mediante la absorción o generación de potencia reactiva y que adicionalmente deberían realizar pruebas anuales para demostrar dichas capacidades, 
                    de conformidad con el numeral 7.4.1 - Prueba de Potencia Reactiva-, de acuerdo con la curva de carga o capacidad declarada por el agente generador.
                    <br></br><br></br>
                    Definiciones:
                    <br></br><br></br>
                    <ul>
                        <li><b>Sistema  de  excitación:</b> Es  el  conjunto  de  sistemas  de  control  y funciones  de  limitación  que  tienen  la  función  de  controlar  la  tensión  en terminalesdelgenerador,
                            atravésdelatensiónycorrientedeexcitación, igualmente propende por la operación del generador dentro de su curva de carga a través de las funciones de limitación. 
                            El sistema de excitación en  la  mayoría  de  generadores  se  compone  de  los  siguientes  bloques funcionales AVR, PSS, OEL,UEL.</li>
                        <li><b>Curva de Carga del Generador:</b> Es la región limitada por la capacidad del generador para operar indefinidamente. Esta región está definida por una combinación de puntos operativos en potencias 
                            activa y reactiva.</li>

                        <li><b>AVR:</b> (Automatic Voltage Controller) Regulador Automático de Tensión. Es  la  función  que  se  encarga  de  controlar  la  tensión  en  terminales  del generador, a través de la tensión y 
                            corriente de excitación.</li>
                        <li><b>OEL:</b> (Over Excitation Limiter) Limitador de Sobrexcitación. Se encarga de  llevar  en  lo  posible  el  punto  de  operación  dentro  de  los  límites establecidos  por  la  curva  de  carga  del  
                            generador  en  la  región  de sobrexcitación.  En  este  procedimiento  el  OEL  se  refiere  al  limitador  de sobrexcitaciónmás   restrictivo,   comúnmente   corresponde   al   OEL temporizado con 
                            función de tiempo definido o inverso.</li>
                        <li><b>UEL:</b> (Under  Excitation  Limiters)  Limitadores  de Subexcitación.  Se encargan de llevar en lo posible el punto de operación dentro de los límites establecidos  por  la  curva  de  carga  del  generador  en  
                            la  región  de subexcitación.</li>
                        <li><b>Estabilización de temperaturas:</b> Se considera que las temperaturas se han estabilizado  si  entre  dos  datos  de  temperatura  tomados  a  carga constante  en  el  estator,  durante  un  periodo  de  tiempo  de  una  hora,  
                            la variación no es superior a 0.5°C.</li>
                        <li><b>Potencia activa máxima declarada:</b> Es la potencia activa máximaque el generador puede entregar en bornes cuando la  unidad está entregando el valor de potencia efectiva neta declarada.</li>

                    </ul>
                    <br></br><br></br>
                    
                    <div align="center">
                        <b>Ejemplo de curva de carga</b>
                    </div>
                    <div className="mt-4 mb-4 d-flex justify-content-center">                        
                        <img src={imagen1} width="500" height="418" />
                    </div>                    


                </p>
                
                <Modal 
                    transparent={true}
                    size="lg"
                    show={this.state.show} 
                    onHide={handleClose}
                    animation={true}
                    >
                        
                    <Modal.Header closeButton >
                        <Modal.Title>Procedimiento parámetros </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <embed src={Pdf1} frameborder="0" width="100%" height="800px">
                        </embed>                 
                    </Modal.Body>
                </Modal>   
                <Row style={{width:"100%"}}>

                    <Col sm={3}>
                        <Button variant="btn btn-outline-dark" onClick={handleShow}>
                        Procedimiento parámetros
                        </Button>                        
                    </Col>
                </Row>                
   
            </div>
        )
    }
}

export default infoControl