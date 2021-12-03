//para el manejo de las imágenes
import React from 'react';
//puedes pasar props a un componente funcional
const Imagen = (props)=>{
    const {largeImageURL, likes, previewURL, tags, views, user} = props.imagen;

    return(
        //todo pasa por props
        <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img
                    src={previewURL}
                    alt={tags}                    
                    className="card-img-top" />
                <div className="card-body">
                    <p className="cards-text">{likes} : Me gusta</p>
                    <p className="cards-text">{views} : Vistas</p>
                    <p className="cards-text">{user}  : Uso</p>

                    <a href={largeImageURL} target="blank" className="btn btn-primary btn btn-block">Ver imagen</a>
                </div>

            </div>

        </div>
    )

    
}

export default Imagen;



