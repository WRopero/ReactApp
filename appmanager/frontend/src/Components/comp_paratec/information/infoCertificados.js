import imagen1 from '../../../images/AdminParatec/Logos/logo.png'
import Pdf1 from '../pdfs/certificado.pdf'
//import imagen3 from '../../../images/AdminDB/ecuador/imagen3.png'

import React, { Component } from 'react'
import { Document, Page } from 'react-pdf'

import {Modal, Button, Row, Col} from 'react-bootstrap'

export class infoCertificados extends Component {
    
    state={
        show: false
    }

    render() {

        const handleClose = () => this.setState({show:false});
        const handleShow = () => this.setState({show:true});

        return (
            <div>

                <p className="h6 text-justify mr-4">
                    Este tipo de solicitudes son recibidas normalmente cuando un agente requiere que XM informe:
                    <br></br><br></br>
                    <ul>
                        <li>Activos de transmisión que opera</li>
                        <li>Capacidad efectiva Neta de plantas de generación</li>
                        <li>Otros</li>                       

                    </ul>

                    Esta información es utilizada por los agentes para presentarse a convocatorias, proyectos o certificados de
                    emisiones. Independientemente el destino del mismo es importante aclarar que XM no certifica, se debe
                    usar la palabra <b>XM INFORMA QUE:</b>

                </p>
                
                <Modal 
                    transparent={true}
                    size="lg"
                    show={this.state.show} 
                    onHide={handleClose}
                    animation={true}
                    >
                        
                    <Modal.Header closeButton >
                        <Modal.Title>Ejemplo certificación </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <embed src={Pdf1} frameborder="0" width="100%" height="800px">
                        </embed>                 
                    </Modal.Body>
                </Modal>   
                <Row style={{width:"100%"}}>

                    <Col sm={3}>
                        <Button variant="btn btn-outline-dark" onClick={handleShow}>
                        Ejemplo Certificación
                        </Button>                        
                    </Col>
                </Row>                
   
            </div>
        )
    }
}

export default infoCertificados