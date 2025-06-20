import { useEffect, useState } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    const fetchApiData = async () => {
      setIsloading(true);

      const response = await fetch(url);
      if (response.ok) {
        const result = await response.json();
        setData(result);
      } else {
        console.error("response is not ok");
      }

      setIsloading(false);
    };
    fetchApiData();
  }, [url]);

  return { data, isLoading, setData};
};

export default useFetchData;
