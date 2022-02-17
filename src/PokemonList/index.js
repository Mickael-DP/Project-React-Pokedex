import './style.css'
import pokemons from './pokemons.json'

console.log(pokemons)

function PokemonCard({ name, image }) {
  return (
    <div className="card">
      <h1> {name} </h1>
      <img src={image} alt="photo_pokemon" />
    </div>
  )
}

function PokemonList() {
  const poke = pokemons.map((pokemon) => {
    return <PokemonCard name={pokemon.names.fr} image={pokemon.image} />
  })
  return <main>{poke}</main>
}

export default PokemonList
