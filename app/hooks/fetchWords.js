import axios from "axios";
import { useEffect, useState } from "react";

const fetchWords = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const { data } = await axios.get(
        `https://raw.githubusercontent.com/alphacrash/database/main/study/words.json`
      );
      setData(data);
    } catch (error) {
      alert("There is an error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default fetchWords;
