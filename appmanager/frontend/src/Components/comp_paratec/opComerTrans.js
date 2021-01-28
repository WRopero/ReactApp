import React, { Component } from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import Info_opComerTrans from './information/info_opComerTrans';
import OpcomTr from './procesos/procopComerTrans'
import Listaopcpmercialtr from './listas_paratec/listas_opComerTrans'

export class opComTrans extends Component {

    

    render() {
        return (
            <div style={{overflowY:"scroll",height:"53rem", marginRight:"2rem"}}>
                <div style={{marginRight:"5rem"}}>
                    <Tabs defaultActiveKey="Información" id="uncontrolled-tab-example" className="m-2">
                        <Tab eventKey="Información" title="Información">
                            <div className="container">
                                <Info_opComerTrans />
                            </div>                            
                        </Tab>
                        <Tab eventKey="Proceso" title="Proceso">
                            <div className="container">
                                <OpcomTr />
                            </div>                            
                        </Tab>
                        <Tab eventKey="Lista de Chequeo" title="Lista de Chequeo">
                            <div className="container">
                                <Listaopcpmercialtr />
                            </div>
                        </Tab>
                        
                    </Tabs>
                </div>
            </div>
        )
    }
}

export default opComTrans