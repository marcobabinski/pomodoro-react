import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"
import { useCallback } from "react";

import { useSelector } from "react-redux";

import pomodoroConfig from "../assets/particles/particlesjs-config-pomodoro.json"
import breakConfig from "../assets/particles/particlesjs-config-break.json"

const App = () => {
  const { paused, stage, time } = useSelector((state) => state.pomodoro)

  const particlesInit = useCallback(async (engine) => {
      console.log(engine);
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
      await console.log(container);
  }, []);

  return (
        <div style={{
            transition: 'opacity 2s',
            opacity: (paused || time < 3) ? '0' : '.3',
            zIndex: '-1'
        }}>
            { stage
            
            ? 
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={breakConfig}
            />

            :
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={pomodoroConfig}
            />

            }
        </div>
  );
};

export default App