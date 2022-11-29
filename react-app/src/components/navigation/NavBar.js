
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './navigation.css';
import LogoutButton from '../auth/LogoutButton';

const NavBar = () => {
  const user = useSelector(state => state.session.user);

  if (!user) {
    return (
      <div className='nb_all'>

        <div className='nb_left_wrapper'>
          <NavLink className='nb_left_text' to='/' exact={true} activeClassName='active'>lovecupid</NavLink>
          {/* <div className='nb_left_text'>lovecupid</div> */}
        </div>
        <div className='nb_right_wrapper'>
          <div className='nb_right_text'>Have an account?</div>
          <NavLink className='nb_right_signin' to='/login' exact={true} activeClassName='active'>
            Sign In
          </NavLink>
        </div>
      </div>
    )
  }


  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
