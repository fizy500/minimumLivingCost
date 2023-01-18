import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { InView, useInView } from "react-intersection-observer";
import Logo from "../assets/logo.svg";
import Location from "../assets/location.svg";
import Phone from "../assets/phone.svg";
import Fax from "../assets/fax.svg";
import Facebook from "../assets/Facebook.svg";
import Twitter from "../assets/Twitter.svg";
import LinkedIn from "../assets/LinkedIn.svg";
import Youtube from "../assets/Youtube.svg";
import Instagram from "../assets/Instagram.svg";
import Googleplus from "../assets/Googleplus.svg";
import Pinterest from "../assets/Pinterest.svg";
import Rss from "../assets/Rss.svg";
const currentYear = new Date().getFullYear();

export default function Footer() {
  const { ref, inView } = useInView();
  const animation1 = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  const animation4 = useAnimation();
  useEffect(() => {
    if (inView) {
      animation1.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });

      animation2.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
        },
      });

      animation3.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 3,
          bounce: 0.3,
        },
      });
      animation4.start({
        x: 0,

        transition: {
          type: "spring",
          duration: 4,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation1.start({ x: 25 });
      animation2.start({ x: 50 });
      animation3.start({ x: 75 });
      animation4.start({ x: 100 });
    }
  }, [inView]);

  return (
    <footer className="px-4  ">
      <hr className="h-[0.18rem] bg-[#F4511E]" />
      <div className="lg:grid grid-cols-2 py-8 px-4 mb-8 h-1/2">
        <div className="flex justify-center items-center">
          <div className="bg-black opacity-80 rounded-[50%] ">
            <img src={Logo} alt="" className=" w-60 h-60 object-contain p-3   " />
          </div>
        </div>
        <div className=" flex flex-col justify-center items-baseline space-y-4  font-fontmontassistant">
          <div className="flex space-x-5 font-normal text-[14px]">
            <img src={Location} alt="" className="" />
            <p className="">
              345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
            </p>
          </div>
          <div className="flex space-x-12 lg:space-x-[8rem] ">
            <div className="flex space-x-5 font-normal text-[14px]">
              <img src={Phone} alt="" className="" />
              <a href="tel" className="">
                (123) 456-7890
              </a>
            </div>

            <div className="flex space-x-5 font-normal text-[14px]">
              <img src={Fax} alt="" className="" />
              <p className="">(123) 456-7890</p>
            </div>
          </div>

          <div className="lg:flex items-center lg:space-x-7 py-8">
            <p className="text-[#0A142F] font-normal text-sm op  opacity-50">
              Social Media
            </p>
            <div
              className="grid grid-cols-4 lg:grid-cols-8 gap-6 lg:gap-0 items-baseline lg:space-x-7"
              ref={ref}
            >
              <motion.a href="" animate={animation1}>
                <img src={Facebook} alt="Facebook-logo" />
              </motion.a>
              <motion.a href="" animate={animation1}>
                <img src={Twitter} alt="Twitter-logo" />
              </motion.a>
              <motion.a href="" animate={animation2}>
                <img src={LinkedIn} alt="LinkedIn-logo" />
              </motion.a>
              <motion.a href="" animate={animation3}>
                <img src={Youtube} alt="Youtube-logo" />
              </motion.a>
              <motion.a href="" animate={animation4}>
                <img src={Instagram} alt="Instagram-logo" />
              </motion.a>
              <motion.a href="" animate={animation1}>
                <img src={Googleplus} alt="Googleplus-logo" />
              </motion.a>
              <motion.a href="" animate={animation3}>
                <img src={Pinterest} alt="Pinterest-logo" />
              </motion.a>
              <motion.a href="" animate={animation4}>
                <img src={Rss} alt="Rss-logo" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
      <nav className="lg:flex justify-between items-baseline pt-[6rem] pb-4 space-y-8 lg:space-y-0 border-t border-solid border-[#7BB9FC,opacity-20] px-4 font-fontinter">
        <ul className="font-normal text-sm text-[#0A142F] uppercase  grid grid-cols-2 lg:grid-cols-5 gap-y-3 font-fontinter">
          <a href="">
            <li className="">About us</li>
          </a>
          <a href="">
            <li className="">Contact us</li>
          </a>
          <a href="">
            <li className="">Help</li>
          </a>
          <a href="">
            <li className=" ">Privacy Policy</li>
          </a>
          <a href="">
            <li className="lg:ml-[12px]">Disclaimer</li>
          </a>
        </ul>
        <p className="font-normal text-xs lg:text-sm text-[#0A142F] opacity-50 ">
          Copyright &copy;{currentYear} Minimumlivingcost. All rights reserved
        </p>
      </nav>
    </footer>
  );
}
