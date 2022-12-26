import { useState, useEffect } from "react"
import RenderNameList from './RenderNameList'


export default function Landing(){

const [rawPokeData, setRawPokeData] = useState([]);
const [pokemon, setPokemon] = useState([])


useEffect( ()=> {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=3')
    .then(res => res.json())
    .then(data => setRawPokeData(data.results)) 
},[]);


useEffect(()=>{
    if(rawPokeData){
        const tempPokemonArray = [];
        rawPokeData.map((pokemon)=>{
            fetch(`${pokemon.url}`)
            .then(res => res.json())
            .then(({id, name, sprites, types}) => tempPokemonArray.push({id, name, sprites, types}))
        })
        
        setPokemon(tempPokemonArray)
        
    }
},[rawPokeData])


const showData = rawPokeData.map((pokemon)=>{
 return <p key={pokemon.name}> {pokemon.name}</p>
})

const showPokemon = pokemon.map((poke)=>{
    return <RenderNameList key={poke.name} poke={poke}/>
})

    return(
        <div className="display-container">
            {/* {rawPokeData? showData : null} */}
            {/* {pokemon && console.log(pokemon)} */}
            {rawPokeData? showPokemon : null}
        </div>
    )
        
        

}