import React, { Component } from 'react'
import {Table, Button} from 'react-bootstrap';

export class listasFC extends Component {

    state={
        color1:false,
        color2:false,
        color3:false,
        color4:false,
        color5:false,
        color5:false,
        color6:false,
        color7:false,
        color8:false,
        color9:false,
        color10:false,
        color11:false,
        color12:false,
        color13:false,
        color14:false
    }
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
                            <td style={{background: this.state.color1 ? "#40e330": ""}}>1</td>
                            <td style={{background: this.state.color1 ? "#40e330": ""}}>Recepción de requerimiento vía CRM.</td>
                            <td style={{background: this.state.color1 ? "#40e330": ""}}>
                                <Button variant="outline-primary">Ayuda</Button>
                            </td>
                            <td style={{background: this.state.color1 ? "#40e330": ""}}>
                                <label class="btn" 
                                    style={{background:"#d0d0d0", color:"#ff5713", borderRadius:"8px", border:"3px"}}>
                                    <input 
                                        type="checkbox" 
                                        autocomplete="off"
                                        onClick={() => {this.setState({color1:!this.state.color1})}} />
                                    <span class="glyphicon glyphicon-ok"> Realizado</span>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td style={{background: this.state.color2 ? "#40e330": ""}}>2</td>
                            <td style={{background: this.state.color2 ? "#40e330": ""}}>Validar información de entrada (solicitud y anexos).</td>
                            <td style={{background: this.state.color2 ? "#40e330": ""}}>
                                <Button variant="outline-primary">Ayuda</Button>
                            </td>
                            <td style={{background: this.state.color2 ? "#40e330": ""}}>
                            <label class="btn" 
                                    style={{background:"#d0d0d0", color:"#ff5713", borderRadius:"8px", border:"3px"}}>
                                    <input 
                                        type="checkbox" 
                                        autocomplete="off"
                                        onClick={() => {this.setState({color2:!this.state.color2})}} />
                                    <span class="glyphicon glyphicon-ok"> Realizado</span>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td style={{background: this.state.color3 ? "#40e330": ""}}>3</td>
                            <td style={{background: this.state.color3 ? "#40e330": ""}}> Dividir requerimiento en CRM con el equipo de @Análisis Energético.</td>
                            <td style={{background: this.state.color3 ? "#40e330": ""}}>
                                <Button variant="outline-primary">Ayuda</Button>
                            </td>
                            <td style={{background: this.state.color3 ? "#40e330": ""}}>
                            <label class="btn" 
                                    style={{background:"#d0d0d0", color:"#ff5713", borderRadius:"8px", border:"3px"}}>
                                    <input 
                                        type="checkbox" 
                                        autocomplete="off"
                                        onClick={() => {this.setState({color3:!this.state.color3})}} />
                                    <span class="glyphicon glyphicon-ok"> Realizado</span>
                                </label>
                            </td>
                        </tr>   

                        <tr>
                            <td style={{background: this.state.color4 ? "#40e330": ""}}>4</td>
                            <td style={{background: this.state.color4 ? "#40e330": ""}}>Concepto emitido por @Análisis Energético.</td>
                            <td style={{background: this.state.color4 ? "#40e330": ""}}>
                                <Button variant="outline-primary">Ayuda</Button>
                            </td>
                            <td style={{background: this.state.color4 ? "#40e330": ""}}>
                            <label class="btn" 
                                    style={{background:"#d0d0d0", color:"#ff5713", borderRadius:"8px", border:"3px"}}>
                                    <input 
                                        type="checkbox" 
                                        autocomplete="off"
                                        onClick={() => {this.setState({color4:!this.state.color4})}} />
                                    <span class="glyphicon glyphicon-ok"> Realizado</span>
                                </label>
                            </td>
                        </tr>

