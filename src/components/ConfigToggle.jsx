import styles from "./ConfigToggle.module.css"
import React, { useState } from "react";

export default (props) => {
  const [value, setValue] = useState(props.active || false);

  function toggleValue() {
    setValue(!value)
  }

  return (
    <div className={`${styles.toggle} ${value ? styles.active : ''}`} 
      onClick={() => toggleValue()}
    >
      <div className={styles.bar}></div>
      <div className={styles.sphere}></div>
    </div>
  )
}