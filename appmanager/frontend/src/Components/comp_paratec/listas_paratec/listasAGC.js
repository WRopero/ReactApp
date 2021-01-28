import React, { Component } from 'react'
import {Table, Button} from 'react-bootstrap';

export class listasAGC extends Component {

    state={
        color1:false,
        color2:false,
        color3:false,
        color4:false,
        color5:false,
        color5:false,
        color6:false,
        color7:false
        
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
                            <td style={{background: this.state.color1 ? "#40e330": ""}}>Deshabilitar bandera "RegSecundaria".</td>
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
                            <td style={{background: this.state.color2 ? "#40e330": ""}}>Publicar noticia en PARATEC (Pérdida de Elegibilidad AGC).</td>
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
                            <td style={{background: this.state.color3 ? "#40e330": ""}}>Crear versiones para pruebas de sintonía.</td>
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
                            <td style={{background: this.state.color4 ? "#40e330": ""}}>Enviar correo informativo sobre las versiones creadas.</td>
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
                            <td style={{background: this.state.color5 ? "#40e330": ""}}>Habilitar bandera "RegSecundaria".</td>
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
                            <td style={{background: this.state.color6 ? "#40e330": ""}}>Generar y enviar correo informativo sobre la actualización realizada.</td>
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
                            <td style={{background: this.state.color7 ? "#40e330": ""}}>Publicar noticia en PARATEC (Recuperación de Elegibilidad AGC).</td>
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

                    </tbody>
                </Table>
            </div>
        )
    }
}

export default listasAGC
