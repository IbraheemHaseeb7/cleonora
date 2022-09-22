import { useState } from "react";
import Popup from "../popup/popup";
import styles from "./first.module.css";

const services = [
  {
    src: "8.jpg",
    alt: "first_service",
    title: "Lip Fillers",
    id: 1,
    content:
      "If you need to make your lips more hot and appealing then here we're imparting you with the high-quality lip filler offerings. It is the most well-known kind of dermal filler. We can use an injection to increase the extent of your lips and lead them to look more lovely. It consists of hyaluronic acid (HA). It's a natural substance within the human body. Through this service, your lips will look larger.",
  },
  {
    src: "9.jpeg",
    alt: "first_service",
    title: "Hyperhidrosis Treatment Using Botox",
    id: 2,
    content:
      "Botox is related to the cosmetic wrinkle reducer. It is one of the powerful strategies for the remedy of focal hyperhidrosis. The injection of Botox adds botulinum toxin which is used to block the nerve signals which can be responsible for the technique of sweating. It lesser the manufacturing of sweat via the sweat glands. For the effective treatment of focal hyperhidrosis botulinum toxin type, A is used.",
  },
  {
    src: "7.jpg",
    alt: "first_service",
    title: "Facial Contouring",
    id: 3,
    content:
      "Facial contouring is likewise referred to as facial sculpting. Facia contouring is surely a non-compulsory beauty surgical process that complements the overall appearance of the sin. It improves the percentage of the face and all of the facial capabilities. It additionally makes your face look smaller. This process will make your face appear more lovely because it provides fullness, make your chick bones better, your chine becomes more outstanding and your jawline may be wider.",
  },
];

export default function Services() {
  return (
    <div className={styles.services_container}>
      {services.map(({ src, title, alt, id, content }) => {
        return (
          <OneService
            key={id}
            title={title}
            src={src}
            alt={alt}
            content={content}
          />
        );
      })}
    </div>
  );
}

function OneService({ title, src, alt, content }) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    title: "this is a random title",
    content:
      "and this is some random content written in it for testing purposes",
  });

  return (
    <div
      className={styles.one_service}
      onClick={() => {
        setOpen(!open);
        setData({ title: title, content: content });
      }}
    >
      {open && <Popup title={data.title} content={data.content} />}
      <img src={src} alt={alt} />
      <h1 className={styles.one_service_title}>{title}</h1>
      <div className={styles.shadow}></div>
    </div>
  );
}
