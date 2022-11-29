
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
    <nav className='nb_all_login'>
      <div className='nb_left_wrapper'>
        <NavLink className='nb_left_text' to='/' exact={true} activeClassName='active'>lovecupid</NavLink>
        {/* <div className='nb_left_text'>lovecupid</div> */}
      </div>
      <div className='nb_right_wrapper'>
        <NavLink className='nb_right_home' to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>

        <NavLink className='nb_right_home' to='/likes' exact={true} activeClassName='active'>
            Likes
          </NavLink>

        <NavLink className='nb_right_home' to='/profile' exact={true} activeClassName='active'>
            Profile
          </NavLink>

        <LogoutButton className='nb_right_home' />
      </div>


    </nav>
  );
}

export default NavBar;
