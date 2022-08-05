import styles from './Timer.module.css'

import React, { useEffect } from "react";
import { secondsToTime } from '../utils/utils'
import { useSelector, useDispatch } from 'react-redux';
import { countdown, reset, switchStage, togglePause } from '../features/pomodoro/pomodoroSlice';

export default (props) => {
  const { time, paused, config, stage } = useSelector((state) => state.pomodoro)
  const dispatch = useDispatch()

  useEffect(() => {
    if (time > 0 && !paused) {
      const timeout = setTimeout(() => {
        dispatch(countdown())
      }, 1000)
      return () => clearTimeout(timeout)
    }

    if (time === 0 && config.autoSwitch) {
      const timeout = setTimeout(() => {
        let nextStage = stage === 0 ? 1 : 0
        dispatch(switchStage(nextStage))
        dispatch(reset())
        dispatch(togglePause())
      }, 2000)
    } 
  }, [time, paused])
  
  return (
    <div className={styles.timer}>
      <p>
        { secondsToTime(time).join(':') }
      </p>
    </div>
  )
}