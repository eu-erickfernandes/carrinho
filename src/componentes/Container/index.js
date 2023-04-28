import Card from '../Card'
import './Container.css'

const Container = (props) => {
    return (
        <main>
            <div className='container'>
                <h2 className='titulo'>Produtos</h2>

                <ul className='lista-cards'>
                    {props.listaProdutos.map((produto) => 
                        <Card
                            key={produto.titulo} 
                            produto={produto}
                            cardFavoritar={props.containerFavoritar}
                            cardCarrinho={props.containerCarrinho} 
                        />)
                    }
                </ul>
            </div>
        </main>
    )
}

export default Container