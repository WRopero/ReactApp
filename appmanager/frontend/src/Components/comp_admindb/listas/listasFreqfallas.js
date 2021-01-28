import React, { Component } from 'react'
import {Table, Button} from 'react-bootstrap';


export class listasFreqfallas extends Component {
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
                            <td>Descargar los archivos Frecuencia de indisponibilidad STN y STR.</td>
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
                            <td>Ejecutar el DPL de actualización de frecuencia de fallas.</td>
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
                            <td>Validación de la actualización de frecuencia de fallas.</td>
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
                            <td>4</td>
                            <td>Validar archivos de salida del DPL.</td>
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

export default listasFreqfallas
