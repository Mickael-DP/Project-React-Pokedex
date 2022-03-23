import { FormControl, MenuItem, Select, Typography } from '@mui/material'

function LanguageSelection() {
  return (
    <Typography component="div" >
      <FormControl sx={{bgcolor: 'white'}}>
        <Select>
          <MenuItem value="fr">fr </MenuItem>
          <MenuItem value="en">en</MenuItem>
        </Select>
      </FormControl>
    </Typography>
  )
}

export default LanguageSelection
