import styles from "./first.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <img
        src="5.jpg"
        alt="image_1"
        className={`${styles.images} ${styles.left}`}
      />
      <img
        src="6.jpg"
        alt="image_1"
        className={`${styles.images} ${styles.right}`}
      />
    </div>
  );
}
