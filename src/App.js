import { useState } from 'react';
import Cabecalho from './componentes/Cabecalho';
import Container from './componentes/Container';
import listaProdutos from './produtos'

function App() {
  const [produtos, setProdutos] = useState(listaProdutos)

  const manipulaFavorito = (id) => {
    setProdutos(prevProdutos => {
      return prevProdutos.map((produto) => produto.id === id ? {...produto, favorito: !produto.favorito} : produto )
    })
  }

  const manipulaCarrinho = (id) => {
    setProdutos(prevProdutos => {
      return prevProdutos.map((produto) => produto.id === id ? {...produto, carrinho: !produto.carrinho} : produto )
    })
  }

  return (
    <div className="App">
      <Cabecalho listaProdutos={produtos} />
      <Container listaProdutos={produtos} containerFavoritar={manipulaFavorito} containerCarrinho={manipulaCarrinho}/>
    </div>
  );
}

export default App;
