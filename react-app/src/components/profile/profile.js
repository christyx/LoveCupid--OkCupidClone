import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './profile.css'

function Profile() {

  const currentuser = useSelector(state => state.session.user);

  return (
    <div className='userpage_wrapper'>

      <img src={currentuser.image}
        alt='userImage'
        className="userpage_image"
      />
      <h3 className='userpage_name'>{currentuser.firstname}</h3>
    </div>
  );
}
export default Profile;
