import React, { Component } from 'react'
import {Modal, Button, Row, Col} from 'react-bootstrap'

import Pdf1 from '../../pdfs/Manual_Actualización_MapasDiagramas.pdf'

export class subOpComTrans_11 extends Component {
    state={
        show: false
    }
    render() {
        const handleClose = () => this.setState({show:false});
        const handleShow = () => this.setState({show:true});
        return (
            <div>
                <p className="h4 pt-2">Contexto</p>
                <p className="h6 text-justify mr-4">
                    Realizar la actualización de los diagramas unifilares del area de influencia
                    y del operador de red incorporando el proyecto.
                    Procedimiento y archivos base en <i>\\archivosxm\PlaneacionOperacion\PARATEC\41. MapasUnifilaresAutoCAD</i>
                    <br></br><br></br>
                    <ul>
                        <li> <a href="">http://paratec.xm.com.co/paratec/paratec_diagramas</a>  <br></br>
                        Para públicar en aplicativo PARATEC los Unifilares  </li>
                        <li><a href="">http://www.xm.com.co/agentes/Parmetros Tcnicos</a> <br></br>  
                        Link para publicaciones de archivos (públicar los PDF generados) que seran observados por agentes y áreas de XM</li>
                    </ul>

                </p>     

                <Modal 
                    transparent={true}
                    size="lg"
                    show={this.state.show} 
                    onHide={handleClose}
                    animation={true}
                    >
                        
                    <Modal.Header closeButton >
                        <Modal.Title>Procedimiento Actualización de Unifilares </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <embed src={Pdf1} frameborder="0" width="100%" height="700px">
                        </embed>                 
                    </Modal.Body>
                </Modal>   
                <Row style={{width:"150%"}}>

                    <Col sm={3}>
                        <Button variant="btn btn-outline-dark" onClick={handleShow}>
                            Procedimiento Actualización de Unifilares
                        </Button>                        
                    </Col>
                </Row>  

            </div>
        )
    }
}

export default subOpComTrans_11
