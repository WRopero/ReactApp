import imagen1 from '../../../images/AdminParatec/Logos/logo.png'
import Pdf1 from '../pdfs/PROCESO_parametros_v2.pdf'
//import imagen3 from '../../../images/AdminDB/ecuador/imagen3.png'

import React, { Component } from 'react'
import { Document, Page } from 'react-pdf'

import {Modal, Button, Row, Col} from 'react-bootstrap'

export class info_RegFrontera extends Component {
    
    state={
        show: false
    }

    render() {

        const handleClose = () => this.setState({show:false});
        const handleShow = () => this.setState({show:true});

        return (
            <div>

                <p className="h6 text-justify mr-4">

                        Este procedimiento se realiza cuando un agente <i>generador representante de un proyecto se dispone a 
                        registrar la frontera comercial de generación ante el -ASIC-</i>. Para ello debe solicitar la frontera a través del aplicativo
                        de contratos y fronteras comerciales. Desde el proceso de parámetros se debe registrar la información del generador
                        e ingresar los elementos a la colección <i>Col0082</i> para que el agente pueda solicitar dicha frontera.
                        Esta primer versión es la creada en version 0 y en pruebas. Pueden pasar un tiempo después de que se registre la 
                        frontera para que el agente informe la <i>"Fecha de inicio de PPS(Pruebas de puesta en servicio)"</i>

                <a href="https://www.cno.org.co/content/acuerdo-1214-por-el-cual-se-aprueba-el-procedimiento-para-la-entrada-en-operacion-comercial">
                        Acuerdo CNO relacionado (1214)</a><br></br><br></br>

                        <b>Agente generador:</b> es la empresa registrada ante el Administrador del SIC que realiza la actividad de generación de energía 
                        <br></br><br></br>

                        <b>Responsabilidades  del  agente  generador:</b> una vez sea  designado como  agente generador representante del proyecto de generación 
                        será éste el encargado de remitir los documentos  correspondientes  a  los  requisitos  dentro  de  los  plazos  establecidos  
                        en  el presente procedimiento y declarar en operación comercial el proyecto. Así como informar al CND la FPO del proyecto y 
                        las actualizaciones de estapara realizar seguimiento al procedimiento descrito en este documento.<br></br><br></br>

                        <b>Fecha de inicio de PPS(Pruebas de puesta en servicio):</b> fecha en la cual se energiza el proyecto y se tiene 
                        previsto el inicio de las PPS.<br></br><br></br>

                         <b>Promotor de un proyecto:</b> es el usuario interesado en desarrollar y conectar proyectos de transmisión  del  STN,  STR,  
                        consumo  de  potencia  directamente  al  STN  (grandes consumidores), generación, cogeneración y autogeneración a gran 
                        escala. <br></br><br></br>

                        <b>Pruebas de puesta en servicio, PPS:</b> período anterior a la fecha de entrada en operación comercial, durante el cual un agente del 
                        mercado realiza pruebas para verificar el correcto funcionamiento  de  sus  equipos,  el  cumplimiento  de  los  requisitos  
                        establecidos  en  la normatividad vigente para su conexión al SIN y determina los parámetros de funcionamiento de estos. 
                        Al finalizar las pruebas de puesta en servicio y una vez cumplidos los requisitos normativos para la conexión, 
                        el agente puede declarar la entrada en operación comercial del activo. <br></br><br></br>                        

                </p>
                
                <Modal 
                    transparent={true}
                    size="lg"
                    show={this.state.show} 
                    onHide={handleClose}
                    animation={true}
                    >
                        
                    <Modal.Header closeButton >
                        <Modal.Title>Procedimiento Parámetros </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <embed src={Pdf1} frameborder="0" width="120%" height="700px">
                        </embed>                 
                    </Modal.Body>
                </Modal>   
                <Row style={{width:"150%"}}>

                    <Col sm={3}>
                        <Button variant="btn btn-outline-dark" onClick={handleShow}>
                            Procedimiento Parámetros
                        </Button>                        
                    </Col>
                </Row>  
   
            </div>
        )
    }
}

export default info_RegFrontera