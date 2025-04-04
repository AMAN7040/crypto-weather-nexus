import Link from "next/link";
import dynamic from "next/dynamic";
import React from "react";
import CryptoFavoriteToggle from "./CryptoFavoriteToggle";

const CryptoCard = ({ crypto }) => {
  return (
    <section className="relative col-span-1 row-span-1 md:row-span-2 border border-gray-600 text-center p-3 md:p-4 rounded-lg bg-[#1b1b1d] hover:bg-[#272a30] transition">
      <Link href={`/crypto/${crypto.id}`}>
        <h2 className="font-semibold text-sm md:text-lg text-blue-400 hover:underline">
          {crypto.name} ({crypto.symbol.toUpperCase()})
        </h2>
      </Link>

      <CryptoFavoriteToggle id={crypto.id} />
    </section>
  );
};

export default CryptoCard;
