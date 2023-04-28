import './Dropdown.css'
import IconeDrodown from '../IconeDropdown'
import DropdownItem from '../DropdownItem'

const Dropdown = (props) => {
    return (
        <div className='container-dropdown'>
            <IconeDrodown>{props.icone}</IconeDrodown>

            <div className='dropdown'>
                <h2>{props.children}</h2>
                <hr/>

                {(props.lista.length > 0 && 
                    <ul className='dropdown__lista'>
                        {props.lista.map((produto) => <DropdownItem key={produto.id} produto={produto} />)}
                    </ul>) ||
                    
                    <p>Nenhum item adicionado.</p>
                }
            </div>
        </div>
    )
}

export default Dropdown