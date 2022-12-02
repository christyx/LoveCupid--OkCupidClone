import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserProfile, getUserProfile } from '../../store/session'
import './profile.css'

function DeleteProfile() {

  const dispatch = useDispatch()

  const currentuserId = useSelector(state => state.session.user.id);

  const handleSubmit = async e => {
    e.preventDefault()
    await dispatch(deleteUserProfile(currentuserId))
    await dispatch(getUserProfile(currentuserId))
  }

  return (
    <div >
      <button className='profile_delete' onClick={handleSubmit} >Delete Profile</button>
    </div>
  );
}
export default DeleteProfile;
