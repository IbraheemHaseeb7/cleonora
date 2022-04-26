import Link from "next/link";
import styles from "./footer.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";

const options = [
  { route: "/", name: "Home" },
  { route: "/contactus", name: "Contact Us" },
  { route: "/aboutus", name: "About Us" },
  { route: "/courses", name: "Courses" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img src="logo.png" alt="logo" />
      <a
        href="https://www.instagram.com"
        className={styles.insta}
        type="button"
      >
        <InstagramIcon />
      </a>
      <p>© 2022 - Copyrights All Rights Reserved</p>
      <div className={styles.options_container}>
        {options.map(({ route, name }) => {
          return <Option route={route} name={name} key={route} />;
        })}
      </div>
    </footer>
  );
}

function Option({ route, name }) {
  return (
    <Link href={route}>
      <button className={styles.option}>{name}</button>
    </Link>
  );
}
