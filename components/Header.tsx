"use client";

import Link from "next/link";
import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import FilterPopup from "./FilterPopup";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => setIsOpen(!isOpen);
  const [selectedTab, setSelectedTab] = useState("#tabs-1");
  console.log(isOpen);
  return (
    <>
      <header className="bg-white z-10">
        <div className="py-[18px] px-[36px]">
          <div className="flex items-center justify-between flex-wrap">
            <div className="flex items-center">
              <Link href="#">
                <Image
                  src="/images/logo.png"
                  width={100}
                  height={50}
                  alt="Logo"
                  className="max-w-full"
                ></Image>
              </Link>
            </div>
            <div className="w-[498px]">
              <form
                action="#"
                className="flex items-center py-[6px] px-[4px] border border-[#a7a7a7] rounded-[30px] bg-white transform translate-x-[27%]"
              >
                <FaMapMarkerAlt className="text-3xl ml-4" />
                <div className="relative w-[calc(100%-36px)]">
                  <input
                    type="text"
                    placeholder="Find Your Home"
                    className="text-[18px] font-semibold text-[#6a6a6a] bg-white border-none pl-[30px] pr-[15px] w-[calc(100%-56px)]"
                  />
                </div>
                <button
                  type="submit"
                  className=" p-2 rounded-full flex items-center justify-center bg-[#47bad7] border-none"
                >
                  <IoMdSearch className="text-3xl" />
                </button>
              </form>
            </div>
            <div>
              <ul className="flex items-center gap-6 justify-between">
                <li>
                  <a
                    href="#"
                    className="text-[20px] font-semibold text-[#001629] hover:text-[#2aa3c2]"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[20px] font-semibold text-[#001629] hover:text-[#2aa3c2]"
                  >
                    Where we build
                  </a>
                </li>
                <li>
                  <GiHamburgerMenu className="text-3xl cursor-pointer" />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="py-[10px] px-[36px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-[4px]">
              <ul className="flex items-center p-[3px] rounded-[8px] border border-[#aab1b7]">
                <li>
                  <a
                    href="#tabs-1"
                    onClick={() => setSelectedTab("#tabs-1")}
                    className={`text-[14px] font-normal px-[16px] py-[8px] rounded-[8px] flex items-center justify-center ${
                      selectedTab === "#tabs-1"
                        ? "bg-[#011b47] text-white"
                        : "text-[#003666] hover:bg-[#edf5fa]"
                    }`}
                  >
                    Quick Move-In
                    <span className="ml-[6px] text-[10px] font-medium text-[#011b47] bg-[#edf5fa] px-[6px] py-[4px] rounded-[8px]">
                      2
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#tabs-2"
                    onClick={() => setSelectedTab("#tabs-2")}
                    className={`text-[14px] font-normal px-[16px] py-[8px] rounded-[8px] flex items-center justify-center ${
                      selectedTab === "#tabs-2"
                        ? "bg-[#011b47] text-white"
                        : "text-[#003666] hover:bg-[#edf5fa]"
                    }`}
                  >
                    Floor Plans
                    <span className="ml-[6px] text-[10px] font-medium text-[#011b47] bg-[#edf5fa] px-[6px] py-[4px] rounded-[8px]">
                      4
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex items-center">
                <li>
                  <a className="text-[14px] font-normal text-[#003666] py-[8px] px-[12px] rounded-[8px] cursor-pointer border border-[#aab1b7] mr-[12px] hover:bg-[#011b47] hover:text-white transition-all duration-500">
                    Price Range
                  </a>
                </li>
                <li>
                  <a className="text-[14px] font-normal text-[#003666] py-[8px] px-[12px] rounded-[8px] cursor-pointer border border-[#aab1b7] mr-[12px] hover:bg-[#011b47] hover:text-white transition-all duration-500">
                    Beds & Baths
                  </a>
                </li>
                <li>
                  <a className="text-[14px] font-normal text-[#003666] py-[8px] px-[12px] rounded-[8px] cursor-pointer border border-[#aab1b7] mr-[12px] hover:bg-[#011b47] hover:text-white transition-all duration-500">
                    Home Type
                  </a>
                </li>
                <li>
                  <a className="text-[14px] font-normal text-[#003666] py-[8px] px-[12px] rounded-[8px] cursor-pointer border border-[#aab1b7] mr-[12px] hover:bg-[#011b47] hover:text-white transition-all duration-500">
                    Square Feet
                  </a>
                </li>
                <li>
                  <a className="text-[14px] font-normal text-[#003666] py-[8px] px-[12px] rounded-[8px] cursor-pointer border border-[#aab1b7] mr-[12px] hover:bg-[#011b47] hover:text-white transition-all duration-500">
                    Availability
                  </a>
                </li>
                <li>
                  <a
                    onClick={togglePopup}
                    className="text-[14px] font-normal text-[#003666] py-[8px] px-[12px] rounded-[8px] cursor-pointer border border-[#aab1b7] mr-[12px] hover:bg-[#011b47] hover:text-white transition-all duration-500"
                  >
                    More Filters
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <button className="bg-[#2aa3c2] text-white text-xl font-normal px-3 py-1 rounded-full hover:bg-[#011b47] hover:text-white transition-all duration-500">
                Contact our Team
              </button>
            </div>
          </div>
        </div>
      </header>
      {isOpen && <FilterPopup togglePopup={togglePopup} />}
    </>
  );
};

export default Header;
