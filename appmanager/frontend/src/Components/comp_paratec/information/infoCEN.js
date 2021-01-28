import imagen1 from '../../../images/AdminParatec/Logos/logo.png'
import Pdf1 from '../pdfs/PROCESO_parametros_v2.pdf'
//import imagen3 from '../../../images/AdminDB/ecuador/imagen3.png'

import React, { Component } from 'react'
import { Document, Page } from 'react-pdf'

import {Modal, Button, Row, Col} from 'react-bootstrap'

export class infoCEN extends Component {
    
    state={
        show: false
    }

    render() {

        const handleClose = () => this.setState({show:false});
        const handleShow = () => this.setState({show:true});

        return (
            <div>

                <p className="h6 text-justify mr-4">
                Estas solicitudes se atienden de acuerdo con el <a href='https://www.cno.org.co/content/acuerdo-1299-por-el-cual-se-aprueban-los-procedimientos-para-solicitar-el-cambio-de' >acuerdo CNO 1299</a>, 
                    entonces se deben tener en cuenta lo siguiente: <br></br><br></br>
                    <ul>
                        <li>El agente debe presentar la solicitud de cambio del parámetro técnico ante el CND antes del día 20 de cada mes.
                            si llega depués del 20 se consideran los tiempos del siguiente mes.</li>
                        <li>El CND emitirá su concepto sobre la solicitud y lo remitirá junto con la solicitud del agente y el soporte técnico a los miembros del Subcomité respectivo, 
                            antes del primer día hábil del mes siguiente.</li>
                    </ul>
                    Para el correcto trámite de estas solicitudes se requieren las siguientes definiciones:<br></br><br></br>               
                
                <a href='https://www.cno.org.co/content/acuerdo-1330-por-el-cual-se-aprueba-el-procedimiento-para-realizar-la-prueba-de-consumo'>Acuerdo CNO de referencia (1330)</a>
                <br></br><br></br>

                <h4>SOLICITUD DE CAMBIO DE CAPACIDAD EFECTIVA NETA (CEN)</h4>

                Definicion: Es la máxima capacidad de potencia neta (expresada en valor entero en MW) que puede suministrar una planta y/o 
                unidad de generación en condiciones normales de operación, medida en la frontera comercial. Se calcula como la 
                Capacidad Nominal menos el Consumo Propio de la planta y/o unidad de generación. (Fuente: R. CREG-074-2002; Art. 4) 
                <br></br><br></br>
                Cuando 2 o más plantas de generación compartan activos de conexión, la capacidad efectiva neta se  medirá  para  la  planta  o  unidad  de  generación  en  la  frontera  
                comercial individual  como  lo establece la Resolución CREG 200 de 2019.
                <br></br><br></br>

                La CEN a la que se refiere el procedimiento es la CEN del recurso. Por lo tanto es posible que la suma de CEN de las unidades
                sea mayor a la CEN del recurso.
                <br></br><br></br>
                Este procedimiento aplica para todas las plantas del SIN, excepto los AGPE.
                <br></br><br></br>
                
                <h4>SOLICITUD DE CAMBIO DE CONSUMO TÉRMICO ESPECÍFICO (HEAT RATE)</h4>

                Es  otra  forma  de  expresar  la  eficiencia  de  una  unidad  de generación térmica, en términos de la cantidad de calor del 
                combustible requerido para generar un kilovatio-hora. 
                Este parámetro aplica para para las plantas de generación de tipo térmica que son despachadas centralmente (DC)
                <br></br><br></br>
                <p align="center"><b><i>HR = Qa/Kwh.</i></b></p>

                donde:<br></br><br></br>
                <ul>
                    <li><b>HR:</b> Consumo Térmico Específico (Heat Rate) </li>
                    <li><b>Qa:</b> Calor agregado al ciclo térmico en forma de combustible, Btu </li>
                    <li><b>HR:</b> Energía eléctrica generada </li>
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

export default infoCEN