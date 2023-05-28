import React, { useState } from 'react';
import "./trending.scss";
import useFetch from '../../../hooks/useFetch';
import Switch from '../../../components/switch/Switch';
import Carousel from '../../../components/carousel/Carousel';
const Trending = () => {
    const [endpoint, setEndpoint] = useState("day")
    const { data, loading } = useFetch(`/trending/all/${endpoint}`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Day" ? "day" : "week");
    };

    // console.log(data);

    return (
        <div className='trending'>
            <div className="top">
                <span className="carouselTitle">Trending</span>
                <Switch data={["Day", "Week"]} onTabChange={onTabChange} />
            </div>
            { data &&
            <Carousel  data={data} loading={loading} endpoint={endpoint} />
            }
        </div>
    )
}

export default Trending