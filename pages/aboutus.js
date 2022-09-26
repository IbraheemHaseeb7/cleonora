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
      "Welcome Queen!\n\nThank you for choosing CleoNora\n London.\n\nA 35% deposit is required to \nsecure all appointments.\n\nReschedule or Cancel within \n48 hours.\n\nThank You! See you soon!\nHave an amazing day.",
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
