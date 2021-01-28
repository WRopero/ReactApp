import React, { Component } from 'react'
import imagen1 from '../../../../images/AdminDB/ecuador/subecuador_4_1.PNG'
import imagen2 from '../../../../images/AdminDB/ecuador/subecuador_4_2.PNG'

import ReactPlayer from 'react-player'
import {Modal, Button, Row, Col} from 'react-bootstrap'


export class subEcuador_4 extends Component {

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
                    Los archivos se cargan desde la carpeta donde están descargados al DigSILENT y 
                    con estos se reemplazan los archivos existentes por los nuevos, esto se hace 
                    para Interconexiones CAN y Ecuador.
                </p>
                <p className="h6 text-justify mr-4">
                    Cuando se cargan los archivos aparece el siguiente mensaje, que indica que ha encontrado 
                    una nueva ruta para guardar los archivos cargados similar a la ruta existente. 
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen1}/>
                </div>
                <p className="h6 text-justify mr-4">
                    Al cargar los archivos solicita confirmación para reemplazar los archivos existentes por 
                    los nuevos y con esto se reemplaza todos los archivos.
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen2} />
                </div>

            </div>
        )
    }
}

export default subEcuador_4