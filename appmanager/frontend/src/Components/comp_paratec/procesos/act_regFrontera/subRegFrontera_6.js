import React, { Component } from 'react'

export class subRegFrontera_6 extends Component {
    render() {
        return (
            <div>
                <p className="h4 pt-2">Contexto</p>
                <p className="h6 text-justify mr-4">
                    Una vez finalizado el mapeo del atributo bdMem, se debe crear el recurso 
                    en la tabla BASICAS.T85SMGEMOCA de Orasicp, para que la liquidación empiece 
                    a tener en cuenta el registro en sus procesos. Esto se realiza mediante el 
                    aplicativo de Entrada Manual de Fronteras, al que se accede mediante el 
                    servidor remoto comedxmv208:8900, teniendo los debidos permisos.<br></br><br></br>

                    Se debe crear con Capacidad Efectiva Neta (CEN) de 0. Esto debe ser hasta que el 
                    recurso de generación inyecte energía a la red por primera vez, y esto se da cuando
                    el recurso se encuentra en PPS. Una vez se identifique la inyección de energía se debe
                    actualizar la CEN en la T85 en kWh. Esto es usado para que se liquiden los servicios del -ASIC-
                    al agente generador.


                </p>                
            </div>
        )
    }
}

export default subRegFrontera_6
