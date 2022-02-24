import './style.css'
import pokemons from './pokemons.json'

console.log(pokemons)

function PokemonCard({ id, name, image, types }) {
    id = ("00" + id).slice (-3)
  return (
    <div className="card">
      <p> No.{id}</p>
      <h1> {name} </h1>
      <img src={image} alt="photo_pokemon" />
      <span> {types}</span>
    </div>
  )
}

function PokemonList() {
  const poke = pokemons.map((pokemon) => {
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
