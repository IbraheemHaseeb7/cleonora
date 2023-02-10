import styles from "./navbar.module.css";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { useContext } from "react";
import { NavContext } from "../../pages/_app";

const options = [
  { route: "/", text: "Home" },
  { route: "/treatments", text: "treatments" },
  { route: "/courses", text: "Courses" },
  { route: "/glow", text: "Glow Up" },
  { route: "/aboutus", text: "About Us" },
  { route: "/contactus", text: "Contact Us" },
  { route: "/gallery", text: "Gallery" },
];

export default function Navbar() {
  const { open, setOpen } = useContext(NavContext);

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
        <Link href="/">
          <img style={{ cursor: "pointer" }} src="logo.png" alt="logo" />
        </Link>
      </div>
      <div className={styles.options_container}>
        {options.map(({ route, text }) => {
          return <Option key={route} route={route} text={text} />;
        })}
        <a
          href="https://payl8r.com/retailers/payment-detail?retailer=cleonoral9282ykfxuv9"
          target="_blank"
        >
          <button type="btn" className={styles.option}>
            PAYL8R
          </button>
        </a>
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
