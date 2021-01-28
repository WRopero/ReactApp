import React, { Component } from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import Info_RegFrontera from './information/info_RegFrontera';
import RegFrontera from './procesos/procRegFrontera'
import ListaRegFrontera from  './listas_paratec/listas_RegFrontera'

export class RegistroFrontera extends Component {

    

    render() {
        return (
            <div style={{overflowY:"scroll",height:"53rem", marginRight:"2rem"}}>
                <div style={{marginRight:"5rem"}}>
                    <Tabs defaultActiveKey="Información" id="uncontrolled-tab-example" className="m-2">
                        <Tab eventKey="Información" title="Información">
                            <div className="container">
                                <Info_RegFrontera />
                            </div>                            
                        </Tab>
                        <Tab eventKey="Proceso" title="Proceso">
                            <div className="container">
                                <RegFrontera />
                            </div>                            
                        </Tab>
                        <Tab eventKey="Lista de Chequeo" title="Lista de Chequeo">
                            <div className="container">
                                <ListaRegFrontera/>
                            </div>
                        </Tab>
                        
                    </Tabs>
                </div>
            </div>
        )
    }
}

export default RegistroFrontera