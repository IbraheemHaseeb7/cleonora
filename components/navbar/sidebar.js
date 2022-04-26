import styles from "./navbar.module.css";
import Link from "next/link";

export default function Sidebar({ open, setOpen }) {
  function close() {
    setOpen(!open);
  }

  return (
    <div
      className={styles.sidebar}
      style={open ? { right: 0 } : { right: "-100%" }}
    >
      <div className={styles.sidebar_options_container}>
        <Link href="/">
          <button className={styles.sidebar_options} type="button">
            Home
          </button>
        </Link>
        <Link href="/">
          <button className={styles.sidebar_options} type="button">
            Contact Us
          </button>
        </Link>
        <Link href="/">
          <button className={styles.sidebar_options} type="button">
            About Us
          </button>
        </Link>
        <Link href="/">
          <button className={styles.sidebar_options} type="button">
            Courses
          </button>
        </Link>
      </div>
      <button className={styles.close} onClick={close}>
        X
      </button>
    </div>
  );
}
