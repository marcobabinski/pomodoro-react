import styles from './ConfigTimeInput.module.css'
import React, { useState } from "react";

import Select from 'react-select'
import { clamp } from '../utils/utils';

const options = [
  { value: 's', label: 'secs' },
  { value: 'm', label: 'mins' },
  { value: 'h', label: 'hours' },
]

const max = [356400, 5940, 99]

export default (props) => {
  const [timeType, setTimeType] = useState(1)

  const { action, value, prop } = props

  return (
    <div className={styles.timeSection}>
      <p>{ props.label || 'Config' }:</p>
      <input type="number" min={1} max={5940} value={value} 
        onChange={(e) => action(prop, clamp(+e.target.value, 1, 5940))}/>
      <Select 
        isDisabled={true}
        onChange={(e) => setTimeType(e.value)}
        defaultValue={options[1]}
        options={options}
      />
    </div>
  )
}