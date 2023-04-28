import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import Logo from "../assets/logo.svg";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="lg:border-b border-solid border-b-white f font-fontdmsans">
        <div className="max-w-7xl  px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-baseline lg:space-x-[13rem]">
              <div className="flex-shrink-0">
                <img className="" src={Logo} />
              </div>
              <div className="hidden md:block border-4 border-transparent">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="#"
                    className=" text-white font-medium text-lg hover:border-b-2 border-solid border-white border-"
                  >
                    Home
                  </a>

                  <a href="#" className="text-white font-medium text-lg hover:border-b-2 border-solid border-white border-
                  ">
                    Landlord
                  </a>

                  <a href="#" className="text-white font-medium text-lg hover:border-b-2 border-solid border-white border-  ">
                    Tenants
                  </a>

                  <a href="#" className="text-white font-medium text-lg hover:border-b-2 border-solid border-white ">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden bg-black opacity-50" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className=" text-white borderb-2 border-solid border-white px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </a>

                <a
                  href="#"
                  className="text-gray-300  hover:border-b-2 border-solid  border-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Landlord
                </a>

                <a
                  href="#"
                  className="text-gray-300  hover:border-b-2 border-solid border-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Tenants
                </a>

                <a
                  href="#"
                  className="text-gray-300  hover:border-b-2 border-solid border-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact Us
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
