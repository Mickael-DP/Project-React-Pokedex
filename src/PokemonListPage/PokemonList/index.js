import './style.css'
import pokemons from './pokemons.json'

console.log(pokemons)

function PokemonCard({ id, name, image, types }) {
  id = ('00' + id).slice(-3)
  return (
    <div className="card">
      <p className="num-id"> No.{id}</p>
      <h3 className="pokename"> {name} </h3>
      <img src={image} alt="photo_pokemon" />
      <div className="chip">
        {types.map((type) => {
          return (
            <span key={type} className={'types-' + type}>
              {' '}
              {type}
            </span>
          )
        })}
      </div>
    </div>
  )
}

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
