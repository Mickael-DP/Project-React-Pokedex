import pokemons from './pokemons.json'
import typesTrad from './types.json'
import PokemonCard from '../PokemonCard'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'

function PokemonList({ namePoke, t }) {
  const filtersPokemon = pokemons.filter((pokemon) => {
    return pokemon.names.fr.toLowerCase().includes(namePoke)
  })
  const poke = filtersPokemon.map((pokemon) => {
    return (
      <Link
        to={`/details/${pokemon.id}`}
        key={pokemon.id}
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <PokemonCard
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.names}
          image={pokemon.image}
          types={pokemon.types}
          t={t}
          typeTrad={typesTrad}
        />
      </Link>
    )
  })
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>{poke}</Box>
  )
}

export default PokemonList
