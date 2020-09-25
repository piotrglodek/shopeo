import { request } from 'graphql-request';
import { useState, useEffect } from 'react';

export const useFetchProducts = (url, query) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const { products } = await request(url, query);
        setData(products);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, [url, query]);

  return [data, isLoading];
};
