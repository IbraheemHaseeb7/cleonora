import styles from "./navigation.module.css";
import HomeIcon from "@mui/icons-material/Home";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import CallIcon from "@mui/icons-material/Call";
import InfoIcon from "@mui/icons-material/Info";
import CollectionsIcon from "@mui/icons-material/Collections";
import Link from "next/link";
import PaymentIcon from "@mui/icons-material/Payment";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { loadScript } from "@paypal/paypal-js";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import PayPalButton from "react-paypal-smart-button";

const navs = [
  { route: "/", icon: <HomeIcon />, id: 1, title: "Home" },
  {
    route: "/treatments",
    icon: <CleaningServicesIcon />,
    id: 2,
    title: "Treatments",
  },
  {
    route: "/courses",
    icon: (
      <svg
        width="120"
        height="87"
        viewBox="0 0 120 87"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.22475 43.5274L9.72475 86.0274L110.225 86.0275C111.891 74.0275 115.425 48.6275 116.225 43.0275C121.025 41.4275 119.558 38.0275 118.225 36.5275C112.225 35.0275 112.725 40.0275 113.725 42.0275C113.225 44.0275 96.2247 62.0275 93.7247 64.5275C92.5247 63.3275 90.2247 38.0275 89.2247 25.5275C91.7247 22.0275 92.7247 19.5275 88.7247 18.5275C84.7247 17.5275 84.7247 22.5275 85.7247 24.5275C81.8914 31.6941 73.6247 46.9274 71.2247 50.5274C70.0247 49.3274 64.0581 21.0274 61.2247 7.02739C62.7247 6.02746 64.7247 -0.472644 59.7247 0.0273872C53.7247 0.627425 58.2247 6.52739 58.2247 7.02739C58.2247 7.52739 49.2247 52.0274 47.7247 50.5274C46.5247 49.3274 37.8914 33.0274 33.7247 25.0274C35.2247 22.5274 36.2247 18.0274 31.7247 18.5274C26.4957 19.1083 28.5581 23.5274 30.2247 25.5274C29.0581 35.694 26.5247 57.6274 25.7247 64.0275C22.1247 61.6275 10.8914 48.3608 5.72478 42.0274C6.72478 40.5275 6.22473 35.0275 2.22475 36.5274C-2.34701 38.2418 1.22475 42.3607 3.22475 43.5274Z"
          fill="#EFCB71"
        />
      </svg>
    ),
    id: 3,
    title: "Glow Up Squad",
  },
  { route: "/aboutus", icon: <CallIcon />, id: 4, title: "About" },
  { route: "/contactus", icon: <InfoIcon />, id: 5, title: "Contact" },
  { route: "/gallery", icon: <CollectionsIcon />, id: 6, title: "Gallery" },
];

export default function Navigation() {
  const [input, setInput] = useState({ amount: 0.1, button: null });
  const paypal = useRef();

  function handleChange(e) {
    if (e.target.name === "amount") {
      if (e.target.value < 0.1) setInput({ ...input, amount: 0.1 });
      else setInput({ ...input, amount: e.target.value });
    }
  }

  useEffect(() => {
    loadScript({
      "client-id":
        "AQgGERFg6OC0TqpyaxQUQjnv3p1OoARtsCgCpUiuY-o9YWE8fznjgEVyPm3C1zme3LqEvJhG4ilTN_sU",
    }).then((res) => {
      res
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: "purchase",
                  amount: { currency_code: "USD", value: input.amount },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
          },
        })
        .render(paypal.current);
    });
  }, []);

  return (
    <div className={styles.large_container}>
      <div className={styles.main_container}>
        <div className={styles.inner_container}>
          {navs.map(({ title, route, icon, id }) => {
            return <Nav route={route} icon={icon} key={id} title={title} />;
          })}
          <div className={styles.nav_container}>
            <div>
              <a
                href="https://payl8r.com/retailers/payment-detail?retailer=cleonoral9282ykfxuv9"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <PaymentIcon />
                </div>
                <p>Payl8r</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.paypal_container}>
        <label>
          Amount
          <input
            onChange={handleChange}
            type="number"
            name="amount"
            value={input.amount}
            placeholder="Enter amount"
            className={styles.amount}
          />
        </label>
        <div ref={paypal}></div>
      </div>
    </div>
  );
}

function Nav({ icon, route, title }) {
  const router = useRouter();

  function inside(e, route) {
    e.preventDefault();
    if (route === "/courses") {
      e.target.firstChild.firstChild?.setAttribute("fill", "#9a8a6f");
    }
  }
  function outside(e, route) {
    e.preventDefault();
    if (route === "/courses") {
      e.target.firstChild.firstChild?.setAttribute("fill", "#efcb71");
    }
  }

  return (
    <div className={styles.nav_container}>
      <div
        onMouseEnter={(e) => {
          inside(e, route);
        }}
        onMouseLeave={(e) => {
          outside(e, route);
        }}
        onClick={() => {
          router.push(`/${route}`);
        }}
      >
        <>
          <div>{icon}</div>
          <p>{title}</p>
        </>
      </div>
    </div>
  );
}
