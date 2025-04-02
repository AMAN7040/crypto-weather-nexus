"use client";

import React, { useCallback, useState } from "react";
import Sidebar from "./Sidebar";

const HamburgerIcon = ({ size = 22 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width={size}
    height={size}
    className="cursor-pointer hover:bg-gray-700 rounded-md transition"
  >
    <path
      d="M3 6h18M3 12h18M3 18h18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const Hamburger = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setSidebarOpen((prev) => !prev);
  }, []);

  return (
    <div>
      <button
        className="md:hidden"
        aria-label="Open sidebar"
        onClick={toggleSidebar}
      >
        <HamburgerIcon />
      </button>
      <Sidebar isOpen={isSidebarOpen} closeSidebar={toggleSidebar} />
    </div>
  );
};

export default Hamburger;
