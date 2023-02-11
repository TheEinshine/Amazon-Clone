import React from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";
import Cart from "./Cart";
import Login from "./Login";
import Orders from "./Orders";
import SearchBar from "./SearchBar";


const Navbar = () => {
  let location = 'Location';
  let amazonLogo = ('http://pngimg.com/uploads/amazon/amazon_PNG11.png');
  return (
    
    <div>
      <nav>
        <ul id="list">
        <Link to="/">
        <li><img id="amazon-logo" src={amazonLogo} alt="logo" /></li>
        </Link>
          <li><p>Deliver to <br /> <img id="location" src="https://icon-library.com/images/location-icon-png-white/location-icon-png-white-15.jpg" alt=""/>
          {location}</p></li>
          <br/>
          <li><SearchBar/></li>
          <br />
          <li>ENG<select  id="ENG">
            <option value=""></option>
            <option value="ENG">ENG</option>
            <option value="RUS">RUS</option>
          </select></li>
          <Login />
          <Orders/>
          <br />
          <li><Cart/></li>
          
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;