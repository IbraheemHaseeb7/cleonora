import { useRef, useState } from "react";
import styles from "./video.module.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

export default function Video({ src }) {
  const [video, setVideo] = useState();
  const [play, setPlay] = useState(false);
  const [opacity, setOpacity] = useState(0);

  function playVideo(e) {
    if (play) {
      e.target.pause();
      setPlay(!play);
    } else {
      e.target.play();
      setPlay(!play);
    }
  }

  return (
    <div className={styles.main_container}>
      <button
        type="button"
        className={styles.play}
        onClick={() => playVideo(video)}
        style={{ opacity: opacity }}
      >
        {!play ? <PlayArrowIcon /> : <PauseIcon />}
      </button>
      <button
        type="button"
        className={styles.mute}
        style={{ opacity: opacity }}
      >
        mute
      </button>
      <video
        onMouseEnter={() => {
          setOpacity(0.7);
        }}
        onMouseLeave={() => {
          setOpacity(0);
        }}
        onClick={(e) => {
          playVideo(e);
          setVideo(e);
        }}
      >
        <source src={src} />
      </video>
    </div>
  );
}
