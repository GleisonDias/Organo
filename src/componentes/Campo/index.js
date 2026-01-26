import './Campo.css'

const Campo = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    const tipo = props.type || 'text'

    return (
        <div className={`campo campo-${tipo}`}>
            <label>
                {props.label}
            </label>
            <input 
                type={tipo} 
                value={props.valor} 
                onChange={aoDigitado} 
                required={props.obrigatorio} 
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default Campo

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