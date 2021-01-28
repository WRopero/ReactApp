import React, { Component } from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import InfoControl from './information/infoControl'
import Control_mint_curva from './procesos/procControl_mint'
import ListaControl from './listas_paratec/listasControl'

export class control extends Component {

    

    render() {
        return (
            <div style={{overflowY:"scroll",height:"53rem", marginRight:"2rem"}}>
                <div style={{marginRight:"5rem"}}>
                    <Tabs defaultActiveKey="Información" id="uncontrolled-tab-example" className="m-2">
                        <Tab eventKey="Información" title="Información">
                            <div className="container">
                                <InfoControl />
                            </div>                            
                        </Tab>
                        <Tab eventKey="Proceso" title="Proceso">
                            <div className="container">
                                <Control_mint_curva />
                            </div>                            
                        </Tab>
                        <Tab eventKey="Lista de Chequeo" title="Lista de Chequeo">
                            <div className="container">
                                <ListaControl/>
                            </div>
                        </Tab>
                        
                    </Tabs>
                </div>
            </div>
        )
    }
}

export default control