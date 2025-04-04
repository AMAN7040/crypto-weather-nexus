import React from "react";
import Link from "next/link";
import Image from "next/image";
import Hamburger from "./Hamburger";
import Notification from "./Notification";

const Navbar = () => {
  return (
    <header className="shadow-md z-50 w-full flex justify-center h-16">
      <nav className="w-[92%] flex items-center justify-between py-4  ">
        <div className="my-auto w-1/3">
          <Link
            href="/"
            aria-label="Home"
            className="text-white flex items-center gap-2 text-[max(2.2vw,25px)]"
          >
            <Image
              src="/CWN_Logo.png"
              alt="Logo"
              width={46}
              height={46}
              priority
            />
            ℂ𝕎ℕ
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
            href="/cities"
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
          <Notification />
          <Hamburger />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
