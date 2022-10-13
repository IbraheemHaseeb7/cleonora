import { useState } from "react";
import Popup from "../popup/popup";
import Layer from "./layer";
import styles from "./treat.module.css";

export default function Picture({ src, name, description }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.picture} onClick={() => setOpen(!open)}>
      <img src={src} alt="no image found" />
        {/* <Layer name={name} /> */}
      {/*open && <Popup title={name} content={description} /> */}
    </div>
  );
}
