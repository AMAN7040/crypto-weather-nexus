import { getCryptoDetails } from "@/app/lib/api/cryptoIdApi";
import React from "react";

const page = async ({ params }) => {
  const { id } = await params;

  const coin = await getCryptoDetails(id);

  if (!coin) {
    return <div>Crypto not found</div>;
  }

  return (
    <div className="flex justify-center items-center p-4">
      <div className="flex flex-col justify-center items-center border text-white border-gray-500 p-4 rounded-lg max-w-[600px]">
        <h1 className="underline pb-4 text-xl md:text-2xl font-bold">
          {coin?.name} ({coin?.symbol.toUpperCase()}) Details
        </h1>

        <h2 className="text-sm md:text-lg font-bold bg-green-500 rounded-md p-2 my-2">
          Price: ${coin?.market_data?.current_price?.toLocaleString()}
        </h2>

        <p className="text-sm md:text-base">
          24h Change:{" "}
          <span
            className={`font-bold ${
              coin?.priceChange24h > 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {coin?.priceChange24h.toFixed(2)}%
          </span>
        </p>

        <p className="text-sm md:text-base">
          Market Cap: ${coin?.marketCap.toLocaleString()}
        </p>

        <p className="text-xs py-2 md:text-sm">
          {coin?.description || "No description available."}
        </p>
      </div>
    </div>
  );
};

export default page;
