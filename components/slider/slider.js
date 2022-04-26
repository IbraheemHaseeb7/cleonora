import styles from "./slider.module.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1650830907181-b62870405217?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    alt: "image_1",
  },
  {
    src: "https://images.unsplash.com/photo-1650772842330-b08ffa4405ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80",
    alt: "image_2",
  },
  {
    src: "https://images.unsplash.com/photo-1650853656910-097ae2ce0c94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    alt: "image_3",
  },
];

export default function Slider() {
  const div = useRef(null);
  const [move, setMove] = useState(0);

  function next() {
    setMove(move - 100);
  }
  function back() {
    setMove(move + 100);
  }

  setTimeout(() => {
    if (move === -200) {
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
