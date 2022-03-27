import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './home/Home'
import Details from './details'
import typesTrad from './home/PokemonListPage/PokemonList/types.json'
import pokemons from './home/PokemonListPage/PokemonList/pokemons.json'

function App() {
  const [lang, setLang] = React.useState('fr')

  const t = lang

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home data={pokemons} dataType={typesTrad} lang={lang} setLang={setLang} t={t} />
            }
          >
            <Route
              path="/details/:id"
              element={<Details pokemons={pokemons} t={t} typesTrad={typesTrad} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
