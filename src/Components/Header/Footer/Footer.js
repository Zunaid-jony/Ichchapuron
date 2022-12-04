import React from "react";
import { Link } from "react-router-dom";

import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  return (
    <div>
      <div className="bg-[#a2adb1] text-left ml-auto mr-auto text-white max-w-[1536px]">
        <div className="p-10 bg-[#61dafb]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
              <div className="mb-5">
                <h4 className="text-2xl pb-4 text-white">
                  <img style={{width:"18%"}} src="https://templates.iqonic.design/datum/html/assets/images/logo-dark.png"
                      alt="Easywire logo"/ > 
                </h4>
                <p className="text-white ">
                  The Best of the Best Through a combination of automation and
                  manual curation our moderation team selects the highest
                  quality listings on the market. <br />
                  <p className="mt-4">
                    {" "}
                    ICCHPORIN- The best of the Best
                    <br />
                  </p>
                  {/* <strong>Email:</strong>info@gmail.com <br /> */}
                </p>
              </div>
              <div className="mb-5 ml-8">
                <h4 className="pb-4 text-white "> Contact us</h4>
                <p className="text-white">Dhaka</p>
                <p className="text-white"> Phone: 01601699671 </p>
                <p className="text-white"> Email: damigari@gmail.com</p>
               
              </div>
              <div className="mb-5">
                <h4 className="text-white">Our Services</h4>
                <ul className="text-white">
                  <li>
                    One Search, Unlimited Potential We give you back your
                    valuable time by creating one source for all premium
                    listings, eliminating the need to visit multiple dealers or
                    agents to find exactly what you are looking for.
                  </li>
                </ul>
              </div>
              <div className="mb-5">
                <h4 className="pb-4 text-white">Join Our Newsletter</h4>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  dolore aliquid minima facere quisquam!
                </p>
                <form action="flex flex-row flex-wrap">
                  <br />
                  <input
                    type="text"
                    className="text-gray-500 w-2/3 p-2 focus:border-yellow-500 border border-white "
                    placeholder="jony@gmail.com"
                    id=""
                  />
                  <button className="p-2 w-1/3 p-2 bg-[#4d6391] text-white hover:bg-yellow-500 ">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="" />

      <div className="w-full bg-[#61dafb] text-gray-500 px-10 max-w-[1536px] ml-auto mr-auto">
        <div className="max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-between items-center">
          <div className="text-center">
            <div>
              Copyright{" "}
              <strong>
                <span>Iccheporin</span>
              </strong>{" "}
              All Rights Reserved
            </div>
            <div>
              Designed by{" "}
              <Link className="text-yellow-500" to="/home">
                Jony
              </Link>
            </div>
          </div>

          <div className="text-center text-xl text-white mb-2">
            <Link
              to=""
              className="w-10 h-10 rounded-full bg-[#4d6391] hover:bg-white hover:text-black mx-1 inline-block pt-1"
            >
              <FaFacebookF className="ml-auto mr-auto  mt-1.5"></FaFacebookF>{" "}
            </Link>
            <Link
              to=""
              className="w-10 h-10 rounded-full bg-[#4d6391] hover:bg-white hover:text-black mx-1 inline-block pt-1"
            >
              <AiOutlineTwitter className="ml-auto mr-auto  mt-1.5"></AiOutlineTwitter>{" "}
            </Link>
            <Link
              to=""
              className="w-10 h-10 rounded-full bg-[#4d6391] hover:bg-white hover:text-black mx-1 inline-block pt-1"
            >
              <AiOutlineInstagram className="ml-auto mr-auto  mt-1.5"></AiOutlineInstagram>{" "}
            </Link>
            <Link
              to=""
              className="w-10 h-10 rounded-full  bg-[#4d6391] hover:bg-white hover:text-black mx-1 inline-block pt-1"
            >
              <FaLinkedinIn className="ml-auto mr-auto  mt-1.5"></FaLinkedinIn>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
