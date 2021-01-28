import React, { Component } from 'react'
import {Accordion, Card, Button} from 'react-bootstrap';

import SubFreqfallas_1 from './subfreqfallas/subFreqfallas_1';
import SubFreqfallas_2 from './subfreqfallas/subFreqfallas_2';
import SubFreqfallas_3 from './subfreqfallas/subFreqfallas_3';
import SubFreqfallas_4 from './subfreqfallas/subFreqfallas_4';


export class proFreqfallas extends Component {
    render() {
        return (
            <div style={{marginTop:"1rem"}}>
                <p className="h3 pt-2">Actualización de los ESPS</p>
                <p className="h6 pt-2">Los pasos siguientes son los necesarios para la correcta actualización de los ESPS:</p>
                <div style={{marginLeft:"0rem", marginRight:"5rem", marginTop:"2rem"}}> 
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{textDecoration:"none"}}>
                                    <p className="m-0 p-0 h5" style={{color:"#2F4F4F"}}>
                                        1. Descargar los archivos Frecuencia de indisponibilidad STN y STR.
                                    </p>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <SubFreqfallas_1 />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1" style={{textDecoration:"none"}}>
                                    <p className="m-0 p-0 h5" style={{color:"#2F4F4F"}}>
                                        2.	Ejecutar el DPL de actualización de frecuencia de fallas.
                                    </p>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <SubFreqfallas_2 />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="2" style={{textDecoration:"none"}}>
                                    <p className="m-0 p-0 h5" style={{color:"#2F4F4F"}}>
                                        3.	Validación de la actualización de frecuencia de fallas. 
                                    </p>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                    <SubFreqfallas_3 />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card> 
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="3" style={{textDecoration:"none"}}>
                                    <p className="m-0 p-0 h5" style={{color:"#2F4F4F"}}>
                                        4.	Validar archivos de salida del DPL.
                                    </p>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="3">
                                <Card.Body>
                                    <SubFreqfallas_4 />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>                        
                    </Accordion>
                </div> 
            </div>
        )
    }
}

export default proFreqfallas
