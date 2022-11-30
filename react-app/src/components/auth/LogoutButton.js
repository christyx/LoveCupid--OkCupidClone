import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import './auth.css'

const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return <button className='logout' onClick={onLogout}>
    <div>Logout</div>
    <i id='icon_logout' class="fa-solid fa-person-through-window"></i>

    </button>;
};

export default LogoutButton;
