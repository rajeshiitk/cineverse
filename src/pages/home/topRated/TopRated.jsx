import React, { useState } from 'react';
import "./topRated.scss";
import Switch from '../../../components/switch/Switch';
import Carousel from '../../../components/carousel/Carousel';
import useFetch from '../../../hooks/useFetch';

const TopRated = () => {
    const [endpoint, setEndpoint] = useState("movie");
    const {data, loading} = useFetch(`/${endpoint}/top_rated`);
const onTabChange = ()=>{
     setEndpoint(endpoint === "movie" ? "tv" : "movie");
}

  return (
    <div className='topRated'>
    <div className="top">
        <span className="carouselTitle">Top Rated</span>
        <Switch data={["Movies", "TV"]} onTabChange={onTabChange} />
    </div>
    { data &&
    <Carousel  data={data} loading={loading} endpoint={endpoint} />
    }
</div>
  )
}

export default TopRated