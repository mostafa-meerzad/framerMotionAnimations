import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

const BoxFive = () => {
  const controls = useAnimation();
  const [play, setPlay] = useState(false);
  return (
    <>
      <button
        className="button"
        onClick={() => {
          controls.start({ x: 0 });
        }}
      >
        move left
      </button>
      <button
        className="button"
        onClick={() => {
          controls.start({ x: 400 });
        }}
      >
        move right
      </button>
      <button
        className="button"
        onClick={() => {
          controls.start({ borderRadius: "50%" });
        }}
      >
        circle
      </button>
      <button
        className="button"
        onClick={() => {
          controls.start({ borderRadius: 0 });
        }}
      >
        square
      </button>
      <button
        className="button"
        onClick={() => {
          controls.stop();
        }}
      >
        stop
      </button>
      <motion.div
        className="box"
        animate={controls}
        transition={{ duration: 3, ease: "linear" }}
      ></motion.div>

      {/* <button
        onClick={() => {
          if (play) {
            controls.stop();
            setPlay(false);
          } else {
            controls.start({ x: 600 });
            setPlay(true);
          }
        }}
      >
        play pause
      </button> */}
    </>
  );
};

export default BoxFive;
