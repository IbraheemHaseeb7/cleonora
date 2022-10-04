import styles from "../styles/courses.module.css";
import Course from "../components/courses/courses";

export default function Courses() {
  return (
    <div className={styles.main_container}>
      <h1>Courses</h1>
      <div>
        <p>
          Beauty and Aesthetic Courses
          <br />
          Coming Soon...
        </p>
      </div>
    </div>
  );
}
