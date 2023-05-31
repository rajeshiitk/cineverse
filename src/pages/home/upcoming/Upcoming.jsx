import React, { useState } from 'react';
import "./upcoming.scss";
import useFetch from '../../../hooks/useFetch';
import Switch from '../../../components/switch/Switch';
import Carousel from '../../../components/carousel/Carousel';
const Upcoming = () => {
    const [endpoint, setEndpoint] = useState("movie")
    const { data, loading } = useFetch(`/${endpoint}/upcoming`);

    const onTabChange = () => {
        setEndpoint(endpoint === "moive" ? "tv" : "movie");
    };

    // console.log(data);

    return (
        <div className='upcoming'>
            <div className="top">
                <span className="carouselTitle">Upcoming</span>
                <Switch data={["Movies"]} onTabChange={onTabChange} />
            </div>
            { data &&
            <Carousel  data={data} loading={loading} endpoint={endpoint} />
            }
        </div>
    )
}

export default Upcoming