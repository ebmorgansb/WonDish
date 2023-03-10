import './index.css'
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import LogoutButton from '../auth/LogoutButton';
import symbol from '../../allImages/symbol.png'
import './index.css'
import CreateADishModal from '../CreateDishFilter/CreateDishFilterModal';
const NavBar = () => {
  const sessUser = useSelector(state => state.session.user)
  const [showModal, setShowModal] = useState(false);

  return (
  <>
  <div className='navAndTitle'>
    <NavLink style={{ textDecoration: 'none' }} to={'/'}>
    <div className='titleAndLogo'>
    <img className='symbolNav' src={symbol}></img>
    <div className='homeTitle1'>Home</div>
    </div>
    </NavLink>
    <div className='totalNav'>
    <nav className='navy'>
      <div className='smallNavy'>
        <CreateADishModal/>
      <NavLink className='profileLinkz' to='/restaurants' style={{ textDecoration: 'none' }} exact={true} activeClassName='active'>
    Restaurants
    </NavLink>
        { !sessUser &&
        <div>
          <NavLink className='profileLinkz' to='/login' style={{ textDecoration: 'none' }} exact={true} activeClassName='active'>
            Login
          </NavLink>
        </div>
        }
        { !sessUser &&
      // <div className='profileLinkz'>
          <NavLink className='profileLinkz' to='/sign-up' style={{ textDecoration: 'none' }} exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
      //  </div>
}
       {sessUser && <div style={{ textDecoration: 'none' }} className='profileLinkz'>
          <LogoutButton />
        </div>
       }
      </div>
    </nav>
    </div>
    </div>
    </>
  );
}

export default NavBar;
