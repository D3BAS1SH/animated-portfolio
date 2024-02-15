import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();
  console.log(ref);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  /* console.log(scrollYProgress);
  console.log(useTransform(scrollYProgress, [0,1], ["0%","100%"])); */
  const TextY = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const Bg88 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{ y: TextY }}>
        {type === "services" ? "What we do?" : "What we did?"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: Bg88,
          backgroundImage: `url(${
            type === "services?" ? "/planets.png" : "sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div style={{ x: Bg88 }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
