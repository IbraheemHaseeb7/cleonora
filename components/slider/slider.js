import styles from "./slider.module.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useRef } from "react";
import { useState } from "react";

const images = [
  {
    src: "1.jpg",
    alt: "image_1",
  },
  {
    src: "2.jpg",
    alt: "image_2",
  },
  {
    src: "3.jpg",
    alt: "image_3",
  },
  {
    src: "4.jpg",
    alt: "image_4",
  },
];

export default function Slider() {
  const div = useRef(null);
  const [move, setMove] = useState(0);

  function next() {
    if (move === -300) {
      setMove(-300);
    } else {
      setMove(move - 100);
    }
  }
  function back() {
    if (move === 0) {
      setMove(0);
    } else {
      setMove(move + 100);
    }
  }

  setTimeout(() => {
    if (move === -300) {
      setMove(0);
    } else {
      setMove(move - 100);
    }
  }, 10000);

  return (
    <section className={styles.main_slider_container}>
      <div ref={div} style={{ transform: `translateX(${move}%)` }}>
        {images.map(({ src, alt }) => {
          return <Slide src={src} alt={alt} key={src} />;
        })}
      </div>
      <button
        className={`${styles.next_btn} ${styles.next}`}
        type="button"
        onClick={next}
      >
        <NavigateNextIcon />
      </button>
      <button
        className={`${styles.next_btn} ${styles.back}`}
        type="button"
        onClick={back}
      >
        <NavigateNextIcon />
      </button>
    </section>
  );
}

function Slide({ src, alt, classes }) {
  return <img src={src} alt={alt} className={`${styles.slide}`} />;
}
