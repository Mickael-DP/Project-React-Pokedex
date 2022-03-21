import './style.css'
import pokemons from './pokemons.json'
import PokemonCard from "../PokemonCard";


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
  return <div className="tab-poke">{poke}</div>
}

export default PokemonList
