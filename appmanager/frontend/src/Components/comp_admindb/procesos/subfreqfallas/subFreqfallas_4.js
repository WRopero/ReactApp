import React, { Component } from 'react'

import imagen1 from '../../../../images/AdminDB/FreqFallas/imagen4_1.png'
import imagen2 from '../../../../images/AdminDB/FreqFallas/imagen4_2.png'

export class subFreqfallas_4 extends Component {
    render() {
        return (
            <div>
                <p className="h4 pt-2">Contexto</p>
                <p className="h6 text-justify mr-4">
                    Cuando finaliza la ejecución del DPL se puede observar en la carpeta donde se descargaron los 
                    archivos de Frecuencia de indisponibilidad tres archivos de información. 
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen1} />
                </div>
                <p className="h6 text-justify mr-4">
                    El archivo con nombre “Elementos del DigSilent faltantes en Herope” son los elementos que están 
                    en la base de datos de DigSilent pero no está en el MID, esta información no es relevante para 
                    la base de datos de Power Factory. 
                </p>
                <p className="h6 text-justify mr-4">
                    El archivo con nombre “Elementos del Herope faltantes en DigSilent” son los archivos del Herope, 
                    que se encuentran en la base de datos del MID pero no están en la base de datos de Power Factory. 
                    Si se abre el archivo, se observa los elementos que tiene inconvenientes entre las dos bases de datos. 
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen2} />
                </div>
                <p>
                    Estos elementos pueden no tener el código MID ingresado de forma correcta o perdida y se deben 
                    verificar cual es el causante del problema para evitar el conflicto entre las dos bases de datos. 
                </p>
            </div>
        )
    }
}

export default subFreqfallas_4
