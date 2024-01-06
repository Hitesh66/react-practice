import { Link } from 'react-router-dom';
import foodLogo from '../../foodLogo.png';
import { useState } from 'react';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
  let [btnName, setBtnName] = useState('Login');
  const onlineStatus = useOnlineStatus();

  return (
    <div className='flex justify-between bg-pink-100 shadow-lg'>
      <div className='logo-container'>
        <img className='w-56' src={foodLogo} />
      </div>
      <div className='flex items-center'>
        <ul className='flex p-4 m-4'>
          <li className='px-4'>Online Status : {onlineStatus ? '✅' : '❌'}</li>
          <li className='px-4'>
            <Link to={'/'}>Home</Link>
          </li>
          <li className='px-4'>
            <Link to={'/about'}>About Us</Link>
          </li>
          <li className='px-4'>
            <Link to={'/contact'}>Contact Us</Link>
          </li>
          <li className='px-4'>
            <Link to={'/grocery'}>Grocery</Link>
          </li>
          <li className='px-4'>Cart</li>
          <button
            className='login'
            onClick={() => {
              setBtnName(btnName === 'Login' ? 'Logout' : 'Login');
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
