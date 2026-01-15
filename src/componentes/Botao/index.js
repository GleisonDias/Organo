import './Botao.css'

const Botao = (props) => {
    return (
        <button className='botao'>
            {props.children} {/*Este botao pode receber texto, imagens ou ambos via props.children.*/}
        </button>        
    )
}

export default Botao