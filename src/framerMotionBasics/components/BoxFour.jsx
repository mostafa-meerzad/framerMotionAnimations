import React from "react";
import { motion } from "framer-motion";

const BoxFour = () => {
  return (
    <motion.div
      className="box"
      initial={{}}
      animate={{
        scale: [1.4, 1.4, 1, 1.3, 1],
        rotate: [0, 0, 360, -180],
        borderRadius: [20, 50, 100, 100, 20]
      }}
      transition={{ duration: 2 }}
    />
  );
};

export default BoxFour;
