import styles from './Buttons.module.css'
import React from "react";
import Button from "./Button";

import { IoMdPause, IoMdPlay, IoMdRefresh } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux';
import { reset, togglePause } from '../features/pomodoro/pomodoroSlice';

export default (props) => {
  const paused = useSelector((state) => state.pomodoro.paused)
  const dispatch = useDispatch();

  return (
    <div className={styles.buttons}>
      <Button 
        action={() => dispatch(togglePause())}
        color={ paused ? 'green' : 'purple' }
      >
        { paused ? <><IoMdPlay/> Start</> : <><IoMdPause/> Pause</> }
      </Button>
      <Button action={() => dispatch(reset())} color="blue"><IoMdRefresh/> Reset</Button>
    </div>
  )
}