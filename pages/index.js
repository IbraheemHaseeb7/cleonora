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
  { src: "lipinject.png", id: 1 },
  { src: "9.jpeg", id: 2 },
  { src: "eyeinject.png", id: 3 },
];

export default function Home() {
  return (
    <div className={styles.main_container}>
      <HomeGreeting />
      <TreatmentsBox />
      <div className={styles.pictures_container}>
        {pictures.map(({ src, id }) => {
          return <Picture src={src} key={id} />;
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
