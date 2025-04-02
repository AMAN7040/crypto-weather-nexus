import React from "react";
import Link from "next/link";
import Image from "next/image";
import Hamburger from "./Hamburger";

const NotificationIcon = ({ size = 22 }) => (
  <div className="relative">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width={size}
      height={size}
      className="cursor-pointer hover:text-gray-300 transition-all duration-200 transform active:scale-110 "
    >
      <path d="M12 2C8.69 2 6 4.69 6 8v5H4v2h16v-2h-2V8c0-3.31-2.69-6-6-6zM10 19a2 2 0 104 0h-4z" />
    </svg>
    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-3.5 h-3.5 flex items-center justify-center rounded-full">
      3
    </span>
  </div>
);

const Navbar = () => {
  return (
    <header className="shadow-md z-50 w-full flex justify-center h-16">
      <nav className="w-[92%] flex items-center justify-between py-4  ">
        <div className="my-auto w-1/3">
          <Link href="/" aria-label="Home">
            <Image
              src="/CWN_Logo.png"
              alt="Logo"
              width={46}
              height={46}
              priority
            />
          </Link>
        </div>

        <div className="hidden md:flex justify-around space-x-8  min-w-[400px] w-1/4 text-[min(3vw,16px)]">
          <Link
            href="/"
            className="hover:text-white active:text-red-600 transition-all font-medium"
          >
            DASHBOARD
          </Link>
          <Link
            href="/city"
            className="hover:text-white active:text-red-600  transition-all font-medium"
          >
            CITIES
          </Link>
          <Link
            href="/crypto"
            className="hover:text-white  active:text-red-600 transition-all font-medium"
          >
            CRYPTO
          </Link>
        </div>

        <div className="flex items-center justify-between w-1/7 md:w-1/3 md:justify-end">
          <NotificationIcon />
          <Hamburger />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
