"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/lib/store/hooks";
import { addNotification } from "@/lib/store/slices/notificationSlice";

const cities = ["London", "New York", "Tokyo", "Mumbai", "Sydney", "Delhi", "Bengaluru"];

const randomAlert = () => {
  const city = cities[Math.floor(Math.random() * cities.length)];
  const alerts = [
    `Heavy rain expected in ${city}`,
    `Temperature spike in ${city}`,
    `Storm warning for ${city}`,
    `High wind speeds detected in ${city}`,
  ];
  return alerts[Math.floor(Math.random() * alerts.length)];
};

export const useWeatherAlerts = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      const message = randomAlert();
      dispatch(
        addNotification({
          type: "weather_alert",
          message,
          timestamp: Date.now(),
        })
      );
    }, 15000);

    return () => clearInterval(interval);
  }, [dispatch]);
};
