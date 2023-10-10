import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-12 md:h-24 p-4 lg:px-20 xl:px-40 text-red-500 flex items-center justify-between">
      <Link href="/" className="capitalize font-bold text-xl">
        Massimo
      </Link>
      <p className="capitalize">all right reserved</p>
    </div>
  );
};

export default Footer;
