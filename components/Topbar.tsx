"use client";

import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

// components/Topbar.tsx
const Topbar = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div
      className={`bg-[#2aa3c2] text-center relative overflow-hidden transition-all duration-500 ${
        isVisible ? "h-auto py-2.5 opacity-100" : "h-0 py-0 opacity-0"
      }`}
    >
      <h3 className="text-white text-2xl font-normal">
        LIMITED TIME OFFER! Save BIG with lower interest rates on select homes*!{" "}
        <Link href="#" className="text-white underline hover:text-[#011b47]">
          Explore All Promotions
        </Link>
      </h3>
      <button
        onClick={() => setIsVisible(false)}
        className="text-white text-sm w-5 h-5 rounded-full border-2 border-white flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-5 cursor-pointer"
      >
        <AiOutlineClose />
      </button>
    </div>
  );
};

export default Topbar;
