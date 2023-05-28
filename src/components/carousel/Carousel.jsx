import React from 'react';
import "./carousel.scss";
import Card from './card/Card';
import Img from '../../lazyLoad/Img';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { Navigate, useNavigate } from 'react-router-dom';

const Carousel = ({ data, loading, endpoint, }) => {
  const navigate = useNavigate();
  const { url } = useSelector((state) => (state.home));
  // console.log(data.results);
  return (
    <div className="carousel">
      <div className="left"></div>
      {
        !loading ? (
          <div className="cards">
            {
              (data.results).map((item) => {
                const poster = item.poster_path
                  ? url.poster + item.poster_path
                  : PosterFallback;
                console.log(poster);

                return (
                  <div
                    key={item.id}
                    className="carouselItem"
                    onClick={() =>
                      navigate(
                        `/${item.media_type || endpoint}/${item.id
                        }`
                      )
                    }
                  >
                    <div className="posterBlock">
                      <Img src={poster} />
                      {/* <CircleRating
                        rating={item.vote_average.toFixed(
                          1
                        )}
                      /> */}
                      {/* <Genres
                        data={item.genre_ids.slice(0, 2)}
                      /> */}
                    </div>
                    <div className="textBlock">
                      <span className="title">
                        {item.title || item.name}
                      </span>
                      <span className="date">
                        {dayjs(item.release_date || item.first_air_date).format(
                          "MMM D, YYYY"
                        )}
                      </span>
                    </div>
                  </div>
                );
              })

            }

          </div>
        ) : (<div>loading</div>)
      }
      <div className="right"></div>
    </div>
  )
}

export default Carousel