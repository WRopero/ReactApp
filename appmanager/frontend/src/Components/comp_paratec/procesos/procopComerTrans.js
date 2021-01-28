import React, { Component } from 'react';
import {Accordion, Card, Button} from 'react-bootstrap';

import Subproceso_1 from './act_opComerTrans/subopComerTrans_1';
import Subproceso_2 from './act_opComerTrans/subopComerTrans_2';
import Subproceso_3 from './act_opComerTrans/subopComerTrans_3';
import Subproceso_4 from './act_opComerTrans/subopComerTrans_4';
import Subproceso_5 from './act_opComerTrans/subopComerTrans_5';
import Subproceso_6 from './act_opComerTrans/subopComerTrans_6';
import Subproceso_7 from './act_opComerTrans/subopComerTrans_7';
import Subproceso_8 from './act_opComerTrans/subopComerTrans_8';
import Subproceso_9 from './act_opComerTrans/subopComerTrans_9';
import Subproceso_10 from './act_opComerTrans/subopComerTrans_10';
import Subproceso_11 from './act_opComerTrans/subopComerTrans_11';
import Subproceso_12 from './act_opComerTrans/subopComerTrans_12';



export class procopComerTrans extends Component {
    render() {
        return (
            <div style={{marginTop:"1rem"}}>
                <p className="h3 pt-2">Entrada en Operación Comercial de una Subestación o de Activos de Transmisión</p>
                <p className="h6 pt-2">Los siguientes pasos son los requeridos para la actualización de parámetros. </p>
                <div style={{marginLeft:"0rem", marginRight:"5rem", marginTop:"2rem"}}> 
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{textDecoration:"none"}}>
                                    <p className="m-0 p-0 h5" style={{color:"#2F4F4F"}}>
                                        1.	Validar información de entrada (formato anexo acuerdo CNO 1362).
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
                                        2.	Crear elementos del proyecto en base de datos.
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
                                        3.	Asociar birrelaciones.
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
                                        4.	Crear elementos tipo subsistema.
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
                                        5.	Declaración oficial de fecha de entrada en operación comercial.
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
                                        6.	Crear nuevas versiones en estado de operación.
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
                                        7. Ingresar elementos en colecciones.
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
                                        8.	Inactivar elementos.
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
                                        9.	Enviar correo a @INFORMACION OPERATIVA CND .
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
                                        10.	Enviar correo a @Transacciones Comerciales y @LAC.
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
                                        11.	Actualizar diagramas unifilares.
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
                                        12.	Publicar noticia en PARATEC.
                                    </p>
                                </Accordion.Toggle>
                            </Card.Header>

                            <Accordion.Collapse eventKey="12">
                                <Card.Body>
                                    <Subproceso_12 />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card> 
                    </Accordion>
                </div> 
            </div>
        )
    }
}

export default procopComerTrans
