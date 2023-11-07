import React from 'react';
import '../estilos/peliculas.css';
import PELICULAS from "../componentes/MOVIES_DATA.json"


function Peliculas() {
  const elementos = PELICULAS.map((pelicula, index) => {
    return (
      <div key={index} className="contenedor-pelicula">
        <img className ="imagen-pelicula" src={pelicula.poster} alt={pelicula.title} />
        <div className='contenedor-texto-pelicula'>
        <h2 className='contenedor-titulo'>Título: {pelicula.title}</h2>
        <p>Fecha de Estreno: {pelicula.releaseDate}</p>
        <p>Géneros: {pelicula.genres.join(", ")}</p>
        <p>Director: {pelicula.director}</p>
        <p>Actores Principales: {pelicula.mainActors.join(", ")}</p>
        <p>Argumento: {pelicula.plot}</p>
        <p>Metascore: {pelicula.metascore}</p>
        <p>Clasificación: {pelicula.rating}</p>
        </div>
      </div>
    )
  });

  return (
    <div>
      {elementos}
    </div>
  )
}

export default Peliculas;
