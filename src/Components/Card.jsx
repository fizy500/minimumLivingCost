import React from "react";
import { motion } from "framer-motion";

export default function Card(props) {
  return (
    <div>
      <motion.div
        className=" rounded-[10px]  shadow-2xl p-2 w-fit ml-3"
        whileHover={{
          scale: 1.3,
          transition: { delay: 0.2, duration: 2, ease: "easeOut" },
          boxShadow: "0px 4px 63px rgba(0,0,0,0.15)",
        }}
      >
        <img src={props.image} alt="" className="" />
      </motion.div>
      <p className="  text-sm lg:text-[20px] font-semibold  text-[#18191F] w-[70%] lg:w-[55%]">
        {props.message}
      </p>
    </div>
  );
}
