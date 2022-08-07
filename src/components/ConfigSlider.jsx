import styles from './ConfigSlider.module.css'
import React, { useState } from "react";

export default (props) => {
  const { value, action, prop } = props

  return (
    <div className={styles.slider}>
      <input type="range" 
        min={0} max={100} 
        value={value} onChange={(e) => action(prop, e.target.value)}
        style={{ 
          backgroundSize: `${value}% 100%`
        }}
      />
      <p>{value}%</p>
    </div>
  )
}