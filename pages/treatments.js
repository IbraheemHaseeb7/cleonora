import Picture from "../components/treatment/picture";
import TreatmentsBox from "../components/treatment/treatment";
import Bottom from "../components/treatmentBottom/bottom";
import styles from "../styles/treat.module.css";

const pictures = [
  { src: "lipinject.png", id: 1 },
  { src: "9.jpeg", id: 2 },
  { src: "eyeinject.png", id: 3 },
];

export default function Treatments() {
  return (
    <div className={styles.main_container}>
      <TreatmentsBox />
      <div className={styles.pictures_container}>
        {pictures.map(({ src, id }) => {
          return <Picture src={src} key={id} />;
        })}
      </div>
      <Bottom />
    </div>
  );
}