                        <tr>
                            <td style={{background: this.state.color5 ? "#40e330": ""}}>5</td>
                            <td style={{background: this.state.color5 ? "#40e330": ""}}>Redactar carta con concepto CND para el CNO y carta informativa para el agente.</td>
                            <td style={{background: this.state.color5 ? "#40e330": ""}}>
                                <Button variant="outline-primary">Ayuda</Button>
                            </td>
                            <td style={{background: this.state.color5 ? "#40e330": ""}}>
                            <label class="btn" 
                                    style={{background:"#d0d0d0", color:"#ff5713", borderRadius:"8px", border:"3px"}}>
                                    <input 
                                        type="checkbox" 
                                        autocomplete="off"
                                        onClick={() => {this.setState({color5:!this.state.color5})}} />
                                    <span class="glyphicon glyphicon-ok"> Realizado</span>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td style={{background: this.state.color6 ? "#40e330": ""}}>6</td>
                            <td style={{background: this.state.color6 ? "#40e330": ""}}>Solicitar revisión interna de las cartas redactadas.</td>
                            <td style={{background: this.state.color6 ? "#40e330": ""}}>
                                <Button variant="outline-primary">Ayuda</Button>
                            </td>
                            <td style={{background: this.state.color6 ? "#40e330": ""}}>
                            <label class="btn" 
                                    style={{background:"#d0d0d0", color:"#ff5713", borderRadius:"8px", border:"3px"}}>
                                    <input 
                                        type="checkbox" 
                                        autocomplete="off"
                                        onClick={() => {this.setState({color6:!this.state.color6})}} />
                                    <span class="glyphicon glyphicon-ok"> Realizado</span>
                                </label>
                            </td>
                        </tr>

                        <tr>
                            <td style={{background: this.state.color7 ? "#40e330": ""}}>7</td>
                            <td style={{background: this.state.color7 ? "#40e330": ""}}>Enviar cartas al CNO y al agente.</td>
                            <td style={{background: this.state.color7 ? "#40e330": ""}}>
                                <Button variant="outline-primary">Ayuda</Button>
                            </td>
                            <td style={{background: this.state.color7 ? "#40e330": ""}}>
                            <label class="btn" 
                                    style={{background:"#d0d0d0", color:"#ff5713", borderRadius:"8px", border:"3px"}}>
                                    <input 
                                        type="checkbox" 
                                        autocomplete="off"
                                        onClick={() => {this.setState({color7:!this.state.color7})}} />
                                    <span class="glyphicon glyphicon-ok"> Realizado</span>
                                </label>
                            </td>
                        </tr>

                        <tr>
                            <td style={{background: this.state.color8 ? "#40e330": ""}}>8</td>
                            <td style={{background: this.state.color8 ? "#40e330": ""}}>Remitir la solicitud y el concepto CND a SURER.</td>
                            <td style={{background: this.state.color8 ? "#40e330": ""}}>
                                <Button variant="outline-primary">Ayuda</Button>
                            </td>
                            <td style={{background: this.state.color8 ? "#40e330": ""}}>
                            <label class="btn" 
                                    style={{background:"#d0d0d0", color:"#ff5713", borderRadius:"8px", border:"3px"}}>
                                    <input 
                                        type="checkbox" 
                                        autocomplete="off"
                                        onClick={() => {this.setState({color8:!this.state.color8})}} />
                                    <span class="glyphicon glyphicon-ok"> Realizado</span>
                                </label>
                            </td>
                        </tr>

                        <tr>
                            <td style={{background: this.state.color9 ? "#40e330": ""}}>9</td>
                            <td style={{background: this.state.color9 ? "#40e330": ""}}>Archivar comunicaciones enviadas.</td>
                            <td style={{background: this.state.color9 ? "#40e330": ""}}>
                                <Button variant="outline-primary">Ayuda</Button>
                            </td>
                            <td style={{background: this.state.color9 ? "#40e330": ""}}>
                            <label class="btn" 
                                    style={{background:"#d0d0d0", color:"#ff5713", borderRadius:"8px", border:"3px"}}>
                                    <input 
                                        type="checkbox" 
                                        autocomplete="off"
                                        onClick={() => {this.setState({color9:!this.state.color9})}} />
                                    <span class="glyphicon glyphicon-ok"> Realizado</span>
                                </label>
                            </td>
                        </tr>

