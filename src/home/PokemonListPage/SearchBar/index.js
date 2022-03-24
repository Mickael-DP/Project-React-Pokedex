import { TextField } from '@mui/material'


function SearchBar({ name, onChange }) {
  return <TextField fullWidth
      placeholder="Enter pokemon name"
      value={name}
      onChange={onChange}
      sx={{backgroundColor:'white'}}>

  </TextField>

}

export default SearchBar
