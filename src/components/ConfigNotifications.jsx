import React, { useState } from "react";
import { useEffect } from "react";
import { IoMdPlay, IoMdSquare } from "react-icons/io";

import Select from 'react-select'
import AudioPlayer from "./AudioPlayer";
import AlertPopup from "./AlertPopup";
import Button from "./Button";
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
  const [alert, setAlert] = useState(false)

  useEffect(() => {
    if (localConfig.browserNotification === true) {
      if (Notification.permission !== "granted") setAlert(true)
      Notification.requestPermission()
      .then(() => {
        if (Notification.permission !== "granted") localConfig.browserNotification = false;
        else setAlert(false);
      })
    }
  }, [localConfig.browserNotification])
  
  return (
    <div>
      { (alert)
      ? <AlertPopup alert="Please allow the browser notifications above!" dismiss={setAlert}/>
      : '' }

      <div className="line-max">
        <p>Notification Sound:</p>
        <div style={{ color: 'black' }}>
          <Select 
            defaultValue={audios[localConfig.notificationSound]}
            options={audios}
            onChange={(e) => updateConfig("notificationSound", e.value)}
          />
        </div>
        <AudioPlayer index={localConfig.notificationSound} volume={localConfig.notificationVolume}></AudioPlayer>
        
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
          active={localConfig.browserNotification}
          action={updateConfig}
          prop={"browserNotification"}
        />
      </div>
    </div>
  )
}