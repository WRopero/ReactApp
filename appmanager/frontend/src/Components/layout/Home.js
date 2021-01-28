import React, { Component } from 'react'
import imagen1 from '../comp_paratec/imagenes_general/pilares.PNG'


export class Home extends Component {
    render() {
        return (
            <div className="container" align="center">
                <div className="jumbotron m-5 p-4">
                    <h1 className="display-4">Gestion de Procesos</h1>
                    <p className="lead">Aplicativo que permite gestionar de forma rápida y confiable los procesos en el CND</p>          
                                   
                    <img src={imagen1}  />              
                
                </div>


            </div>
        )
    }
}

export default Home