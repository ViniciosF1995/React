import './Header.css'


function Header() {
  
  return (
    <div className="header-container">
        <img className="header-logo" src="./public/images/farmarcia-logo.png" alt="" />
        <a className="header-a" href="">Home</a>
        <a className="header-a" href="">Compras</a>
        <a className="header-a" href="">Sobre</a>
        <a className="header-a" href="">Cadastrar / Login</a>
    </div>

  )
}

export default Header
