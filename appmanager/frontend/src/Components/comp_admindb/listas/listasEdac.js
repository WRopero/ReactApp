import React, { Component } from 'react'

import {Table, Button} from 'react-bootstrap';

export class listasEdac extends Component {
    render() {
        return (
            <div style={{marginTop:"3rem"}}>
                <Table hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Actividad a Realizar</th>
                            <th></th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Ejecutar DPL actualización tablas EDAC.</td>
                            <td>
                                <Button variant="outline-primary">Ayuda</Button>
                            </td>
                            <td>
                                <label class="btn" 
                                    style={{background:"#d0d0d0", color:"#ff5713", borderRadius:"8px", border:"3px"}}>
                                    <input type="checkbox" autocomplete="off" />
                                    <span class="glyphicon glyphicon-ok"> Realizado</span>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td >Actualizar las tablas del EDAC</td>
                            <td>
                                <Button variant="outline-primary">Ayuda</Button>
                            </td>
                            <td>
                                <label class="btn" 
                                    style={{background:"#d0d0d0", color:"#ff5713", borderRadius:"8px", border:"3px"}}>
                                    <input type="checkbox" autocomplete="off" />
                                    <span class="glyphicon glyphicon-ok"> Realizado</span>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Ejecutar DPL de creación de relés del EDAC</td>
                            <td>
                                <Button variant="outline-primary">Ayuda</Button>
                            </td>
                            <td>
                                <label class="btn" 
                                    style={{background:"#d0d0d0", color:"#ff5713", borderRadius:"8px", border:"3px"}}>
                                    <input type="checkbox" autocomplete="off" />
                                    <span class="glyphicon glyphicon-ok"> Realizado</span>
                                </label>
                            </td>
                        </tr>                        
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default listasEdac
