import React, { Component } from 'react'
import {Accordion, Card, Button} from 'react-bootstrap';
import SubBoundaries_1 from './subboundaries/subBoundaries_1'
import SubBoundaries_2 from './subboundaries/subBoundaries_2'
import SubBoundaries_3 from './subboundaries/subBoundaries_3'


export class proBoundaries extends Component {
    render() {
        return (
            <div style={{marginTop:"1rem"}}>
                <p className="h3 pt-2">Actualización de las fronteras</p>
                <p className="h6 pt-2">Los pasos siguientes son los necesarios para la correcta actualización de las fronteras:</p>
                <div style={{marginLeft:"0rem", marginRight:"5rem", marginTop:"2rem"}}> 
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{textDecoration:"none"}}>
                                    <p className="m-0 p-0 h5" style={{color:"#2F4F4F"}}>
                                        1.	Verificación de fronteras existentes e ingreso de nueva frontera. 
                                    </p>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <SubBoundaries_1 />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1" style={{textDecoration:"none"}}>
                                    <p className="m-0 p-0 h5" style={{color:"#2F4F4F"}}>
                                        2.	Ejecutar DPL de chequeo y actualización de las fronteras. 
                                    </p>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <SubBoundaries_2 />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="2" style={{textDecoration:"none"}}>
                                    <p className="m-0 p-0 h5" style={{color:"#2F4F4F"}}>
                                        3.	Validar el ingreso de una nueva frontera. 
                                    </p>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                    <SubBoundaries_3 />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>                        
                    </Accordion>
                </div> 
            </div>
        )
    }
}

export default proBoundaries
