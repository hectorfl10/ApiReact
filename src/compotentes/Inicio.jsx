import React, {useState, useEffect} from 'react';
import {todosPersonajes} from '../funciones/funciones';
import 'bootstrap/dist/css/bootstrap.min.css';

const Inicio = () => {
  const [personajes, setPersonajes] = useState(null);

  useEffect(() => {
    todosPersonajes(setPersonajes);
  }, []);

  return (
    <div className="container">
    <div className="text-center">
      <h1>Personajes Rick y Morty</h1>
    </div>
      <div className="row">
        {personajes != null ? (
          personajes.map(personaje => (
            <div className="col-3 mb-3" key={personaje.id}>
              <div className="card">
                <img
                  className="card-img-top"
                  src={personaje.image}
                  alt={`Imagen de ${personaje.name}`}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{personaje.name}</h5>
                  <a href={`/personaje/${personaje.id}`} className="btn btn-primary">
                    Ver detalles
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">
            <p>No hay personajes</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Inicio;
