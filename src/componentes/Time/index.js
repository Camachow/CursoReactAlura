import Card from '../Card'
import './Time.css'
import hexToRgba from 'hex-to-rgba'

const Time = (props) => {
    const css = { backgroundColor: hexToRgba(props.cor, '0.6'),}
    return (
        /*Poderia trocar o ? por && e tirar a segunda opção de retorno*/
        props.colaboradores.length > 0 ? <section className='time' style={css}>
            <input value={props.cor} onChange = {(evento) => props.mudarCor(evento.target.value, props.nome)} type='color' className='inputCor' />
            <h3 style={{borderColor: props.cor}}>{props.nome}</h3>
            <div className='cards'>
                {props.colaboradores.map( colaborador => {
                    return <Card key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem = {colaborador.imagem} cor={props.cor} aoDeletar={props.aoDeletar}/>
                })}
            </div>
        </section>
        : ''
    )
}

export default Time