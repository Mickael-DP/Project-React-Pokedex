
import logoSrc from './logo.svg'
import LanguageSelection from "./LanguageSelection";
import {Box, Typography} from "@mui/material";


function Header() {
  return (
    <Box sx={{display: 'flex', justifyContent:'space-between', alignItems:'center'}}>
      <Typography component="img" src={logoSrc} alt="logo" height={60} />
        <LanguageSelection />
    </Box>
  )
}

export default Header
