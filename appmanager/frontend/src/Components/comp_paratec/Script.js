import React, { Component } from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import InfoScripts from './information/infoScript';
import Scriptss from './procesos/procScript'
import ListaScripts from './listas_paratec/listasScript'


export class Scripts extends Component {

    

    render() {
        return (
            <div style={{overflowY:"scroll",height:"53rem", marginRight:"2rem"}}>
                <div style={{marginRight:"5rem"}}>
                    <Tabs defaultActiveKey="Información" id="uncontrolled-tab-example" className="m-2">
                        <Tab eventKey="Información" title="Información">
                            <div className="container">
                                <InfoScripts />
                            </div>                            
                        </Tab>
                        <Tab eventKey="Proceso" title="Proceso">
                            <div className="container">
                                <Scriptss />
                            </div>                            
                        </Tab>
                        <Tab eventKey="Lista de Chequeo" title="Lista de Chequeo">
                            <div className="container">
                                <ListaScripts/>
                            </div>
                        </Tab>
                        
                    </Tabs>
                </div>
            </div>
        )
    }
}

export default Scripts