"use client";

import { useAppDispatch } from "@/lib/store/hooks";
import { addNotification } from "@/lib/store/slices/notificationSlice";
import { useEffect, useRef } from "react";

const TRACKED_ASSETS = ["bitcoin", "ethereum"];
const THRESHOLD_PERCENTAGE = 0.001;

export const useCryptoWebSockets = () => {
  const prevPrices = useRef({});
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ws = new WebSocket(
      `wss://ws.coincap.io/prices?assets=${TRACKED_ASSETS.join(",")}`
    );

    ws.onopen = () => {};

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);

        Object.entries(data).forEach(([symbol, priceStr]) => {
          const newPrice = parseFloat(priceStr);
          if (isNaN(newPrice)) return;

          const prevPrice = prevPrices.current[symbol];
          const hasMoved =
            prevPrice &&
            Math.abs(newPrice - prevPrice) / prevPrice >
              THRESHOLD_PERCENTAGE / 100;

          if (hasMoved) {
            const payload = {
              type: "price_alert",
              message: `${symbol.toUpperCase()} moved >${THRESHOLD_PERCENTAGE}% to $${newPrice.toFixed(2)}`,
              timestamp: Date.now(),
            };
            dispatch(addNotification(payload));
          }

          prevPrices.current[symbol] = newPrice;
        });
      } catch (err) {}
    };

    ws.onerror = (err) => {};

    ws.onclose = (e) => {};

    return () => {
      if (ws.readyState === WebSocket.OPEN) ws.close();
    };
  }, [dispatch]);
};
