import AboutUs from "../components/about/about";
import HomeGreeting from "../components/homeGreeting/homeGreeting";
import About from "./aboutus";
import Treatments from "./treatments";

export default function Home() {
  return (
    <div>
      <HomeGreeting />
      <About />
      <Treatments />
    </div>
  );
}
