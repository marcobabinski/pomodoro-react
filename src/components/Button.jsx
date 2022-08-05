import styles from './Button.module.css'
import React from "react";

export default (props) => {
  const {action} = props
  const color = props.color || 'yellow'

  return (
    <button
      className={`
        ${styles.button}
        ${color === 'yellow' ? styles.yellow : ''}
        ${color === 'blue' ? styles.blue : ''}
        ${color === 'purple' ? styles.purple : ''}
        ${color === 'green' ? styles.green : ''}
      `}
      onClick={action}
    >
      {props.children}
    </button>
  )
}