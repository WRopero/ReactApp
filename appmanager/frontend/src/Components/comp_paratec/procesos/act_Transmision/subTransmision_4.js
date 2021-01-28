import React, { Component } from 'react'


export class subTransmision_2 extends Component {
    render() {
        var varText = "<eventosyprotecciones@xm.com.co>";
        var varText2 = "<planeacionoperativaelectrica@xm.com.co>";
        return (
            <div>
                <p className="h4 pt-2">Contexto</p>
                <p className="h6 text-justify mr-4">
                Se debe solicitar revisión de la solicitud al equipo de análisis eléctrico y al equipo de eventos & protecciones. 
                Esta revisión puede ser solicitada  vía email o dividiendo el requerimiento en CRM con los coordinadores de estos equipos 
                    <br></br><br></br>
                    <ul>
                        <li>Para la solicitud de concepto al equipo de eventos & protecciones se envia al correo o lista de distribución
                            EVENTOS Y PROTECCIONES {varText}. Realizar un breve resumen y anexar todos los soportes
                            necesarios. Es de principal interes para el equipo de protecciones los cambios en impedancias, cambios de capacidad
                            en líneas y transformadores.  Cambios en recursos de generación. Verifican que los parámetros esten acorde al
                            EACP que tenga vigente el agente o el EACP del area de influencia.<br></br><br></br></li>
                        
                        <li>La solicitud de concepto para el equipo de planeación eléctrica se realiza al correo PLANEACION OPERATIVA ELÉCTRICA 
                            {varText2} y debe contener todos los soportes y resumen de los parámetros que solicitan 
                            el cambio. Es de principal interes los cambios de capacidad nominales, en emergencia, capacidades de corto circuito.</li>                    </ul>

                    <b>Nota:</b> Se debe procurar copiar a otro miembro del equipo y/o a sus coordinadores en los correos de tal manera que se
                    garantice la llegada de la solicitud al equipo requerido. Si bien hay parámetros de interes para cada equipo es importante 
                    solicitar el concepto a los dos. Dependera del criterio de cada analista si no lo amerita. La solicitud se realiza a través
                    del mismo correo.
                   </p>                
            </div> )
    }
}

export default subTransmision_2