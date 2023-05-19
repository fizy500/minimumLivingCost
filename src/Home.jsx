import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import Banner from "./assets/banner.png";
import Search from "./assets/search.svg";
import Harry from "./assets/harry.png";
import Grid from "./assets/grid.png";
import { LivingCostData } from "./LivingCostdata";
import { nigerianStatesData } from "./nigerianStatesData";
import Card from "./Components/Card";
import ListCard from "./Components/ListCard";
import CityMap from "./Components/CityMap";
import Nav from "./Components/NavBar";
import Footer from "./Components/Footer";
import { InView, useInView } from "react-intersection-observer";
import MainForm from "./Components/MainForm";
const currentYear = new Date().getFullYear();

export default function Homepage() {
  const Data = LivingCostData.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  const [images, setImages] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://realtor.p.rapidapi.com/properties/v3/get-photos",
      params: {
        property_id: "<REQUIRED>",
      },
      headers: {
        "X-RapidAPI-Key": "41f5bce1b9mshe25f7fd03051e14p15e8dcjsn6863100211b1",
        "X-RapidAPI-Host": "realtor.p.rapidapi.com",
      },
    };

    async function getUser() {
      try {
        const response = await axios.get(options);
      } catch (error) {
        console.error(error);
      }
      setImages(response);
    }
    // getUser();
  }, []);

  const { ref, inView } = useInView();
  const animation = useAnimation();
  const animation2 = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          // type: "spring",
          duration: 2,
          bounce: 0.3,
        },
      });
      animation2.start({
        x: 0,
        transition: {
          // type: "spring",
          duration: 2,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({ x: 25 });
      animation2.start({ x: -25 });
    }
  }, [inView]);

  return (
    <>
      <div className='lg:px-8 bg-hero  bg-cover bg-center pb-10 h-max '>
        <Nav />
        <div className='lg:flex  justify-between items-center lg:px-8 mt-40 lg:space-y-0 space-y-10  '>
          <div>
            <p className='font-bold text-white  lg:text-[52px] lg:w-[75%] px-2 font-fontinter'>
              The most affordable place to stay in the san francisco bay area
            </p>
          </div>
          <div className=' space-y-3 flex  flex-col justify-center '>
            <div className='space-y-6  px-2 flex  flex-col justify-center items-center'>
              {/* Map here */}
              {/* <CityMap /> */}
              <div className='lg:h-[400px] h-[300px] w-[98%] lg:w-[408px]  rounded-lg shadow-lg  shadow-[rgba(0,0,0,0.25)] bg-white opacity-50'>
                <MapContainer
                  center={[51.505, -0.09]}
                  zoom={5}
                  scrollWheelZoom={false}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                  />
                  <Marker position={[5.038963, -7.90947]}>
                    <Popup>
                      A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>

              <div className='bg-white border-solid border-[#E6E6E6] rounded-[10px] py-2'>
                {/* First Select */}
                <div className='px-2'>
                  <form className='flex  lg:px-4 overflow-hidden font-fontpoppins  '>
                    <select
                      name='input4'
                      id=''
                      className=' bg-[#F9F9F9] outline-none border-2 border-solid border-[#E6E6E6] rounded-tl-[5px] rounded-bl-[5px] px-3  lg:px-5 py-[11px]  font-medium text-[#252B42]     '
                    >
                      <option value=''>All Type</option>
                      <option value=''>Uyo</option>
                      <option value=''>Abuja</option>
                      <option value=''>Enugu</option>
                      <option value=''>Calabar</option>
                    </select>
                    {/* Second select */}
                    <select
                      name='input4'
                      id=''
                      className=' bg-[#F9F9F9] outline-none border-2 border-solid border-[#E6E6E6] px-3  lg:px-5   py-[11px]  font-medium text-[#252B42]'
                    >
                      <option value=''>Neighborhood</option>
                      <option value=''>Uyo</option>
                      <option value=''>Abuja</option>
                      <option value=''>Enugu</option>
                      <option value=''>Calabar</option>
                    </select>
                    <button className='bg-[#23A6F0] border border-solid border-[#E6E6E6]  rounded-tr-[5px] rounded-br-[5px] py-4 px-6 lg:py-2 lg:px-3'>
                      <img src={Search} alt='' className='' />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className='my-20 flex flex-col justify-center items-center'>
        <div className='px-4 lg:pl-20 self-start'>
          <h2 className='capitalize text-xl font-extrabold text-[#18191F] space-x-2 font-fontinter'>
            <span className='border-b-2 border-b-[#F4511E] py-1'>
              minimum living cost
            </span>
            <span>takes care of everything</span>
          </h2>
        </div>

        <section className='flex flex-col lg:flex-row justify-center  items-center mb-10 px-4 lg:px-8 '>
          <div className=''>
            <img src={Banner} alt='' />
          </div>

          <div className='grid grid-cols-2 lg:grid-cols-3 justify-center items-center px-10 gap-10'>
            {Data}
          </div>
        </section>

        <section className='bg-[#F5F5F5] space-y-20 py-10 flex flex-col justify-center items-center w-full'>
          <div className='flex flex-col lg:flex-row justify-between w-full px-20 space-y-8 lg:space-y-0'>
            <p className='capitalize text-xl font-extrabold text-[#18191F] space-x-2 px-4'>
              <span className=' border-b-2 border-b-[#F4511E] py-1 font-fontinter'>
                list
              </span>
              <span>of properties</span>
            </p>
            <motion.button
              className='bg-[#F4511E] text-white  font-medium text-[17px]w-fit rounded-[5px] py-[20px] px-[32px] font-fontmontManrope'
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 4px 63px rgba(0,0,0,0.15)",
              }}
            >
              View All Property
            </motion.button>
          </div>

          <div className=''>
            <ListCard data={images} />
            {/* <ListCard/> */}
          </div>
        </section>

        <section className=' px-4 font-fontinter'>
          <div
            className='lg:flex justify-between items-center lg:space-x-3 '
            ref={ref}
          >
            <motion.div className='basis-[50%]' animate={animation}>
              {/* <Grid/> */}
              <img src={Grid} alt='' />
            </motion.div>
            <motion.div
              className='text-[#18191F] space-y-5 basis-[50%]'
              animate={animation2}
            >
              <h2 className='font-extrabold text-[40px] lg:w-[65%] '>
                Flexibility and options to suit your lifestyle.
              </h2>
              <p className='font-normal  text-lg lg:w-[58%] w-full'>
                You need it? We got it. We make finding your next home easy,
                comfortable, and simple. From our happiness guarantee to our
                selective roommate finder option. We provide you the flexibility
                that you most desire.
              </p>
              <motion.button
                className='bg-[#F4511E] text-white  font-medium text-[17px]w-fit rounded-[5px] py-[20px] px-[32px]'
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 4px 63px rgba(0,0,0,0.15)",
                }}
              >
                Search Rooms
              </motion.button>
            </motion.div>
          </div>
        </section>

        <section className='w-full px-4 lg:px-12 py-10 bg-[] '>
          <h2 className='text-center font-fontinter  text-2xl font-medium text-black py-4'>
            Your property with us and be Confident that Your Room will be Filled
            Out!
          </h2>
          <div className='rounded-[10px] shadow-xl shadow-[#E5E5E5]'>
            <h2 className='text-[#F4511E] text-[25.55px] font-bold  text-center py-6 font-fontpoppins'>
              Add A New Property
            </h2>
            <MainForm />
          </div>
        </section>
        <section className='lg:flex justify-between items-center lg:pl-20 space-y-8 lg:space-y-0 bg-[rgba(244,81,30,0.07)] py-1 relative font-fontinter'>
          <div className=' z-10  space-y-8 px-4 lg:pr-4 basis-1/2'>
            <p className='lg:before:content-quote before:absolute before:opacity-40 before:top-14   before:z-10 z-50 font-normal text-xl text-gray-900 px-4  '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel
              pellentesque est. Curabitur at odio sit amet libero vulputate
              efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa,
              faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus
              fringilla finibus.
            </p>
            <div className='flex space-x-3 px-4'>
              <img src={Harry} alt='' />
              <div>
                <p className='font-bold text-lg text-[#F4511E]'>Harry Wilson</p>
                <p className=' text-base font-normal text-gray-900'>
                  Property Owner
                </p>
              </div>
            </div>
          </div>
          <div className='px-4 lg:px-0 basis- basis-1/2'>
            <iframe
              className='aspect-[16/9] w-full'
              src='https://www.youtube.com/embed/E4XDRVvt8dw'
              frameBorder='0'
              allow='accelerometer; autoplay; encrypted-media; gyroscope;'
              allowFullScreen
            ></iframe>
          </div>
        </section>
        <div></div>
      </main>
      <Footer />
    </>
  );
}
