import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';

function App() {

  const [times, setTimes] = useState([
    {
      nome: 'Programação',
      cor: '#57C278',
    },
    {
      nome: 'Front-End',
      cor: '#82CFFA',
    },
    {
      nome: 'Data Science',
      cor: '#A6D157',
    },
    {
      nome: 'Devops',
      cor: '#E06B69',
    },
    {
      nome: 'UX e Design',
      cor: '#DB6EBF',
    },
    {
      nome: 'Mobile',
      cor: '#FFBA05',
    },
    {
      nome: 'Inovação e Gestão',
      cor: '#FF8A29',
    }
  ])

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaborador = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  const deletarCard = () => {
    console.log('deletando colaborador');
  }

  const mudarCorDoTime = (cor, nome) => {
    setTimes(times.map(time=> {
      if(time.nome === nome) {
        time.cor = cor;
      }
      return time;
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaborador(colaborador)} />
      {/*Para cada time da lista cria um componente com o nome dele*/}
      {times.map(time =>
        <Time 
          key={time.nome} 
          nome={time.nome} 
          cor={time.cor} 
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarCard}
          mudarCor = {mudarCorDoTime}
        />
      )}
      <Rodape />
    </div>

  );
}

export default App;
