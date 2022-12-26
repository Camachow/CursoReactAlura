import Card from '../Card'
import './Time.css'

const Time = (props) => {
    const css = { backgroundColor: props.corSecundaria}
    return (
        /*Poderia trocar o ? por && e tirar a segunda opção de retorno*/
        props.colaboradores.length > 0 ? <section className='time' style={css}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='cards'>
                {props.colaboradores.map( colaborador => <Card key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem = {colaborador.imagem} cor = {props.corPrimaria}/>)}
            </div>
        </section>
        : ''
    )
}

export default Time