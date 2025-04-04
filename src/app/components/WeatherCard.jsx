import Image from "next/image";
import React from "react";

const WeatherCard = ({ city, date }) => {
  return (
    <div className="bg-[#167db5] border py-2 px-1  sm:py-1  rounded-lg shadow-md text-center max-w-[200px] sm:max-w-[500px] sm:max-h-[230px]">
      <h4 className="text-sm text-left text-black">📍{city.name}</h4>
      {city.error ? (
        <p className="text-red-500">{city.error}</p>
      ) : (
        <>
          <div className="w-full flex items-center justify-center">
            <Image
              src={city.icon}
              alt={city.condition}
              width={72}
              height={72}
              className="object-cover"
            />
          </div>
          <p className=" text-black text-xs font-light sm:text-sm py-1 sm:py-0">
            {date}
          </p>
          <p className="text-[min(4vw,34px)] font-bold text-black py-2 sm:py-1 ">
            {city.temperature}°C
          </p>
          <p className="text-[14px]  sm:text-[16px] capitalize text-black py-1 sm:py-0">
            {city.condition}
          </p>
          <p className="text-xs  sm:text-[16px]  text-black  pt-1">
            💦 Hum |<span className="font-medium"> {city.humidity}%</span>
          </p>
        </>
      )}
    </div>
  );
};

export default WeatherCard;
