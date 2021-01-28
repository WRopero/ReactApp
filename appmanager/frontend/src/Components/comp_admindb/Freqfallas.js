import React, { Component } from 'react'
import {Tabs, Tab} from 'react-bootstrap';

import InfoFreqfallas from '../comp_admindb/information/infoFreqfallas';
import ProFreqfallas from '../comp_admindb/procesos/proFreqfallas';
import ListasFreqfallas from '../comp_admindb/listas/listasFreqfallas';


export class Freqfallas extends Component {
    render() {
        return (
            <div style={{overflowY:"scroll",height:"53rem", marginRight:"2rem"}}>
                <div style={{marginRight:"5rem"}}>
                    <Tabs defaultActiveKey="Información" id="uncontrolled-tab-example" className="m-2">
                        <Tab eventKey="Información" title="Información">
                            <div className="container">
                                <InfoFreqfallas />
                            </div>                            
                        </Tab>
                        <Tab eventKey="Proceso" title="Proceso">
                            <div className="container">
                                <ProFreqfallas />
                            </div>                            
                        </Tab>
                        <Tab eventKey="Lista de Chequeo" title="Lista de Chequeo">
                            <div className="container">
                                <ListasFreqfallas />
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        )
    }
}

export default Freqfallas
