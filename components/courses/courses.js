import { useReducer } from "react";
// import toast from "react-hot-toast";
import styles from "./courses.module.css";
import { reducer } from "./reducer";

export default function Course() {
  const [state, dispatch] = useReducer(reducer, { input: {}, treatments: [] });
  const inputs = [
    {
      type: "name",
      name: "name",
      value: state?.input?.name,
      placeholder: "Enter your name...",
      id: 1,
    },
    {
      type: "email",
      name: "email",
      value: state?.input?.email,
      placeholder: "Enter your email...",
      id: 2,
    },
    {
      type: "number",
      name: "phoneNumber",
      value: state?.input?.phoneNumber,
      placeholder: "Enter your phone Number...",
      id: 3,
    },
  ];
  const checks = [
    { name: "Luxury Facials", value: state?.treatments?.luxfac, id: 1 },
    { name: "Fast Dissolving", value: state?.treatments?.fastdis, id: 2 },
    { name: "Dermal Fillers", value: state?.treatments?.dermfil, id: 3 },
    {
      name: "Anti Wrinkle Injections",
      value: state?.treatments?.antiwrinkle,
      id: 4,
    },
    { name: "PDO Threads", value: state?.treatments?.pdo, id: 5 },
    { name: "Buttocks Augmentation", value: state?.treatments?.butt, id: 6 },
    { name: "Skin Boosters", value: state?.treatments?.skin, id: 7 },
    { name: "Vitamin Injections", value: state?.treatments?.vitinject, id: 8 },
    { name: "IV Drips", value: state?.treatments?.ivdrips, id: 9 },
    {
      name: "PRP (Platelet Rich Plasma)",
      value: state?.treatments?.prp,
      id: 10,
    },
    { name: "Beauty Treatments", value: state?.treatments?.beauty, id: 11 },
  ];

  function handleChange(e) {
    dispatch({
      type: "input",
      payload: { name: e.target.name, value: e.target.value },
    });
  }

  function handleCheck(e) {
    dispatch({
      type: "checkbox",
      payload: { name: e.target.name, value: e.target.value },
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (
      state.input.name &&
      state.input.email &&
      state.input.phoneNumber &&
      state.treatments.length > 0
    ) {
      dispatch({ type: "submit" });
    } else {
      // toast.error("Please fill all fields and choose at least one treatment");
    }

    sendEmail();
  }

  async function sendEmail() {
    const final = {
      email: state.input.email,
      name: state.input.name,
      phoneNumber: state.input.phoneNumber,
      treatments: state.treatments,
      type: "glow",
    };

    await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(final),
    }).then(() => {
      // toast.success("Application Sent Successfully");
    });
  }

  return (
    <form className={styles.main_container}>
      <div className={styles.title_container}>
        <h1>Apply Here</h1>
      </div>
      <div className={styles.input_container}>
        {inputs.map(({ type, name, value, id, placeholder }) => {
          return (
            <Inputs
              type={type}
              name={name}
              key={id}
              value={value}
              placeholder={placeholder}
              handleChange={handleChange}
            />
          );
        })}
      </div>
      <div className={styles.checkbox_container}>
        {checks.map(({ name, value, id }) => {
          return (
            <CheckBoxes
              key={id}
              value={value}
              name={name}
              handleCheck={handleCheck}
            />
          );
        })}
      </div>
      <button
        className={styles.submit_button}
        onClick={handleSubmit}
        type="button"
      >
        Submit
      </button>
    </form>
  );
}

function Inputs({ placeholder, type, name, value, handleChange }) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
}

function CheckBoxes({ name, value, handleCheck }) {
  return (
    <div className={styles.checkbox}>
      <input
        id={name}
        type="checkbox"
        value={value}
        onChange={handleCheck}
        name={name}
      />
      <label htmlFor={name}>{name}</label>
    </div>
  );
}
