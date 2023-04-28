import './DropdownItem.css'

const DropdownItem = ({produto}) => {
    return (
        <li className='dropdown__item'>
            <img src={produto.imagem}/>

            <div>
                <p className='item__titulo'>{produto.titulo}</p>
                <p className='item__preco'>{produto.preco}</p>
            </div>
        </li>
    )
}

export default DropdownItem