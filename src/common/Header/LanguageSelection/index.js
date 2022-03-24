import { FormControl, MenuItem, Select, Typography } from '@mui/material'

function LanguageSelection({ lang, setLang }) {
  function onChange(e) {
    setLang(e.target.value)
  }
  return (
    <Typography component="div">
      <FormControl sx={{ bgcolor: 'white' }}>
        <Select value={lang} onChange={onChange}>
          <MenuItem value="fr">Language</MenuItem>
          <MenuItem value="fr">fr</MenuItem>
          <MenuItem value="en">en</MenuItem>
          <MenuItem value="ja">jp</MenuItem>
        </Select>
      </FormControl>
    </Typography>
  )
}

export default LanguageSelection
