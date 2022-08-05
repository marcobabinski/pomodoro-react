import styles from './ProgressCircle.module.css'
import React, { useRef, useState } from "react";
import Timer from './Timer';
import { clamp } from '../utils/utils';

import { useSelector } from 'react-redux';

export default (props) => {
  const {size, stroke} = props
  const radius = size/2 - stroke * 2
  const circumference = radius * 2 * Math.PI

  const { time, config, stage } = useSelector((state) => state.pomodoro)

  const percent = clamp((config.timeParams[stage] - time) / config.timeParams[stage], 0, 1)
  
  return (
    <div className={styles.progressCircle}>
      <svg
        height={size}
        width={size}
      >
        <circle
          style={{
            stroke: 'var(--bg-dark)'
          }}
          strokeWidth={stroke}
          fill="transparent"
          r={radius}
          cx={size/2}
          cy={size/2}

          className={styles.circle}
        />
        <circle
          style={{
            stroke: `${stage == 0 ? 'var(--action-main)' : 'var(--info-main)'}`,

            strokeDasharray: `${circumference}`,
            strokeDashoffset: `${circumference - percent * circumference}`
          }}
          strokeWidth={stroke}
          fill="transparent"
          r={radius}
          cx={size/2}
          cy={size/2}

          className={styles.circle}
        />
      </svg>
      <Timer />
    </div>
  )
}