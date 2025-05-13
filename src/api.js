// src/api.js

const API_BASE_URL = "http://localhost:5000/api";

export const fetchMarketData = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/market-data`);
    if (!response.ok) throw new Error("Failed to fetch market data");
    return await response.json();
  } catch (error) {
    console.error("Error in fetchMarketData:", error);
    return null;
  }
};

export const fetchFearGreed = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/fear-greed`);
    if (!response.ok) throw new Error("Failed to fetch Fear & Greed data");
    return await response.json();
  } catch (error) {
    console.error("Error in fetchFearGreed:", error);
    return null;
  }
};

export const fetchNdxChange = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/ndx-change`);
    if (!response.ok) throw new Error("Failed to fetch NDX Change data");
    return await response.json();
  } catch (error) {
    console.error("Error in fetchNdxChange:", error);
    return null;
  }
};
