import styles from "./about.module.css";

export default function Boxes({ text, src, content }) {
  return (
    <div className={styles.box}>
      {text ? (
        <div className={styles.text_container}>
          <pre>{content}</pre>
        </div>
      ) : (
        <div className={styles.pictures_container}>
          <img src={src} alt="no image here" />
        </div>
      )}
    </div>
  );
}
