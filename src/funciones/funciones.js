import axios from "axios";

const todosPersonajes = async (state)=>{
const peticion = await axios.get('https://rickandmortyapi.com/api/character')
state(peticion.data.results)

}
const unicopersonaje= async(id, state)=>{
    const peticion = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    state(peticion.data)
}   
export{
    todosPersonajes,
    unicopersonaje
}


