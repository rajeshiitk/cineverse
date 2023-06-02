import React from 'react';
import "./movieCard.scss"
import Img from "../../../lazyLoad/Img"
import { useSelector } from 'react-redux';
import noPoster from "../../../assets/noPoster.jpg"
import { useNavigate } from 'react-router-dom';


const MovieCard = ({ poster, name, id }) => {
    const navigate = useNavigate();
    const { url } = useSelector((state) => state.home);
    // console.log(url);
    const posterPath = url.poster + poster;
    // console.log(posterPath)
    return (
        <div onClick={() =>
            navigate(
                `/movie/${id}`
            )
        } className='movieCard'>
            <div className="poster">
                <Img src={poster ? posterPath : noPoster} />
            </div>
            <div className="name">
                {name}
            </div>
        </div>
    )
}

export default MovieCard