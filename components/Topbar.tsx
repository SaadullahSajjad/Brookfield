"use client";

import Link from "next/link";

// components/Topbar.tsx
const Topbar = () => {
  return (
    <div className="bg-[#2aa3c2] py-2.5 text-center relative">
      <h3 className="text-white text-2xl font-normal">
        LIMITED TIME OFFER! Save BIG with lower interest rates on select homes*!{" "}
        <Link href="#" className="text-white underline hover:text-[#011b47]">
          Explore All Promotions
        </Link>
      </h3>
      <i className="fas fa-times text-white text-sm w-5 h-5 rounded-full border-2 border-white flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-5 cursor-pointer"></i>
    </div>
  );
};

export default Topbar;
