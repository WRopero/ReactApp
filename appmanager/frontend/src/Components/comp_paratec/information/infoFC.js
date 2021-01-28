import imagen1 from '../../../images/AdminParatec/Logos/logo.png'
import Pdf1 from '../pdfs/PROCESO_parametros_v2.pdf'
//import imagen3 from '../../../images/AdminDB/ecuador/imagen3.png'

import React, { Component } from 'react'
import { Document, Page } from 'react-pdf'

import {Modal, Button, Row, Col} from 'react-bootstrap'

export class infoCEN extends Component {
    
    state={
        show: false
    }

    render() {

        const handleClose = () => this.setState({show:false});
        const handleShow = () => this.setState({show:true});

        return (
            <div>

                <p className="h6 text-justify mr-4">

                Estas solicitudes se atienden de acuerdo con el procedimiento del <a href='https://www.cno.org.co/content/acuerdo-1299-por-el-cual-se-aprueban-los-procedimientos-para-solicitar-el-cambio-de' >acuerdo CNO 1299</a>, 
                entonces se deben tener en cuenta lo siguiente: <br></br><br></br>
                    <ul>
                        <li>El agente debe presentar la solicitud de cambio del parámetro técnico ante el CND antes del día 20 de cada mes.
                            si llega depués del 20 se consideran los tiempos del siguiente mes.</li>
                        <li>El CND emitirá su concepto sobre la solicitud y lo remitirá junto con la solicitud del agente y el soporte técnico a los miembros del Subcomité respectivo, 
                            antes del primer día hábil del mes siguiente.</li>
                    </ul>
                
                Acuerdos CNO de referencia <a href='https://www.cno.org.co/content/acuerdo-669'>(669)</a> y <a href='https://www.cno.org.co/content/acuerdo-694'>(694)</a>
                
                <br></br><br></br>

                Para la correcta gestión del proceso se requieren las siguientes definiciones:
                <br></br><br></br>

                <b>Nivel del Embalse (H): </b> elevación (cota) de la superficie libre del agua en el embalse, tomada en relación con el nivel del mar, (m.s.n.m.).  
                Para efectos del presente protocolo el nivel del embalse corresponde al valor reportado diariamente por cada empresa al Centro Nacional de Despacho, 
                en adelante CND. <br></br><br></br>

                <b>Potencia Eléctrica (N): </b> es la potencia neta producida al paso del agua por la turbina de una planta de generación.
                <br></br><br></br>

                <b>Factor de Conversión Hidráulico (FC): </b> es la relación entre la potencia eléctrica generada neta y la unidad de caudal necesaria para generar esa potencia, 
                para una cabeza hidráulica determinada. Expresándose en MW/(m3/s).
                <br></br><br></br>

                <b>Factor de Conversión Hidráulico Mediano (FCm): </b> es el factor de conversión más representativo de la planta de generación, que será utilizado en los casos 
                en que se requiera un valor único para efectos de modelación de la energía contenida en el embalse y/o la energía contenida en los aportes de los ríos afluentes.  
                Es el factor de conversión asociado a un nivel del embalse correspondiente a la mediana de los registros históricos existentes de los niveles diarios reportados 
                al CND durante los últimos cinco años.<br></br><br></br>

                <b>Nivel Máximo Físico (NMF): </b> Elevación máxima de la superficie del agua del embalse sin que ocurra vertimiento. Está definida por la cota de la cresta del 
                vertedero, o la cota superior de compuertas, o debajo de dichas cotas, si existe alguna restricción en la estructura hidráulica.                
                <br></br><br></br>
                En el caso de vertederos con compuertas sumergidas, en los cuales el nivel del embalse puede subir por encima de la cota superior de compuertas sin que ocurra vertimiento, 
                el nivel máximo físico será definido por la cota de la estructura donde empieza el vertimiento o debajo de ésta si existe alguna restricción.  
                <br></br><br></br>
                
                <b>Nivel Mínimo Técnico (NMT): </b> Es la elevación de la superficie del agua en el embalse hasta la cual puede utilizarse su agua, cumpliendo con condiciones de seguridad 
                en las estructuras hidráulicas y en las instalaciones de generación para plena carga de todas las unidades. (Ver Acuerdo 512 de 2010)
                <br></br><br></br>
                
                <b>Caída Bruta Máxima: </b> En plantas de generación hidroeléctricas que tengan como equipamiento turbinas Pelton, es la diferencia entre el Nivel Máximo Físico y la cota 
                de eje de las turbinas.  En plantas de generación hidroeléctricas que tengan turbinas Francis, para los propósitos de este protocolo, será la comprendida entre el Nivel 
                Máximo Físico y el nivel del agua en la descarga correspondiente a las condiciones de diseño de la central.
                <br></br><br></br>

                <b>Centrales Filo de agua: </b>para el presente protocolo una central se considera como filo de agua si cumple con cualquiera de las siguientes condiciones, establecidas 
                en la Resolución CREG 152/2011: <br></br><br></br>
                    <ol type="a">
                        <li> Que no posea embalse y que su estructura de captación esté conectada directamente a la fuente de agua para que tome parcial o totalmente el caudal de dicha 
                            fuente o,</li>
                        <li> Que la central posea embalse cuyo tiempo de vaciado, generando con su Capacidad Efectiva Neta, CEN, considerando el aporte promedio multianual e iniciando 
                            con embalse en el máximo técnico, calculado según lo previsto en el Acuerdo 512 del 2010 o aquellos que lo modifiquen o sustituyan, sea menor o igual a un (1) 
                            día, o si el tiempo de llenado generando con dicha CEN y con el aporte promedio multianual iniciando con el embalse en el mínimo técnico, calculado según el 
                            Acuerdo 512 del 2010 o aquellos que lo modifiquen o sustituyan, sea menor o igual a un (1) día.</li>
                    </ol>
                
                Adicionalmente, para los propósitos de este protocolo también se considerarán centrales a filo de agua, las plantas hidroeléctricas que aun estando situadas aguas abajo de 
                embalses que le garanticen regulación de caudales mayor a un (1) día,  cumplan con cualquiera de las condiciones definidas en los literales anteriores, 

                </p>
                
                <Modal 
                    transparent={true}
                    size="lg"
                    show={this.state.show} 
                    onHide={handleClose}
                    animation={true}
                    >
                        
                    <Modal.Header closeButton >
                        <Modal.Title>Procedimiento parámetros </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <embed src={Pdf1} frameborder="0" width="100%" height="800px">
                        </embed>                 
                    </Modal.Body>
                </Modal>   
                <Row style={{width:"100%"}}>

                    <Col sm={3}>
                        <Button variant="btn btn-outline-dark" onClick={handleShow}>
                        Procedimiento parámetros
                        </Button>                        
                    </Col>
                </Row>                
   
            </div>
        )
    }
}

export default infoCEN