import React, { useState } from 'react';
import "./heroBanner.scss";
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const HeroBanner = () => {
  const { data, loading } = useFetch("/movie/upcoming");
  const {url} = useSelector((state)=>state.home);
  const [background , setBackground] = useState("");
  
  useEffect(() => {
        const bg =
            url.backdrop +
            data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
        setBackground(bg);
    }, [data]);

  return (
     <div className="heroBanner">
            {loading && (
                <div className="backdrop-img">
                <img src={background} alt="" />
                </div>
            )}
   </div>
  )
}

export default HeroBanner