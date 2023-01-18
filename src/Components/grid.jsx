import React from "react";
// import Grid1 from "../assets/gridpic1.png";
import Grid2 from "../assets/gridpic2.png";
import Grid3 from "../assets/gridpic3.png";
import Grid4 from "../assets/gridpic4.png";
export default function Grid() {
  return (
    <div className="">
      <div className="flex flex-col space-y-3 w- w-full  bg-lime-800">
        <div className="flex items-baseline space-x-3">
          <div className=" bg-grid1 w-full h-[500px] bg-contain  bg-no-repeat bg-red-900  ">
            {/* <img src={Grid1} alt="" className="" /> */}
            {/* <p className=" ">Flexible Leases</p> */}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
            magnam dignissimos saepe rerum? Quod, ex mollitia nihil corrupti
            fuga omnis?
          </div>
          <div className=" bg-grid2  h-[500px] w-full bg-contain   bg-no-repeat  bg-red-800 ">
            {/* <img src={Grid2} alt="" /> */}
            <p className=" ">Flexible Leases2</p>
          </div>
        </div>
        <div className="flex  items-start space-x-3">
          <div className=" bg-grid3  h-[500px] w-full bg-contain bg-center bg-no-repeat ">
            {/* <img src={Grid3} alt="" /> */}
            <p className=" ">Flexible Leases3</p>
          </div>
          <div className=" bg-grid4 w-full bg-contain bg-center bg-no-repeat h-[500px]">
            {/* <img src={Grid4} alt="" /> */}
            <p className=" ">Flexible Leases4</p>
          </div>
        </div>
      </div>
    </div>
  );
}
