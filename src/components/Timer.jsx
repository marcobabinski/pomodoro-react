import styles from './Timer.module.css'
import sounds from '../assets/audios/index'

import React, { useEffect } from "react";
import { secondsToTime } from '../utils/utils'
import { useSelector, useDispatch } from 'react-redux';
import { countdown, reset, switchStage, togglePause } from '../features/pomodoro/pomodoroSlice';

export default (props) => {
  const { time, paused, config, stage } = useSelector((state) => state.pomodoro)
  const dispatch = useDispatch()

  const notificationMessages = ['Now take a rest =￣ω￣=', 'Back to work!! ( •̀ ω •́ )✧']
  const audio = new Audio(sounds[config.notificationSound - 1]);
  audio.volume = config.notificationVolume / 100;

  useEffect(() => {
    if (time > 0 && !paused) {
      const timeout = setTimeout(() => {
        dispatch(countdown())
      }, 1000)
      return () => clearTimeout(timeout)
    }

    if (time === 0) {
      // Notificação do Browser
      if (config.browserNotification) {
        const notification = new Notification('Time is over!', { body: notificationMessages[stage] })
      }

      audio.play()

      const timeout = setTimeout(() => {
        let nextStage = stage === 0 ? 1 : 0
        dispatch(switchStage(nextStage))
        dispatch(reset())
        if (config.autoSwitch) dispatch(togglePause())
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