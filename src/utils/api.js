const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:5000"
    : "/api";

export const getFearGreed = async () => {
  try {
    const response = await fetch(`${BASE_URL}/fear-greed`);
    return response.json();
  } catch (err) {
    console.error("API Error:", err);
    return null;
  }
};
