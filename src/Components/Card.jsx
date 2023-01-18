import React from "react";
import { motion } from "framer-motion";

export default function Card(props) {
  return (
    <motion.div
      className="space-y-5 font-fontinter"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className=" rounded-[10px]  shadow-2xl p-2 w-fit ml-3">
        <img src={props.image} alt="" className="" />
      </div>
      <p className="  text-sm lg:text-[20px] font-semibold  text-[#18191F] w-[70%] lg:w-[55%]">
        {props.message}
      </p>
    </motion.div> 
  );
}
