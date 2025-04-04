"use client";

import { toggleCryptoFavorite } from "@/lib/store/slices/favouriteSice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CryptoFavoriteToggle = ({ id }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.cryptos);
  const [isAnimating, setIsAnimating] = useState(false);
  const isFavorited = favorites.includes(id);

  const handleToggle = () => {
    setIsAnimating(true);
    dispatch(toggleCryptoFavorite(id));
    setTimeout(() => setIsAnimating(false), 300); // Reset animation after 300ms
  };
  return (
    <button
      onClick={handleToggle}
      className="absolute top-2 right-2"
      aria-label="Toggle Favorite"
    >
      <div
        className={`transition-transform duration-300 ease-in-out ${
          isAnimating ? "scale-125" : "scale-100"
        }`}
      >
        {isFavorited ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-red-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
                     4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 
                     3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 
                     8.5c0 3.78-3.4 6.86-8.55 
                     11.54L12 21.35z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400 hover:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
               4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 
               3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 
               8.5c0 3.78-3.4 6.86-8.55 
               11.54L12 21.35z"
            />
          </svg>
        )}
      </div>
    </button>
  );
};

export default CryptoFavoriteToggle;
