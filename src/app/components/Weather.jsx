"use client";

import React, { Suspense, useEffect } from "react";
import WeatherCard from "./WeatherCard";
import greeting from "../utils/weatherGreetings";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import {
  fetchWeatherData,
  setInitialWeather,
} from "@/lib/store/slices/weatherSice";

const Weather = ({ initialData }) => {
  const dispatch = useAppDispatch();
  const { data, error, loading } = useAppSelector((state) => state.weather);
  const greet = greeting();

  useEffect(() => {
    if (initialData.length > 0) {
      dispatch(setInitialWeather(initialData));
    }

    const interval = setInterval(() => {
      dispatch(fetchWeatherData());
    }, 108000000);

    return () => clearInterval(interval);
  }, [dispatch]);

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  if (loading) return <p className="text-white">Loading weather data...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  if (!data || data.length === 0) {
    return <p className="text-gray-500">No data available.</p>;
  }
  

  return (
    <section className="col-span-1 row-span-1 sm:col-span-1 sm:row-span-3 bg-secondary border border-gray-800 sm:min-w-[280px] rounded-lg gap-y-2 animate-fade-in-right delay-500">
      <h2 className="text-xl font-bold text-white text-left p-6 animate-fade-in-right delay-500">{greet}</h2>
      <div className="grid grid-rows-1 grid-cols-3 sm:grid-cols-1 sm:grid-row-3 gap-2 sm:gap-3 px-2 sm:px-4 animate-fade-in-right delay-600">
        {data?.map((city) => (
          <WeatherCard city={city} date={formattedDate} key={city?.name} />
        ))}
      </div>
    </section>
  );
};

export default Weather;
