"use client";
// components/Planarea.tsx
import React, { useState } from "react";
import Image from "next/image";
import { IoMdHome } from "react-icons/io";
import { RiHomeGearFill } from "react-icons/ri";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Planarea: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const properties = [
    {
      image: "/images/plan-04.jpg",
      description: "Front Garage Conventional Collection • Purcell 24",
      address: "1066 Grantham Drive NW",
      location: "Edmonton, AB T6M 0T8",
      type: "Single Family",
      size: "1,884 ft²",
      bedrooms: 3,
      bathrooms: 3,
      price: "$587,649",
    },
    {
      image: "/images/plan-03.jpg",
      description: "Modern Living Collection • Aspen 32",
      address: "2045 Maple Ridge Dr SE",
      location: "Calgary, AB T2X 1Y7",
      type: "Townhouse",
      size: "1,540 ft²",
      bedrooms: 2,
      bathrooms: 2,
      price: "$459,999",
    },
  ];

  return (
    <div className="flex justify-between mt-5 rounded-lg shadow-md">
      {/* Left Section */}
      <div className="flex flex-col rounded-lg w-auto h-[500px] overflow-scroll bg-[#edf5fa]">
        <div
          className={`flex bg-[#011b47] transition-all duration-1000 ${
            isExpanded ? "h-[100vh]" : "h-[32vh]"
          }`}
        >
          <div className="overflow-hidden">
            <Image
              src={"/images/details-01.jpg"}
              alt="Community Details"
              width={200}
              height={550}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="px-4 py-2 w-auto h-[100%] bg-[#011b47]">
            <div className="flex text-sm text-white mt-2 mb-2">
              <span className="mr-1 cursor-pointer">Home</span>
              <span className="mx-1">&gt;</span>
              <span className="mr-1 cursor-pointer text-center">
                Edmonton and Area
              </span>
              <span className="mx-1">&gt;</span>
              <span className="mr-1 cursor-pointer">Edmonton</span>
              <span className="mx-1">&gt;</span>
              <span className="font-semibold cursor-pointer text-gray-500 hover:text-white transition-all duration-500">
                Parkland
              </span>
            </div>
            <h2 className=" flex justify-start gap-2 items-center text-xl font-semibold text-white mb-2">
              Parkland Community{" "}
              <span
                className="text-xl cursor-pointer text-center"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </h2>
            <div className="flex space-x-2 mb-8">
              <button className="bg-white hover:bg-[#2aa3c2] hover:text-white transition-all duration-500 text-sm text-[#011b47] font-normal py-1 px-6 rounded-full">
                Request Information
              </button>
              <button
                style={{ border: "1px solid white" }}
                className="bg-transparent hover:bg-[#2aa3c2] hover:text-white transition-all duration-500 text-sm text-white font-normal py-1 px-6 rounded-full"
              >
                View Community Page
              </button>
            </div>
            <p className="text-[#edf5fa] font-bold mb-3">
              A West-End Community You Know and Love
            </p>
            <p className="font-normal text-[#edf5fa] mb-3">
              Single Family Homes from{" "}
              <span className="text-[#edf5fa]">$581,367</span>
            </p>
            <p className="font-normal text-[#edf5fa]">
              <span className="font-normal text-white">Amenities:</span> Bike
              Trail, Park, Pathways, Pond
            </p>
          </div>
        </div>
        {/* New Section: Filter by Collection and Card */}
        <div className="mt-6">
          <div className="p-4 mb-8">
            <p className="text-lg font-semibold text-gray-800 mb-4">
              Filter by Collection in Parkland Community
            </p>
            <div>
              <div
                className="flex items-center rounded-full w-[60%] p-1"
                style={{ border: "1px solid #e5e7eb" }}
              >
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={"/images/plan-02.jpg"}
                    alt="Collection"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-[#00275a]">
                    Front Garage Conventional Collection
                  </h3>
                  <p className="text-sm text-gray-600">Single Family Homes</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid #e5e7eb" }} className="px-2">
            <div className="flex items-center justify-between mt-8 mb-8 text-sm text-gray-500 pb-2">
              <span className="font-semibold text-[#00275a]">
                2 quick move-in Homes
                <span className="font-normal"> in or near search area</span>
              </span>
              <span>
                Sort:
                <select className="bg-transparent">
                  <option value="Price high to low">Price high to low</option>
                  <option value="Price high to low">Price low to high</option>
                  <option value="Price high to low">Move in Date</option>
                  <option value="Price high to low">
                    Home size high to low
                  </option>
                  <option value="Price high to low">
                    Home size low to high
                  </option>
                </select>
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            {properties.map((property, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-2xl p-4 flex w-full mx-2"
              >
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src={property.image}
                    width={200}
                    height={200}
                    alt="House"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="pt-3 pl-2">
                  <p className="text-gray-500 text-xs">
                    {property.description}
                  </p>
                  <div className="flex items-center space-x-4 text-gray-600 text-sm py-2">
                    <h2 className="text-sm font-bold text-gray-800">
                      {property.address}
                    </h2>
                    <p className="text-sm text-gray-500">{property.location}</p>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-600 text-sm py-2">
                    <div className="flex items-center">
                      <IoMdHome className="w-5 h-5 mr-1" />
                      <span>{property.type}</span>
                    </div>
                    <div className="flex items-center">
                      <RiHomeGearFill className="w-5 h-5 mr-1" />
                      <span>{property.size}</span>
                    </div>
                    <div className="flex items-center">
                      <FaBed className="w-5 h-5 mr-1" />
                      <span>{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <FaBath className="w-5 h-5 mr-1" />
                      <span>{property.bathrooms}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between space-x-4 text-gray-600 text-sm py-2">
                    <button className="bg-[#2aa3c2] transition-all duration-500 hover:bg-[#011b47] text-white text-sm font-semibold py-1 px-2 rounded-lg">
                      Move in Now
                    </button>
                    <p className="text-gray-800 font-light text-sm">
                      Priced at <br />
                      <span className="text-[#011b47] font-bold">
                        {property.price}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <footer className="bg-[#1D395F] text-white text-sm p-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 justify-between gap-4 border-b border-white pb-4">
                <div>
                  <Image src="/images/white-logo.png" alt="white logo" width={100} height={200}></Image>
                </div>
                <div>
                  <ul className="space-y-1">
                    <li>
                      <a href="#">My Brookfield</a>
                    </li>
                    <li>
                      <a href="#">Investor & Media Relations</a>
                    </li>
                    <li>
                      <a href="#">About Brookfield</a>
                    </li>
                    <li>
                      <a href="#">Sitemap</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-1">
                    <li>
                      <a href="#">Privacy</a>
                    </li>
                    <li>
                      <a href="#">Terms</a>
                    </li>
                    <li>
                      <a href="#">
                        Your Privacy Choices
                        <img src="images/plan-05.png" alt=""></img>
                      </a>
                    </li>
                    <li>
                      <a href="#">Accessibility</a>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4 text-xs leading-relaxed">
                Pricing (including monthly pricing), dimensions, and square
                footage are approximate and provided for informational purposes
                only. Certain prices reflect selections applied to the room
                shown, and may or may not apply to other areas or rooms shown
                throughout the home. Availability (including the availability of
                construction materials and homes), designs, specifications,
                dimensions, square footage, features, prices, financing, terms,
                incentives, materials, amenities, and options may vary, may not
                be available, and are subject to change without notice or
                obligation. For example, front windows and porches may vary with
                elevation, and room measurements may be shown from the inside
                face of drywall. All photos, renderings, and other depictions
                are for illustration purposes only and may include elements that
                are for display purposes only. Brookfield Residential does not
                discriminate against any class of persons protected by federal,
                state, local, or provincial law. Models and lifestyle photos do
                not reflect racial or ethnic preference. Certain properties in
                certain jurisdictions have age restrictions for residents. No
                information or material on our site is an offer to sell a unit
                or real property and, in certain jurisdictions, an offer can
                only be made after filing a disclosure statement. Contact a
                local Brookfield Residential representative for more details.
              </p>
              <p className="mt-4 text-xs">
                Brookfield Residential is a licensed real estate broker, CA DRE
                license nos. 01996804 and 02515368.
              </p>
              <p className="mt-2 text-xs">
                &copy; 2025 Brookfield Residential Properties LLC. All rights
                reserved. No permission or license is granted to reproduce any
                image, information, or design.
              </p>
              <p className="mt-2 text-xs">
                4906 Richard Road SW, Calgary, AB, T3E 6L1
                www.brookfieldresidential.com
              </p>
            </div>
          </footer>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 rounded-lg">
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2347.5458669742434!2d-1.118943805814781!3d53.95757365784423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48793118634af5ed%3A0x85afd3b871736ee3!2sGrantham%20Dr%2C%20Holgate%2C%20York%2C%20UK!5e0!3m2!1sen!2sbd!4v1740202210724!5m2!1sen!2sbd"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Planarea;
