import './style.css'
import React from 'react'
import SearchBar from './SearchBar'
import PokemonList from './PokemonList'

function PokemonListPage() {
    const [value, setValue] = React.useState('')

    function onChange(e) {
        setValue(e.target.value.toLowerCase())
    }
  return (
    <div>
      <SearchBar name={value} onChange={onChange}></SearchBar>
      <PokemonList namePoke={value}></PokemonList>
    </div>
  )
}

export default PokemonListPage
