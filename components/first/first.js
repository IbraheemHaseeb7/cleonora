import Contact from "../contact/contact";
import Header from "../header/header";
import styles from "./first.module.css";
import Home from "./home";
import Services from "./services";

export default function First() {
  return (
    <section className={styles.sections}>
      <div className={styles.home_section}>
        <Header title={`Cleo Nora`} />
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
