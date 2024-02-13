import { motion } from 'framer-motion';
import './app.scss'
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Parallax from './components/parallax/Parallax';
const App = () => {
  return <div>
    <section id='Homepage'>
      <Navbar/>
      <Hero/>
    </section>
    <section id='Services'><Parallax type="services"/></section>
    <section>PARALLAX</section>
    <section id='Portfolio'><Parallax type="portfolio"/></section>
    <section>PORTFOLIO2</section>
    <section>PORTFOLIO3</section>
    <section id='Contact'>CONTACT</section>
    {/* <Test/> */}
  </div>;
};

export default App;
