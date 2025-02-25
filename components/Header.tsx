"use client";

import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [selectedTab, setSelectedTab] = useState("#tabs-1");
  return (
    <header className="bg-white z-10">
      <div className="py-[18px] px-[36px]">
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex items-center">
            <Link href="#">
              <img src="/images/logo.png" alt="Logo" className="max-w-full" />
            </Link>
          </div>
          <div className="w-[498px]">
            <form
              action="#"
              className="flex items-center py-[16px] px-[4px] border border-[#a7a7a7] rounded-[30px] bg-white transform translate-x-[27%]"
            >
              <div className="relative w-[calc(100%-36px)]">
                <input
                  type="text"
                  placeholder="Find Your Home"
                  className="text-[18px] font-semibold text-[#6a6a6a] bg-white border-none pl-[30px] pr-[15px] w-[calc(100%-56px)]"
                />
                <i className="fa-solid fa-location-dot text-[#2aa3c2] text-[18px] absolute top-[50%] left-0 transform translate-y-[-50%]" />
              </div>
              <button
                type="submit"
                className="w-[36px] h-[36px] rounded-full flex items-center justify-center bg-[#47bad7] border-none"
              >
                <i className="fa-solid fa-magnifying-glass text-[#012a5e] text-[16px]" />
              </button>
            </form>
          </div>
          <div>
            <ul className="flex items-center">
              <li>
                <a
                  href="#"
                  className="text-[20px] font-semibold text-[#001629] ml-[40px] hover:text-[#2aa3c2]"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[20px] font-semibold text-[#001629] ml-[40px] hover:text-[#2aa3c2]"
                >
                  Where we build
                </a>
              </li>
              <li>
                <a href="#" className="ml-[40px]">
                  <img
                    src="images/hamburger.png"
                    alt="Menu"
                    className="max-w-full"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="py-[10px] px-[36px]">
        <div className="flex items-center">
          <div className="flex items-center space-x-[4px]">
            {/* <ul className="flex items-center p-[3px] rounded-[8px] border border-[#aab1b7]">
              <li>
                <a href="#tabs-1" className="text-[14px] font-normal text-[#003666] px-[16px] py-[8px] rounded-[8px] flex items-center justify-center hover:bg-[#edf5fa]">Quick Move-In <span className="ml-[6px] text-[10px] font-medium text-[#011b47] bg-[#edf5fa] px-[6px] py-[4px] rounded-[8px]">2</span></a>
              </li>
              <li>
                <a href="#tabs-2" className="text-[14px] font-normal text-[#003666] px-[16px] py-[8px] rounded-[8px] flex items-center justify-center hover:bg-[#edf5fa]">Floor Plans <span className="ml-[6px] text-[10px] font-medium text-[#011b47] bg-[#edf5fa] px-[6px] py-[4px] rounded-[8px]">4</span></a>
              </li>
            </ul> */}
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
          <div className="ml-auto">
            <ul className="flex items-center">
              <li>
                <a className="text-[14px] font-normal text-[#003666] py-[8px] px-[12px] rounded-[8px] cursor-pointer border border-[#aab1b7] mr-[12px]">
                  Price Range
                </a>
              </li>
              <li>
                <a className="text-[14px] font-normal text-[#003666] py-[8px] px-[12px] rounded-[8px] cursor-pointer border border-[#aab1b7] mr-[12px]">
                  Beds & Baths
                </a>
              </li>
              <li>
                <a className="text-[14px] font-normal text-[#003666] py-[8px] px-[12px] rounded-[8px] cursor-pointer border border-[#aab1b7] mr-[12px]">
                  Home Type
                </a>
              </li>
              <li>
                <a className="text-[14px] font-normal text-[#003666] py-[8px] px-[12px] rounded-[8px] cursor-pointer border border-[#aab1b7] mr-[12px]">
                  Square Feet
                </a>
              </li>
              <li>
                <a className="text-[14px] font-normal text-[#003666] py-[8px] px-[12px] rounded-[8px] cursor-pointer border border-[#aab1b7] mr-[12px]">
                  Availability
                </a>
              </li>
              <li>
                <a className="text-[14px] font-normal text-[#003666] py-[8px] px-[12px] rounded-[8px] cursor-pointer border border-[#aab1b7] mr-[12px]">
                  {/* <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                    <circle cx="9.5" cy="14.75" r="2" stroke="currentColor"></circle>
                    <rect x="4.25" y="14.5" width="3.5" height="0.5" rx="0.25" stroke="currentColor" strokeWidth="0.5"></rect>
                    <rect x="13.75" y="14.5" width="6" height="0.5" rx="0.25" stroke="currentColor" strokeWidth="0.5"></rect>
                    <circle cx="15.5" cy="8.5" r="2" stroke="currentColor"></circle>
                    <rect x="17.25" y="8.25" width="2.5" height="0.5" rx="0.25" stroke="currentColor" strokeWidth="0.5"></rect>
                    <rect x="4.25" y="8.25" width="9.5" height="0.5" rx="0.25" stroke="currentColor" strokeWidth="0.5"></rect>
                  </svg> */}
                  More Filters
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
