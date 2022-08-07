import './Config.css'
import React, { useEffect, useState } from "react";
import Select from 'react-select';
import ConfigTitle from '../components/ConfigTitle';
import ConfigTimeInput from '../components/ConfigTimeInput';
import ConfigNotifications from '../components/ConfigNotifications';
import ConfigToggle from '../components/ConfigToggle';
import Button from '../components/Button';

import { Link } from 'react-router-dom';

import { IoIosSave } from 'react-icons/io'

import { useSelector, useDispatch } from 'react-redux';
import { apllyConfig } from '../features/pomodoro/pomodoroSlice';

export default (props) => {
  const [localConfig, setLocalConfig] = useState(useSelector((state) => state.pomodoro.config))
  const dispatch = useDispatch()

  function updateConfig(prop, value) {
    switch(prop) {
      case 'pomodoroTime':
        setLocalConfig({...localConfig, timeParams: [value, localConfig.timeParams[1]]})
        break;
      case 'breakTime':
        setLocalConfig({...localConfig, timeParams: [localConfig.timeParams[0], value]})
        break;
      case 'notificationSound':
        setLocalConfig({...localConfig, notificationSound: value})
        break;
      case 'notificationVolume':
        setLocalConfig({...localConfig, notificationVolume: value})
        break;
      case 'browserNotification':
        setLocalConfig({...localConfig, browserNotification: value})
        break;
      case 'autoSwitch':
        setLocalConfig({...localConfig, autoSwitch: value})
        break;
    }
  }

  useEffect(() => {
    console.log(localConfig)
  }, [localConfig])

  return (
    <div className="configBox">
      <ConfigTitle title="Duration" />
      <div>
        <ConfigTimeInput label="Pomodoro Time" value={localConfig.timeParams[0]}
          action={updateConfig}
          prop={"pomodoroTime"}
        />
        <ConfigTimeInput label="Break Time" value={localConfig.timeParams[1]}
          action={updateConfig}
          prop={"breakTime"}
        />
      </div>
      
      <ConfigTitle title="Notifications" />
      <ConfigNotifications 
        localConfig={localConfig}
        updateConfig={updateConfig}
      />

      <ConfigTitle title="Other" />
      <div className='line'>
        <p>Auto-switch mode:</p>
        <ConfigToggle 
          active={localConfig.autoSwitch}
          action={updateConfig}
          prop={"autoSwitch"}
        />
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '10px'
        }}
      >
        <Link to={'/'}>
          <Button color="purple">Cancel</Button>
        </Link>
        <div
          onClick={() => {
            dispatch(apllyConfig(localConfig))
            alert("Alterações salvas com sucesso!")
          }}
        >
          <Button color="green">
            <IoIosSave/>Save
          </Button>
        </div>
      </div>
    </div>
  )
}