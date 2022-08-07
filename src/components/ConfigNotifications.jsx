import React from "react";

import Select from 'react-select'
import ConfigSlider from "./ConfigSlider";
import ConfigToggle from "./ConfigToggle";

const audios = [
  { value: 0, label: 'None' },
  { value: 1, label: 'One Plus' },
  { value: 2, label: 'HTC Reactive' },
  { value: 3, label: 'Crosswalk' },
  { value: 4, label: 'Alarm' },
  { value: 5, label: 'Bell' },
]

export default (props) => {
  const { localConfig, updateConfig } = props
  
  return (
    <div>
      <div className="line-max">
        <p>Notification Sound:</p>
        <div style={{ color: 'black' }}>
          <Select 
            defaultValue={audios[localConfig.notificationSound]}
            options={audios}
            onChange={(e) => updateConfig("notificationSound", e.value)}
          />
        </div>
      </div>
      <div className="line mg">
        <p>Notification Volume:</p>
        <ConfigSlider 
          value={localConfig.notificationVolume}
          action={updateConfig}
          prop={"notificationVolume"}
        />
      </div>
      <div className="line">
        <p>Browser Notification:</p>
        <ConfigToggle 
          active={localConfig.browserNotifications}
          action={updateConfig}
          prop={"browserNotification"}
        />
      </div>
    </div>
  )
}