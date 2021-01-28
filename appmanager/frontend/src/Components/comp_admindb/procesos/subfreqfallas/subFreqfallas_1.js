import React, { Component } from 'react'

import imagen1 from '../../../../images/AdminDB/FreqFallas/imagen1_1.png'
import imagen2 from '../../../../images/AdminDB/FreqFallas/imagen1_2.png'
import imagen3 from '../../../../images/AdminDB/FreqFallas/imagen1_3.png'
import imagen4 from '../../../../images/AdminDB/FreqFallas/imagen1_4.png'

export class subFreqfallas_1 extends Component {
    render() {
        return (
            <div>
                <p className="h4 pt-2">Contexto</p>
                <p className="h6 text-justify mr-4">
                    De parte de información operativa CND llega al buzón de la Base de datos de los archivos de 
                    frecuencia de fallas del STN y STR.   
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen1} />
                </div>
                <p className="h6 text-justify mr-4">
                    Estos archivos contienen la información actualizada, en este caso, de las frecuencias de 
                    fallas del trimestre 3 del 2020. 
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen2} />
                </div>
                <p className="h6 text-justify mr-4">
                    Esta información es requerida en la base de datos de Power Factory, debido a los análisis de 
                    confiabilidad de la operación relacionados con mantenimientos y contingencias realizados en 
                    esta herramienta. 
                </p>
                <p className="h6 text-justify mr-4">
                    Los archivos se deben descargar y guardar en la ruta \\archivosxm\PlaneacionOperacion\BaseDig\Utilidades\Frecuencias 
                    de Falla\ donde se encuentra los registros de los trimestres anteriores, esto para realizar respaldo de la información. 
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen3} />
                </div>
                <p className="h6 text-justify mr-4">
                    Dentro de la nueva carpeta se guardan los archivos y se les cambia le nombre para unificar los nombres y adicional 
                    se agregar el archivo de Excel Unificar, que se encuentra en la carpeta del trimestre anterior. 
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen4} />
                </div>
            </div>
        )
    }
}

export default subFreqfallas_1
