"use client";

import React, { useState } from "react";
import { useCryptoWebSockets } from "../hooks/useCryptoWebSockets";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { clearNotification } from "@/lib/store/slices/notificationSlice";
import { useWeatherAlerts } from "../hooks/useWeatherAlerts";

const NotificationIcon = ({ size = 22, length, onClick }) => (
  <div className="relative" onClick={onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width={size}
      height={size}
      className="cursor-pointer hover:text-gray-300 transition-all duration-200 transform active:scale-110"
    >
      <path d="M12 2C8.69 2 6 4.69 6 8v5H4v2h16v-2h-2V8c0-3.31-2.69-6-6-6zM10 19a2 2 0 104 0h-4z" />
    </svg>
    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-3.5 h-3.5 flex items-center justify-center rounded-full">
      {length}
    </span>
  </div>
);

const Notification = () => {
  //   useCryptoWebSockets();
  useWeatherAlerts();

  const notifications = useAppSelector((state) => state.notifications.data);
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const handleClear = () => {
    setClosing(true);
    setTimeout(() => {
      dispatch(clearNotification());
      setClosing(false);
    }, 300);
  };

  const panelClasses = `
    absolute right-0 mt-2 w-72 bg-[#262625] border border-gray-200 shadow-xl rounded-xl overflow-hidden transition-all duration-300 ease-in-out
    ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
    ${closing ? "opacity-0" : ""}
  `;

  return (
    <div className="relative">
      <NotificationIcon
        length={notifications.length}
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      />
      <div className={panelClasses}>
        <div className="p-4 ">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-sm font-semibold text-white">Notifications</h4>
            {notifications.length > 0 && (
              <button
                className="text-xs text-gray-300 hover:underline"
                onClick={handleClear}
              >
                Clear All
              </button>
            )}
          </div>

          {notifications.length === 0 ? (
            <p className="text-white- text-sm text-center py-4">
              No notifications
            </p>
          ) : (
            <div className="min-h-64 max-h-80 overflow-y-auto transition-all duration-300 ease-in-out">
              <ul className="h-full">
                {notifications.map((note, index) => (
                  <li
                    key={index}
                    className="px-2 py-2 bg-transparent rounded-md border-b border-gray-300 text-xs"
                  >
                    <p
                      className={` ${note.type === "weather_alert" ? "text-red-500" : ""} font-normal`}
                    >
                      {note.message}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notification;
