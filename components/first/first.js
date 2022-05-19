import Contact from "../contact/contact";
import Header from "../header/header";
import styles from "./first.module.css";
import Home from "./home";
import Services from "./services";

export default function First() {
  return (
    <section className={styles.sections}>
      <div className={styles.home_section}>
        <div className={styles.logo_container}>
          <img src="logo-2.png" className={styles.logo} alt="logo_here" />
          <img src="logo.png" className={styles.logo_main} alt="logo_here" />
          {/* <h1>CleoNara London</h1> */}
        </div>
        <Home />
      </div>
      <div className={styles.services_main_container}>
        <Header title={`Treatments`} />
        <Services />
      </div>
      <div className={styles.contact_us_container}>
        <Header title={`Contact Us`} />
        <Contact />
      </div>
    </section>
  );
}
