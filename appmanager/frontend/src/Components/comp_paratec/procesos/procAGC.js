import React, { Component } from 'react';
import {Accordion, Card, Button} from 'react-bootstrap';

import Subproceso_1 from './act_AGC/subAGC_1';
import Subproceso_2 from './act_AGC/subAGC_2';
import Subproceso_3 from './act_AGC/subAGC_3';
import Subproceso_4 from './act_AGC/subAGC_4';
import Subproceso_5 from './act_AGC/subAGC_5';
import Subproceso_6 from './act_AGC/subAGC_6';
import Subproceso_7 from './act_AGC/subAGC_7';


export class procAGC extends Component {
    render() {
        return (
            <div style={{marginTop:"1rem"}}>
                <p className="h3 pt-2">Actualización de Elegilibilidad para Prestar el Servicio de AGC</p>
                <p className="h6 pt-2">Los siguientes pasos son los requeridos para la actualización de parámetros. 
                
                <br></br><br></br>

                <b>Nota: </b> Las configuraciones realizadas en la base de datos de BDMIDXM a través del Administrador
                del MID deben seguir la siguiente regla: <br></br><br></br> <i>"Si todas la unidades del recurso de generación pierden elegibilidad
                    entonces el recurso pierde elegibilidad para AGC (Se debe actualizar el campo en la tabla grupo de generación también cuando aplique). 
                    Sí al menos una unidad del recurso de generación puede prestar al servicio de AGC, el recurso debe tener habilitada la bandera para prestar
                    el servicio de AGC en la tabla grupo de generación. En algunos casos un recurso de generación requiere de al menos dos unidades prestando
                    el servicio de AGC para que el recurso sea elegible, siempre validar con el equipo de @CONTROLES"
                </i>
                
                </p>
                <div style={{marginLeft:"0rem", marginRight:"5rem", marginTop:"2rem"}}> 
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{textDecoration:"none"}}>
                                    <p className="m-0 p-0 h5" style={{color:"#2F4F4F"}}>
                                        1.	Deshabilitar bandera "RegSecundaria".
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
                                        2.	Publicar noticia en PARATEC (Pérdida de Elegibilidad AGC).
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
                                        3.	Crear versiones para pruebas de sintonía.
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
                                        4.	Enviar correo informativo sobre las versiones creadas.
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
                                        5.	Habilitar bandera "RegSecundaria".
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
                                        6.	Generar y enviar correo informativo sobre la actualización realizada.
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
                                        7. Publicar noticia en PARATEC (Recuperación de Elegibilidad AGC).
                                    </p>
                                </Accordion.Toggle>
                            </Card.Header>

                            <Accordion.Collapse eventKey="7">
                                <Card.Body>
                                    <Subproceso_7 />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card> 


                    </Accordion>
                </div> 
            </div>
        )
    }
}

export default procAGC
