import styles from './Button.module.css'
import React from "react";

export default (props) => {
  const {color, action} = props

  return (
    <button 
      className={styles.button}
      onClick={action}
    >
      {props.children}
    </button>
  )
}