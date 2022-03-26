import {styled, TextField} from '@mui/material'

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#ff7f50',
  },
  '& label': {
    color: 'white',
  },
  '& .MuiOutlinedInput-root': {
    color:'white',

    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.23)',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#ff7f50',
    },
  },
})

function SearchBar({ name, onChange }) {
  return (
        <CssTextField
            fullWidth
            variant="outlined"
            label="Enter pokemon name"
            value={name}
            onChange={onChange}
        />


  )
}

export default SearchBar
