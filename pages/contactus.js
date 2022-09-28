import styles from "../styles/contact.module.css";
import Contact from "../components/contact/contact";

export default function ContactUs() {
  return (
    <div className={styles.main_container}>
      <h1>Contact Us</h1>
      <Contact />
    </div>
  );
}
