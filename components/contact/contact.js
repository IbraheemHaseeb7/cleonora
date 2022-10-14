import { useReducer } from "react";
import styles from "./contact.module.css";
import { reducer } from "./reducer.js";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
// import toast from "react-hot-toast";

const initialState = {};

export default function Contact() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const inputs = [
    { type: "name", placeholder: "Name", value: state.name },
    {
      type: "phoneNumber",
      placeholder: "Phone Number",
      value: state.phoneNumber,
    },
    { type: "email", placeholder: "Email", value: state.email },
  ];

  function handleChange(e) {
    dispatch({
      type: "typing",
      payload: { value: e.target.value, name: e.target.name },
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if ((state.email || state.phoneNumber) && state.name && state.textarea) {
      sendEmail();
      dispatch({ type: "submit" });
    } else {
      // console.log("ahsdkjf");
      // toast.error("Please fill out all the fields");
    }
  }

  async function sendEmail() {
    const final = {
      email: state.email,
      name: state.name,
      phoneNumber: state.phoneNumber,
      message: state.textarea,
      type: "contact",
    };

    await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(final),
    }).then(() => {
      // toast.success("Message Sent Successfully!");
    });
  }

  return (
    <div className={styles.contact_container}>
      <div className={styles.title_container}>
        <img src="contactus.png" alt="no image here" />
      </div>
      <div className={styles.address_container}>
        <h2>
          Address <LocationOnIcon />
        </h2>
        <pre>East London</pre>
        <h2>
          Booking <AccessTimeFilledIcon />
        </h2>
        <pre>
          By appointment only
        </pre>
        <p>
          We look forward to
          <br /> hearing from you Queen!
        </p>
      </div>
      <form className={styles.form}>
        {inputs.map(({ type, placeholder, value }) => {
          return (
            <input
              key={placeholder}
              type={type}
              placeholder={placeholder}
              value={value}
              name={type}
              className={styles.input}
              onChange={handleChange}
              required={true}
            />
          );
        })}
        <textarea
          placeholder="Type your message here..."
          value={state.textarea}
          className={styles.textarea}
          onChange={handleChange}
          required={true}
          name="textarea"
        ></textarea>
        <button className="btn" type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
