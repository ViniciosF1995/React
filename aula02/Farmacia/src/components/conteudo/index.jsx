import './index.css'
function Conteudo() {
  function cliquei(){
    alert("Concorrendo!!!")
  }
  return (
    <div className="conteudo-container">


    
      
 

    <div className='conteudo-footer'>

      <div className='conteudo-footer-imagem'>
      <p className="p3">Concorra a camisas exclusivas!</p>
      <p className="p3">Clique na imagem</p>
      <img className="img-seta" src="./public/images/seta.png" alt="" />
      

      </div>


      <div className='conteudo-footer-button'>

      <img onClick={cliquei} className="img-camisas" src="./public/images/farmarcia-camisas.png" alt="" />

      </div>

     
    
    
    </div>

    </div>
  )
}

export default Conteudo
