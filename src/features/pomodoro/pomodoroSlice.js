import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  time: 20,
  paused: true,
  stage: 0,
  config: {
    autoSwitch: true,
    timeParams: [10, 20]
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
      state.time = state.config.timeParams[state.stage];
    } ,
    togglePause: (state) => {
      state.paused = !state.paused;
    },
    switchStage: (state, action) => {
      state.stage = action.payload;
      // state.time = state.config.timeParams[state.stage]
    }
  },
});

export const { countdown, setTime, togglePause, reset, switchStage } = pomodoroSlice.actions;

export default pomodoroSlice.reducer;
