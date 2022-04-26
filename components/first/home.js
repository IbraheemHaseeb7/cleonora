import styles from "./first.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <img
        src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt="image_1"
        className={`${styles.images} ${styles.left}`}
      />
      <img
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt="image_1"
        className={`${styles.images} ${styles.right}`}
      />
    </div>
  );
}
