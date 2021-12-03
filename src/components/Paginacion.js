import React from 'react';
//no tiene ciclo de vida
//no contiene state

const Paginacion = props => {
    return (
        //             padding
        // se hacen pruebas en console anter/sigui...
        <div className="py-3">
            
            <button  id="hello" onClick={props.paginaAnterior} type="button "  className="btn btn-info mr-1">Anterior &larr;</button>{' '}
            <button  id="hello1" onClick={props.paginaSiguiente} type="button " className="btn btn-info ">Siguiente &rarr;</button>{' '}
        </div>
    )
}
export default Paginacion;