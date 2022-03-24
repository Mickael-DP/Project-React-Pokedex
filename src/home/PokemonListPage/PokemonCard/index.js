import './style.css'
import {Box, Card, CardContent, CardMedia, Typography} from "@mui/material";


function PokemonCard({ id, name, image, types,t }) {
    id = ('00' + id).slice(-3)
    console.log(t)
    return (
        <Card sx={{ width: 200, height:'auto',  margin:1, color:'black', padding:1}}>
           <Typography component="h6" sx={{textAlign:'start'}}> No.{id}</Typography>
            <Typography component="h6" sx={{textAlign:'center'}} > {name[t]} </Typography>
            <CardMedia sx={{textAlign:'center'}}>
                <img src={image} alt="photo_pokemon" />
            </CardMedia>
            <CardContent>
                <Typography component="div" sx={{display:'flex', justifyContent:'center'}}>
                    {types.map((type) => {
                        return (
                            <Box key={type} className={'types-' + type}>
              {' '}
                                {type}
            </Box>
                        )
                    })}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default PokemonCard