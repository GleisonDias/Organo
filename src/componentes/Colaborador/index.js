import { FaWindowClose } from "react-icons/fa";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import './Colaborador.css'

const Colaborador = ({colaborador, corDeFundo, aoDeletar, aoFavoritar}) => {
    function favoritar() {
        aoFavoritar(colaborador.id);
    }

    const prosfavorito = {
        size: 25,
        onClick: favoritar
    }
    return (
        <div className='colaborador' >
            <FaWindowClose 
                className='deletar' 
                onClick={() => aoDeletar(colaborador.id)} 
            />
            <div className='cabecalho' style={{backgroundColor:corDeFundo}}>
                <img src={colaborador.imagem} alt={colaborador.nome} />
            </div>
            <div className='rodape'>
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <div className="favoritar">
                    {colaborador.favorito 
                        ? <MdFavorite {...prosfavorito} color="#ff0000"/> 
                        : <MdFavoriteBorder {...prosfavorito} />
                    }
                </div>
            </div>
        </div>
    )

}

export default Colaborador