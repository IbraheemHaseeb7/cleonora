import Contact from "../components/contact/contact";
import HomeGreeting from "../components/homeGreeting/homeGreeting";
import About from "../components/about/about";
import Treatments from "./treatments";
import styles from "../styles/Home.module.css";
import Boxes from "../components/about/boxes";
import TreatmentsBox from "../components/treatment/treatment";
import Bottom from "../components/treatmentBottom/bottom";
import Picture from "../components/treatment/picture";

const data = [
  { text: false, src: "about1.png", id: 1, content: "" },
  {
    text: true,
    src: "",
    id: 2,
    content:
      "CleoNora London Ltd trading under CleoNora London offers a range of beauty and non-surgical cosmetic treatments. \n\nWe take immense pride in offering affordable beauty and non surgical treatments to our clients. We are fully insured, highly qualified and extensively experienced!\n\n We are based in East London, UK",
  },
  { text: false, src: "about2.png", id: 3, content: "" },
];

const pictures = [
  {
    src: "lipinject.png",
    id: 1,
    name: "Lip Filler",
    description:
      "If you need to make your lips more hot and appealing then here we're imparting you with the high-quality lip filler offerings. It is the most well-known kind of dermal filler. We can use an injection to increase the extent of your lips and lead them to look more lovely. It consists of hyaluronic acid (HA). It's a natural substance within the human body. Through this service, your lips will look larger.",
  },
  {
    src: "9.jpeg",
    id: 2,
    name: "Botox",
    description:
      "Botox is related to the cosmetic wrinkle reducer. It is one of the powerful strategies for the remedy of focal hyperhidrosis. The injection of Botox adds botulinum toxin which is used to block the nerve signals which can be responsible for the technique of sweating. It lesser the manufacturing of sweat via the sweat glands. For the effective treatment of focal hyperhidrosis botulinum toxin type, A is used.",
  },
  {
    src: "eyeinject.png",
    id: 3,
    name: "Facial Contouring",
    description:
      "Facial contouring is likewise referred to as facial sculpting. Facia contouring is surely a non-compulsory beauty surgical process that complements the overall appearance of the sin. It improves the percentage of the face and all of the facial capabilities. It additionally makes your face look smaller. This process will make your face appear more lovely because it provides fullness, make your chick bones better, your chine becomes more outstanding and your jawline may be wider",
  },
];

export default function Home() {
  return (
    <div className={styles.main_container}>
      <HomeGreeting />
      <TreatmentsBox />
      <div className={styles.pictures_container}>
        {pictures.map(({ src, id, name, description }) => {
          return (
            <Picture src={src} key={id} name={name} description={description} />
          );
        })}
      </div>
      <About />
      <div className={styles.boxes_container}>
        {data.map(({ text, src, id, content }) => {
          return (
            <Boxes text={text} key={id} id={id} src={src} content={content} />
          );
        })}
      </div>
      <Contact />
      <Bottom />
    </div>
  );
}
