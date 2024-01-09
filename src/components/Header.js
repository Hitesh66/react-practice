import { Link } from 'react-router-dom';
import foodLogo from '../../foodLogo.png';
import { useState,useContext } from 'react';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {
  let [btnName, setBtnName] = useState('Login');
  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);

//   console.log(dataContext);

const cartItems = useSelector((store)=>store.cart.items);

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
          <li className='px-4 font-bold text-l'>
          <Link to={'/cart'}>Cart ({cartItems.length})</Link>
          </li>
          <button
            className='login'
            onClick={() => {
              setBtnName(btnName === 'Login' ? 'Logout' : 'Login');
            }}
          >
            {btnName}
          </button>
          <li className='px-4 font-bold'>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
