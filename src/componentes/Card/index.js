import './Card.css'
import {AiFillCloseCircle} from 'react-icons/ai'

const Card = ({id, nome, imagem, cargo, cor, aoDeletar}) => {
    return(
        <div className='card'>
            <AiFillCloseCircle 
                size={25} 
                className='deletar' 
                onClick={() => aoDeletar(id)}
            />
            <div className='cabecalho' style={{backgroundColor: cor}}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Card