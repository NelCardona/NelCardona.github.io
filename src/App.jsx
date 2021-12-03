//componente principal
import React, { Component } from 'react';
import Buscador from './components/Buscador';
import Resultado from './components/Resultado';

class App extends Component{
    //para que reaccione react con state
    state = {
        //termino: 'cafe', el state arranca con arreglos vacios para luego rellenarlos en la busqueda
        termino:'',
        imagenes : [],
        pagina: ''
    }
    //para crear el scroll ↓↑
    scroll = () => {
        const elemento = document.querySelector('.jumbotron');
        elemento.scrollIntoView('smooth', 'start');
    }
    //comunicarlo con paginacion
    paginaAnterior=()=>{
        console.log('anterior...');

        //console.log('siguiente...');
        //leer el state de la página actual
        let pagina = this.state.pagina;
        //condicion si pag=1, parar --> no ir atras
        if(pagina === 1 ) return null;
        //resta uno a la página actual
        pagina -=1;

        // agregar el cambio al state
        this.setState({
            pagina
        }, () => {
            this.consultarApi();
            this.scroll();
        });
        //console.log(pagina);
    }
    paginaSiguiente = () => {
        //console.log('siguiente...');
        //leer el state de la página actual
        let pagina = this.state.pagina;
        //sumar uno a la página siguiente
        pagina = pagina + 1;

        // agregar el cambio al state
        this.setState({
            pagina
        }, () => {
            this.consultarApi();
            this.scroll();
        });
        //pruebas en inspeccionar menu React
        //console.log(pagina);
    }
    //la consulata de imagenes
    consultarApi = () => {

        const termino = this.state.termino;
        // const url =`https://pixabay.com/api/?key=24565416-af5f6e53807c085cc3685833b&q=${termino}`;
        //actualizar
        const pagina = this.state.pagina;
        //instalar la Extensión JSONView ---> ordena los datos de pixabay, tipo json en el consumo de la app / imagenes
        //hay cosas que no se necesiatan de la url, hasta el q->query--lo que el usuario escribe en la búsqueda
        //const url =`https://pixabay.com/api/?key=24565416-af5f6e53807c085cc3685833b&q=${this.state.termino}`;
        //ver la documentacion de pixabay
        const url =`https://pixabay.com/api/?key=24565416-af5f6e53807c085cc3685833b&q=${termino}&per_page=30&page=${pagina}`;

        console.log(url);
        //puede urilizar otras como ayax, jicuery, axios.....
        fetch(url)
        .then(respuesta => respuesta.json())
        //.then(resultado) => console.log(resultado.hits); ---> para pruebas en consola
        .then(resultado => this.setState({ imagenes : resultado.hits}))
    }
    //viene del hijo al padre--Del buscador a la consola
    datosBusqueda = (termino)=>{ 
        //console.log(termino);   
        //observamos texto en pageweb iniciando en pag 1
        //pruebas en console menu --> React
        this.setState({
            termino : termino,
            pagina: 1
        }, ()=> {
            this.consultarApi();
        })
    }
    
    render(){
        return(
            <div className="app container">
                <div className="jumbotron">
                    <p className="lead text-center text-white" >
                        Buscador de Imagénes</p>
                    <Buscador
                    //aparacen en consola--En menu React
                    //mensaje="Buscador.."
                    datosBusqueda={this.datosBusqueda}/>

                </div>
                {/* {this.state.termino} */}
                <div className="row justify-center">
                    <Resultado
                        imagenes={this.state.imagenes}
                        paginaAnterior={this.paginaAnterior}
                        paginaSiguiente={this.paginaSiguiente}
                    />
                </div>
                {/* {this.state.termino} */}
            </div>
        );
    }
} 


export default App;

