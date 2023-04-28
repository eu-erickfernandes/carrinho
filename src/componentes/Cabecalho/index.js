import Dropdown from '../Dropdown'
import IconeDrodown from '../IconeDropdown'
import './Cabecalho.css'

const Cabecalho = (props) => {
    const listaFavoritos = props.listaProdutos.filter((produto) => produto.favorito)
    const listaCarrinho = props.listaProdutos.filter((produto) => produto.carrinho)

    return(
        <header className='cabecalho'>
            <div className='cabecalho__container'>
                <h1 className='cabecalho__titulo'>Madereira do Zé</h1>

                <div className='cabecalho__dropdowns'>
                    <Dropdown lista={listaFavoritos} icone='favorite_border'>Favoritos</Dropdown>
                    <Dropdown lista={listaCarrinho} icone='shopping_cart'>Carrinho</Dropdown>
                    <img className='cabecalho__foto' src='img/João.jpg'/>
                </div>
            </div>
        </header>
    )
}

export default Cabecalho