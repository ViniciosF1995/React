
import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Viagens from './pages/Viagens'
import Portifolio from './pages/Portifolio'

function App() {
  const [pagina, setPagina] = useState(<Home />)


  return (
    <>
     <nav>
      <button onClick={ ( () => setPagina(<Home />))}>Home</button>
      <button onClick={ ( () => setPagina(<Viagens />))}>Viagens</button>
      <button onClick={ ( () => setPagina(<Portifolio />))}>Portifolio</button>
     </nav>
     { pagina }

    </>
  )
}

export default App
