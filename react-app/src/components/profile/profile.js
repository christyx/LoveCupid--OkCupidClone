import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile, createUserProfile } from '../../store/session'
import './profile.css'
import CreateProfile from './createProfile'
import UpdateProfile from './updateProfile'
import DeleteProfile from './deleteProfile'

function Profile() {
  const dispatch = useDispatch()
  const currentuser = useSelector(state => state.session.user);

  useEffect(() => {
    dispatch(getUserProfile(currentuser.id))
  }, [dispatch, currentuser.id])

  const profile = useSelector(state => state.session.profile)

  if (!profile) {
    return (
      <div className='userpage_wrapper'>
        <img src={currentuser.image}
          alt='userImage'
          className="userpage_image"
          onError={e => { e.currentTarget.src = "your_image_not_found_defalt_picture_here"; }}
        />
        <div>
          <h3 className='profile_name'>Name: {currentuser.firstname}</h3>
          {/* <button to='/profile/add'>Add A Profile</button> */}
          <NavLink to='/profile/add' className='profile_add'>Add Profile</NavLink>
        </div>
      </div>
    );
  }

  return (
    <div className='userpage_wrapper'>
      <img src={currentuser.image}
        alt='userImage'
        className="userpage_image"
      />
      <div>
        <h3 className='userpage_name'>Name: {currentuser.firstname}</h3>
        <h4>Age: {profile.age}</h4>
        <h4>Hometown: {profile.hometown}</h4>
        <h4>Work: {profile.work}</h4>
        <h4>Bio: {profile.bio}</h4>
      </div>
      <UpdateProfile />
      <DeleteProfile />
    </div>
  );
}
export default Profile;
