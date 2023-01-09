import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../store/session';

const LogoutButton = () => {
  const dispatch = useDispatch()
  // csdjod
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return <NavLink to={'/'}><button className='profileLinkz' onClick={onLogout}>Logout</button></NavLink>;
};

export default LogoutButton;
