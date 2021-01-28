import React, { Component } from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import InfoPruebaPlanta from './information/infoPruebaPlanta'
import PruebaPlanta from './procesos/procPruebasPlanta'
import ListaPruebasPlanta from './listas_paratec/listasPruebaPlanta'


export class PruebaPlantas extends Component {

    

    render() {
        return (
            <div style={{overflowY:"scroll",height:"53rem", marginRight:"2rem"}}>
                <div style={{marginRight:"5rem"}}>
                    <Tabs defaultActiveKey="Información" id="uncontrolled-tab-example" className="m-2">
                        <Tab eventKey="Información" title="Información">
                            <div className="container">
                                <InfoPruebaPlanta />
                            </div>                            
                        </Tab>
                        <Tab eventKey="Proceso" title="Proceso">
                            <div className="container">
                                <PruebaPlanta />
                            </div>                            
                        </Tab>
                        <Tab eventKey="Lista de Chequeo" title="Lista de Chequeo">
                            <div className="container">
                                <ListaPruebasPlanta />
                            </div>
                        </Tab>
                        
                    </Tabs>
                </div>
            </div>
        )
    }
}

export default PruebaPlantas