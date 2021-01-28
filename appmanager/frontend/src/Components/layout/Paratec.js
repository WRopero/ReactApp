import React, { Component } from 'react';
import {Tab, Row, Col, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown';
import DBhome from '../comp_paratec/DBhome';
import Transmision from '../comp_paratec/Transmision';
import Control from '../comp_paratec/control_MinT_curva';
import Cen_hr from '../comp_paratec/Cen_hr';
import FC from '../comp_paratec/FC';
import AGC from '../comp_paratec/AGC';
import Certificados from '../comp_paratec/Certificados';
import Scriptsss from '../comp_paratec/Script';
import OpComerTrans from '../comp_paratec/opComerTrans';
import RegFrontera from '../comp_paratec/RegFrontera';
import PruebasPlantas from '../comp_paratec/PruebasPlanta';
import OperacionPlantas from '../comp_paratec/OperacionPlanta';

import '../../App.css'


export class Paratec extends Component {
    render() {
        return (
            <div class="sidenav">
                <Tab.Container 
                    id="left-tabs-example" 
                    defaultActiveKey="first" 
                    className="m-0 p-0">
                    <Row style={{width:"100%"}}>
                        <Col sm={2}>
                            <Nav class = "nav-pill" 
                                className="flex-column" 
                                style={{marginTop:"6rem", width:"10rem", marginLeft:"1rem", marginRight:"1rem"}}
                                >
                                <NavDropdown title="Procedimientos" id="collasible-nav-dropdown"  style={{marginTop:".6rem", marginLeft:".8rem"}}>
 
                                <NavDropdown.Item eventKey ="first">
                                        <Nav.Item>
                                        <a>Inicio</a>
                                        </Nav.Item>                                
                                    </NavDropdown.Item>
 
                                    <NavDropdown.Item eventKey ="second">
                                        <Nav.Item>
                                        <a>Actualización de parámetros de subestaciones, 
                                                                                    bahías, transformadores y lineas</a>
                                        </Nav.Item>                                
                                    </NavDropdown.Item>

                                    <NavDropdown.Item eventKey ="three">
                                        <Nav.Item>
                                        <a>Actualización de parámetros de control, mínimo 
                                    técnico ó curva de carga de recursos de generación</a>
                                        </Nav.Item>                                
                                    </NavDropdown.Item>

                                    <NavDropdown.Item eventKey ="four">
                                        <Nav.Item>
                                        <a>Actualización de los parámetros (CEN) y (Heat Rate) recursos de generación</a>
                                        </Nav.Item>                                
                                    </NavDropdown.Item>

                                    <NavDropdown.Item eventKey ="five">
                                        <Nav.Item>
                                        <a>Actualización del parámetro factor de conversión de recursos 
                                    de generación hidráulica</a>
                                        </Nav.Item>                                
                                    </NavDropdown.Item>

                                    <NavDropdown.Item eventKey ="six">
                                        <Nav.Item>
                                        <a>Actualización de elegilibilidad para 
                                    prestar el servicio de AGC</a>
                                        </Nav.Item>                                
                                    </NavDropdown.Item>

                                    <NavDropdown.Item eventKey ="seven">
                                        <Nav.Item>
                                        <a>Atención a solicitudes de certificados</a>
                                        </Nav.Item>                                
                                    </NavDropdown.Item>

                                    <NavDropdown.Item eventKey ="eight">
                                        <Nav.Item>
                                        <a>Modificación de elementos en base de datos via script</a>
                                        </Nav.Item>                                
                                    </NavDropdown.Item>

                                    <NavDropdown.Item eventKey ="nine">
                                        <Nav.Item>
                                        <a>Entrada en operación comercial de una subestación o 
                                    de activos de transmisión</a>
                                        </Nav.Item>                                
                                    </NavDropdown.Item>
                                    
                                    <NavDropdown.Item eventKey ="ten">
                                        <Nav.Item>
                                        <a>Creación de un recurso de generación para registro de 
                                    frontera comercial</a>
                                        </Nav.Item>                                
                                    </NavDropdown.Item>

                                    <NavDropdown.Item eventKey ="eleven">
                                        <Nav.Item>
                                        <a>Entrada en pruebas de puesta en servicio de un 
                                    recurso de generación</a>
                                        </Nav.Item>                                
                                    </NavDropdown.Item>

                                    <NavDropdown.Item eventKey ="twelve">
                                        <Nav.Item>
                                        <a>Entrada en operación comercial de un recurso de generación</a>
                                        </Nav.Item>                                
                                    </NavDropdown.Item>

                                </NavDropdown>

                            </Nav>
                        </Col>
                            <Col sm={10}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <DBhome />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <Transmision />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="three">
                                        <Control />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="four">
                                        <Cen_hr/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="five">
                                        <FC />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="six">
                                        <AGC/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="seven">
                                        <Certificados/>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="eight">
                                        <Scriptsss />
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="nine">
                                        <OpComerTrans/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="ten">
                                        <RegFrontera />
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="eleven">
                                        <PruebasPlantas />
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="twelve">
                                        <OperacionPlantas />
                                    </Tab.Pane>

                                </Tab.Content>
                            </Col>
                    </Row>
                </Tab.Container>
            </div>
        )
    }
}


export default Paratec
