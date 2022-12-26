import './Card.css'

const Card = ({nome, imagem, cargo, cor}) => {
    return(
        <div className='card'>
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