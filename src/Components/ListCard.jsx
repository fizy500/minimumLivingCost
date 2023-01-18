import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { delay, easeInOut, motion } from "framer-motion";
import Car from "../assets/car.svg";
import Shower from "../assets/shower.svg";
import Box from "../assets/box.svg";
export default function ListCard(props) {
  const { data } = props;
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="flex flex-col justify-center items-center space-y-20 font-fontdmsans">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20  justify-center items-center px-4 lg:px-20  ">
        {currentItems.map((image) => {
          return (
            <motion.div
              className=" shadow-[rgba(0,0,0,0.13)] shadow-xl border-2 border-[#979797] rounded-[32px] space-y-3   h-full  z-50 "
              whileHover={{
                scaleX: 1.3,
                transition: { delay: 0.5, duration: 2, ease: "easeOut" },
                boxShadow: "0px 4px 63px rgba(0,0,0,0.15)",
              }}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-[400px]   overflow-hidden rounded-t-[32px]"
              />
              <div className=" px-4 ">
                <p className="font-bold text-[23px] text-black w-[70%]">
                  2578 Folsom street, san francisco, CA, 94110
                </p>
                <span className="text-[#818181] font-normal text-lg">
                  Private Room
                </span>
                <p className="text-[#F4511E] text-[25.55px] font-bold ">
                  $1200/month
                </p>
              </div>

              <div className=" border-solid border-t-2 border-t-[#E4E4E4] grid grid-cols-3 ">
                <div className="p-4 flex justify-center items-baseline space-x-3">
                  <img src={Car} alt="" />
                  <p className="font-bold text-lg">20</p>
                </div>
                <div className="border-x-2 border-x-[#E4E4E4] flex justify-center items-baseline space-x-3 p-4">
                  <img src={Shower} alt="" />
                  <p className="font-bold text-lg">30</p>
                </div>
                <div className="p-4 flex justify-center items-baseline space-x-3 ">
                  <img src={Box} alt="" />
                  <p className="font-bold text-lg ">40</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      <ReactPaginate
        nextLabel="next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={3}
        previousLabel="First"
        renderOnZeroPageCount={null}
        containerClassName="border-2 border-[#E4E4E4] rounded-[6.73px] flex justify-center items-center w-fit shadow-lg overflow-hidden font-fontmontserrat "
        pageLinkClassName="border-x-2 border-x-[#E4E4E4] flex justify-center items-baseline space-x-3 p-4 font-bold  text-[#F4511E] text-base active:bg-[#F4511E] active:text-white transition-all ease-in-out"
        previousLinkClassName="p-4 flex justify-center items-baseline space-x-3 font-bold  text-[#BDBDBD] text-base"
        nextLinkClassName="p-4 flex justify-center items-baseline space-x-3 font-bold  text-[#F4511E] text-base active:bg-[#F4511E] active:text-white"
      />
    </div>
  );
}
