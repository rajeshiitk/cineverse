import React from 'react';
import './header.scss'
import {BsMoonStars ,BsSearch } from "react-icons/bs"

const Header = () => {
   const bodyTag=  document.getElementById("theme");

   const themeHandler = ()=> {
    bodyTag.dataset.theme= ( bodyTag.dataset.theme === "dark" ? " " :"dark");
   }
    console.log(theme);
    return (
        <div className='header'>
            <div className='searchBar'>
            <span className='searchIcon'>
                <BsSearch />
                </span>
                <input type="text"  placeholder='Search for movies'/>
                {/* <button className='searchButton'>Search</button> */}
            </div>
            <div onClick={themeHandler} className="themeButton">
        <BsMoonStars />
            </div>

        </div>
    )
}

export default Header