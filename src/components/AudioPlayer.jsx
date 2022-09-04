import { useEffect, useState } from "react";
import { IoMdPlay, IoMdSquare } from "react-icons/io";
import sounds from '../assets/audios/index'
import styles from './AudioPlayer.module.css'

const useAudio = (index, volume) => {
  const [audio, setAudio] = useState(new Audio(sounds[index - 1]));
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    setPlaying(!playing);
    audio.currentTime = 0;
  }

  useEffect(() => {
    setPlaying(false);
    audio.currentTime = 0;
    audio.src = sounds[index - 1];
  }, [index])

  useEffect(() => {
    audio.volume = volume / 100
  }, [volume])

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = ({ index, volume }) => {
  const [playing, toggle] = useAudio(index, volume);

  return (
    <div>
      <button onClick={toggle} disabled={index == 0} className={`${styles.audioBtn}
        ${index === 0 ? styles.disabled : ''}
        ${playing ? styles.playing : ''}
      `}>
        {playing ? <IoMdSquare /> : <IoMdPlay />}
      </button>
    </div>
  );
};

export default Player;