import React, { Component } from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import InfoAGC from './information/infoAGC'
import InfoCertificados from './information/infoCertificados';
import Certificado from './procesos/procCertificados'
import ListaCerti from './listas_paratec/listasCertificados'


export class Certificados extends Component {

    

    render() {
        return (
            <div style={{overflowY:"scroll",height:"53rem", marginRight:"2rem"}}>
                <div style={{marginRight:"5rem"}}>
                    <Tabs defaultActiveKey="Información" id="uncontrolled-tab-example" className="m-2">
                        <Tab eventKey="Información" title="Información">
                            <div className="container">
                                <InfoCertificados />
                            </div>                            
                        </Tab>
                        <Tab eventKey="Proceso" title="Proceso">
                            <div className="container">
                                <Certificado />
                            </div>                            
                        </Tab>
                        <Tab eventKey="Lista de Chequeo" title="Lista de Chequeo">
                            <div className="container">
                                <ListaCerti/>
                            </div>
                        </Tab>
                        
                    </Tabs>
                </div>
            </div>
        )
    }
}

export default Certificados