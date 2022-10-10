import styles from "./treat.module.css";

export default function Layer({ name }) {
  return (
    <div className={styles.layer_container}>
      <p>{name}</p>
    </div>
  );
}
