import React, { Component } from 'react'
import imagen1 from '../../../../images/AdminDB/boundaries/imagen1_1.png'
import imagen2 from '../../../../images/AdminDB/boundaries/imagen1_2.png'

export class subBoundaries_1 extends Component {
    render() {
        return (
            <div>
                <p className="h4 pt-2">Contexto</p>
                <p className="h6 text-justify mr-4">
                    La verificación de fronteras se realiza por medio de un archivo que se encuentra en la ruta
                    \\archivosxm\PlaneacionOperacion\BaseDig\DIgSILENT\Trabajo\CREG 015-2018. Esta carpeta 
                    contiene la siguiente información además del archivo de fronteras. 
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen1} />
                </div>
                <p className="h6 text-justify mr-4">
                    En la carpeta se pueden observar varios archivos entre ellos el archivo de definición de fronteras 
                    y el archivo de Creación de fronteras, este segundo es un tutorial de como crear las fronteras 
                    en Power Factory. 
                </p>
                <p className="h6 text-justify mr-4">
                    El archivo de definición de fronteras está divido por operadores de red y muestra todos los elementos 
                    que forman la frontera para cada operador de red. Estos se muestran con el nombre del elemento, 
                    foreign key, terminal donde se encuentra la frontera y hacia donde apunta la frontera 
                    (hacia la terminal o el elemento).
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen2} />
                </div>
                <p className="h6 text-justify mr-4">
                    El video explicativo permite mostrar la caracterización de la frontera de EMSA y representación de los 
                    diferentes elementos de la frontera en Power Factory. 
                </p>
            </div>
        )
    }
}

export default subBoundaries_1
