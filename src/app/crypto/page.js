import React from "react";
import { getCryptos } from "../lib/api/cryptoApi";
import Head from "next/head";
import CryptoCard from "./components/CryptoCard";

const page = async () => {
  const cryptos = await getCryptos();

  return (
    <>
      <Head>
        <title>Top Cryptocurrencies - Crypto Dashboard</title>
        <meta
          name="description"
          content="Discover the top cryptocurrencies and their live market data, including price changes, market cap, and trends."
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <main className="grid grid-cols-2 md:grid-cols-3 p-3 md:p-4 lg:grid-cols-4 grid-rows-10 h-[max(calc(100vh-66px))] gap-2 md:gap-4">
        {cryptos?.map((crypto) => (
          <CryptoCard key={crypto.id} crypto={crypto} />
        ))}
        ;
      </main>
    </>
  );
};

export default page;
