import React , {useEffect, useState}from 'react'
import { useParams } from 'react-router-dom'
import {unicopersonaje} from '../funciones/funciones'
const Personaje = () => {
  const [personaje, setPersonaje] = useState(null)

  const params= useParams()
  useEffect(()=>{
    unicopersonaje(params.id, setPersonaje)
  },[])
  return (
    <>
 {personaje != null ?(
  <div>
      <h2>personaje con el id {params.id}</h2> 
      <p>con el nombre:{personaje.name}</p>
      <img src={personaje.image}a lt=''/>
  </div>
 ):('no hay personaje')}
    </>

  )
}

export default Personaje
