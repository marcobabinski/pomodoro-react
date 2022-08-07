import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  time: 20,
  paused: true,
  stage: 0,
  config: {
    timeParams: [10, 20],
    notificationSound: 1,
    notificationVolume: 50,
    browserNotification: false,
    autoSwitch: true,
  }
};

export const pomodoroSlice = createSlice({
  name: 'pomodoro',
  initialState,
  reducers: {
    countdown: (state) => {
      state.time -= 1;
    },
    setTime: (state, action) => {
      state.time = action.payload;
    },
    reset: (state) => {
      state.paused = true;
      state.time = state.config.timeParams[state.stage] * 60;
    } ,
    togglePause: (state) => {
      state.paused = !state.paused;
    },
    switchStage: (state, action) => {
      state.stage = action.payload;
      // state.time = state.config.timeParams[state.stage]
    },
    apllyConfig: (state, action) => {
      state.config = action.payload
    }
  },
});

export const { countdown, setTime, togglePause, reset, switchStage,
  apllyConfig,
} = pomodoroSlice.actions;

export default pomodoroSlice.reducer;
