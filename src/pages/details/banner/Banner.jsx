import React, { useState, useTransition } from 'react';
import "./banner.scss";
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
import Img from '../../../lazyLoad/Img';
import Genre from '../../../components/genre/Genre';

const Banner = ({ mediaType, id }) => {
    const { url } = useSelector((state) => (state.home));
    // const [genres , setGenres] = useState([]);
    const { data, loading } = useFetch(`/${mediaType}/${id}`);
    console.log(data);
    // console.log(loading)
    
    const backdrop = url.backdrop + data?.backdrop_path;
    const poster = url.poster + data?.poster_path;
    console.log(poster)

    // console.log(backdrop);
    return (

        !!data && (
            <div className='details-banner'>
                <div className="backdrop">
                    <Img src={backdrop} />
                </div>
                <div className="opacity-layer">
                </div>

                <div className="main">
                    <div className="poster">
                        <Img src={poster} />
                    </div>
                    <div className="content">
                        <div className="title">
                            <h1>
                                {data.original_title || data?.original_name}
                            </h1>
                        </div>
                        <div className="overview">
                            <p>{data.overview}</p>
                        </div>
                    <div className="genres">
                        {
                          (data?.genres).map((genre)=>(
                            <div key={genre.id} >
                            <Genre id={genre.id}  genre={genre.name} />
                            </div>
                          ))
                        }
                    </div>
                    </div>
                </div>

            </div>
        )

    )
}

export default Banner