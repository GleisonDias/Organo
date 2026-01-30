import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape'

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome:'Programação', 
      cor:'#57C278'
    },
    {
      id: uuidv4(),
      nome:'Front-End', 
      cor:'#82CFFA'
    },
    {
      id: uuidv4(),
      nome:'Data Science', 
      cor:'#A6D157'
    },
    {
      id: uuidv4(),
      nome:'Devops', 
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      nome:'UX e Design',
      cor: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome:'Mobile', 
      cor: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome:'Inovação e Gestão', 
      cor: '#FF8A29'
    }
  ])

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  }

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function mudarCorDoTime(cor, id) {
    setTimes(times.map(time => {
      if(time.id === id) {
       return {...time, cor:cor};
      }
      return time;
    }));
  }

  function cadastrarTime(novoTime) {
    setTimes([ ...times, { ...novoTime, id:uuidv4() }])
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if (colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador
    }))
  }

//texte 123
  return (
    <div className="App">
      <Banner />
      <Formulario 
      cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)} 
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />
      {times.map(time => 
        <Time 
          aoFavoritar={resolverFavorito}
          mudarCor={mudarCorDoTime}
          key={time.id} 
          id={time.id}
          nome={time.nome} 
          cor={time.cor} 
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
        />
      )}
      <Rodape />
    </div>
  );
}

export default App;
