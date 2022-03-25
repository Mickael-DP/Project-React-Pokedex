
import React from 'react'
import SearchBar from './SearchBar'
import PokemonList from './PokemonList'

function PokemonListPage({t}) {
    const [value, setValue] = React.useState('')

    function onChange(e) {
        setValue(e.target.value.toLowerCase())
    }
  return (
    <div>
      <SearchBar name={value} onChange={onChange}  sx={{margin:'2 '}}/>
      <PokemonList namePoke={value} t={t}/>
    </div>
  )
}

export default PokemonListPage
