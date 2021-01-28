import React, { Component } from 'react'
import {Modal, Button, Row, Col} from 'react-bootstrap'

import Pdf1 from './pdfs/PROCESO_parametros_v2.pdf'
import imagen1 from '../../images/AdminParatec/Logos/logo.png'

export class DBhome extends Component {
    state={
        show: false
    }
    render() {
        const handleClose = () => this.setState({show:false});
        const handleShow = () => this.setState({show:true});
        return (
            <div style={{overflowY:"scroll",height:"50rem", marginTop:"2rem"}}>
                <div className="jumbotron p-3 mr-5">
                    <h1 className="display-6">Registro y Actualización de Parámetros Técnicos</h1>
                    <p className="lead"><p>Información consolidada sobre el proceso de administrar las bases de 
                                            datos de PARATEC.</p>
                                        <p>1. Información consolidada de procedimientos.</p>
                                        <p>2. Listas de chequeo.</p>
                                        <p>La base de datos de Parámetros Técnicos (MID) es visible para los demás procesos de XM, 
                                            los agentes del mercado y las personas naturales a través del portal PARATEC, 
                                            disponible en la siguiente ruta: <a href="http://paratec.xm.com.co/paratec/SitePages/Default.aspx">Reporte PARATEC</a>. 
                                            En este aplicativo se encuentran diferentes reportes que citan el detalle técnico de los elementos del 
                                            Sistema Interconectado Nacional, como transformadores, líneas de transmisión, unidades de generación, 
                                            entre otros. La carpeta del proceso es:"\\archivosxm\PlaneacionOperacion\PARATEC"</p>
                                            
                <Modal 
                    transparent={true}
                    size="lg"
                    show={this.state.show} 
                    onHide={handleClose}
                    animation={true}
                    >
                        
                    <Modal.Header closeButton >
                        <Modal.Title>Procedimiento Parámetros técnicos </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <embed src={Pdf1} frameborder="0" width="100%" height="700px">
                        </embed>                 
                    </Modal.Body>
                </Modal>   
                <Row style={{width:"150%"}}>

                    <Col sm={3}>
                        <Button variant="btn btn-outline-dark" onClick={handleShow}>
                        Procedimiento Parámetros técnicos
                        </Button>                        
                    </Col>
                </Row>  


                                        </p>

                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen1} width="250" height="150" />
                </div> 
                </div>



            </div>
        )
    }
}

export default DBhome
