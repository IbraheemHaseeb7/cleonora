import styles from "./bottom.module.css";

export default function Bottom() {
  return (
    <div className={styles.main_container}>
      <div className={styles.left_container}>
        <img src="left.png" alt="no image here" />
      </div>
      <div className={styles.center_container}>
        <img src="Book Your.png" alt="no image here" />
        <img
          className={styles.appoint}
          src="Appointment.png"
          alt="no image here"
        />
        <pre>
          Welcome Queen! Thank you for choosing CleoNora London. A 35% deposit
          is required to secure all appointments. Reschedule or Cancel within 48
          hours. Thank You! See you soon! Have an amazing day.
        </pre>
      </div>
      <div className={styles.right_container}>
        <img src="qrcode.png" alt="no image here" />
      </div>
    </div>
  );
}
