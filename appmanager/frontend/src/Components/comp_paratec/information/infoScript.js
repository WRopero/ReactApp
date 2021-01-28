import imagen1 from '../imagenes_Transmision/scrip_insertar.PNG'
import imagen2 from '../imagenes_Transmision/script_Modificar.PNG'
import imagen3 from '../imagenes_Transmision/script_Eliminar.PNG'
import Pdf1 from '../pdfs/PROCESO_parametros_v2.pdf'
//import imagen3 from '../../../images/AdminDB/ecuador/imagen3.png'

import React, { Component } from 'react'
import { Document, Page } from 'react-pdf'

import {Modal, Button, Row, Col} from 'react-bootstrap'

export class infoScript extends Component {
    
    state={
        show: false
    }

    render() {

        const handleClose = () => this.setState({show:false});
        const handleShow = () => this.setState({show:true});

        return (
            <div>

                <p className="h6 text-justify mr-4">
                    Este tipo de solicitudes se realizan cuando es necesario realizar un cambio en la base de datos BDMIDXM y no es 
                    posible relaizarla mediante el administrador del MID. <br></br><br></br>

                    Hay tres tipos de acciones posibles a realizar: <br></br><br></br>
                    <ul>
                        <li>Insertar, se diferencia con el color <i>VERDE</i></li>
                        <li>Modificar, se diferencia con el color <i>AMARILLO</i></li>
                        <li>Eliminar, se diferencia con el color <i>ROJO</i></li>
                    </ul>

                Este tipo de solicitudes se realizan mediante el portal TI solicitando un tiquete a soporte MVM.
                Es importante ser claro en la descripción y si debe ser urgente dejarlo indicado y una hora máxima de ejecución.

                    <div align="center">
                        <b>Ejemplo Insertar</b>
                    </div>
                    <div className="mt-4 mb-4 d-flex justify-content-center">                        
                        <img src={imagen1} width="450" height="90" />
                    </div>  
                    
                    <div align="center">
                        <b>Ejemplo Modificar</b>
                    </div>
                    <div className="mt-4 mb-4 d-flex justify-content-center">                        
                        <img src={imagen2} width="700" height="200" />
                    </div>  
                    
                    <div align="center">
                        <b>Ejemplo Eliminar</b>
                    </div>
                    <div className="mt-4 mb-4 d-flex justify-content-center">                        
                        <img src={imagen3} width="600" height="150" />
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

export default infoScript