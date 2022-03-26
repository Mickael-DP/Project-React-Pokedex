
import React from 'react'
import SearchBar from './SearchBar'
import PokemonList from './PokemonList'
import {Typography} from "@mui/material";

function PokemonListPage({t}) {
    const [value, setValue] = React.useState('')

    function onChange(e) {
        setValue(e.target.value.toLowerCase())
    }
  return (
    <Typography component='div' sx={{mx:'15px', my:'32px'}}>
      <SearchBar name={value} onChange={onChange}  sx={{margin:'2 '}}/>
      <PokemonList namePoke={value} t={t}/>
    </Typography>
  )
}

export default PokemonListPage
