
import './App.css'
import Conteudo from './components/Conteudo'
import Header from './components/Header'

function App() {
 
  console.log("Meu nome é jones")

  return (
    <div className='app-container'>
     <Header/>
     <Conteudo/>
     <Conteudo/>
     <Conteudo/>
    </div>
  )
}

export default App
