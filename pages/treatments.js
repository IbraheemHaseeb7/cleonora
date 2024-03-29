import Picture from "../components/treatment/picture";
import TreatmentsBox from "../components/treatment/treatment";
import Bottom from "../components/treatmentBottom/bottom";
import styles from "../styles/treat.module.css";

const pictures = [
  {
    src: "new/4.jpeg",
    id: 1,
    name: "Lip Filler",
    description:
      "If you need to make your lips more hot and appealing then here we're imparting you with the high-quality lip filler offerings. It is the most well-known kind of dermal filler. We can use an injection to increase the extent of your lips and lead them to look more lovely. It consists of hyaluronic acid (HA). It's a natural substance within the human body. Through this service, your lips will look larger.",
  },
  {
    src: "new/5.jpg",
    id: 2,
    name: "Botox",
    description:
      "Botox is related to the cosmetic wrinkle reducer. It is one of the powerful strategies for the remedy of focal hyperhidrosis. The injection of Botox adds botulinum toxin which is used to block the nerve signals which can be responsible for the technique of sweating. It lesser the manufacturing of sweat via the sweat glands. For the effective treatment of focal hyperhidrosis botulinum toxin type, A is used.",
  },
  {
    src: "new/6.jpeg",
    id: 3,
    name: "Facial Contouring",
    description:
      "Facial contouring is likewise referred to as facial sculpting. Facia contouring is surely a non-compulsory beauty surgical process that complements the overall appearance of the sin. It improves the percentage of the face and all of the facial capabilities. It additionally makes your face look smaller. This process will make your face appear more lovely because it provides fullness, make your chick bones better, your chine becomes more outstanding and your jawline may be wider",
  },
];

const treatments = [
  "Luxury Facials",

  "Fat Dissolving ",

  "Dermal Fillers ",

  "Anti wrinkle Injections ",

  "PDO Threads ",

  "Buttock Augmentation ",

  "Skin Boosters ",

  "Vitamin Injections ",

  "IV Drips ",

  "PRP (Platelet Rich Plasma)",

  "Beauty Treatments",
];

export default function Treatments() {
  return (
    <div className={styles.main_container}>
      <TreatmentsBox />
      <div className={styles.pictures_container}>
        {pictures.map(({ src, id, name, description }) => {
          return (
            <Picture src={src} key={id} name={name} description={description} />
          );
        })}
      </div>
      <div className={styles.more_container}>
        <ul>
          {treatments.map((data) => {
            return <li key={data}>{data}</li>;
          })}
        </ul>
      </div>
      <Bottom />
    </div>
  );
}
