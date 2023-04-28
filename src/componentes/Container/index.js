import Card from '../Card'
import './Container.css'

const Container = () => {
    return (
        <main>
            <div className='container'>
                <h1 className='titulo'>Produtos</h1>

                <ul className='lista-cards'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </ul>
            </div>
        </main>
    )
}

export default Container