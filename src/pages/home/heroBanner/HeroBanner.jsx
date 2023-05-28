import React, { useState } from 'react';
import "./heroBanner.scss";
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
import Img from "../../../lazyLoad/Img"
import { useEffect } from 'react';

const HeroBanner = () => {
  const { data, loading } = useFetch("/movie/upcoming");
  const {url} = useSelector((state)=>state.home);
  const [background , setBackground] = useState("");
  const [movieName, setMovieName] = useState("");
  const [overview, setOverview] = useState("");
  // console.log(data);
  useEffect(() => {

    const randomData = data?.results?.[Math.floor(Math.random() * 20)]
        const bg =
            url?.backdrop +
            randomData?.backdrop_path;
            setBackground(bg);

        const  name = randomData?.original_title;
        setMovieName(name);
        const  overview = randomData?.overview;
        setOverview(overview);
    }, [data]);

    // console.log(background)

  return (
     <div className="heroBanner">
            {!loading && (
                <div className="backdrop-img">
                <Img src={background} />
                </div>
            )}
            <div className="opacity-layer"></div>

            <div className="content">
              <h1>{movieName}</h1>
              <p>{overview}</p>
            </div>

   </div>
  )
}

export default HeroBanner