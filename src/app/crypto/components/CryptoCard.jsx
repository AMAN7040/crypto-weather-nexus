import Link from "next/link";
import dynamic from "next/dynamic";
import React from "react";
import CryptoFavoriteToggle from "./CryptoFavoriteToggle";

const CryptoCard = ({ crypto }) => {
  return (
    <section className="group relative col-span-1 row-span-1 md:row-span-2 border border-gray-600 text-center p-3 md:p-4 rounded-lg bg-[#1b1b1d] hover:bg-[#272a30] transition hover:scale-[1.1] hover:z-1 hover:border-0 ">
      <div className="absolute inset-0 border-2 border-blue-400 rotate-[10deg] transition-all duration-300 ease-in-out opacity-0 group-hover:rotate-0 group-hover:inset-1  group-hover:opacity-[1] pointer-events-none"></div>
      <Link href={`/crypto/${crypto.id}`}>
        <h2 className="font-semibold text-sm md:text-lg text-blue-400 hover:underline hover:z-30">
          {crypto.name} ({crypto.symbol.toUpperCase()})
        </h2>
      </Link>

      <CryptoFavoriteToggle id={crypto.id} />
    </section>
  );
};

export default CryptoCard;
