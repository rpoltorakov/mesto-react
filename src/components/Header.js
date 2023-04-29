import logoPath from '../images/logo.svg'

export default function Header(props) {
  return (
    <header className="header">
      <img className="header__logo" src={logoPath} alt="Проект Место"/>
    </header>
  )
}