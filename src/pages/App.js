import React, { useEffect } from 'react';
import './App.css';

import ProgressCircle from '../components/ProgressCircle';
import Buttons from '../components/Buttons';
import Quote from '../components/Quote';

import { useDispatch, useSelector } from 'react-redux';
import { reset, switchStage, togglePause, apllyConfig } from '../features/pomodoro/pomodoroSlice';
import ConfigButton from '../components/ConfigButton';

import { SiReact } from 'react-icons/si'
import { AiOutlineClockCircle } from 'react-icons/ai'

function App() {
  const dispatch = useDispatch();
  const { config } = useSelector((state) => state.pomodoro)

  console.log('render')

  // Definições iniciais
  useEffect(() => {
    // Iniciar no Modo Pomodoro
    dispatch(switchStage(0));

    // Iniciar zerado e pausado
    dispatch(reset());

    // Configurações e localstorage
    let localConfig = JSON.parse(localStorage.getItem("localConfig"));

    if (!!localConfig) dispatch(apllyConfig(localConfig))

    // Criar configuração inicial padrão se essa não existir
    if (!localConfig) {
      localConfig = config;
      localStorage.setItem("localConfig", JSON.stringify(localConfig));
    }
  }, [])

  return (
    <div className="App">
      <h1
        style={{
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px'
        }}
      >
        <AiOutlineClockCircle />
        Pomodoro React
        <SiReact />
      </h1>
      <ConfigButton />
      <Quote />
      <ProgressCircle size="360" stroke="12"/>
      <Buttons />
    </div>
  );
}

export default App;