import React, { Component } from 'react'
import {Table, Button} from 'react-bootstrap';

export class listasDPLvalidation extends Component {
    render() {
        return (
            <div style={{marginTop:"2rem"}}>
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
                            <td>DPL de limpieza.</td>
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
                            <td>DPL para revisar valor de impedancia de transformadores.</td>
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
                            <td>DPL de limites operativos de tensión.</td>
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
                            <td>DPL de validación de caracteres.</td>
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
                            <td>5</td>
                            <td>DPL validación de Switch de compensación.</td>
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
                            <td>6</td>
                            <td>DPL validación Foreign key.</td>
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
                            <td>7</td>
                            <td>DPL validación de ESPS.</td>
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
                            <td>8</td>
                            <td>DPL validación de desface y sobrecarga con Ecuador.</td>
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
                            <td>9</td>
                            <td>DPL validación de detalle de cálculo para interruptores.</td>
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
                            <td>10</td>
                            <td>DPL validación de Dispatch en generadores.</td>
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
                            <td>11</td>
                            <td>DPLs validación de Foreign Key.</td>
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
                            <td>12</td>
                            <td>DPLs validar fuente Ecuador.</td>
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
                            <td>13</td>
                            <td>DPLs validar modelos encriptados.</td>
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
                            <td>14</td>
                            <td>DPLs validar parámetros de referencia.</td>
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
                            <td>15</td>
                            <td>DPLs validar sobrecargas de líneas y transformadores.</td>
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
                            <td>16</td>
                            <td>DPLs validar Taps y tipos de cargas y suiches.</td>
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

export default listasDPLvalidation
