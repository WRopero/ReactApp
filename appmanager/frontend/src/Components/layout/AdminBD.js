import React, { Component } from 'react';
import {Tab, Row, Col, Nav} from 'react-bootstrap';
import DBhome from '../comp_admindb/DBhome';
import Ecuador from '../comp_admindb/Ecuador';
import Boundaries from '../comp_admindb/Boundaries';
import Edac from '../comp_admindb/Edac';
import Esps from '../comp_admindb/Esps';
import FreqFallas from '../comp_admindb/Freqfallas.js';
import DPLvalidation from '../comp_admindb/DPLvalidation';


export class AdminBD extends Component {
    render() {
        return (
            <div className="m-2">
                <Tab.Container 
                    id="left-tabs-example" 
                    defaultActiveKey="first" 
                    className="m-0 p-0">
                    <Row style={{width:"100%"}}>
                        <Col sm={2}>
                            <Nav variant="pills" 
                                className="flex-column" 
                                style={{marginTop:"6rem", width:"10rem", marginLeft:"1rem", marginRight:"1rem"}}
                                >
                                <Nav.Item>
                                    <Nav.Link eventKey="first">
                                        <p className="m-0 p-0 h6 font-weight-bold" style={{color:"#440099"}}>Home</p>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">
                                        <p className="m-0 p-0 h6 font-weight-bold" style={{color:"#440099"}}>Act. Ecuador</p>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="three">
                                        <p className="m-0 p-0 h6 font-weight-bold" style={{color:"#440099"}}>Act. Fronteras</p>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="four">
                                        <p className="m-0 p-0 h6 font-weight-bold" style={{color:"#440099"}}>Act. EDAC</p>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="five">
                                        <p className="m-0 p-0 h6 font-weight-bold" style={{color:"#440099"}}>Act. ESPS</p>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="six">
                                        <p className="m-0 p-0 h6 font-weight-bold" style={{color:"#440099"}}>Act. Freq Fallas</p>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="seven">
                                        <p className="m-0 p-0 h6 font-weight-bold" style={{color:"#440099"}}>DPLs validación</p>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                            <Col sm={10}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <DBhome />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <Ecuador />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="three">
                                        <Boundaries />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="four">
                                        <Edac />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="five">
                                        <Esps />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="six">
                                        <FreqFallas />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="seven">
                                        <DPLvalidation />
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                    </Row>
                </Tab.Container>
            </div>
        )
    }
}

export default AdminBD
