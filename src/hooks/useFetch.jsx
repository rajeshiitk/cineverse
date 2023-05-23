import React from 'react'
import fetchDataFromApi from '../utils/Api'
import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDataFromApi(url).then((res) => {
      setLoading("loading.....");
      setData(res);
    }).catch(() => {
      setLoading(false);
      setError("Something went wrong!");
    });
  }, [url]);

  return { data, loading, error};
}

export default useFetch;