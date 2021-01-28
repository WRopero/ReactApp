import React, { Component } from 'react'

import ProDPLvalidation from './procesos/proDPLvalidation';
import ListasDPLvalidation from './listas/listasDPLvalidation'

import {Tabs, Tab} from 'react-bootstrap';

export class DPLvalidation extends Component {
    render() {
        return (
            <div style={{overflowY:"scroll",height:"53rem", marginRight:"2rem"}}>
                <div style={{marginRight:"5rem"}}>
                    <Tabs defaultActiveKey="Proceso" id="uncontrolled-tab-example" className="m-2">                        
                        <Tab eventKey="Proceso" title="Proceso">
                            <div className="container">
                                <ProDPLvalidation />
                            </div>                            
                        </Tab>
                        <Tab eventKey="Lista de Chequeo" title="Lista de Chequeo">
                            <div className="container">
                                <ListasDPLvalidation />
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        )
    }
}

export default DPLvalidation
