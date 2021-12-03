import React,{ Component } from "react";


class Buscador extends Component {
    //crea la posibilidad de leer el input
    //metodo
    busquedaRef = React.createRef();
    //handle -->remplazo por obtenerDatos, por se en español
    obtenerDatos =(e)=>{  
        //cuando se usa el submit se coloca e.preventDefault 
        //metodo previene   la accion del formulario, por default. Ej:  evitar que se vea(texto) en la parte superior, al dar Buscar....
        e.preventDefault(); 

        //console.log(this.busquedaRef.current.value);
        //leer el cambio -->Ej:futbol
        
        const termino =this.busquedaRef.current.value;
       
        //tomamos -->enviamos al comp/principal
         //                      parametro
        this.props.datosBusqueda(termino);

    }   
    
    render() {
        return(
            //remmlazo con onSumit lo de document.querySelector...
            // hay mucho eventos
            <form onSubmit={this.obtenerDatos}>
                <div className="row">
                    {/* <!--{this.props.mensaje}--lo muestra en pageweb pasa del comp/principal al hijo, con props--> */}
                    <div className="form-group col-md-8">                        
                        <input ref={this.busquedaRef}
                        type="text" 
                        className="form-control form-control-lg"
                        placeholder="Busca tu imagen.Ejemplo: Futbol"/>
                    </div>
                    <div className="form-grup col-md-4">
                        <input 
                        type="submit" 
                        className="btn btn-lg btn-danger
                        btn-block"
                        value="Busca..."
                        />
                    </div>
                </div>

            </form>
        );
    }

}
// document.querySelector('form').addEventListener('submit', function(){

// })

export default Buscador;

