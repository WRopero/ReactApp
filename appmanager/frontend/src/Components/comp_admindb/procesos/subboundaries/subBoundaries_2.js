import React, { Component } from 'react'
import imagen1 from '../../../../images/AdminDB/boundaries/imagen2_1.png'
import imagen2 from '../../../../images/AdminDB/boundaries/imagen2_2.png'
import imagen3 from '../../../../images/AdminDB/boundaries/imagen2_3.png'
import imagen4 from '../../../../images/AdminDB/boundaries/imagen2_4.png'


export class subBoundaries_2 extends Component {
    render() {
        return (
            <div>
                <p className="h4 pt-2">Contexto</p>
                <p className="h6 text-justify mr-4">
                    El ingreso de una nueva frontera implica el uso de un DPL que permita verificar las fronteras existentes. 
                    Antes de ejecutar el DPL es necesario activar las variaciones que se encuentra en el archivo Variaciones_incluidas 
                    de la carpeta de contiene el archivo de definición de fronteras. 
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen1} />
                </div>
                <p className="h6 text-justify mr-4">
                    Estas variaciones se deben incluir porque los elementos que se activan se tienen cuenta en la creación 
                    de las fronteras y si no están activas el DPL no se ejecuta de forma correcta. 
                </p>
                <p className="h6 text-justify mr-4">
                    El DPL se encuentra en la siguiente ruta Varios\A01-AdministraciónDB\Comandos con el nombre de CheckBondariesCasoBase 
                    y permite verificar que las fronteras existentes estén correctamente integradas. 
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen2} />
                </div>
                <p className="h6 text-justify mr-4">
                    El DPL siguiente al anterior (CrearBondariesCasoBase) permite cargar las fronteras desde el archivo de definición de 
                    fronteras (Importante verificar si entra un generador al STR, de ingresar su transformador a la frontera perteneciente 
                    en el archivo de Excel, porque el DPL no valida la entrada de proyectos de generación). Este DPL se configura ingresando 
                    la información de la ruta donde se encuentra el archivo y al igual que el anterior es necesario tener activas las 
                    variaciones del archivo Variaciones_incluidas.
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen3} />
                </div>
                <p className="h6 text-justify mr-4">
                    Luego de tener configurado el DPL, se ejecuta, esto crea y reemplaza las fronteras de la carpeta de fronteras del 
                    Power Factory, como se observa en la siguiente imagen.
                </p>
                <div className="mt-4 mb-4 d-flex justify-content-center">
                    <img src={imagen4} />
                </div>
                <p className="h6 text-justify mr-4">
                    Es importante volver a ejecutar el DPL de CheckBondariesCasoBase para verificar que las actualizaciones de la 
                    frontera quedo de forma correcta. 
                </p>
                <p className="h6 text-justify mr-4">
                    El video explicativo muestra los casos de verificar las fronteras y adicional realiza cambios para mostrar 
                    la forma de actualizar el archivo de fronteras. 
                </p>
            </div>
        )
    }
}

export default subBoundaries_2
