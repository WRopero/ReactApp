import imagen1 from '../../../images/AdminParatec/Logos/logo.png'
import Pdf1 from '../pdfs/PROCESO_parametros_v2.pdf'
//import imagen3 from '../../../images/AdminDB/ecuador/imagen3.png'

import React, { Component } from 'react'
import { Document, Page } from 'react-pdf'

import {Modal, Button, Row, Col} from 'react-bootstrap'

export class infoAGC extends Component {
    
    state={
        show: false
    }

    render() {

        const handleClose = () => this.setState({show:false});
        const handleShow = () => this.setState({show:true});

        var correos="soportescada@xm.com.co, controles@XM.com.co y GestionPyP@XM.com.co";

        return (
            <div>

                <p className="h6 text-justify mr-4">
                    <b>AGC</b>. El Control Automático de Generación (AGC)
                     opera para mantener la frecuencia constante en el SIN. 
                     El AGC sirve para mantener la frecuencia constante en 
                     un sistema de potencia, calcula la desviación de 
                     frecuencia y/o intercambio para corregirla a través 
                     de un proceso automático de envío de comandos que 
                     cambian la generación de las unidades que se encuentren 
                     bajo su control.​​​​​
                     <br></br><br></br>

                     <h4>PROCEDIMIENTO ACTUALIZADO (RES 044/20202)</h4>

                     Relacionado con las Pruebas de generación de AGC y/o prueba de 
                     canal de comunicación con CND, considerando lo establecido en la 
                     resolución CREG 044 de 2020, envió los acuerdo que se llegaron 
                     entre los equipos, respeto al tema:<br></br><br></br>

                     Existen dos pruebas generación posibles de AGC y/o prueba de canal de 
                     comunicación con CND, las cuales :   <br></br><br></br>
                    <ol type="1">
                        <li><b>Pruebas largas del canal:</b> estas pruebas no necesitan 
                            coordinación previa a la prueba</li><br></br>
                        <li><b>Pruebas de elegibilidad AGC:</b> se requiere informar a los equipos 
                            Scada, Controles y Parámetros</li>  <br></br>

                            <ul>
                                <li>Se enviara una notificación cuando un agente cambien a estado solicitado
                                     una prueba de AGC y/o prueba de canal de comunicación con CND, con la opción de 
                                     pruebas de elegibilidad de AGC, este mensaje llegara a los correos soportescada@xm.com.co, 
                                     controles@XM.com.co</li>
                                <li>Las pruebas van a estar restringidas entre los periodos 9 al 17.</li> 
                                <li>Se enviara una notificación al cambio aprobado de las pruebas a los correo {correos}</li>
                                <li>Se enviara una notificación al cambio cancelado de las pruebas a los correo {correos} </li>
                                <li>Solo se pueden programar pruebas de AGC y/o prueba de canal de comunicación con CND 
                                    simultaneas de varias unidades del mismo recurso , pero no se pueden programar simultáneamente 
                                    unidades de recursos diferentes.</li>
                            </ul>           
                    </ol>                  


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

export default infoAGC