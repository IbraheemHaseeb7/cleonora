import styles from "./navbar.module.css";
import Link from "next/link";

const options = [
  { route: "/", text: "Home" },
  { route: "/aboutus", text: "About Us" },
  { route: "/courses", text: "Courses" },
  { route: "/contactus", text: "Contact Us" },
];

export default function Navbar() {
  return (
    <nav className={styles.nav_container}>
      <div className={styles.logo_container}>
        <img src="logo.png" alt="logo" />
      </div>
      <div className={styles.options_container}>
        {options.map(({ route, text }) => {
          return <Option key={route} route={route} text={text} />;
        })}
      </div>
    </nav>
  );
}

function Option({ route, text }) {
  return (
    <Link href={route}>
      <button type="btn" className={styles.option}>
        {text}
      </button>
    </Link>
  );
}
