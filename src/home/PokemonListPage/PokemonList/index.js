
import pokemons from './pokemons.json'
import PokemonCard from "../PokemonCard";
import {Box} from "@mui/material";


function PokemonList({ namePoke, t }) {
  const filtersPokemon = pokemons.filter((pokemon) => {
    return pokemon.names.fr.toLowerCase().includes(namePoke)
  })
  const poke = filtersPokemon.map((pokemon) => {
    return (
      <PokemonCard
          key ={pokemon.id}
        id={pokemon.id}
        name={pokemon.names}
        image={pokemon.image}
        types={pokemon.types}
        t= {t}
      />
    )
  })
  return <Box sx={{ display:'flex', justifyContent:'space-around', flexWrap:'wrap'}}>{poke}</Box>
}

export default PokemonList
