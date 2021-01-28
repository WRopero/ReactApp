import React, { Component } from 'react'
import imagen1 from '../../../../images/AdminDB/ecuador/subecuador_6_1.PNG'
import imagen2 from '../../../../images/AdminDB/ecuador/subecuador_6_2.PNG'

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
                    El Archivo DGS permite realizar el despacho entre las unidades de Colombia y Ecuador 
                    para tener un intercambio de potencia de 0MW. 
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen1} />
                </div>
                <p className="h6 text-justify mr-4">
                    Después de actualizar el despacho de 0 MW, se debe exporta el archivo  
                    DGS actualizado, para esto se utiliza un DPL que se encuentra en 
                    Varios\A02-Procesos\B01-LargoPlazo\DGS_Export_nCasos en el proyecto de 
                    Power Factory con nombre DGS_Export. 
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen2}  />
                </div>
                <p className="h6 text-justify mr-4">
                    La ejecución de este DPL guarda el DGS en la ruta definida para realizar la 
                    próxima actualización del modelo eléctrico de Ecuador. 
                </p>

            </div>
        )
    }
}

export default subEcuador_5