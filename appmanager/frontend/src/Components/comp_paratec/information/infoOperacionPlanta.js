import imagen1 from '../../../images/AdminParatec/Logos/logo.png'
import Pdf1 from '../pdfs/ENP.pdf'
//import imagen3 from '../../../images/AdminDB/ecuador/imagen3.png'

import React, { Component } from 'react'
import { Document, Page } from 'react-pdf'

import {Modal, Button, Row, Col} from 'react-bootstrap'

export class infoOperacionPlanta extends Component {
    
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

                        <b>Agente generador:</b> es la empresa registrada ante el Administrador del SIC que realiza la actividad de generación de energía 
                        <br></br><br></br>

                        <b>Responsabilidades  del  agente  generador:</b> una vez sea  designado como  agente generador representante del proyecto de generación 
                        será éste el encargado de remitir los documentos  correspondientes  a  los  requisitos  dentro  de  los  plazos  establecidos  
                        en  el presente procedimiento y declarar en operación comercial el proyecto. Así como informar al CND la FPO del proyecto y 
                        las actualizaciones de estapara realizar seguimiento al procedimiento descrito en este documento.<br></br><br></br>

                         <b>Declaración de entrada en operación comercial:</b>comunicación escrita mediante la cual un agente declara al CND 
                        que un activo cumple con toda la normatividad requerida para la entrada  en  operación  y  por  lo  tanto  
                        considera  que  está  listo  para  el  servicio. Esta comunicación  deberá  ser  enviada  al  CND  en  elplazo  
                        establecido  en  el  presente procedimiento.<br></br><br></br>

                        <b>Fecha de puesta en operación comercial, FPO:</b> es la fecha en la cual se prevé la puesta en operación comercial de un 
                        proyecto y deberá considerar la fecha establecida en el Plan de Expansión del SIN.<br></br><br></br>

                        <b>Promotor de un proyecto:</b> es el usuario interesado en desarrollar y conectar proyectos de transmisión  del  STN,  STR,  
                        consumo  de  potencia  directamente  al  STN  (grandes consumidores), generación, cogeneración y autogeneración a gran 
                        escala. <br></br><br></br>


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

export default infoOperacionPlanta