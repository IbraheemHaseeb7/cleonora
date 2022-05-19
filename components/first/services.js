import styles from "./first.module.css";

const services = [
  {
    src: "8.jpeg",
    alt: "first_service",
    title: "Lip Fillers",
    id: 1,
  },
  {
    src: "9.jpg",
    alt: "first_service",
    title: "Hyperhidrosis Treatment Using Botox",
    id: 2,
  },
  {
    src: "7.jpg",
    alt: "first_service",
    title: "Facial Contouring",
    id: 3,
  },
];

export default function Services() {
  return (
    <div className={styles.services_container}>
      {services.map(({ src, title, alt, id }) => {
        return <OneService key={id} title={title} src={src} alt={alt} />;
      })}
    </div>
  );
}

function OneService({ title, src, alt }) {
  return (
    <div className={styles.one_service}>
      <img src={src} alt={alt} />
      <h1 className={styles.one_service_title}>{title}</h1>
      <div className={styles.shadow}></div>
    </div>
  );
}
