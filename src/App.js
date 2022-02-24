import './App.css'
import Header from './Header'
import PokemonList from './PokemonListPage/PokemonList'
import SearchBar from './PokemonListPage/SearchBar'
import PokemonListPage from './PokemonListPage'

function App() {
  return (
    <div className="App">
      <Header />
      <PokemonListPage />
    </div>
  )
}

export default App
