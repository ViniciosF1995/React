import './Header.css'
import { DogFace } from './icons/DogFace'

function Header() {
  const iconBig = {

    width: '148px',
    height: '148px'

  };
  return (

    
    <div className="header-container">
      <h1>Pagina Bonita</h1>

    <DogFace style={iconBig} />

    </div>

  )
}

export default Header
