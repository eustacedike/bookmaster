
import '../layout.css';

import { useState, useEffect } from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useCookies } from 'react-cookie';

import axios from 'axios';


import { FaSearch } from 'react-icons/fa';

import dp from "../../../images/dp/fireboy.png";



function Navigation(props) {

  const navigate = useNavigate();


const [openMobile, setOpenMobile] = useState(false)
const openMenu = () => {setOpenMobile(value => !value)} 


  const setAuthToken = token => {
    if (token) {
      // Apply authorization token to every request if logged in
      axios.defaults.headers.common["Authorization"] = token;
    } else {
      // Delete auth header
      delete axios.defaults.headers.common["Authorization"];
    }
  };

  //   Log user out
  const logoutUser = () => {
    // Remove token from local storage
    localStorage.removeItem("jwtToken");
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to empty object {} which will set isAuthenticated to false
    window.location.reload();
  };


  const [cookies, setCookie, removeCookie] = useCookies(['user']);


  const linkStyle = {
    textDecoration: "none",
    color: "unset"
  }


  // const [blacknav, setBlacknav] = useState(false);

  // window.addEventListener("scroll", () => {
  //   if (window.pageYOffset > 10) {
  //     setBlacknav(true)
  //   } else {
  //     setBlacknav(false)
  //   }
  // })

  return (

    <header
    // style={{
    //   backgroundColor: blacknav ? "black" : "",
    //   boxShadow: blacknav ? "0px 2px 13px grey" : ""
    // }}
    >
      <div className='search'>
        <input type="search" placeholder='search...'/>
<FaSearch/>
      </div>


      <div className='header-profile'>
        <div>
          <h3>Eustace Dike</h3>
          <p>Admin</p>
          {props.corn}
        </div>
        <img src={dp}/>
      </div>
    </header>
  );
}

export default Navigation;
