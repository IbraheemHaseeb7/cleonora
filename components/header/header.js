import styles from "./header.module.css";

export default function Header({ title }) {
  return (
    <div className={styles.header_container}>
      <h1 className={styles.header}>{title}</h1>
    </div>
  );
}
