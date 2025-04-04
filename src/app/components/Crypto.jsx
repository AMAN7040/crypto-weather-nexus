// components/Crypto.js

"use client";

import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { fetchCoinData, setInitialData } from "@/lib/store/slices/coinSlice";
import React, { useEffect } from "react";
import CoinCard from "./CoinCard"; 

const Crypto = ({ coins }) => {
  const dispatch = useAppDispatch();
  const { data, error, loading } = useAppSelector((state) => state.coins);

  useEffect(() => {
    if (coins.length > 0) {
      dispatch(setInitialData(coins));
    }

    const interval = setInterval(() => {
      dispatch(fetchCoinData());
    }, 60000); 

    return () => clearInterval(interval);
  }, [dispatch]);

  if (loading) return <p className="text-white">Loading Coins data...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  if (!data || data.length === 0) {
    return <p className="text-gray-500">No data available.</p>;
  }

  return (
    <div className="col-span-1 row-span-1 sm:col-span-2 sm:row-span-2 bg-secondary border border-gray-800 rounded-lg px-2 py-3 md:p-4 min-h-[450px]">
      <div className="flex sm:flex-col">
        <div className="grid grid-rows-3 grid-cols-1  sm:grid-cols-3 gap-2 sm:gap:4">
          {data.map((coin) => (
            <CoinCard coin={coin} key={coin.name} />
          ))}
        </div>
        <div>AAAA</div>
      </div>
    </div>
  );
};

export default Crypto;
