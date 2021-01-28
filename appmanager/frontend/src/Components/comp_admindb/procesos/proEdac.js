import React, { Component } from 'react'
import {Accordion, Card, Button} from 'react-bootstrap';

import SubEdac_1 from './subedac/subEdac_1'; 
import SubEdac_2 from './subedac/subEdac_2'; 
import SubEdac_3 from './subedac/subEdac_3'; 
import SubEdac_4 from './subedac/subEdac_4'; 
import SubEdac_5 from './subedac/subEdac_5'; 
import SubEdac_6 from './subedac/subEdac_6'; 

export class proEdac extends Component {
    render() {
        return (
            <div style={{marginTop:"1rem"}}>
            <p className="h3 pt-2">Actualización del EDAC</p>
            <p className="h6 pt-2">Los pasos siguientes son los necesarios para la correcta actualización del EDAC:</p>
            <div style={{marginLeft:"0rem", marginRight:"5rem", marginTop:"2rem"}}> 
                <Accordion>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{textDecoration:"none"}}>
                                <p className="m-0 p-0 h5" style={{color:"#2F4F4F"}}>
                                    1.	Explicación del esquema del EDAC en Power Factory. 
                                </p>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <SubEdac_1 />
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1" style={{textDecoration:"none"}}>
                                <p className="m-0 p-0 h5" style={{color:"#2F4F4F"}}>
                                    2.	Ejecutar DPL actualización tablas EDAC
                                </p>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <SubEdac_2 />
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="2" style={{textDecoration:"none"}}>
                                <p className="m-0 p-0 h5" style={{color:"#2F4F4F"}}>
                                    3.	Actualizar las tablas del EDAC
                                </p>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                <SubEdac_3 />
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="3" style={{textDecoration:"none"}}>
                                <p className="m-0 p-0 h5" style={{color:"#2F4F4F"}}>
                                    4.	Ejecutar DPL de creación de relés del EDAC
                                </p>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body>
                                <SubEdac_4 />
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="4" style={{textDecoration:"none"}}>
                                <p className="m-0 p-0 h5" style={{color:"#2F4F4F"}}>
                                    5.	Carga de datos y validación de los DSL creados por áreas. 
                                </p>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="4">
                            <Card.Body>
                                <SubEdac_5 />                                
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="5" style={{textDecoration:"none"}}>
                                <p className="m-0 p-0 h5" style={{color:"#2F4F4F"}}>
                                    6.	Resumen de los realizado.  
                                </p>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="5">
                            <Card.Body>
                                <SubEdac_6 />                                
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div> 
        </div>
        )
    }
}

export default proEdac
