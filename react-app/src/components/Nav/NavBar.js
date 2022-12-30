import './index.css'
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import symbol from '../allImages/symbol.png'
const NavBar = () => {
  return (
  <>
  <div className='navAndTitle'>
    <NavLink style={{ textDecoration: 'none' }} to={'/'}>
    <div className='titleAndLogo'>
      <div className='homeTitle1'>WonDish</div>
    <img className='symbolNav' src={symbol}></img>
    </div>
    </NavLink>
    <div className='totalNav'>
    <nav>
      <div>
        <div>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </div>
        <div>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </div>
        <div>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </div>
        {/* <div>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </div> */}
        <div>
          <LogoutButton />
        </div>
      </div>
    </nav>
    </div>
    </div>
    </>
  );
}

export default NavBar;
