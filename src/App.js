import './App.css'
import Header from './Header'
import PokemonListPage from './PokemonListPage'
import {Typography} from "@mui/material";

function App() {
  return (
    <Typography component="div" sx={{backgroundColor:"black"}}className="App">
      <Header />
      <PokemonListPage />
    </Typography>
  )
}

export default App
