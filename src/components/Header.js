import foodLogo from '../../foodLogo.png';
import { useState } from 'react';

const Header = () => {

    let [btnName,setBtnName] = useState("Login");

    return (
      <div className='header'>
        <div className='logo-container'>
          <img className='logo' src={foodLogo} />
        </div>
        <div className='nav-items'>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className='login' onClick={()=>{setBtnName(btnName==="Login"?"Logout":"Login")}}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;