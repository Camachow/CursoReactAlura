import Card from '../Card'
import './Time.css'
import hexToRgba from 'hex-to-rgba'

const Time = ({time, colaboradores, aoDeletar, mudarCor}) => {
    const css = { backgroundColor: hexToRgba(time.cor, '0.6'),}
    return (
        /*Poderia trocar o ? por && e tirar a segunda opção de retorno*/
        colaboradores.length > 0 ? <section className='time' style={css}>
            <input value={time.cor} onChange = {(evento) => mudarCor(evento.target.value, time.id)} type='color' className='inputCor' />
            <h3 style={{borderColor: time.cor}}>{time.nome}</h3>
            <div className='cards'>
                {colaboradores.map( colaborador => {
                    return <Card key={colaborador.id} id={colaborador.id} nome={colaborador.nome} cargo={colaborador.cargo} imagem = {colaborador.imagem} cor={time.cor} aoDeletar={aoDeletar}/>
                })}
            </div>
        </section>
        : ''
    )
}

export default Time