import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/navbar/sidebar";
import React, { useState } from "react";
import "../styles/globals.css";

export const NavContext = React.createContext({
  open: false,
  setOpen: function () {},
});

function MyApp({ Component, pageProps }) {
  const [open, setOpen] = useState(false);

  return (
    <NavContext.Provider value={{ open: open, setOpen: setOpen }}>
      <Navbar />
      <Sidebar open={open} setOpen={setOpen} />
      {open && <div className="blur" onClick={() => setOpen(!open)}></div>}
      <Component {...pageProps} />
      <Footer />
    </NavContext.Provider>
  );
}

export default MyApp;
