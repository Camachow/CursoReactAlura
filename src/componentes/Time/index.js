import Card from '../Card'
import './Time.css'

const Time = (props) => {
    const css = { backgroundColor: props.corSecundaria}
    return (
        <section className='time' style={css}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='cards'>
                {props.colaboradores.map( colaborador => <Card nome={colaborador.nome} cargo={colaborador.cargo} imagem = {colaborador.imagem}/>)}
            </div>
        </section>
    )
}

export default Time