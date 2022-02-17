import './style.css'
import logoSrc from './logo.svg'

function Header() {
  return (
    <header>
      <img src={logoSrc} alt="logo" height={60} />
    </header>
  )
}

export default Header
