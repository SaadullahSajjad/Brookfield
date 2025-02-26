"use client";
import { useState } from "react";
interface FilterPopupProps {
  togglePopup: () => void;
}

const FilterPopup: React.FC<FilterPopupProps> = ({ togglePopup }) => {
  const [dropdownOpen, setDropdownOpen] = useState<any>({});

  const toggleDropdown = (key: any) => {
    setDropdownOpen((prev: any) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="relative">
      <div className="absolute left-[48rem] top-1 w-96 h-[530px] bg-white shadow-lg overflow-scroll rounded-lg p-6 z-50">
        <div className="flex justify-between items-center border-b pb-2">
          <h3 className="text-lg font-semibold">Filters</h3>
          <button
            onClick={togglePopup}
            className="w-8 h-8 flex items-center justify-center border rounded-full"
          >
            &times;
          </button>
        </div>
        <div className="mt-4 space-y-4">
          {/* Min Price */}
          <div className="flex justify-between items-center border-b pb-4">
            <div>
              <p className="text-sm font-medium">Min Price</p>
              <button
                className="w-full px-8 py-2 mt-1 border rounded-full flex justify-between items-center"
                onClick={() => toggleDropdown("minPrice")}
              >
                <span>No Min</span>
                <span>&#9662;</span>
              </button>
              {dropdownOpen["minPrice"] && (
                <ul className="absolute w-full mt-1 bg-white shadow-md rounded-lg border">
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">
                    No Min
                  </li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">
                    $550,000
                  </li>
                </ul>
              )}
            </div>

            {/* Max Price */}
            <div>
              <p className="text-sm font-medium">Max Price</p>
              <button
                className="w-full px-8 py-2 mt-1 border rounded-full flex justify-between items-center"
                onClick={() => toggleDropdown("maxPrice")}
              >
                <span>No Max</span>
                <span>&#9662;</span>
              </button>
              {dropdownOpen["maxPrice"] && (
                <ul className="absolute w-full mt-1 bg-white shadow-md rounded-lg border">
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">
                    $600,000
                  </li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">
                    No Max
                  </li>
                </ul>
              )}
            </div>
          </div>
          {/* Beds */}
          <div className="flex justify-between items-center border-b pb-4">
            <h6 className="text-sm font-medium">Beds</h6>
            <div className="flex items-center space-x-2">
              <button className="p-2 border rounded">-</button>
              <p>Any</p>
              <button className="p-2 border rounded">+</button>
            </div>
          </div>

          {/* Baths */}
          <div className="flex justify-between items-center  border-b pb-4">
            <h6 className="text-sm font-medium">Baths</h6>
            <div className="flex items-center space-x-2">
              <button className="p-2 border rounded">-</button>
              <p>Any</p>
              <button className="p-2 border rounded">+</button>
            </div>
          </div>

          {/* Home Type */}
          <div className="border-b pb-4">
            <h6 className="text-sm font-medium">Home Type</h6>
            <div className="flex flex-wrap gap-2 mt-2">
              <button className="px-3 py-1 border rounded-full">
                Single Family Homes
              </button>
              <button className="px-3 py-1 border rounded-full">Condos</button>
              <button className="px-3 py-1 border rounded-full">
                Duplex Homes
              </button>
              <button className="px-3 py-1 border rounded-full">
                Townhomes
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4 space-y-4">
          {/* Min Price */}
          <div className="flex justify-between items-center border-b pb-4">
            <div>
              <p className="text-sm font-medium">Min Price</p>
              <button
                className="w-full px-8 py-2 mt-1 border rounded-full flex justify-between items-center"
                onClick={() => toggleDropdown("minPrice")}
              >
                <span>No Min</span>
                <span>&#9662;</span>
              </button>
              {dropdownOpen["minPrice"] && (
                <ul className="absolute w-full mt-1 bg-white shadow-md rounded-lg border">
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">
                    No Min
                  </li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">
                    $550,000
                  </li>
                </ul>
              )}
            </div>

            {/* Max Price */}
            <div>
              <p className="text-sm font-medium">Max Price</p>
              <button
                className="w-full px-8 py-2 mt-1 border rounded-full flex justify-between items-center"
                onClick={() => toggleDropdown("maxPrice")}
              >
                <span>No Max</span>
                <span>&#9662;</span>
              </button>
              {dropdownOpen["maxPrice"] && (
                <ul className="absolute w-full mt-1 bg-white shadow-md rounded-lg border">
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">
                    $600,000
                  </li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">
                    No Max
                  </li>
                </ul>
              )}
            </div>
          </div>
          {/* Availability */}
          <div>
            <h6 className="text-sm font-medium">Availability</h6>
            <div className="flex flex-wrap gap-2 mt-2">
              <button className="px-3 py-1 border rounded-full">
                Move in Now
              </button>
              <button className="px-3 py-1 border rounded-full">
                Move in Fab
              </button>
              <button className="px-3 py-1 border rounded-full">
                Move in Mar
              </button>
              <button className="px-3 py-1 border rounded-full">
                Move in Apr
              </button>
              <button className="px-3 py-1 border rounded-full">
                Move in 60+ Days
              </button>
            </div>
          </div>
          {/* Beds */}
          <div className="flex justify-between items-center border-b pb-4">
            <h6 className="text-sm font-medium">Garage/Parking</h6>
            <div className="flex items-center space-x-2">
              <button className="p-2 border rounded">-</button>
              <p>Any</p>
              <button className="p-2 border rounded">+</button>
            </div>
          </div>

          {/* Baths */}
          <div className="flex justify-between items-center  border-b pb-4">
            <h6 className="text-sm font-medium">Number of Stories</h6>
            <div className="flex items-center space-x-2">
              <button className="p-2 border rounded">-</button>
              <p>Any</p>
              <button className="p-2 border rounded">+</button>
            </div>
          </div>
          {/* Home Tours */}
          <div className="border-b pb-4">
            <h6 className="text-sm font-medium">Home Tours</h6>
            <div className="flex flex-wrap gap-2 mt-2">
              <button className="px-3 py-1 border rounded-full">
                3D Walkthrough available
              </button>
              <button className="px-3 py-1 border rounded-full">
                myTime tour available
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6 text-end">
          <button
            onClick={togglePopup}
            className="px-8 py-2 bg-[#011b47] text-white rounded-full"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterPopup;
