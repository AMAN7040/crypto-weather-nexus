import React from "react";

import Head from "next/head";
import CityCard from "./components/CityCard";

const page = async () => {
  const data = [
    { name: "London", id: "london" },
    { name: "New York", id: "new-york" },
    { name: "Tokyo", id: "tokyo" },
    { name: "Paris", id: "paris" },
  ];
  return (
    <>
      <Head>
        <title>CITIES DATA - City Dashboard</title>
        <meta
          name="description"
          content="Discover the top cryptocurrencies and their live market data, including price changes, market cap, and trends."
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <main>
        <h1 className="text-lg md:text-3xl font-bold mb-10 text-center text-blue-400">
          Explore Cities
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 p-2 h-[max(calc(100vh-66px))] gap-2 lg:place-items-center">
          {data?.map((city) => (
            <CityCard key={city.id} city={city} />
          ))}
        </div>
      </main>
    </>
  );
};

export default page;
