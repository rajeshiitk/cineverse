import React, { useState } from 'react';
import './header.scss'
import {BsMoonStars ,BsSearch } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.png";

const Header = () => {
    const [query ,setQuery] = useState("");
    const navigate = useNavigate();

   const bodyTag=  document.getElementById("theme");
//    console.log(query);

   const themeHandler = ()=> {
    bodyTag.dataset.theme= ( bodyTag.dataset.theme === "dark" ? " " :"dark");
   }

   const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
        navigate(`/search/${query}`);
    }
};
    // console.log(theme);
    return (
        <div className='header'>
        <div onClick={() =>{navigate("/")}} className="logoImg">
            <img src={logo} alt="" />
        </div>
            <div className='searchBar'>
            <span className='searchIcon'>
                <BsSearch />
                </span>
                <input  onChange={(e) => setQuery((e.target.value))} onKeyUp={searchQueryHandler} type="text"  placeholder='Search for movies'/>
                {/* <button className='searchButton'>Search</button> */}
            </div>
            <div onClick={themeHandler} className="themeButton">
        <BsMoonStars />
            </div>

        </div>
    )
}

export default Header