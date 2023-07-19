import React from 'react';
// import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import './Header.css';
import { Avatar } from '@mui/material';
function Header() {
  return (
    <div className="header">
      <h1 className='company-name '>Logo</h1>
      <div className="headeContent">
      <NavLink to="/roadmap"><button class="px-4 py-1 text-sm font-semibold rounded-full border hover:text-white hover:border-transparent ">
         RoadMap</button></NavLink>
         <NavLink to="/"> <button className='px-4 py-1 ml-5 text-sm font-semibold rounded-full border hover:text-white hover:border-transparent  shadow-md'>
        Notes</button></NavLink>
        <NavLink className='' to="/content"> <button className='px-4 py-1 text-sm ml-5 font-semibold rounded-full border hover:text-white hover:border-transparent  shadow-md'>
          content</button> </NavLink>
        </div>
        
        <Avatar className='m-5'>A</Avatar>
    </div>
  );
}

export default Header;
