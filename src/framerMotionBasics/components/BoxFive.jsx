import React from "react";
import {motion, useAnimation} from "framer-motion";

const BoxFive = () => {
    const controls = useAnimation();
    return (
        <>
            <button
                className="button"
                onClick={() => {
                    controls.start({x: 0});
                }}
            >
                move left
            </button>
            <button
                className="button"
                onClick={() => {
                    controls.start({x: 400});
                }}
            >
                move right
            </button>
            <button
                className="button"
                onClick={() => {
                    controls.start({borderRadius: "50%"});
                }}
            >
                circle
            </button>
            <button
                className="button"
                onClick={() => {
                    controls.start({borderRadius: 0});
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
                transition={{duration: 3, ease: "linear"}}
            ></motion.div>


        </>
    );
};

export default BoxFive;
