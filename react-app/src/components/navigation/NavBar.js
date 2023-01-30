
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
    <div>
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

        <NavLink className='nb_right_home' to='/blogs' exact={true} activeClassName='active'>
          Blogs
        </NavLink>

        <NavLink className='nb_right_home' to='/profile' exact={true} activeClassName='active'>
          Profile
        </NavLink>

          <NavLink className='nb_right_home' to='/match' exact={true} activeClassName='active'>
            Match Percentage
          </NavLink>

        <NavLink className='nb_right_home' to='/about' exact={true} activeClassName='active'>
          About
        </NavLink>


        <LogoutButton className='nb_right_home' />
      </div>
      </nav>
{/* <div className='nav_github'>
        <h4>
          <a className='about_text_creater' href="https://github.com/christyx" target="_blank" rel="noopener noreferrer">
            <div className='about_iconwithtext'>
              <img className='linkedin_icon' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt='linkedin'>
              </img>
              <div>Github</div>
            </div>

          </a>
        </h4>

        <h4>
          <a className='about_text_creater' href="https://www.linkedin.com/in/zhaoyang-xiu/" target="_blank" rel="noopener noreferrer">
            <div className='about_iconwithtext'>
              <img className='linkedin_icon' src="https://cdn-icons-png.flaticon.com/512/49/49408.png" alt='linkedin'>
              </img>
              <div>LinkedIn</div>
            </div>

          </a>
        </h4>
</div> */}

    </div>

  );
}

export default NavBar;
