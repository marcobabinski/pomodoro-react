import './Config.css'
import React from "react";
import Select from 'react-select';
import ConfigTitle from '../components/ConfigTitle';
import ConfigTimeInput from '../components/ConfigTimeInput';
import ConfigNotifications from '../components/ConfigNotifications';
import ConfigToggle from '../components/ConfigToggle';
import Button from '../components/Button';

import { IoIosSave } from 'react-icons/io'

export default (props) => {
  return (
    <div className="configBox">
      <ConfigTitle title="Duration" />
      <div>
        <ConfigTimeInput label="Pomodoro Time"/>
        <ConfigTimeInput label="Break Time"/>
      </div>
      
      <ConfigTitle title="Notifications" />
      <ConfigNotifications />

      <ConfigTitle title="Other" />
      <div className='line'>
        <p>Auto-switch mode:</p>
        <ConfigToggle />
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '10px'
        }}
      >
        <Button color="purple">Cancel</Button>
        <Button color="green"><IoIosSave /> Save</Button>
      </div>
    </div>
  )
}