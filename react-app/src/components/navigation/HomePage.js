import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './navigation.css';

const HomePage = () => {
  const user = useSelector(state => state.session.user);

  if (!user) {
    return (
      <div className='hp_body_wrapper'>
        <div className='hp_h1_wrapper'>
          <h1>DATING FOR EVERY SINGLE PERSON</h1>

        </div>
        <div className='hp_h2_wrapper'>
          <h2 className='hp_h2'>On LoveCupid, you're more than just a photo. You </h2>
          <h2 className='hp_h2'>have stories to tell and passions to share, and</h2>
          <h2 className='hp_h2'>things to talk about that are more interesting than</h2>
          <h2 className='hp_h2'>the weather. </h2>
          <h2 className='hp_h2'>You deserve to find who you're looking for.</h2>
          <h2 className='hp_h2'>Meet them today!</h2>
        </div>
        {/* <div> */}
          <NavLink className='hp_join' to='/sign-up' exact={true} activeClassName='active'>
            JOIN LOVECUPID
          </NavLink>
        {/* </div> */}

      </div>
    )
  }

  return (
    <div>
      My home page now
    </div>
  )
}

export default HomePage;
