import React, { Component } from 'react';
import {Accordion, Card, Button} from 'react-bootstrap';

import Subproceso_1 from './act_FC/subFC_1';
import Subproceso_2 from './act_FC/subFC_2';
import Subproceso_3 from './act_FC/subFC_3';
import Subproceso_4 from './act_FC/subFC_4';
import Subproceso_5 from './act_FC/subFC_5';
import Subproceso_6 from './act_FC/subFC_6';
import Subproceso_7 from './act_FC/subFC_7';
import Subproceso_8 from './act_FC/subFC_8';
import Subproceso_9 from './act_FC/subFC_9';
import Subproceso_10 from './act_FC/subFC_10';
import Subproceso_11 from './act_FC/subFC_11';
import Subproceso_12 from './act_FC/subFC_12';
import Subproceso_13 from './act_FC/subFC_13';
import Subproceso_14 from './act_FC/subFC_14';


export class procFC extends Component {
    render() {
        return (
            <div style={{marginTop:"1rem"}}>
                <p className="h3 pt-2">Actualización del Parámetro Factor de Conversión de Recursos de Generación Hidráulica</p>
                <p className="h6 pt-2">Los siguientes pasos son los requeridos para la actualización de parámetros. </p>
                <div style={{marginLeft:"0rem", marginRight:"5rem", marginTop:"2rem"}}> 
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{textDecoration:"none"}}>
                                    <p className="m-0 p-0 h5" style={{color:"#2F4F4F"}}>
                                        1.	Recepción de requerimiento vía CRM.
                                    </p>
                                </Accordion.Toggle>
                            </Card.Header>

                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <Subproceso_1 />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card> 


                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1" style={{textDecoration:"none"}}>
                                    <p className="m-0 p-0 h5" style={{color:"#2F4F4F"}}>
                                        2.	Validar información de entrada (solicitud y anexos).
                                    </p>
                                </Accordion.Toggle>
                            </Card.Header>

                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <Subproceso_2 />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card> 

                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="2" style={{textDecoration:"none"}}>
                                    <p className="m-0 p-0 h5" style={{color:"#2F4F4F"}}>
                                        3.	Dividir requerimiento en CRM con el equipo de @Análisis Energético.
                                    </p>
                                </Accordion.Toggle>
                            </Card.Header>

                            <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                    <Subproceso_3 />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card> 

                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="3" style={{textDecoration:"none"}}>
                                    <p className="m-0 p-0 h5" style={{color:"#2F4F4F"}}>
                                        4.	Concepto emitido por @Análisis Energético.
                                    </p>
                                </Accordion.Toggle>
                            </Card.Header>

                            <Accordion.Collapse eventKey="3">
                                <Card.Body>
                                    <Subproceso_4 />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card> 

                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="5" style={{textDecoration:"none"}}>
                                    <p className="m-0 p-0 h5" style={{color:"#2F4F4F"}}>
                                        5.	Redactar carta con concepto CND para el CNO y carta informativa para el agente.
                                    </p>
                                </Accordion.Toggle>
                            </Card.Header>

                            <Accordion.Collapse eventKey="5">
                                <Card.Body>
                                    <Subproceso_5 />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card> 


                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="6" style={{textDecoration:"none"}}>
                                    <p className="m-0 p-0 h5" style={{color:"#2F4F4F"}}>
                                        6.	Solicitar revisión interna de las cartas redactadas.
                                    </p>
                                </Accordion.Toggle>
                            </Card.Header>

                            <Accordion.Collapse eventKey="6">
                                <Card.Body>
                                    <Subproceso_6 />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card> 



                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="7" style={{textDecoration:"none"}}>
                                    <p className="m-0 p-0 h5" style={{color:"#2F4F4F"}}>
                                        7. Enviar cartas al CNO y al agente.
                                    </p>
                                </Accordion.Toggle>
                            </Card.Header>

                            <Accordion.Collapse eventKey="7">
                                <Card.Body>
                                    <Subproceso_7 />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card> 



                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="8" style={{textDecoration:"none"}}>
                                    <p className="m-0 p-0 h5" style={{color:"#2F4F4F"}}>
                                        8.	Remitir la solicitud y el concepto CND a SURER.
                                    </p>
                                </Accordion.Toggle>
                            </Card.Header>

                            <Accordion.Collapse eventKey="8">
                                <Card.Body>
                                    <Subproceso_8 />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card> 

                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="9" style={{textDecoration:"none"}}>
                                    <p className="m-0 p-0 h5" style={{color:"#2F4F4F"}}>
                                        9.	Archivar comunicaciones enviadas.
                                    </p>
                                </Accordion.Toggle>
                            </Card.Header>

                            <Accordion.Collapse eventKey="9">
                                <Card.Body>
                                    <Subproceso_9 />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card> 
                       
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="10" style={{textDecoration:"none"}}>
                                    <p className="m-0 p-0 h5" style={{color:"#2F4F4F"}}>
                                        10.	Finalizar requerimiento en CRM.
                                    </p>
                                </Accordion.Toggle>
                            </Card.Header>

                            <Accordion.Collapse eventKey="10">
                                <Card.Body>
                                    <Subproceso_10 />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card> 



                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="11" style={{textDecoration:"none"}}>
                                    <p className="m-0 p-0 h5" style={{color:"#2F4F4F"}}>
                                        11.	Esperar emisión de acuerdo aprobatorio por parte del CNO.
                                    </p>
                                </Accordion.Toggle>
                            </Card.Header>

                            <Accordion.Collapse eventKey="11">
                                <Card.Body>
                                    <Subproceso_11 />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card> 


                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="12" style={{textDecoration:"none"}}>
                                    <p className="m-0 p-0 h5" style={{color:"#2F4F4F"}}>
                                        12.	Realizar actualización de parámetros en base de datos.
                                    </p>
                                </Accordion.Toggle>
                            </Card.Header>

                            <Accordion.Collapse eventKey="12">
                                <Card.Body>
                                    <Subproceso_12 />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card> 


                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="13" style={{textDecoration:"none"}}>
                                    <p className="m-0 p-0 h5" style={{color:"#2F4F4F"}}>
                                        13.	Generar y enviar correo informativo sobre la actualización realizada.
                                    </p>
                                </Accordion.Toggle>
                            </Card.Header>

                            <Accordion.Collapse eventKey="13">
                                <Card.Body>
                                    <Subproceso_13 />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card> 

                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="14" style={{textDecoration:"none"}}>
                                    <p className="m-0 p-0 h5" style={{color:"#2F4F4F"}}>
                                        14.	Publicar noticia en PARATEC.
                                    </p>
                                </Accordion.Toggle>
                            </Card.Header>

                            <Accordion.Collapse eventKey="14">
                                <Card.Body>
                                    <Subproceso_14 />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card> 


                    </Accordion>
                </div> 
            </div>
        )
    }
}

export default procFC
