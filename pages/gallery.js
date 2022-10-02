import Video from "../components/videos/video";
import styles from "../styles/gallery.module.css";

const videos = [
  { src: "reviews.mp4", id: 1 },
  { src: "lipAndChin.mp4", id: 2 },
  { src: "chinfiller.mp4", id: 3 },
  { src: "templates.mp4", id: 4 },
];

export default function Gallery() {
  return (
    <div className={styles.main_container}>
      <div className={styles.title_container}>
        <h1>Gallery</h1>
      </div>
      <div className={styles.videos_container}>
        {videos.map(({ src, id }) => {
          return <Video src={src} key={id} />;
        })}
      </div>
    </div>
  );
}
