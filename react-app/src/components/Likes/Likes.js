import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { getAllMyLikes } from '../../store/like';
import './likes.css'
import { NavLink } from 'react-router-dom';

function Like() {

  const dispatch = useDispatch()
  const id = useSelector(state => state.session.user.id)
  const users = useSelector(state => state.session.allUsers)

  useEffect(() => {
    dispatch(getAllMyLikes(id))
  }, [dispatch, id])

  const allLikesObj = useSelector(state => state.likes.likes)
  if (!allLikesObj) return null
  const array = []
  Object.values(allLikesObj)?.map(x => array?.push(x.liked_user_id))
  console.log(users)
  console.log(array)

    const userComponents = users?.map((user) => {
        if (array.includes(user.id)) {
      return (
        <NavLink className='ul_user' to={`/users/${user.id}`}>
          <img src={user.image}
            alt='userImage'
            className="user_image"
          />
          <h3 className='ul_name'>{user.firstname}</h3>
        </NavLink>
      )
    }

  }
  )

  return (
    <div className='ul_wrapper'>
      <h2 className='ul_text'>People you have liked : </h2>
      <div className='display_users'>{userComponents}</div>
    </ div>
  )


  // return (
  //   <div className='userpage_wrapper'>

  //     <img src={user.image}
  //       alt='userImage'
  //       className="userpage_image"
  //     />
  //     <h3 className='userpage_name'>{user.firstname}</h3>
  //   </div>
  // );
}
export default Like;
