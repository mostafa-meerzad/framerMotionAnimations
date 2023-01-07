import React, { useState } from "react";
import { motion } from "framer-motion";

function BoxOne(props) {
  const [isAnimating, setIsAnimating] = useState(false);
  return (
    <motion.div
      initial={{ x: 0, opacity: 0.5 }}
      animate={isAnimating ? { x: 600, opacity: 1, rotate: 360 } : {}}
      transition={{ duration: 2, type: "spring", stiffness: 100, damping: 10 }}
      className={"box"}
      onClick={() => {
        setIsAnimating(!isAnimating);
      }}
    />
  );
}

export default BoxOne;
