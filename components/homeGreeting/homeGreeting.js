import HomePictures from "../homePictures/homePictures";
import styles from "./greeting.module.css";

export default function HomeGreeting() {
  const pictures = [
    { src: "5.jpg", id: 1 },
    { src: "6.jpg", id: 2 },
    { src: "2.jpg", id: 3 },
  ];
  return (
    <div className={styles.main_container}>
      <img src="welcomequeen.png" alt="no image here" />
      <div className={styles.images_container}>
        {pictures.map(({ src, id }) => {
          return <HomePictures src={src} key={id} />;
        })}
      </div>
    </div>
  );
}
