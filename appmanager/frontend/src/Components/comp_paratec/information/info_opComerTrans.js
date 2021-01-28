import imagen1 from '../../../images/AdminParatec/Logos/logo.png'
import Pdf1 from '../pdfs/ENP.pdf'

//import imagen3 from '../../../images/AdminDB/ecuador/imagen3.png'

import React, { Component } from 'react'
import { Document, Page } from 'react-pdf'

import {Modal, Button, Row, Col} from 'react-bootstrap'

export class info_opComerTrans extends Component {
    
    state={
        show: false
    }

    render() {

        const handleClose = () => this.setState({show:false});
        const handleShow = () => this.setState({show:true});

        return (
            <div>

                <p className="h6 text-justify mr-4">
                    <a href="https://www.cno.org.co/content/acuerdo-1214-por-el-cual-se-aprueba-el-procedimiento-para-la-entrada-en-operacion-comercial">
                        Acuerdo CNO relacionado (1214)</a><br></br><br></br>

                        Para  la  interpretación  y  aplicación  de  este  procedimiento se  tendrán  en  cuenta  las siguientes definiciones, además 
                        de las contenidas en las Leyes 142 y 143 de 1994, y las resoluciones de la Comisión de Regulación de Energía y Gas (CREG). <br></br><br></br>

                        <b>Transmisión:</b> es  la  actividad  consistente  en  el  transporte  de  energía  por  sistemas  de transmisión y la operación, mantenimiento y 
                        expansión de sistemas de transmisión, ya sean nacionales o regionales (VerResolución CREG 024 de 1995).<br></br><br></br>

                        <b>Declaración de entrada en operación comercial:</b>comunicación escrita mediante la cual un agente declara al CND 
                        que un activo cumple con toda la normatividad requerida para la entrada  en  operación  y  por  lo  tanto  
                        considera  que  está  listo  para  el  servicio. Esta comunicación  deberá  ser  enviada  al  CND  en  elplazo  
                        establecido  en  el  presente procedimiento.<br></br><br></br>

                        <b>Fecha de inicio de PPS(Pruebas de puesta en servicio):</b> fecha en la cual se energiza el proyecto y se tiene 
                        previsto el inicio de las PPS.<br></br><br></br>

                        <b>Fecha de puesta en operación comercial, FPO:</b> es la fecha en la cual se prevé la puesta en operación comercial de un 
                        proyecto y deberá considerar la fecha establecida en el Plan de Expansión del SIN.<br></br><br></br>

                        <b>Promotor de un proyecto:</b> es el usuario interesado en desarrollar y conectar proyectos de transmisión  del  STN,  STR,  
                        consumo  de  potencia  directamente  al  STN  (grandes consumidores), generación, cogeneración y autogeneración a gran 
                        escala. <br></br><br></br>

                        <b>Pruebas de puesta en servicio, PPS:</b> período anterior a la fecha de entrada en operación comercial, durante el cual un agente del 
                        mercado realiza pruebas para verificar el correcto funcionamiento  de  sus  equipos,  el  cumplimiento  de  los  requisitos  
                        establecidos  en  la normatividad vigente para su conexión al SIN y determina los parámetros de funcionamiento de estos. 
                        Al finalizar las pruebas de puesta en servicio y una vez cumplidos los requisitos normativos para la conexión, 
                        el agente puede declarar la entrada en operación comercial del activo. <br></br><br></br>

                        <b>Transportador:</b> persona natural o jurídica que opera y transporta energía eléctrica en el sistema de transmisión nacional, 
                        en un sistema de transmisión regional o en un sistema de distribución local (VerResolución CREG 024 de 1995). <br></br><br></br>

                </p>
                
                <Modal 
                    transparent={true}
                    size="lg"
                    show={this.state.show} 
                    onHide={handleClose}
                    animation={true}
                    >
                        
                    <Modal.Header closeButton >
                        <Modal.Title>Procedimiento ENP </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <embed src={Pdf1} frameborder="0" width="150%" height="500px">
                        </embed>                 
                    </Modal.Body>
                </Modal>   
                <Row style={{width:"150%"}}>

                    <Col sm={3}>
                        <Button variant="btn btn-outline-dark" onClick={handleShow}>
                            Procedimiento ENP
                        </Button>                        
                    </Col>
                </Row>    

           
            </div>
        )
    }
}

export default info_opComerTrans