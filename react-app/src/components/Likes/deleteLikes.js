import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { getAllMyLikes, createNewLike, deleteLike } from '../../store/like';
import './likes.css'
import { NavLink } from 'react-router-dom';

function DeleteLike(id) {

  const dispatch = useDispatch()
  const history = useHistory()
  const userId = useSelector(state => state.session.user.id)

  const handleDelete = async e => {
    e.preventDefault()

    const deleteAlike = {
      user_id: userId,
      liked_user_id: id
    }


    await dispatch(deleteLike(id.id, deleteAlike))
    await dispatch(getAllMyLikes(userId))
    history.push("/likes")

  }

  return (
    <div className='icon_dislike'>
      <i onClick={handleDelete} class="fa-sharp fa-solid fa-heart-crack fa-2xl"></i>

    </ div>
  )

}
export default DeleteLike;
