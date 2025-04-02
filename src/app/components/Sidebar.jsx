import React from "react";
import Link from "next/link";

const CloseIcon = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 6L18 18M6 18L18 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const Sidebar = ({ isOpen, closeSidebar }) => {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-md transition-opacity duration-300 
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"} md:hidden`}
        onClick={closeSidebar}
      ></div>

      {/* Sidebar Panel */}
      <aside
        className={`fixed top-0 right-0 h-screen w-[80vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw] 
            flex flex-col gap-10 bg-[#121212] text-white shadow-2xl border-l border-gray-800 
            transition-transform ease-in-out duration-300 rounded-l-2xl
            ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          className=" py-3 px-6 text-gray-400 hover:text-white"
          aria-label="Close sidebar"
          onClick={closeSidebar}
        >
          <CloseIcon size={28} />
        </button>

        {/* Navigation Links */}
        <nav className="flex flex-col w-full gap-4 pt-5 px-4  font-medium">
          {[
            { name: "Dashboard", href: "/" },
            { name: "Cities", href: "/city" },
            { name: "Crypto", href: "/crypto" },
          ].map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className="group relative flex items-center w-full px-5 py-3 rounded-lg transition-colors duration-300 text-[#8B8C94] hover:text-white group-hover:text-white"
              onClick={closeSidebar}
            >
              <div className="relative z-10 ">{name}</div>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
