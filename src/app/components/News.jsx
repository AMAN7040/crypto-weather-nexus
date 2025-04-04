"use client";

import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { fetchNewsData, setNewsData } from "@/lib/store/slices/newsSlice";

const News = ({ newsData }) => {
  const dispatch = useAppDispatch();
  const { headlines, loading, error } = useAppSelector((state) => state.news);

  useEffect(() => {
    if (newsData.length > 0) {
      dispatch(setNewsData(newsData));
    }

    const interval = setInterval(() => {
      dispatch(fetchNewsData());
    }, 80000000);
    return () => clearInterval(interval);
  }, [dispatch]);

  if (loading) return <p>Loading News...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  if (!headlines || headlines.length === 0) {
    return <p>No news available.</p>;
  }

  return (
    <div className="col-span-1 sm:col-span-2 row-span-1 bg-secondary p-4 rounded-lg">
      <h2 className="text-white text-2xl p-2">𝐿𝒶𝓉𝑒𝓈𝓉 𝒩𝑒𝓌𝓈</h2>
      <div className="grid grid-cols-2 gap-2 min-h-[200px]">
        {headlines.map((newsItem) => (
          <div
            key={newsItem.title}
            className="p-4 bg-[#242424] border border-gray-700 rounded-lg shadow-lg"
          >
            <h3 className="text-white text-lg md:text-xl font-semibold truncate w-full ">
              {newsItem.title}
            </h3>
            <p className="text-gray-300 mt-2 truncate w-full">
              {newsItem.description}
            </p>
            <a
              href={newsItem.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline mt-2 block"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
