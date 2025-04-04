"use client";

import { useAppDispatch } from "@/lib/store/hooks";
import { addNotification } from "@/lib/store/slices/notificationSlice";
import { useEffect, useRef } from "react";

const TRACKED_ASSETS = ["bitcoin", "ethereum"];
const THRESHOLD_PERCENTAGE = 0.001;
const RECONNECT_DELAY = 10000;

export const useCryptoWebSockets = () => {
  const prevPrices = useRef({});
  const wsRef = useRef(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let retryTimeout;

    const connectWebSocket = () => {
      if (wsRef.current && wsRef.current.readyState !== WebSocket.CLOSED) {
        return;
      }

      const ws = new WebSocket(
        `wss://ws.coincap.io/prices?assets=${TRACKED_ASSETS.join(",")}`
      );
      wsRef.current = ws;

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
              dispatch(
                addNotification({
                  type: "price_alert",
                  message: `${symbol.toUpperCase()} moved >${THRESHOLD_PERCENTAGE}% to $${newPrice.toFixed(2)}`,
                  timestamp: Date.now(),
                })
              );
            }

            prevPrices.current[symbol] = newPrice;
          });
        } catch (error) {}
      };

      ws.onerror = (err) => {
        console.error(err?.message || err);
        ws.close();
      };

      ws.onclose = (event) => {
        retryTimeout = setTimeout(connectWebSocket, RECONNECT_DELAY);
      };
    };

    connectWebSocket();

    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
      clearTimeout(retryTimeout);
    };
  }, [dispatch]);
};
