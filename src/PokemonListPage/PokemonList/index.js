
import pokemons from './pokemons.json'
import PokemonCard from "../PokemonCard";
import {Box} from "@mui/material";


function PokemonList({ namePoke }) {
  const filtersPokemon = pokemons.filter((pokemon) => {
    return pokemon.names.fr.toLowerCase().includes(namePoke)
  })
  const poke = filtersPokemon.map((pokemon) => {
    return (
      <PokemonCard
        id={pokemon.id}
        name={pokemon.names.fr}
        image={pokemon.image}
        types={pokemon.types}
      />
    )
  })
  return <Box sx={{ display:'flex', justifyContent:'space-around', flexWrap:'wrap'}}>{poke}</Box>
}

export default PokemonList
