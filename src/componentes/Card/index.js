import { useState } from 'react'
import Botao from '../Botao'
import './Card.css'

const Card = ({produto, cardFavoritar, cardCarrinho}) => {
    const iconeFavorito = produto.favorito ? 'favorite' : 'favorite_border'
    const iconeCarrinho = produto.carrinho ? 'remove_shopping_cart' : 'shopping_cart'
    
    const acaoFavoritar = () => {
        cardFavoritar(produto.id)
    }

    const acaoCarrinho = () => {
        cardCarrinho(produto.id)
    }

    return (
        <div className='card'>
            <img className='card__imagem' src={produto.imagem}/>

            <div className='card__conteudo'>
                <h3 className='card__titulo'>{produto.titulo}</h3>

                <p className='card__preco'>{produto.preco}</p>

                <p className='card__entrega'>Entrega grátis</p>
            </div>

            <div className='card__botoes'>
                <Botao acao={acaoFavoritar}>{iconeFavorito}</Botao>
                <Botao acao={acaoCarrinho}>{iconeCarrinho}</Botao>
            </div>
        </div>
    )
}

export default Card