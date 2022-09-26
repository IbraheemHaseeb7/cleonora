import styles from "./pic.module.css";

export default function HomePictures({ src }) {
  return (
    <div className={styles.main_container}>
      <img src={src} alt="no image here" />
    </div>
  );
}
