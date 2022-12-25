import { useState, useEffect } from "react"



export default function Landing(){

const [rawPokeData, setRawPokeData] = useState([]);
const [pokemon, setPokemon] = useState([])


useEffect( ()=> {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    .then(res => res.json())
    .then(data => setRawPokeData(data.results)) 
},[]);


useEffect(()=>{
    if(rawPokeData){
        rawPokeData.map((pokemon)=>{
            fetch(`${pokemon.url}`)
            .then(res => res.json())
            .then(data => console.log(data))
        })
    }
},[rawPokeData])


const showData = rawPokeData.map((pokemon)=>{
 return <p key={pokemon.name}> {pokemon.name}</p>
})

    return(
        <div className="display-container">
            {rawPokeData? showData : null}
        </div>
    )
        
        

}