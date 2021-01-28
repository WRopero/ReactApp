import React, { Component } from 'react'
import {Accordion, Card, Button} from 'react-bootstrap';

import SubEsps_1 from './subesps/subEsps_1'
import SubEsps_2 from './subesps/subEsps_2'
import SubEsps_3 from './subesps/subEsps_3'

export class proEsps extends Component {
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
                                        1.	Descarga del archivo de actualización de los ESPS. 
                                    </p>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <SubEsps_1 />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1" style={{textDecoration:"none"}}>
                                    <p className="m-0 p-0 h5" style={{color:"#2F4F4F"}}>
                                        2.	Ejecutar el DPL de carga de los ESPS.
                                    </p>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <SubEsps_2 />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="2" style={{textDecoration:"none"}}>
                                    <p className="m-0 p-0 h5" style={{color:"#2F4F4F"}}>
                                        3.	Actualizar los ESPS en los archivos de Power Factory.
                                    </p>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                    <SubEsps_3 />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>                        
                    </Accordion>
                </div> 
            </div>
        )
    }
}

export default proEsps
