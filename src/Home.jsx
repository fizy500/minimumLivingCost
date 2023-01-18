import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Banner from "./assets/banner.png";
import Search from "./assets/search.svg";
import Harry from "./assets/harry.png";
import Logo from "./assets/logo.svg";
import Location from "./assets/location.svg";
import Grid from "./assets/grid.png";
import Phone from "./assets/phone.svg";
import Fax from "./assets/fax.svg";
import Facebook from "./assets/Facebook.svg";
import Twitter from "./assets/Twitter.svg";
import LinkedIn from "./assets/LinkedIn.svg";
import Youtube from "./assets/Youtube.svg";
import Instagram from "./assets/Instagram.svg";
import Googleplus from "./assets/Googleplus.svg";
import Pinterest from "./assets/Pinterest.svg";
import Rss from "./assets/Rss.svg";
import { LivingCostData } from "./LivingCostdata";
import Card from "./Components/Card";
import ListCard from "./Components/ListCard";
import CityMap from "./Components/Map";
import Dropzone from "./Components/Dropzone";
import Nav from "./Components/NavBar";
// import Grid from "./Components/grid";
const currentYear = new Date().getFullYear();

export default function Homepage() {
  const Data = LivingCostData.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  // const clientId = "t_YxM0Taxyt2MhS4ve9lviN-EApwUOrVRjNIbJYD10w";
  const [images, setImages] = useState([]);
  const ClientId = "bik77aZTtupvK59MFi32YM8S1_FH6Wmo_FQxTHAMFlc";
  const url = "https://jsonplaceholder.typicode.com/photos";
  useEffect(() => {
    axios.get(url).then((response) => {
      setImages(response.data);
    });
  }, []);

  return (
    <>
      <div className="lg:px-8 bg-hero  bg-cover bg-center pb-10 h-max ">
        <Nav />
        <div className="lg:flex  justify-between items-center lg:px-8 mt-40 lg:space-y-0 space-y-10  ">
          <div>
            <p className="font-bold text-white  lg:text-[52px] lg:w-[75%] px-2 font-fontinter">
              The most affordable place to stay in the san franciso bay area
            </p>
          </div>
          <div className=" space-y-3 flex  flex-col justify-center ">
            <div className="space-y-6  px-2 flex  flex-col justify-center items-center">
              {/* Map here */}
              <CityMap />

              <div className="bg-white border-solid border-[#E6E6E6] rounded-[10px] py-2">
                {/* First Select */}
                <div className="px-2">
                  <form
                    action=""
                    className="flex  lg:px-4 overflow-hidden font-fontpoppins  "
                  >
                    <select
                      name="input4"
                      id=""
                      className=" bg-[#F9F9F9] outline-none border-2 border-solid border-[#E6E6E6] rounded-tl-[5px] rounded-bl-[5px] px-3  lg:px-5 py-[11px]  font-medium text-[#252B42]     "
                    >
                      <option value="">All Type</option>
                      <option value="">Uyo</option>
                      <option value="">Abuja</option>
                      <option value="">Enugu</option>
                      <option value="">Calabar</option>
                    </select>

                    {/* Second select */}

                    <select
                      name="input4"
                      id=""
                      className=" bg-[#F9F9F9] outline-none border-2 border-solid border-[#E6E6E6] px-3  lg:px-5   py-[11px]  font-medium text-[#252B42]"
                    >
                      <option value="">Neighborhood</option>
                      <option value="">Uyo</option>
                      <option value="">Abuja</option>
                      <option value="">Enugu</option>
                      <option value="">Calabar</option>
                    </select>
                    <button className="bg-[#23A6F0] border border-solid border-[#E6E6E6]  rounded-tr-[5px] rounded-br-[5px] py-4 px-6">
                      <img src={Search} alt="" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className="my-20 flex flex-col justify-center items-center">
        <div className="px-4 lg:pl-20 self-start">
          <h2 className="capitalize text-xl font-extrabold text-[#18191F] space-x-2 font-fontinter">
            <span className="border-b-2 border-b-[#F4511E] py-1">
              minimum living cost
            </span>
            <span>takes care of everything</span>
          </h2>
        </div>

        <section className="flex flex-col lg:flex-row justify-center  items-center mb-10 px-4 lg:px-8 ">
          <div className="">
            <img src={Banner} alt="" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 justify-center items-center px-10 gap-10">
            {Data}
          </div>
        </section>

        <section className="bg-[#F5F5F5] space-y-20 py-10 flex flex-col justify-center items-center w-full">
          <div className="flex flex-col lg:flex-row justify-between w-full px-20 space-y-8 lg:space-y-0">
            <p className="capitalize text-xl font-extrabold text-[#18191F] space-x-2 px-4">
              <span className=" border-b-2 border-b-[#F4511E] py-1 font-fontinter">
                list
              </span>
              <span>of properties</span>
            </p>
            <motion.button
              className="bg-[#F4511E] text-white  font-medium text-[17px]w-fit rounded-[5px] py-[20px] px-[32px] font-fontmontManrope"
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 4px 63px rgba(0,0,0,0.15)",
              }}
            >
              View All Property
            </motion.button>
          </div>

          <div className="">
            <ListCard data={images} />
            {/* <ListCard/> */}
          </div>
        </section>

        <section className=" px-4 font-fontinter">
          <div className="lg:flex justify-between items-center lg:space-x-3 ">
            <div className="basis-[50%]">
              {/* <Grid/> */}
              <img src={Grid} alt="" />
            </div>
            <div className="text-[#18191F] space-y-5 basis-[50%]">
              <h2 className="font-extrabold text-[40px] lg:w-[65%] ">
                Flexibility and options to suit your lifestyle.
              </h2>
              <p className="font-normal  text-lg lg:w-[58%] w-full">
                You need it? We got it. We make finding your next home easy,
                comfortable, and simple. From our happiness guarantee to our
                selective roommate finder option. We provide you the flexibility
                that you most desire.
              </p>
              <motion.button
                className="bg-[#F4511E] text-white  font-medium text-[17px]w-fit rounded-[5px] py-[20px] px-[32px]"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 4px 63px rgba(0,0,0,0.15)",
                }}
              >
                Search Rooms
              </motion.button>
            </div>
          </div>
        </section>

        <section className="w-full px-4 lg:px-12 py-10 bg-[] ">
          <h2 className="text-center font-fontinter  text-2xl font-medium text-black py-4">
            Your property with us and be Confident that Your Room will be Filled
            Out!
          </h2>
          <div className="rounded-[10px] shadow-xl shadow-[#E5E5E5]">
            <h2 className="text-[#F4511E] text-[25.55px] font-bold  text-center py-6 font-fontpoppins">
              Add A New Property
            </h2>
            <form
              action=""
              className="pb-4 flex flex-col justify-center items-center"
            >
              <div className="lg:grid  grid-cols-3 gap-6 justify-between items-center w-full space-y-5 lg:space-y-0 py-8 px-4">
                <div className="">
                  <label
                    htmlFor="input1"
                    className="after:content-['*'] after:text-[#F4511E] text-[#252B42] font-semibold text-base font-fontpoppins"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="input1"
                    required
                    placeholder="Enter Name"
                    className="block bg-[#F9F9F9] outline-none border-2 border-solid border-[#E6E6E6] rounded-[5px] pl-2 pr-[10rem] w-full py-[11px] mt-1"
                  />
                </div>

                {/* Second */}
                <div className="">
                  <label
                    htmlFor="input2"
                    className="after:content-['*'] after:text-[#F4511E] text-[#252B42] font-semibold text-base font-fontpoppins"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    name="input2"
                    required
                    placeholder="Enter Address"
                    className="block bg-[#F9F9F9] outline-none border-2 border-solid border-[#E6E6E6] rounded-[5px] pl-2 pr-[10rem] w-full py-[11px] mt-1"
                  />
                </div>

                {/* Third */}
                <div className="col-span-1">
                  <label
                    htmlFor="input3"
                    className="after:content-['*'] after:text-[#F4511E] text-[#252B42] font-semibold text-base font-fontpoppins"
                  >
                    Unit Number
                  </label>
                  <input
                    type="text"
                    name="input3"
                    required
                    placeholder="Enter Unit"
                    className="block bg-[#F9F9F9] outline-none border-2 border-solid border-[#E6E6E6] rounded-[5px] pl-2 pr-[10rem] w-full py-[11px] mt-1"
                  />
                </div>

                {/* Fourth */}

                <div className="col-span-1">
                  <label
                    htmlFor="input4"
                    className="after:content-['*'] after:text-[#F4511E] text-[#252B42] font-semibold text-base font-fontpoppins"
                  >
                    City
                  </label>
                  <select
                    name="input4"
                    id=""
                    required
                    className="block bg-[#F9F9F9] outline-none border-2 border-solid border-[#E6E6E6] rounded-[5px] pl-2 pr-[10rem] w-full py-[11px] mt-1"
                  >
                    <option value="">Select City</option>
                    <option value="">Uyo</option>
                    <option value="">Abuja</option>
                    <option value="">Enugu</option>
                    <option value="">Calabar</option>
                  </select>
                </div>

                {/* Fifth */}

                <div className="col-span-1">
                  <label
                    htmlFor="input5"
                    className="after:content-['*'] after:text-[#F4511E] text-[#252B42] font-semibold text-base font-fontpoppins"
                  >
                    State
                  </label>
                  <select
                    name="input5"
                    id=""
                    required
                    className="block bg-[#F9F9F9] outline-none border-2 border-solid border-[#E6E6E6] rounded-[5px] pl-2 pr-[10rem] w-full py-[11px] mt-1"
                  >
                    <option value="">Select State</option>
                    <option value="">Abia</option>
                    <option value="">Adamawa</option>
                    <option value="">Akwa Ibom</option>
                    <option value="">Adamawa</option>
                  </select>
                </div>

                {/* Sixth */}

                <div className="col-span-1">
                  <label
                    htmlFor="input6"
                    className="after:content-['*'] after:text-[#F4511E] text-[#252B42] font-semibold text-base font-fontpoppins"
                  >
                    Room Type
                  </label>
                  <select
                    name="input6"
                    id=""
                    required
                    className="block bg-[#F9F9F9] outline-none border-2 border-solid border-[#E6E6E6] rounded-[5px] pl-2 pr-[10rem] w-full py-[11px] mt-1"
                  >
                    <option value="">Room Type *</option>
                    <option value="">Single</option>
                    <option value="">Double</option>
                    <option value="">Master</option>
                  </select>
                </div>

                {/* Seventh */}

                <div className="col-span-1">
                  <label
                    htmlFor="input3"
                    className="after:content-['*'] after:text-[#F4511E] text-[#252B42] font-semibold text-base font-fontpoppins"
                  >
                    Price
                  </label>
                  <input
                    type="text"
                    name="input3"
                    required
                    placeholder="Enter Price"
                    className="block bg-[#F9F9F9] outline-none border-2 border-solid border-[#E6E6E6] rounded-[5px] pl-2 pr-[10rem] w-full py-[11px] mt-1"
                  />
                </div>

                {/* Eight */}

                <div className="col-span-1">
                  <label
                    htmlFor="input6"
                    className="after:content-['*'] after:text-[#F4511E] text-[#252B42] font-semibold text-base font-fontpoppins"
                  >
                    Room Type
                  </label>
                  <select
                    name="input6"
                    id=""
                    required
                    className="block bg-[#F9F9F9] outline-none border-2 border-solid border-[#E6E6E6] rounded-[5px] pl-2 pr-[10rem] w-full py-[11px] mt-1"
                  >
                    <option value="">Room Type *</option>
                    <option value="">Single</option>
                    <option value="">Double</option>
                    <option value="">Master</option>
                  </select>
                </div>

                {/* Ninth */}

                <div className="col-span-3">
                  <label
                    htmlFor="input9"
                    className="after:content-['*'] after:text-[#F4511E] text-[#252B42] font-semibold text-base font-fontpoppins"
                  >
                    Price
                  </label>
                  <textarea
                    name="input9"
                    id=""
                    required
                    cols="30"
                    rows="5"
                    className="block bg-[#F9F9F9] outline-none border-2 border-solid border-[#E6E6E6] rounded-[5px] pl-2 pr-[10rem] w-full py-[11px] resize-none mt-1"
                    placeholder="Enter Description"
                  ></textarea>
                </div>

                {/* tenth */}

                <div className="col-span-3">
                  <label
                    htmlFor="input1"
                    className="text-black font-semibold text-base font-fontpoppins"
                  >
                    Upload Photos
                  </label>
                  <Dropzone />
                </div>
              </div>
              <motion.button
                className="bg-[#F4511E] text-white  font-medium text-[17px]w-fit rounded-[5px] py-[20px] px-10 lg:w-[40%] font-fontinter "
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 4px 63px rgba(0,0,0,0.15)",
                }}
              >
                Add New Property
              </motion.button>
            </form>
          </div>
        </section>
        <section className="lg:flex justify-between items-center lg:pl-20 space-y-8 lg:space-y-0 bg-[rgba(244,81,30,0.07)] py-1 relative font-fontinter">
          <div className=" z-10  space-y-8 px-4 lg:pr-4 basis-1/2">
            <p className="lg:before:content-quote before:absolute before:opacity-40 before:top-14   before:z-10 z-50 font-normal text-xl text-gray-900 px-4  ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel
              pellentesque est. Curabitur at odio sit amet libero vulputate
              efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa,
              faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus
              fringilla finibus.
            </p>
            <div className="flex space-x-3 px-4">
              <img src={Harry} alt="" />
              <div>
                <p className="font-bold text-lg text-[#F4511E]">Harry Wilson</p>
                <p className=" text-base font-normal text-gray-900">
                  Property Owner
                </p>
              </div>
            </div>
          </div>
          <div className="px-4 lg:px-0 basis- basis-1/2">
            <iframe
              className="aspect-[16/9] w-full"
              src="https://www.youtube.com/embed/E4XDRVvt8dw"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope;"
              allowFullScreen
            ></iframe>
          </div>
        </section>
        <div></div>
      </main>
      <footer className="px-4  ">
        <hr className="h-[0.18rem] bg-[#F4511E]" />
        <div className=" h-[200px] lg:grid grid-cols-2 py-8 px-4 mb-8">
          <div className="flex justify-center items-center  ">
            <img src={Logo} alt="" className="bg-black opacity-30" />
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
              <div className="grid grid-cols-4 lg:grid-cols-8 gap-6 lg:gap-0 items-baseline lg:space-x-7">
                <motion.a
                  href=""
                  initial={{ x: 25 }}
                  animate={{ x: 0 }}
                  transition={{ delay: 2 }}
                >
                  <img src={Facebook} alt="Facebook-logo" />
                </motion.a>
                <motion.a
                  href=""
                  // initial={{ x: 40 }}
                  // animate={{ x: 0 }}
                  // transition={{ delay: 4 }}
                >
                  <img src={Twitter} alt="Twitter-logo" />
                </motion.a>
                <motion.a
                  href=""
                  initial={{ x: 50 }}
                  animate={{ x: 0 }}
                  transition={{ delay: 3 }}
                >
                  <img src={LinkedIn} alt="LinkedIn-logo" />
                </motion.a>
                <motion.a
                  href=""
                  // initial={{ x: 80 }}
                  // animate={{ x: 0 }}
                  // transition={{ delay: 4 }}
                >
                  <img src={Youtube} alt="Youtube-logo" />
                </motion.a>
                <motion.a
                  href=""
                  initial={{ x: 75 }}
                  animate={{ x: 0 }}
                  transition={{ delay: 4 }}
                >
                  <img src={Instagram} alt="Instagram-logo" />
                </motion.a>
                <motion.a
                  href=""
                  // initial={{ x: 120 }}
                  // animate={{ x: 0 }}
                  // transition={{ delay: 4 }}
                >
                  <img src={Googleplus} alt="Googleplus-logo" />
                </motion.a>
                <motion.a
                  href=""
                  initial={{ x: 100 }}
                  animate={{ x: 0 }}
                  transition={{ delay: 5 }}
                >
                  <img src={Pinterest} alt="Pinterest-logo" />
                </motion.a>
                <motion.a
                  href=""
                  initial={{ x: 120 }}
                  animate={{ x: 0 }}
                  transition={{ delay: 6 }}
                >
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
              <li className="ml-[12px]">Disclaimer</li>
            </a>
          </ul>
          <p className="font-normal text-xs lg:text-sm text-[#0A142F] opacity-50 ">
            Copyright &copy;{currentYear} Minimumlivingcost. All rights reserved
          </p>
        </nav>
      </footer>
    </>
  );
}
