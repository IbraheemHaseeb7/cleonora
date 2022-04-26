import { useReducer } from "react";
import styles from "./contact.module.css";
import { reducer } from "./reducer.js";

const initialState = {};

export default function Contact() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const inputs = [
    { type: "name", placeholder: "Name", value: state.name },
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

    dispatch({ type: "submit" });
  }

  return (
    <div className={styles.contact_container}>
      <div className={styles.address_container}>
        <h2>Address</h2>
        <pre>000 Road X City A</pre>
        <h2>Working Hours</h2>
        <pre>
          Mon - Fri (0900-1700)
          <br />
          Sat (0900-1200)
          <br />
          Off
        </pre>
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
