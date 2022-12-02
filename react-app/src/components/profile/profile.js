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
          onError={e => { e.currentTarget.src = "https://static.vecteezy.com/system/resources/previews/005/129/844/original/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg" }}
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
        alt='userImageh'
        className="userpage_image"
        onError={e => { e.currentTarget.src = "https://static.vecteezy.com/system/resources/previews/005/129/844/original/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg" }}
      />
      <div>
        <h3 className='userpage_name'>Name: {currentuser.firstname}</h3>
        <h4>Age: {profile.age}</h4>
        <h4>Hometown: {profile.hometown}</h4>
        <h4>Work: {profile.work}</h4>
        <h4>Bio: {profile.bio}</h4>
      </div>
      <div className='profile_uandd'>
        <NavLink to='/profile/edit' className='profile_add'>Update Profile</NavLink>
        {/* <UpdateProfile /> */}
        <DeleteProfile />
      </div>

    </div>
  );
}
export default Profile;
