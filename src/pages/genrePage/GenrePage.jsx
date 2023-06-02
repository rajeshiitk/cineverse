import React, { useEffect, useState } from 'react';
import "./genrePage.scss";
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import MovieCard from './movieCard/MovieCard';

const GenrePage = () => {
    const {genre, genreId} = useParams();
    const [movieList, setMovieList] = useState([])
    // fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=12', options)
    // /search/collection?query=${genreName}&include_adult=false&language=en-US&page=1

  const {data,loading} = useFetch(`/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}`);
  console.log(genreId);
  // console.log(data);
 useEffect(() => {
  setMovieList(data?.results);
 },[data,genreId]);
 console.log(movieList);

  return (
    <div className='genrePage'>
    { movieList && 
       movieList.map((movie)=> (
        
         <MovieCard key={movie.id} poster={movie.poster_path} name={movie.original_title} id={movie.id}  />
       ))
    }
    </div>
  )
}

export default GenrePage