import { FormControl, MenuItem, Select, styled, Typography } from '@mui/material'

const CssFormcontrol = styled(FormControl)({
  '& label.Mui-focused': {
    color: '#ff7f50',
  },
  '& label': {
    color: 'white',
  },

  '& .MuiOutlinedInput-root': {
    color: 'white',

    '& .MuiSelect-select': {
      marginRight: '30px',
    },

    '& svg': {
      color: 'white',
    },

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

function LanguageSelection({ lang, setLang }) {
  function onChange(e) {
    setLang(e.target.value)
  }

  return (
    <Typography component="div">
      <CssFormcontrol>
        <Select value={lang} onChange={onChange} onBlur={onChange}>
          <MenuItem value="fr">Language</MenuItem>
          <MenuItem value="fr">fr</MenuItem>
          <MenuItem value="en">en</MenuItem>
          <MenuItem value="ja">jp</MenuItem>
        </Select>
      </CssFormcontrol>
    </Typography>
  )
}

export default LanguageSelection
