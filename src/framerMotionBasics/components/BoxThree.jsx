import { React, useState } from "react";
import { motion } from "framer-motion";

const BoxThree = () => {
  const boxVariants = {
    hidden: {
      borderRadius: 100,
      scale: 0.2
    },
    visible: {
      transition: { staggerChildren: 0.2 },
      borderRadius: 0,
      scale: 1
    }
  };
  const boxItemVariants = {
    hidden: {
      //   x: -100,
      opacity: 1,
      rotate: 0,
      scale: 0,
      borderRadius: 100
    },
    visible: {
      //   x: 0,
      opacity: 1,
      rotate: 0,
      scale: 1,
      borderRadius: 0
    }
  };
  const [isAnimating, setIsAnimating] = useState(false);
  return (
    <motion.div
      className="box container"
      //   initial={{ x: -1000 }}
      //   animate={{ x: 0 }}
      //   transition={{ delay: 2, when: "beforeChildren" }}
      variants={boxVariants}
      initial="hidden"
      animate={isAnimating ? "visible" : "hidden"}
      onClick={() => {
        setIsAnimating(!isAnimating);
      }}
    >
      {[1, 2, 3].map(i => {
        return (
          <motion.div variants={boxItemVariants} className="box-item" key={i} />
        );
      })}
    </motion.div>
  );
};

export default BoxThree;
