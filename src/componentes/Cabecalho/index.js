import IconeDrodown from '../IconeDropdown'
import './Cabecalho.css'

const Cabecalho = () => {
    return(
        <header className='cabecalho'>
            <div className='cabecalho__container'>
                <img className='cabecalho__logo' src='img/João.jpg'/>

                <div className='cabecalho__dropdowns'>
                    <IconeDrodown />
                    <IconeDrodown />
                </div>
            </div>
        </header>
    )
}

export default Cabecalho