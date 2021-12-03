import React, { Component } from 'react';
import Imagen from './Imagen';
import Paginacion from './Paginacion';


class Resultado extends Component {

    //metodo   
    mostrarImagenes = ()=>{
        //se pueden ghacer pruebas en consola
        const imagenes = this.props.imagenes;
        // prevenir  errores si esta vacio no se ejecute
        if(imagenes.length === 0) return null;
        // observamos en console
        //console.log(imagenes);

        return (
            <React.Fragment>
                <div
                //   classes de boostrap
                //el map es similar  a un for para recorrer arreglos, se pueden hace r pruebas en console menu ->React
                    className="col-12 p-5 row">
                
                    {imagenes.map(imagen => (
                        <Imagen
                            key={imagen.id}
                            imagen={imagen}
                        />

                    ))}
                </div>
                <Paginacion
                    paginaAnterior={this.props.paginaAnterior}
                    paginaSiguiente={this.props.paginaSiguiente}
                />

            </React.Fragment>
        )    



    }
    render(){
        return(
            // se puede evitar para no crear otro marco exttra
            // <div>
            //     {this.mostrarImagenes()}
            // </div>
            <React.Fragment>
                { this.mostrarImagenes() }

            </React.Fragment>
            
        );
    }
}
export default Resultado;