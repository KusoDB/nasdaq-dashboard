import React, { useEffect, useState } from "react";
import { getFearGreed } from "../utils/api";

const FearGreed = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getFearGreed().then((data) => setData(data));
  }, []);

  return (
    <div className="p-4 bg-purple-200 rounded-lg">
      <h2 className="text-lg font-bold">Fear & Greed Index</h2>
      {data ? (
        <p className="text-2xl">
          {data.now.value} - {data.now.valueText}
        </p>
      ) : (
        <p>データがありません。</p>
      )}
    </div>
  );
};

export default FearGreed;
