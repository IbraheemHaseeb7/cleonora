import styles from "./popup.module.css";

export default function Popup({ title, content }) {
  return (
    <div className={styles.main_container}>
      <div className={styles.content_container}>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
      <div className={styles.shadow}></div>
    </div>
  );
}
