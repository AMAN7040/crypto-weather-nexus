import Link from "next/link";
import React from "react";

const CityCard = ({ city }) => {
  return (
    <section
      className="col-span-1 md:row-span-2 flex justify-center items-center md:p-3 h-[150px] w-[150px] place-self-center sm:h-[200px] sm:w-[200px] lg:h-[250px] lg:w-[250px] rounded-lg border border-gray-700 bg-[#1e1e21] 
        hover:bg-[#2a2a2d] transition-all duration-300 ease-in-out shadow-md hover:shadow-lg hover:scale-105 cursor-pointer "
    >
      <Link href={`/cities/${city?.name}`}>
        <h2 className="text-white text-lg sm:text-xl font-bold tracking-wide">
          {city?.name}
        </h2>
      </Link>
    </section>
  );
};

export default CityCard;
