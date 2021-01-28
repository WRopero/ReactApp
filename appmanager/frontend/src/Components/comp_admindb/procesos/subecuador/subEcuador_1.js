import React, { Component } from 'react'
import imagen1 from '../../../../images/AdminDB/ecuador/subecuador_1_1.PNG'
import imagen2 from '../../../../images/AdminDB/ecuador/subecuador_1_2.PNG'
import imagen3 from '../../../../images/AdminDB/ecuador/subecuador_1_3.PNG'

import ReactPlayer from 'react-player'
import {Modal, Button, Row, Col} from 'react-bootstrap'



export class subEcuador_1 extends Component {
    
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
                    Los archivos enviados por Cenace se componen de Inteconexiones CAN y Ecuador, 
                    ambos con extensión .dz, estos archivos contienes la información actualizada 
                    de la red de Ecuador y los activos de conexión ambos países. Se recomienda 
                    descargas los archivos en una carpeta local para realizar la actualización. 
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen1} />
                </div>
                <p className="h6 text-justify mr-4">
                    El archivo Interconexiones CAN contiene los elementos de la red electrica que 
                    permiten realizar la interconexión eléctrica entre Colombia y Ecuador. 
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen2} />
                </div>
                <p className="h6 text-justify mr-4">
                El archivo de Ecuador contiene los elementos de la red eléctrica de Ecuador, estos 
                están por zonas y comprenden los activos presentes en el vecino país.
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen3} />
                </div>
                
             </div>
        )
    }
}

export default subEcuador_1