import React, { Component } from 'react'
import imagen1 from '../../../../images/AdminDB/ecuador/subecuador_2_1.PNG'

import ReactPlayer from 'react-player'
import {Modal, Button, Row, Col} from 'react-bootstrap'


export class subEcuador_2 extends Component {
   
    state={
        show: false
    }

    render() {

        const handleClose = () => this.setState({show:false});
        const handleShow = () => this.setState({show:true});

        return (
            <div>
                <Row style={{width:"100%"}}>
                    <Col sm={9}>
                        <p className="h4 pt-2">Contexto</p>
                    </Col>
                    <Col sm={3}>
                        <Button variant="primary" onClick={handleShow}>
                            Ver Video
                        </Button>
                    </Col>
                </Row>
                <p className="h6 text-justify mr-4">
                    Este DPL se encuentra en Script/CrearCasosDespacho/LimpiarPrj 
                    en el proyecto Power Factory. 
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen1} />
                </div>
                <p className="h6 text-justify mr-4">
                    Este DPL permite retirar los casos de estudio y con esto se puede realizar 
                    la correcta actualización, dado que el DPL de integración después de cargar 
                    los archivos de Interconexiones CAN y Ecuador trabaja por caso de estudio y 
                    solo se realiza para el Caso Base.  
                </p>
            </div>
        )
    }
}

export default subEcuador_2