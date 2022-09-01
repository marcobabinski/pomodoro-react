import React from "react";
import { unmountComponentAtNode, findDOMNode } from "react-dom";
import styles from "./AlertPopup.module.css"

export default (props) => {
  const { alert, dismiss } = props

  return (
    <div className={styles.popup}>
      <div className={styles.messageBox}>
        <p>{ alert || 'Alerta!' }</p>
        <button className={styles.confirm} onClick={() => dismiss(false)}>OK</button>
      </div>
    </div>
  )
}