//import { motion } from 'framer-motion';
import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/servicess/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contanct from "./components/contact/Contanct";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact"><Contanct/></section>
      {/* <Test/> */}
    </div>
  );
};

export default App;
