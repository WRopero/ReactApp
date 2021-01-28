import React, { Component } from 'react'
import {Tabs, Tab} from 'react-bootstrap';

import InfoEsps from '../comp_admindb/information/infoEsps';
import ProEsps from '../comp_admindb/procesos/proEsps';
import ListasEsps from '../comp_admindb/listas/listasEsps';


export class Esps extends Component {
    render() {
        return (
            <div style={{overflowY:"scroll",height:"53rem", marginRight:"2rem"}}>
                <div style={{marginRight:"5rem"}}>
                    <Tabs defaultActiveKey="Información" id="uncontrolled-tab-example" className="m-2">
                        <Tab eventKey="Información" title="Información">
                            <div className="container">
                                <InfoEsps />
                            </div>                            
                        </Tab>
                        <Tab eventKey="Proceso" title="Proceso">
                            <div className="container">
                                <ProEsps />
                            </div>                            
                        </Tab>
                        <Tab eventKey="Lista de Chequeo" title="Lista de Chequeo">
                            <div className="container">
                                <ListasEsps />
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        )
    }
}

export default Esps
