import Link from "next/link";
import React from "react";

const CryptoCard = ({crypto}) => {
  return (
    <section className="col-span-1 row-span-1 md:row-span-2 border border-gray-600 text-center p-3 md:p-4 rounded-lg">
      <Link href={`/crypto/${crypto?.id}`}>
        <h2 className="font-semibold text-sm md:text-lg text-blue-600 hover:underline">
          {crypto?.name} ({crypto?.symbol.toUpperCase()})
        </h2>
        <h3 className="text-xs md:text-sm">{crypto?.name}</h3>
      </Link>
    </section>
  );
};

export default CryptoCard;
