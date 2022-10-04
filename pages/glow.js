import Course from "../components/courses/courses";
import styles from "../styles/glow.module.css";

export default function Glow() {
  return (
    <div className={styles.main_container}>
      <div className={styles.title_container}>
        <h1>
          Join Our
          <br />
          Glow Up Squad
        </h1>
      </div>
      <p className={styles.text_container}>
        Join our Glow Up Squad CleoNora London offers an extraordinary
        opportunity to book treatments at heavily discounted rates on our Glow
        Up Days. Our student aesthetic practitioners will perform procedures on
        models during our glow up days. <br /> <br />
        Treatments may include <br />
        <ul>
          <li>Dermal Fillers</li>
          <li>Fat Dissolving</li>
          <li>anti wrinkle</li>
          <li>Luxury Facials</li>
          <li>specialist beauty treatments and/ or any other procedure</li>
        </ul>
        <br />
        All procedures will be supervised by our company&#39;s Aesthetic
        Practitioner CEO and Owner.
        <br /> <br />
        Please follow us on Instagram{" "}
        <a href="" rel="noreferrer" target="_blank">
          @cleonora.ldn
        </a>
        to stay updated with our model days.
      </p>
      <div className={styles.question_container}>
        <div>
          <h1>How to Book:</h1>
          <p>
            Please complete the form below to register your interest and you
            will be contacted with the available dates for your chosen treatment
            during our glow up days. You will be given notice in advance so you
            can plan your schedule accordingly.{" "}
          </p>
        </div>
        <div>
          <h1>Prices:</h1>
          <p>
            The treatments will be heavily discounted. Treatment prices will be
            calculated and released prior to the glow up days.
          </p>
        </div>
        <div>
          <h1>When will the Glow up days be held:</h1>
          <p>
            The dates for the glow up days will be released in advance so you
            can book in advance.
          </p>
        </div>
      </div>
      <Course />
    </div>
  );
}
