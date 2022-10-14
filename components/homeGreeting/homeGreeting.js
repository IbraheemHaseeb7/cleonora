import HomePictures from "../homePictures/homePictures";
import styles from "./greeting.module.css";

export default function HomeGreeting() {
  const pictures = [
    { src: "new/1.jpeg", id: 1 },
    { src: "new/2.jpeg", id: 2 },
    { src: "new/3.jpeg", id: 3 },
  ];
  return (
    <div className={styles.main_container}>
      <img src="welcome.png" alt="no image here" />
      <div className={styles.images_container}>
        {pictures.map(({ src, id }) => {
          return <HomePictures src={src} key={id} />;
        })}
      </div>
    </div>
  );
}
