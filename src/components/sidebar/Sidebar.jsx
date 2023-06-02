import React, { useEffect, useState } from 'react'
import fetchDataFromApi from '../../utils/api';
import { useRef } from 'react';
import './sidebar.scss';
import useFetch from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';


const Sidebar = () => {

  const [genres, setGenres] = useState([]);
  const [genreId, setGenreId] = useState(99);
  const navigate = useNavigate();

  useEffect(() => {
    fetchDataFromApi("/genre/movie/list").then((res) => {
      // console.log(res.genres);
      setGenres(res.genres)
    })
   
  }, [])

  // const {data,loading} = useFetch(`/search/collection?query=${genreName}&include_adult=false&language=en-US&page=1`);
  // console.log(data);
const clickHandler = () =>{
    navigate(`genre/${genreId}`)
}


  return (
    <div  className='sidebar'>
      <div className='logo' onClick={()=> (navigate("/"))}>Cineverse</div>
      {
        genres.map((genre) => (
          <div key={genre.id} className='genre' onClick={() => {clickHandler() ;setGenreId(genre.id); }} >    {genre.name}</div>
        ))
      }

    </div>
  )

}

export default Sidebar;