import styles from "../styles/courses.module.css";
import Course from "../components/courses/courses";

export default function Courses() {
  return (
    <div className={styles.main_container}>
      <Course />
    </div>
  );
}
