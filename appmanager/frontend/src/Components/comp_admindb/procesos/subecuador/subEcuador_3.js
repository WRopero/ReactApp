import React, { Component } from 'react'
import imagen1 from '../../../../images/AdminDB/ecuador/subecuador_3_1.PNG'

import ReactPlayer from 'react-player'
import {Modal, Button, Row, Col} from 'react-bootstrap'


export class subEcuador_3 extends Component {

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
                    Este DPL se encuentra en la capeta Varios\ A01-AdministracionDB\Comandos en el 
                    proyecto de Power Factory con nombre PrepararAct_Ecuador
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen1} />
                </div>
                <p className="h6 text-justify mr-4">
                    Este DPL permite prepara la base de datos para recibir la actualización del modelo 
                    de Ecuador. Al ejecutarlo el DPL, se mueven los unifilares a la carpeta Colombia y 
                    se pone el nombre Base_de_Datos al proyecto, estos cambios permiten que cuanto se 
                    realice la integración de Ecuador, se realice sin afectar la base de datos actual. 
                    Esto porque Cenace al exportar los datos, los realizan con el proyecto por nombre Base_de_datos.  
                </p>

            </div>
        )
    }
}

export default subEcuador_3