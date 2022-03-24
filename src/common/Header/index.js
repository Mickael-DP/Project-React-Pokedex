import logoSrc from './logo.svg'
import LanguageSelection from "./LanguageSelection";
import {Box, Typography} from "@mui/material";


function Header({lang, setLang}) {
    return (
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Typography component="img" src={logoSrc} alt="logo" height={60}/>
            <LanguageSelection lang={lang} setLang={setLang}/>
        </Box>
    )
}

export default Header
