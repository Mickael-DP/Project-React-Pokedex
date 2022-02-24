import './style.css'
import logoSrc from './logo.svg'
import LanguageSelection from "../LanguageSelection";

function Header() {
  return (
    <header className="header">
      <img src={logoSrc} alt="logo" height={60} />
        <LanguageSelection />
    </header>
  )
}

export default Header
