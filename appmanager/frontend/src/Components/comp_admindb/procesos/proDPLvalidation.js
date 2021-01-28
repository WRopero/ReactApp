import React, { Component } from 'react'
import {Accordion, Card, Button} from 'react-bootstrap';

import SubDPLvalidation_1 from './subDPLvalidation/subDPLvalidation_1';
import SubDPLvalidation_2 from './subDPLvalidation/subDPLvalidation_2';
import SubDPLvalidation_3 from './subDPLvalidation/subDPLvalidation_3';
import SubDPLvalidation_4 from './subDPLvalidation/subDPLvalidation_4';
import SubDPLvalidation_5 from './subDPLvalidation/subDPLvalidation_5';
import SubDPLvalidation_6 from './subDPLvalidation/subDPLvalidation_6';
import SubDPLvalidation_7 from './subDPLvalidation/subDPLvalidation_7';
import SubDPLvalidation_8 from './subDPLvalidation/subDPLvalidation_8';
import SubDPLvalidation_9 from './subDPLvalidation/subDPLvalidation_9';
import SubDPLvalidation_10 from './subDPLvalidation/subDPLvalidation_10';
import SubDPLvalidation_11 from './subDPLvalidation/subDPLvalidation_11';
import SubDPLvalidation_12 from './subDPLvalidation/subDPLvalidation_12';
import SubDPLvalidation_13 from './subDPLvalidation/subDPLvalidation_13';
import SubDPLvalidation_14 from './subDPLvalidation/subDPLvalidation_14';
import SubDPLvalidation_15 from './subDPLvalidation/subDPLvalidation_15';
import SubDPLvalidation_16 from './subDPLvalidation/subDPLvalidation_16';

export class proDPLvalidation extends Component {
    render() {
        return (
            <div style={{marginTop:"1rem"}}>
                <p className="h3 pt-2">DPLs de validación</p>
                <p className="h6 pt-2">Los pasos siguientes son los DPLs necesarios para la correcta validación antes de realizar la publicación:</p>
                <div style={{marginLeft:"0rem", marginRight:"5rem", marginTop:"2rem"}}> 
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{textDecoration:"none"}}>
                                    <p className="m-0 p-0 h5" style={{color:"#2F4F4F"}}>
                                        1.	DPL de limpieza.
                                    </p>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <SubDPLvalidation_1 />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1" style={{textDecoration:"none"}}>
                                    <p className="m-0 p-0 h5" style={{color:"#2F4F4F"}}>
                                        2.	DPL para revisar valor de impedancia de transformadores.
                                    </p>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <SubDPLvalidation_2 />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="2" style={{textDecoration:"none"}}>
                                    <p className="m-0 p-0 h5" style={{color:"#2F4F4F"}}>
                                        3.	DPL de limites operativos de tensión.
                                    </p>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                    <SubDPLvalidation_3 />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="3" style={{textDecoration:"none"}}>
                                    <p className="m-0 p-0 h5" style={{color:"#2F4F4F"}}>
                                        4.	DPL de validación de caracteres. 
                                    </p>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="3">
                                <Card.Body>
                                    <SubDPLvalidation_4 />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="4" style={{textDecoration:"none"}}>
                                    <p className="m-0 p-0 h5" style={{color:"#2F4F4F"}}>
                                        5.	DPL validación de Switch de compensación.
                                    </p>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="4">
                                <Card.Body>
                                    <SubDPLvalidation_5 />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="5" style={{textDecoration:"none"}}>
                                    <p className="m-0 p-0 h5" style={{color:"#2F4F4F"}}>
                                        6.	DPL validación Foreign key.
                                    </p>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="5">
                                <Card.Body>
                                    <SubDPLvalidation_6 />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="6" style={{textDecoration:"none"}}>
                                    <p className="m-0 p-0 h5" style={{color:"#2F4F4F"}}>
                                        7.	DPL validación de ESPS.
                                    </p>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="6">
                                <Card.Body>
                                    <SubDPLvalidation_7 />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="7" style={{textDecoration:"none"}}>
                                    <p className="m-0 p-0 h5" style={{color:"#2F4F4F"}}>
                                        8.	DPL validación de desface y sobrecarga con Ecuador.
                                    </p>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="7">
                                <Card.Body>
                                    <SubDPLvalidation_8 />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="8" style={{textDecoration:"none"}}>
                                    <p className="m-0 p-0 h5" style={{color:"#2F4F4F"}}>
                                        9.	DPL validación de detalle de cálculo para interruptores. 
                                    </p>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="8">
                                <Card.Body>
                                    <SubDPLvalidation_9 />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="9" style={{textDecoration:"none"}}>
                                    <p className="m-0 p-0 h5" style={{color:"#2F4F4F"}}>
                                        10.	DPL validación de Dispatch en generadores.
                                    </p>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="9">
                                <Card.Body>
                                    <SubDPLvalidation_10 />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="10" style={{textDecoration:"none"}}>
                                    <p className="m-0 p-0 h5" style={{color:"#2F4F4F"}}>
                                        11.	DPLs validación de Foreign Key.
                                    </p>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="10">
                                <Card.Body>
                                    <SubDPLvalidation_11 />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="11" style={{textDecoration:"none"}}>
                                    <p className="m-0 p-0 h5" style={{color:"#2F4F4F"}}>
                                        12.	DPLs validar fuente Ecuador.
                                    </p>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="11">
                                <Card.Body>
                                    <SubDPLvalidation_12 />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="12" style={{textDecoration:"none"}}>
                                    <p className="m-0 p-0 h5" style={{color:"#2F4F4F"}}>
                                        13.	DPLs validar modelos encriptados.
                                    </p>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="12">
                                <Card.Body>
                                    <SubDPLvalidation_13 />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="13" style={{textDecoration:"none"}}>
                                    <p className="m-0 p-0 h5" style={{color:"#2F4F4F"}}>
                                        14.	DPLs validar parámetros de referencia.
                                    </p>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="13">
                                <Card.Body>
                                    <SubDPLvalidation_14 />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="14" style={{textDecoration:"none"}}>
                                    <p className="m-0 p-0 h5" style={{color:"#2F4F4F"}}>
                                        15.	DPLs validar sobrecargas de líneas y transformadores.
                                    </p>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="14">
                                <Card.Body>
                                    <SubDPLvalidation_15 />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="15" style={{textDecoration:"none"}}>
                                    <p className="m-0 p-0 h5" style={{color:"#2F4F4F"}}>
                                        16.	DPLs validar Taps y tipos de cargas y suiches.
                                    </p>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="15">
                                <Card.Body>
                                    <SubDPLvalidation_16 />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div> 
            </div>
        )
    }
}

export default proDPLvalidation
