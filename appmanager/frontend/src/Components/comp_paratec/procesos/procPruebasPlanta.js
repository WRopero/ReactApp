import React, { Component } from 'react';
import {Accordion, Card, Button} from 'react-bootstrap';

import Subproceso_1 from './act_PruebasPlanta/subPruebasPlanta_1';
import Subproceso_2 from './act_PruebasPlanta/subPruebasPlanta_2';
import Subproceso_3 from './act_PruebasPlanta/subPruebasPlanta_3';
import Subproceso_4 from './act_PruebasPlanta/subPruebasPlanta_4';
import Subproceso_5 from './act_PruebasPlanta/subPruebasPlanta_5';
import Subproceso_6 from './act_PruebasPlanta/subPruebasPlanta_6';





export class procPruebaPlanta extends Component {
    render() {
        return (
            <div style={{marginTop:"1rem"}}>
                <p className="h3 pt-2">Entrada en pruebas de puesta en servicio de un 
                                    recurso de generación</p>
                <p className="h6 pt-2">Los siguientes pasos son los requeridos para la actualización de parámetros. </p>
                <div style={{marginLeft:"0rem", marginRight:"5rem", marginTop:"2rem"}}> 
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{textDecoration:"none"}}>
                                    <p className="m-0 p-0 h5" style={{color:"#2F4F4F"}}>
                                        1.	Recepción de parámetros técnicos definitivos.
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
                                        2.	Crear nueva versión del recurso en base de datos.
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
                                        3. Solicitar códigos DRP.
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
                                        4.	Actualización de mapeos.
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
                                        5.	Solicitud de Códigos de SIOS y CIMCND .
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
                                        6.	Solicitud de otros mapeos en otros aplicativos.
                                    </p>
                                </Accordion.Toggle>
                            </Card.Header>

                            <Accordion.Collapse eventKey="6">
                                <Card.Body>
                                    <Subproceso_6 />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card> 
                   
                    </Accordion>
                </div> 
            </div>
        )
    }
}

export default procPruebaPlanta
