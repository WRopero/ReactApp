import React, { Component } from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import InfoOperacionPlantas from './information/infoOperacionPlanta'
import OperacionPlantas from './procesos/procOperacionPlanta'
import ListaOperaPlantas from './listas_paratec/listasOperacionPlanta'


export class OperaPlantas extends Component {

    

    render() {
        return (
            <div style={{overflowY:"scroll",height:"53rem", marginRight:"2rem"}}>
                <div style={{marginRight:"5rem"}}>
                    <Tabs defaultActiveKey="Información" id="uncontrolled-tab-example" className="m-2">
                        <Tab eventKey="Información" title="Información">
                            <div className="container">
                                <InfoOperacionPlantas />
                            </div>                            
                        </Tab>
                        <Tab eventKey="Proceso" title="Proceso">
                            <div className="container">
                                <OperacionPlantas />
                            </div>                            
                        </Tab>
                        <Tab eventKey="Lista de Chequeo" title="Lista de Chequeo">
                            <div className="container">
                                <ListaOperaPlantas/>
                            </div>
                        </Tab>
                        
                    </Tabs>
                </div>
            </div>
        )
    }
}

export default OperaPlantas