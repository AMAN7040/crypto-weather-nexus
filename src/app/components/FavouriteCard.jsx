"use client";

import { useAppSelector } from "@/lib/store/hooks";
import CoinCard from "./CoinCard";
import React, { useEffect, useState } from "react";
import { fetchCoins } from "../utils/fetchCoins";

const FavoriteCard = () => {
  const favorites = useAppSelector((state) => state.favorites.cryptos);
  const [favoriteCoins, setFavoriteCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (favorites.length === 0) {
      setFavoriteCoins([]);
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      const coins = await fetchCoins(favorites);
      setFavoriteCoins(coins);
      setLoading(false);
    };

    fetchData();
  }, [favorites]);

  if (loading)
    return <p className="text-gray-400 mt-2">Loading favorites...</p>;

  if (favoriteCoins.length === 0)
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-white"> NO FAVOURITES </p>
      </div>
    );

  return (
    <div className="mt-6">
      <h2 className="text-[15px] md:text-lg font-semibold text-blue-400 text-center">
        Your Favorites
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-3">
        {favoriteCoins.map((coin) => (
          <div
            key={coin.id}
            coin={coin}
            className="border border-white rounded-md text-center text-white"
          >
            <h3 className="text-left text-black bg-gray-50 text-sm md:textlg font-semibold w-fit px-2">
              {coin.name}
            </h3>
            <p className=" text-[15px] md:text-lg font-bold">
              {coin.symbol.toUpperCase()}
            </p>
            <div className="mt-2">
              <p className="text-lg font-bold">${coin.price.toFixed(2)}</p>
              <p
                className={`text-xs md:text-sm mt-1 ${
                  coin.change >= 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {coin.change.toFixed(2)}% 24h CHG
              </p>
              <p className="text-xs md:text-sm mt-2">
                M-CP: ${coin.marketCap.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteCard;
