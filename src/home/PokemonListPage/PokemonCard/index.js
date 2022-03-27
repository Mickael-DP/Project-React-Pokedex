import './style.css'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'

function PokemonCard({ id, name, image, types, t, typeTrad }) {
  id = ('00' + id).slice(-3)

  return (
    <Card sx={{ width: 220, height: 200, my: '10px', mx: '7px', color: 'black', padding: '5px' }}>
      <Typography component="h6" sx={{ textAlign: 'start' }}>
        {' '}
        No.{id}
      </Typography>
      <Typography component="h6" sx={{ textAlign: 'center' }}>
        {' '}
        {name[t]}{' '}
      </Typography>
      <CardMedia sx={{ textAlign: 'center' }}>
        <img src={image} alt="photo_pokemon" />
      </CardMedia>
      <CardContent>
        <Typography component="div" sx={{ display: 'flex', justifyContent: 'center' }}>
          {types.map((type) => {
            return (
              <Box key={type} className={'types-' + type}>
                {' '}
                {typeTrad[type][t]}
              </Box>
            )
          })}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default PokemonCard
