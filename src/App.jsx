import { motion } from 'framer-motion';
import './app.scss'
import Navbar from './components/navbar/Navbar';
const App = () => {
  return <div>
    <section id='Homepage'><Navbar/></section>
    <section id='Services'>PARALLAX</section>
    <section>SERVICES</section>
    <section>PARALLAX</section>
    <section id='Portfolio'>PORTFOLIO1</section>
    <section>PORTFOLIO2</section>
    <section>PORTFOLIO3</section>
    <section id='Contact'>CONTACT</section>
    {/* <Test/> */}
  </div>;
};

export default App;
