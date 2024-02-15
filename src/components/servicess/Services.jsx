import "./services.scss";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="services">
      <div className="textContainer">
        <p>
          I focus on helping your brand grow
          <br />
          and move forward
        </p>
        <hr />
      </div>

      <div className="titleContainer">
        <div className="title">
          <img src="/people.webp" alt="people image" />
          <h1>
            <b>Unique</b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>For Your</b> Business
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </div>

      <div className="listContainer">
        <motion.div
          className="box"
          initial={{ backgroundColor: "#ffffff00", color: "#ffffff" }}
          transition={{ duration: 0.5 }}
          whileHover={{ backgroundColor: "#ffffffff", color: "#000000" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
            voluptates expedita autem inventore culpa temporibus facilis libero
            id, consequuntur beatae eos dolore officiis dicta quisquam
            laudantium magnam. Voluptates, dicta deleniti?
          </p>
          <button>GO</button>
        </motion.div>
        <motion.div
          className="box"
          initial={{ backgroundColor: "#ffffff00", color: "#ffffff" }}
          transition={{ duration: 0.5 }}
          whileHover={{ backgroundColor: "#ffffffff", color: "#000000" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
            voluptates expedita autem inventore culpa temporibus facilis libero
            id, consequuntur beatae eos dolore officiis dicta quisquam
            laudantium magnam. Voluptates, dicta deleniti?
          </p>
          <button>GO</button>
        </motion.div>
        <motion.div
          className="box"
          initial={{ backgroundColor: "#ffffff00", color: "#ffffff" }}
          transition={{ duration: 0.5 }}
          whileHover={{ backgroundColor: "#ffffffff", color: "#000000" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
            voluptates expedita autem inventore culpa temporibus facilis libero
            id, consequuntur beatae eos dolore officiis dicta quisquam
            laudantium magnam. Voluptates, dicta deleniti?
          </p>
          <button>GO</button>
        </motion.div>
        <motion.div
          className="box"
          initial={{ backgroundColor: "#ffffff00", color: "#ffffff" }}
          transition={{ duration: 0.5 }}
          whileHover={{ backgroundColor: "#ffffffff", color: "#000000" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
            voluptates expedita autem inventore culpa temporibus facilis libero
            id, consequuntur beatae eos dolore officiis dicta quisquam
            laudantium magnam. Voluptates, dicta deleniti?
          </p>
          <button>GO</button>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
