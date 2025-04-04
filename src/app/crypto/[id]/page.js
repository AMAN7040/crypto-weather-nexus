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
        <h1 className="underline pb-4">{coin?.name} Details</h1>
        <p className="text-lg md:text-xl">{coin?.symbol.toUpperCase()}</p>
        <h2 className="text-sm md:text-lg font-bold bg-green-500 rounnded-md p-2">
          Price: ${coin?.current_price}
        </h2>
        <p className="text-xs py-2 md:text-sm">{coin?.description}</p>
      </div>
    </div>
  );
};

export default page;
