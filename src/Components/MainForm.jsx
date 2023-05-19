import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
// import Dropzone from "react-dropzone";
// import Dropzone from "./Components/Dropzone";
import Dropzone from "./Dropzone";
import { nigerianStatesData } from "../nigerianStatesData";

export default function MainForm(props) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [unit, setUnit] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [roomType, setRoomType] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(state);
    console.log(onsubmit);
    console.log(description);
  };
  const select = nigerianStatesData.map((displayState) => {
    // console.log(displayState);
    return (
      <option key={displayState.state.id} value={displayState.state.name}>
        {displayState.state.name.toUpperCase()}
      </option>
    );
  });
  // console.log(name);

  return (
    <form
      onSubmit={onsubmit}
      className='pb-4 flex flex-col justify-center items-center'
    >
      <div className='lg:grid  grid-cols-3 gap-6 justify-between items-center w-full space-y-5 lg:space-y-0 py-8 px-4'>
        <div className=''>
          <label
            htmlFor='input1'
            className="after:content-['*'] after:text-[#F4511E] text-[#252B42] font-semibold text-base font-fontpoppins"
          >
            Name
          </label>
          <input
            type='text'
            name='input1'
            value={name}
            required
            placeholder='Enter Name'
            onChange={(event) => setName(event.target.value)}
            className='block bg-[#F9F9F9] outline-none border-2 border-solid border-[#E6E6E6] rounded-[5px] pl-2 pr-[10rem] w-full py-[11px] mt-1'
          />
        </div>
        {/* Second */}
        <div className=''>
          <label
            htmlFor='input2'
            className="after:content-['*'] after:text-[#F4511E] text-[#252B42] font-semibold text-base font-fontpoppins"
          >
            Address
          </label>
          <input
            type='text'
            name='input2'
            value={address}
            required
            placeholder='Enter Address'
            onChange={(event) => setAddress(event.target.value)}
            className='block bg-[#F9F9F9] outline-none border-2 border-solid border-[#E6E6E6] rounded-[5px] pl-2 pr-[10rem] w-full py-[11px] mt-1'
          />
        </div>
        {/* Third */}
        <div className='col-span-1'>
          <label
            htmlFor='input3'
            className="after:content-['*'] after:text-[#F4511E] text-[#252B42] font-semibold text-base font-fontpoppins"
          >
            Unit Number
          </label>
          <input
            type='text'
            name='input3'
            value={unit}
            required
            placeholder='Enter Unit'
            onChange={(event) => setUnit(event.target.value)}
            className='block bg-[#F9F9F9] outline-none border-2 border-solid border-[#E6E6E6] rounded-[5px] pl-2 pr-[10rem] w-full py-[11px] mt-1'
          />
        </div>
        {/* Fourth */}
        <div className='col-span-1'>
          <label
            htmlFor='input4'
            className="after:content-['*'] after:text-[#F4511E] text-[#252B42] font-semibold text-base font-fontpoppins"
          >
            City
          </label>
          <select
            name='input4'
            id='input4'
            value={city}
            required
            onChange={(event) => setCity(event.target.value)}
            className='block bg-[#F9F9F9] outline-none border-2 border-solid border-[#E6E6E6] rounded-[5px] pl-2 pr-[10rem] w-full py-[11px] mt-1'
          >
            <option value=''>Select City</option>
            {/* <option value='Uyo'>{state}</option> */}
            {select}
            {/* <option value='Abuja'>Abuja</option>
                <option value='Enugu'>Enugu</option>
                <option value='Calabar'>Calabar</option> */}
          </select>
        </div>
        <div className='col-span-1'>
          <label
            htmlFor='input6'
            className="after:content-['*'] after:text-[#F4511E] text-[#252B42] font-semibold text-base font-fontpoppins"
          >
            Room Type
          </label>
          <select
            name='input6'
            id='input6'
            value={roomType}
            required
            onChange={(event) => setRoomType(event.target.value)}
            className='block bg-[#F9F9F9] outline-none border-2 border-solid border-[#E6E6E6] rounded-[5px] pl-2 pr-[10rem] w-full py-[11px] mt-1'
          >
            <option value='Room Type'>Room Type</option>
            <option value='Single'>Single</option>
            <option value='Double'>Double</option>
            <option value='Master'>Master</option>
          </select>
        </div>
        {/* Fifth */}
        {/* Sixth */}
        {/* Seventh */}
        <div className='col-span-1'>
          <label
            htmlFor='input3'
            className="after:content-['*'] after:text-[#F4511E] text-[#252B42] font-semibold text-base font-fontpoppins"
          >
            Price
          </label>
          <input
            type='text'
            name='input3'
            value={price}
            required
            placeholder='Enter Price'
            onChange={(event) => setPrice(event.target.value)}
            className='block bg-[#F9F9F9] outline-none border-2 border-solid border-[#E6E6E6] rounded-[5px] pl-2 pr-[10rem] w-full py-[11px] mt-1'
          />
        </div>
        {/* Eight */}
        <div className='col-span-1'>
          <label
            htmlFor='input6'
            className="after:content-['*'] after:text-[#F4511E] text-[#252B42] font-semibold text-base font-fontpoppins"
          >
            Room Type
          </label>
          <select
            name='input6'
            id=''
            required
            className='block bg-[#F9F9F9] outline-none border-2 border-solid border-[#E6E6E6] rounded-[5px] pl-2 pr-[10rem] w-full py-[11px] mt-1'
          >
            <option value=''>Room Type</option>
            <option value='Single'>Single</option>
            <option value='Double'>Double</option>
            <option value='Master'>Master</option>
          </select>
        </div>
        {/* Ninth */}
        <div className='col-span-3'>
          <label
            htmlFor='input9'
            className="after:content-['*'] after:text-[#F4511E] text-[#252B42] font-semibold text-base font-fontpoppins"
          >
            Description
          </label>
          <textarea
            name='input9'
            id='input9'
            value={description}
            required
            cols='30'
            rows='5'
            onChange={(event) => setDescription(event.target.value)}
            className='block bg-[#F9F9F9] outline-none border-2 border-solid border-[#E6E6E6] rounded-[5px] pl-2 pr-[10rem] w-full py-[11px] resize-none mt-1'
            placeholder='Enter Description'
          ></textarea>
        </div>
        {/* tenth */}
        <div className='col-span-3'>
          <label
            htmlFor='input1'
            className='text-black font-semibold text-base font-fontpoppins'
          >
            Upload Photos
          </label>
          <Dropzone />
        </div>
      </div>
      <motion.button
        className='bg-[#F4511E] text-white  font-medium text-[17px]w-fit rounded-[5px] py-[20px] px-10 lg:w-[40%] font-fontinter '
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 4px 63px rgba(0,0,0,0.15)",
        }}
      >
        Add New Property
      </motion.button>
    </form>
  );
}
