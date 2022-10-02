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
          <button
            className={styles.sidebar_options}
            type="button"
            onClick={() => close()}
          >
            Home
          </button>
        </Link>
        <Link href="/treatments">
          <button
            className={styles.sidebar_options}
            type="button"
            onClick={() => close()}
          >
            Treatments
          </button>
        </Link>
        <Link href="/courses">
          <button
            className={styles.sidebar_options}
            type="button"
            onClick={() => close()}
          >
            Courses
          </button>
        </Link>
        <Link href="/aboutus">
          <button
            className={styles.sidebar_options}
            type="button"
            onClick={() => close()}
          >
            About Us
          </button>
        </Link>
        <Link href="/contactus">
          <button
            className={styles.sidebar_options}
            type="button"
            onClick={() => close()}
          >
            Contact Us
          </button>
        </Link>
        <Link href="/gallery">
          <button
            className={styles.sidebar_options}
            type="button"
            onClick={() => close()}
          >
            Gallery
          </button>
        </Link>
      </div>
      <button className={styles.close} onClick={close}>
        X
      </button>
    </div>
  );
}