                        <tr>
                            <td style={{background: this.state.color10 ? "#40e330": ""}}>10</td>
                            <td style={{background: this.state.color10 ? "#40e330": ""}}>Finalizar requerimiento en CRM.</td>
                            <td style={{background: this.state.color10 ? "#40e330": ""}}>
                                <Button variant="outline-primary">Ayuda</Button>
                            </td>
                            <td style={{background: this.state.color10 ? "#40e330": ""}}>
                            <label class="btn" 
                                    style={{background:"#d0d0d0", color:"#ff5713", borderRadius:"8px", border:"3px"}}>
                                    <input 
                                        type="checkbox" 
                                        autocomplete="off"
                                        onClick={() => {this.setState({color10:!this.state.color10})}} />
                                    <span class="glyphicon glyphicon-ok"> Realizado</span>
                                </label>
                            </td>
                        </tr>

                        <tr>
                            <td style={{background: this.state.color11 ? "#40e330": ""}}>11</td>
                            <td style={{background: this.state.color11 ? "#40e330": ""}}>Esperar emisión de acuerdo aprobatorio por parte del CNO.</td>
                            <td style={{background: this.state.color11 ? "#40e330": ""}}>
                                <Button variant="outline-primary">Ayuda</Button>
                            </td>
                            <td style={{background: this.state.color11 ? "#40e330": ""}}>
                            <label class="btn" 
                                    style={{background:"#d0d0d0", color:"#ff5713", borderRadius:"8px", border:"3px"}}>
                                    <input 
                                        type="checkbox" 
                                        autocomplete="off"
                                        onClick={() => {this.setState({color11:!this.state.color11})}} />
                                    <span class="glyphicon glyphicon-ok"> Realizado</span>
                                </label>
                            </td>
                        </tr>

                        <tr>
                            <td style={{background: this.state.color12 ? "#40e330": ""}}>12</td>
                            <td style={{background: this.state.color12 ? "#40e330": ""}}>Realizar actualización de parámetros en base de datos.</td>
                            <td style={{background: this.state.color12 ? "#40e330": ""}}>
                                <Button variant="outline-primary">Ayuda</Button>
                            </td>
                            <td style={{background: this.state.color12 ? "#40e330": ""}}>
                            <label class="btn" 
                                    style={{background:"#d0d0d0", color:"#ff5713", borderRadius:"8px", border:"3px"}}>
                                    <input 
                                        type="checkbox" 
                                        autocomplete="off"
                                        onClick={() => {this.setState({color12:!this.state.color12})}} />
                                    <span class="glyphicon glyphicon-ok"> Realizado</span>
                                </label>
                            </td>
                        </tr>

                        <tr>
                            <td style={{background: this.state.color13 ? "#40e330": ""}}>13</td>
                            <td style={{background: this.state.color13 ? "#40e330": ""}}>Generar y enviar correo informativo sobre la actualización realizada.</td>
                            <td style={{background: this.state.color13 ? "#40e330": ""}}>
                                <Button variant="outline-primary">Ayuda</Button>
                            </td>
                            <td style={{background: this.state.color13 ? "#40e330": ""}}>
                            <label class="btn" 
                                    style={{background:"#d0d0d0", color:"#ff5713", borderRadius:"8px", border:"3px"}}>
                                    <input 
                                        type="checkbox" 
                                        autocomplete="off"
                                        onClick={() => {this.setState({color13:!this.state.color13})}} />
                                    <span class="glyphicon glyphicon-ok"> Realizado</span>
                                </label>
                            </td>
                        </tr>


                        <tr>
                            <td style={{background: this.state.color14 ? "#40e330": ""}}>14</td>
                            <td style={{background: this.state.color14 ? "#40e330": ""}}>Publicar noticia en PARATEC.</td>
                            <td style={{background: this.state.color14 ? "#40e330": ""}}>
                                <Button variant="outline-primary">Ayuda</Button>
                            </td>
                            <td style={{background: this.state.color14 ? "#40e330": ""}}>
                            <label class="btn" 
                                    style={{background:"#d0d0d0", color:"#ff5713", borderRadius:"8px", border:"3px"}}>
                                    <input 
                                        type="checkbox" 
                                        autocomplete="off"
                                        onClick={() => {this.setState({color14:!this.state.color14})}} />
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

export default listasFC
