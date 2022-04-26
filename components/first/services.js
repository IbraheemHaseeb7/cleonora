import styles from "./first.module.css";

const services = [
  {
    src: "https://images.unsplash.com/photo-1650871403423-020bc41ddc2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    alt: "first_service",
    title: "Lip Fillers",
  },
  {
    src: "https://images.unsplash.com/photo-1650871403423-020bc41ddc2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    alt: "first_service",
    title: "Hyperhidrosis Treatment Using Botox",
  },
  {
    src: "https://images.unsplash.com/photo-1650871403423-020bc41ddc2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    alt: "first_service",
    title: "Facial Contouring",
  },
];

export default function Services() {
  return (
    <div className={styles.services_container}>
      {services.map(({ src, title, alt }) => {
        return <OneService title={title} src={src} alt={alt} />;
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
