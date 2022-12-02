import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { getAllMyLikes, createNewLike } from '../../store/like';
import './likes.css'


function CreateLike(id) {

  const dispatch = useDispatch()
  const history = useHistory()
  const userId = useSelector(state => state.session.user.id)

  const handleClick = async e => {
    e.preventDefault()

    const addlike = {
      user_id: userId,
      liked_user_id: id
    }


    await dispatch(createNewLike(id.id, addlike))
    await dispatch(getAllMyLikes(userId))
    history.push("/likes")

  }

  return (
    <div className='cl_like'>
      <i onClick={handleClick} class="fa-solid fa-heart fa-2xl"></i>
     </ div>
  )

}
export default CreateLike;
