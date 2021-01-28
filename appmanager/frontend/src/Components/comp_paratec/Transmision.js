import React, { Component } from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import InfoTransmision from './information/infoTransmision'
import ActulaizacionTransmision from './procesos/procTransmision'
import Listatransmision from './listas_paratec/listasTransmision'


export class Transmision extends Component {

    

    render() {
        return (
            <div style={{overflowY:"scroll",height:"53rem", marginRight:"2rem"}}>
                <div style={{marginRight:"5rem"}}>
                    <Tabs defaultActiveKey="Información" id="uncontrolled-tab-example" className="m-2">
                        <Tab eventKey="Información" title="Información">
                            <div className="container">
                                <InfoTransmision />
                            </div>                            
                        </Tab>
                        <Tab eventKey="Proceso" title="Proceso">
                            <div className="container">
                                <ActulaizacionTransmision />
                            </div>                            
                        </Tab>
                        <Tab eventKey="Lista de Chequeo" title="Lista de Chequeo">
                            <div className="container">
                                <Listatransmision/>
                            </div>
                        </Tab>
                        
                    </Tabs>
                </div>
            </div>
        )
    }
}

export default Transmision