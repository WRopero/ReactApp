import React, { Component } from 'react'
import imagen1 from '../../../../images/AdminDB/ecuador/subecuador_5_1.PNG'

import ReactPlayer from 'react-player'
import {Modal, Button, Row, Col} from 'react-bootstrap'


export class subEcuador_5 extends Component {

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
                    Este DPL se encuentra en la ruta Varios\ A01-AdministracionDB\Comandos en el 
                    proyecto de Power Factory con nombre Preparar_DespuesActEcuador.
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen1} />
                </div>
                <p className="h6 text-justify mr-4">
                    Este DPL vuelve a ubicar los elementos en sus respectivas carpetas, esto es 
                    necesario para terminar de realizar la integración de los elementos. 
                </p>

            </div>
        )
    }
}

export default subEcuador_5