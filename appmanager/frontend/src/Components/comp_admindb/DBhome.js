import React, { Component } from 'react'

export class DBhome extends Component {
    render() {
        return (
            <div style={{overflowY:"scroll",height:"50rem", marginTop:"2rem"}}>
                <div className="jumbotron p-3 mr-5">
                    <h1 className="display-6">Administrador de la Base de Datos de DigSILENT</h1>
                    <p className="lead"><p>En este menu se muestra la forma de actualizar el modelo eléctrico del SIN presente en la Base de Datos
                                        de DigSILENT Power Factory, con esto se busca:</p>
                                        <p>1. Mantener informado a los encargados del modelo eléctrico de los procesos realizados.</p>
                                        <p>2. Mostrar la forma en que se realizan los diferentes procesos.</p>
                                        <p>3. Presentar las mejoras continuas realizadas en los procesos.</p></p>
                </div>
            </div>
        )
    }
}

export default DBhome
