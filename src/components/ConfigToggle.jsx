import styles from "./ConfigToggle.module.css"
import React, { useState } from "react";
import { useEffect } from "react";

export default (props) => {
  const { active, action, prop } = props
  const [value, setValue] = useState(active || false);

  function toggleValue() {
    setValue(!value)
    action(prop, !value)
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