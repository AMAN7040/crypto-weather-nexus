// components/CoinCard.js

import React from "react";

const CoinCard = ({ coin }) => {
  return (
    <div className="col-span-1 row-span-3 bg-transparent min-h-[130px]  px-2 py-1 sm:py-4 sm:px-1 sm:min-h-[180px] md:min-h-[150px] md:p-4 rounded-lg shadow-lg border border-gray-100  transition-shadow duration-300  sm:max-w-[300px] text-white text-center hover:animate-border hover:border-transparent  hover:shadow-xl hover:[background:linear-gradient(45deg,#212120,theme(colors.slate.900)_50%,#212120)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] ">
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
  );
};

export default CoinCard;
