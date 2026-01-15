import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select 
                onChange={evento => props.aoAlterado(evento.target.value)} 
                required={props.required} 
                value={props.valor}
            >
                <option value=""/> {/*Boa pratica para o estado inicial vazio.*/}
                {props.itens.map(item => <option key={item}>{item}</option>)} {/*item => <option>{item}</option> é o call back*/}
            </select>
        </div>
    )
    
}

export default ListaSuspensa