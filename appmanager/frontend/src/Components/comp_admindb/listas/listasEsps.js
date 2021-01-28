import React, { Component } from 'react'
import {Table, Button} from 'react-bootstrap';


export class listasEsps extends Component {
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
                            <td>Descarga del archivo de actualización de los ESPS.</td>
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
                            <td>Ejecutar el DPL de carga de los ESPS.</td>
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
                            <td>Actualizar en los archivos de Power Factory los ESPS.</td>
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

export default listasEsps
