import styles from "./what.module.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Whatsapp() {
  return (
    <div className={styles.main_container}>
      <button>
        <a target="_blank" rel="noreferrer" href="https://wa.me/447831586782">
          <WhatsAppIcon />
        </a>
      </button>
    </div>
  );
}
