import { useState, useEffect } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchApiData = async () => {
      setIsLoading(true);

      const response = await fetch(url);
      if (response.ok) {
        const result = await response.json();
        setData(result);
      } else {
        console.error("response is not ok");
      }

      setIsLoading(false);
    };

    fetchApiData();
  }, [url]);

  return { data, isLoading };
};

export default useFetchData;
