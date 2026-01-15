import './CampoTexto.css'

const CampoTexto = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto

/*
import './CampoTexto.css'

const CampoTexto = (props) => {
    
    const placeholderModificado = `${props.placeholder}...` // Concatena o texto da prop com reticências (...)

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input placeholder={placeholderModificado}/>
        </div>
    )
}

export default CampoTexto
*/