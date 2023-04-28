import Botao from '../Botao'
import './Card.css'

const Card = () => {
    return (
        <div className='card'>
            <img className='card__imagem' src='img/clio.jpg'/>

            <div className='card__conteudo'>
                <h2 className='card__titulo'>Título do card</h2>

                <p className='card__preco'>R$ 60,00</p>

                <p className='card__entrega'>Entrega grátis</p>
            </div>

            <Botao></Botao>
        </div>
    )
}

export default Card