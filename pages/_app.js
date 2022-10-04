import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/navbar/sidebar";
import React, { useState } from "react";
import "../styles/globals.css";
import Whatsapp from "../components/whatsapp/whatsapp";
import Toaster from "react-hot-toast";
import Navigation from "../components/navigation/navigation";

export const NavContext = React.createContext({
  open: false,
  setOpen: function () {},
});

function MyApp({ Component, pageProps }) {
  const [open, setOpen] = useState(false);

  return (
    <NavContext.Provider value={{ open: open, setOpen: setOpen }}>
      {/* <Toaster /> */}
      <Navbar />
      <Sidebar open={open} setOpen={setOpen} />
      {open && <div className="blur" onClick={() => setOpen(!open)}></div>}
      <Component {...pageProps} />
      <Whatsapp />
      <Navigation />
      {/* <Footer /> */}
    </NavContext.Provider>
  );
}

export default MyApp;
