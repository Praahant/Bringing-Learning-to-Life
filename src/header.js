import React from 'react';
// import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import './Header.css';
import { Avatar } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import top100Films from './ProblemList';
import FullScreenDialog from './Dialogbox';
import companyLogo from './image/logo5.png';

function Header() {
  return (
    <div className="header">
      <div className="headeContent">
      <img className='company-name' src={companyLogo}/>
      <NavLink to="/roadmap"><button className="hbtn px-4 py-1 ml-5 text-sm font-semibold rounded-full border hover:text-white hover:border-transparent  shadow-md">
         RoadMap</button></NavLink>
         <NavLink to="/draw"> <button className='hbtn px-4 py-1 ml-5 text-sm font-semibold rounded-full border hover:text-white hover:border-transparent  shadow-md'>
        Notes</button></NavLink>
        <NavLink className='' to="/content"> <button className='hbtn px-4 py-1 text-sm ml-5 font-semibold rounded-full border hover:text-white hover:border-transparent  shadow-md'>
          content</button> </NavLink>
        </div>
        {/* <Autocomplete
        className='mt-2'
      color="primary"
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 200 }}
      renderInput={(params) => <TextField {...params} label="Questions" />}
    /> */}
    <div className='headeravatar'>
        <Avatar className='m-5'>A</Avatar>
    </div>
    </div>
  );
}

export default Header;
