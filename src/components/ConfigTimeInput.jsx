import styles from './ConfigTimeInput.module.css'
import React, { useState } from "react";

import Select from 'react-select'

const options = [
  { value: 's', label: 'secs' },
  { value: 'm', label: 'mins' },
  { value: 'h', label: 'hours' },
]

const max = [356400, 5940, 99]

export default (props) => {
  const [timeType, setTimeType] = useState(1)

  const [time, setTime] = useState(1)
  // const [breakTime, setBreakTime] = useState(1)

  return (
    <div className={styles.timeSection}>
      <p>{ props.label || 'Config' }:</p>
      <input type="number" min={1} max={99} value={time} onChange={(e) => setTime(e.target.value)}/>
      <Select 
        isDisabled={true}
        onChange={(e) => setTimeType(e.value)}
        defaultValue={options[1]}
        options={options}
      />
    </div>
  )
}