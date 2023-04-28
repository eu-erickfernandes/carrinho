import './Botao.css'

const Botao = (props) => {
    return (
        <button className='botao' onClick={props.acao}>{props.children}</button>
    )
}

export default Botao