import React, { useEffect } from 'react';
import './App.css';

import ProgressCircle from './components/ProgressCircle';
import Buttons from './components/Buttons';
import Quote from './components/Quote';

import { useDispatch, useSelector } from 'react-redux';
import { reset, switchStage, togglePause } from './features/pomodoro/pomodoroSlice';
import ConfigButton from './components/ConfigButton';

import { SiReact } from 'react-icons/si'
import { AiOutlineClockCircle } from 'react-icons/ai'

function App() {
  const dispatch = useDispatch();
  const { paused } = useSelector((state) => state.pomodoro)

  console.log('render')

  // Definições iniciais
  useEffect(() => {
    // Iniciar no Modo Pomodoro
    dispatch(switchStage(0));

    // Iniciar zerado e pausado
    dispatch(reset());
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
      <p>Pomodoro: { useSelector((state) => state.pomodoro.config.timeParams[0]) }s</p>
      <p>Break: { useSelector((state) => state.pomodoro.config.timeParams[1]) }s</p>
      <p>Break: { useSelector((state) => state.pomodoro.paused ? 't' : 'f') }</p>
      <p>Stage: { useSelector((state) => state.pomodoro.stage) }</p>
    </div>
  );
}

export default App;