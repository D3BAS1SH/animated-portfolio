import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, "-100px");
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      whileInView="animate" /* ref={ref} */
      /* animate={isInView && 'animate'} */
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br />
          and move forward
        </p>
        <hr />
      </motion.div>

      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="people image" />
          <h1>
            <motion.b
              initial={{ color: "#ffffff" }}
              transition={{ duration: 0.2 }}
              whileHover={{ color: "#ffa500" }}
            >
              Unique
            </motion.b>{" "}
            Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b
              initial={{ color: "#ffffff" }}
              transition={{ duration: 0.2 }}
              whileHover={{ color: "#ffa500" }}
            >
              For Your
            </motion.b>{" "}
            Business
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>

      <motion.div className="listContainer" variants={variants}>
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
      </motion.div>
    </motion.div>
  );
};

export default Services;
