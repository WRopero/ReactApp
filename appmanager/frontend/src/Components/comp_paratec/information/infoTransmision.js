import imagen1 from '../../../images/AdminParatec/Logos/logo.png'
import Pdf1 from '../pdfs/PROCESO_parametros_v2.pdf'
//import imagen3 from '../../../images/AdminDB/ecuador/imagen3.png'

import React, { Component } from 'react'
import { Document, Page } from 'react-pdf'

import {Modal, Button, Row, Col} from 'react-bootstrap'

export class infoTransmision extends Component {
    
    state={
        show: false
    }

    render() {

        const handleClose = () => this.setState({show:false});
        const handleShow = () => this.setState({show:true});

        return (
            <div>

                <p className="h6 text-justify mr-4">
                    El Sistema Interconectado Nacional (SIN) cuenta con activos de transmisión de acuerdo con la 
                    siguiente clasificación en sus niveles de tensión:<br></br><br></br>

                    <b>Activos de Conexión del OR al STN.</b> Son los bienes que se requieren para que un Operador de Red se conecte físicamente al Sistema de Transmisión Nacional.
                    Se consideran como Activos de Conexión del OR al STN las siguientes UC: la Bahía de Transformador con tensión mayor o igual a 220 kV, el Transformador con una 
                    tensión primaria mayor o igual a 220 kV y, secundaria o terciaria, cualquier tensión inferior a 220 kV y las Bahías de Transformador de los lados de baja tensión.
                    En las subestaciones del STN con configuración de anillo o interruptor y medio no se remunerarán, a través de cargos por uso de la actividad de distribución, 
                    las bahías con tensión mayor o igual a 220 kV. Los Activos de Conexión del OR al STN se remunerarán mediante Cargos por Uso y por lo tanto hacen parte de los activos de uso de los STR. 
                    El OR es el responsable por la Operación y Mantenimiento de estos activos. 
                    <b>Tratamiento de Activos de Conexión al STN.</b> Los activos de Conexión del OR al STN que utilizan los OR serán considerados en el cálculo de los costos del STR y se remunerarán vía cargos por uso, 
                    sin perjuicio de los contratos de conexión que existan con el propietario de los activos
                    <br></br><br></br>

                    <b>Consignación de Equipos</b>. Es el procedimiento mediante el cual se autoriza el retiro de operación de un equipo, una instalación o parte de ella para mantenimiento. <br></br><br></br>

                    <b>Módulo Común</b>. Conjunto de equipos comunes que sirven a toda una subestación, tales como servicios auxiliares, protección de barras, SCC común, etc. <br></br><br></br>

                    <b>Activos de Conexión a un STR o a un SDL</b>. Son los bienes que se requieren para que un generador, Operador de Red, usuario final, 
                    o varios de los anteriores, se conecten físicamente a un Sistema de Transmisión Regional o a un Sistema de Distribución Local.<br></br><br></br>
                    
                    <b>Activos de Uso del STN</b>. Son aquellos activos de transmisión de electricidad que operan a tensiones iguales o superiores a 
                    220 kV, y son remunerados mediante Cargos por Uso del STN.<br></br><br></br>

                    <b>Activos de Uso de STR y SDL</b>. Son aquellos activos de transmisión de electricidad que operan a tensiones inferiores a 220 kV, se clasifican en Unidades Constructivas, 
                    no son Activos de Conexión, y son remunerados mediante Cargos por Uso de STR o SDL.<br></br><br></br>
                                      
                    <b>Niveles de Tensión.</b> Los sistemas de Transmisión Regional y/o Distribución Local se clasifican por niveles, en función de la tensión nominal de operación, 
                    según la siguiente definición:<br></br><br></br>

                    <ul>
                        <li>STN: Sistemas con tensión nominal mayor o igual a 220 kV.</li>
                        <li>Nivel 4: Sistemas con tensión nominal mayor o igual a 57.5 kV y menor a 220 kV.</li>
                        <li>Nivel 3: Sistemas con tensión nominal mayor o igual a 30 kV y menor de 57.5 kV.</li>
                        <li>Nivel 2: Sistemas con tensión nominal mayor o igual a 1 kV y menor de 30 kV.</li>
                        <li>Nivel 1: Sistemas con tensión nominal menor a 1 kV.</li>
                    </ul>
                    En la página web de XM podemos observar <a href="http://www.xm.com.co/agentes/Paginas/planeacion/parametros-tecnicos-del-sin.aspx">diagramas unifilares y mapas del sistema</a>.
                    <br></br>
                </p>
                
                <Modal 
                    transparent={true}
                    size="lg"
                    show={this.state.show} 
                    onHide={handleClose}
                    animation={true}
                    >
                        
                    <Modal.Header closeButton >
                        <Modal.Title>Procedimiento parámetros</Modal.Title>
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

export default infoTransmision