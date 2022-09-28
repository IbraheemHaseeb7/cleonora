import AboutUs from "../components/about/about";
import Boxes from "../components/about/boxes";
import styles from "./../styles/about.module.css";

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

export default function About() {
  return (
    <div className={styles.main_container}>
      <AboutUs />
      <div className={styles.boxes_container}>
        {data.map(({ text, src, id, content }) => {
          return (
            <Boxes text={text} key={id} id={id} src={src} content={content} />
          );
        })}
      </div>
    </div>
  );
}
