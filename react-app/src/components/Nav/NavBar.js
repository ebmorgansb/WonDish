import './index.css'
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import symbol from '../../allImages/symbol.png'
const NavBar = () => {
  const sessUser = useSelector(state => state.session.user)

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
        { !sessUser &&
        <div className='profileLinkz'>
          <NavLink to='/login' style={{ textDecoration: 'none' }} exact={true} activeClassName='active'>
            Login
          </NavLink>
        </div>
        }
        { !sessUser &&
      <div className='profileLinkz'>
          <NavLink to='/sign-up' style={{ textDecoration: 'none' }} exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
       </div>
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
