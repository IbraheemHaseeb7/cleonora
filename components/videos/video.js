import { useRef, useState } from "react";
import styles from "./video.module.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

export default function Video({ src }) {
  const [video, setVideo] = useState();
  const [play, setPlay] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const [mute, setMute] = useState(false);
  const vid = useRef();

  function playVideo(e) {
    if (play) {
      vid.current.pause();
      setPlay(!play);
    } else {
      vid.current.play();
      setPlay(!play);
    }
  }

  function mutVideo() {
    if (vid.current.muted) {
      vid.current.muted = false;
    } else {
      vid.current.muted = true;
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
      {/* <button
        type="button"
        className={styles.mute}
        style={{ opacity: opacity }}
        onClick={() => {
          setMute(!mute);
          mutVideo();
        }}
        onMouseEnter={() => {
          setOpacity(0.7);
        }}
        onMouseLeave={() => {
          setOpacity(0);
        }}
      >
        mute
      </button> */}
      <video
        ref={vid}
        onMouseEnter={() => {
          setOpacity(0.7);
        }}
        style={play ? { objectFit: "contain" } : { objectFit: "cover" }}
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
