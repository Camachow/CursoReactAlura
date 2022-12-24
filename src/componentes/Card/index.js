import './Card.css'

const Card = () => {
    return(
        <div className='card'>
            <div className='cabecalho'>
                <img src='https://github.com/Camachow.png' alt='Minha foto'/>
            </div>
            <div className='rodape'>
                <h4>Rafael Camacho</h4>
                <h5>Desenvolvedor web</h5>
            </div>
        </div>
    )
}

export default Card