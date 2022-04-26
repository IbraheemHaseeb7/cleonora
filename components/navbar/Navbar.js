import styles from "./navbar.module.css";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./sidebar";
import { useState } from "react";

const options = [
  { route: "/", text: "Home" },
  { route: "/aboutus", text: "About Us" },
  { route: "/courses", text: "Courses" },
  { route: "/contactus", text: "Contact Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.nav_container}>
      <button
        className={styles.burger}
        type="button"
        onClick={() => setOpen(!open)}
      >
        <MenuIcon />
      </button>
      <div className={styles.logo_container}>
        <img src="logo.png" alt="logo" />
      </div>
      <div className={styles.options_container}>
        {options.map(({ route, text }) => {
          return <Option key={route} route={route} text={text} />;
        })}
      </div>
      <Sidebar open={open} setOpen={setOpen} />
      {open && (
        <div className={styles.blur} onClick={() => setOpen(!open)}></div>
      )}
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
