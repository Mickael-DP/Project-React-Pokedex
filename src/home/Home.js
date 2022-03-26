import Header from "../common/Header";
import PokemonListPage from '../home/PokemonListPage'
import {Typography} from "@mui/material";
import {useState} from "react";

function Home() {
    const [lang,setLang] = useState('fr');
    const t = lang

  return (
    <Typography component="div" sx={{backgroundColor:"#282c34"}} className="App">
      <Header lang={lang} setLang={setLang} />
      <PokemonListPage t={t}/>
    </Typography>
  )
}

export default Home
