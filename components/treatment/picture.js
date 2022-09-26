import styles from "./treat.module.css";

export default function Picture({ src }) {
  return (
    <div className={styles.picture}>
      <img src={src} alt="no image found" />
    </div>
  );
}
