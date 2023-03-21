import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {unicopersonaje} from '../funciones/funciones'

import 'bootstrap/dist/css/bootstrap.min.css';

const Personaje = () => {
  const [personaje, setPersonaje] = useState(null)

  const params= useParams()
  useEffect(()=>{
    unicopersonaje(params.id, setPersonaje)
  },[])
  
  return (
    <>
      {personaje != null ? (
        <div className="container">
          <h2 className="my-4 text-center text-danger">Personaje con el id {params.id}</h2> 
          <div className="d-flex justify-content-center">
            <img src={personaje.image} alt="" className="img-fluid" />
          </div>
          <p className="my-4 text-center ">Con el nombre: {personaje.name}</p>
        </div>
      ) : (
        <div className="text-center">
          <p>No hay personaje</p>
        </div>
      )}
    </>
  )
}

export default Personaje
