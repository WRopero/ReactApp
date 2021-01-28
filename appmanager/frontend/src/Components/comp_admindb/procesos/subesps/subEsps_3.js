import React, { Component } from 'react'

import imagen1 from '../../../../images/AdminDB/ESPS/imagen3_1.png'
import imagen2 from '../../../../images/AdminDB/ESPS/imagen3_2.png'


export class subEsps_3 extends Component {
    render() {
        return (
            <div>
                <p className="h4 pt-2">Contexto</p>
                <p className="h6 text-justify mr-4">
                    Al terminar de ejecutar el DPL de CargarESPS se actualiza una carpeta con 
                    nombre Carga y que se encuntra en la misma dirección del DPL Varios\ A01-AdministracionDB\Comandos\GT ESPS\ 
                    con los archivos actualizados de los ESPS. 
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen1} />
                </div>
                <p className="h6 text-justify mr-4">
                    Estos archivos se deben copiar y pegar en la ruta Varios\A03-Generales\ con el nombre de EvaluarESPS eliminando 
                    existentes en la carpeta de esta ruta con nombre Carga, teniendo en cuenta que no se debe eliminar el ESPS 
                    existente en esta ruta y con nombre 20.Protecciones Especiales, ya que este no es creado por el DPL que se 
                    ejecutó anteriormente. 
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen2} />
                </div>
                <p className="h6 text-justify mr-4">
                    Con esto se tendría los ESPS actualizados con la nueva información entregada, para que le equipo correspondiente 
                    realice los análisis correspondientes. 
                </p>
            </div>
        )
    }
}

export default subEsps_3
