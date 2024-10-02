import React, { useState } from 'react';
import './index.css';

// Componente Header
const Header = () => (
  <header >

  </header>
);

// Função principal que contém a lógica do App
function App() {
  const [filaNormal, setFilaNormal] = useState([]);
  const [filaPreferencial, setFilaPreferencial] = useState([]);
  const [senhaAtual, setSenhaAtual] = useState(null);
  const [numeroSenha, setNumeroSenha] = useState(1);

  // Função para gerar senhas
  const gerarSenha = (tipo) => {
    const novaSenha = { tipo, numero: numeroSenha };
    setNumeroSenha(prev => prev + 1);

    if (tipo === 'Preferencial') {
      setFilaPreferencial(prev => [...prev, novaSenha]);
    } else {
      setFilaNormal(prev => [...prev, novaSenha]);
    }
  };

  // Função para chamar a próxima senha
  const chamarSenha = () => {
    if (filaPreferencial.length > 0) {
      setSenhaAtual(filaPreferencial[0]);
      setFilaPreferencial(filaPreferencial.slice(1));
    } else if (filaNormal.length > 0) {
      setSenhaAtual(filaNormal[0]);
      setFilaNormal(filaNormal.slice(1));
    } else {
      alert('Não há senhas na fila!'); // Alerta para fila vazia
      setSenhaAtual(null); // Reseta a senha atual
    }
  };

  return (
    <div className="conteudo-container">
      <Header />

      <div className='conteudo-footer'>
        <div className='conteudo-footer-imagem'>
          <p className="p3">Concorra a camisas exclusivas!</p>
          <p className="p3">Clique na imagem</p>
          <img className="img-seta" src="./public/images/seta.png" alt="Seta" />
        </div>

        <div className='conteudo-footer-button'>
          <img
            onClick={() => alert("Concorrendo!!!")}
            className="img-camisas"
            src="./public/images/farmarcia-camisas.png"
            alt="Camisas"
          />
        </div>

        <div className='botao'>
          {/* Botões para gerar senhas */}
          <button className='botaoSenha' onClick={() => gerarSenha('Normal')}>Gerar Senha Normal</button>
          <button className='botaoSenha' onClick={() => gerarSenha('Preferencial')}>Gerar Senha Preferencial</button>

          {/* Botão para chamar a próxima senha */}
          <button className='botaoSenha' onClick={chamarSenha}>Chamar Próxima Senha</button>

          <div className='telaSenha'>
            {/* Display da senha atual */}
            <h2>Senha Atual: {senhaAtual ? `Tipo: ${senhaAtual.tipo}, Número: ${senhaAtual.numero}` : 'Nenhuma senha chamada'}</h2>

            {/* Mostrar se a fila está vazia ou ativa */}
            <h3>{filaPreferencial.length === 0 && filaNormal.length === 0 ? 'Fila vazia' : 'Fila ativa'}</h3>

            {/* Listar as senhas nas filas */}

            <h3>Fila Preferencial:</h3>
            {filaPreferencial.length > 0 ? (
              <ul>
                {filaPreferencial.map((senha, index) => (
                  <li key={index}>{`Tipo: ${senha.tipo}, Número: ${senha.numero}`}</li>
                ))}
              </ul>
            ) : (
              <p>Nenhuma senha na fila preferencial.</p>
            )}

            <h3>Fila Normal:</h3>
            {filaNormal.length > 0 ? (
              <ul>
                {filaNormal.map((senha, index) => (
                  <li key={index}>{`Tipo: ${senha.tipo}, Número: ${senha.numero}`}</li>
                ))}
              </ul>
            ) : (
              <p>Nenhuma senha na fila normal.</p>
            )}
          </div>
        </div>
      </div>
    </div>


  );
}

export default App;


