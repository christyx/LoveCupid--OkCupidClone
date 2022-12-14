import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './users.css';
import { useDispatch, useSelector } from 'react-redux';
import {getAllUsers} from '../../store/session'
import { getAllMyLikes } from '../../store/like';

function UsersList() {
  // const [users, setUsers] = useState([]);
  const dispatch = useDispatch()
  const id = useSelector(state => state.session.user.id)

  useEffect(() => {
    dispatch(getAllUsers())
    dispatch(getAllMyLikes(id))
  }, [dispatch, id])

  const users = useSelector(state => state.session.allUsers)

  const currentuser = useSelector(state => state.session.user);

  const userComponents = users?.map((user) => {

    if (user.id !== currentuser.id) {
      return (

        <NavLink className='ul_user' to={`/users/${user.id}`}>
          <img src={user.image}
            alt='userImage'
            className="user_image"
          />
          <h3 className='ul_name'>{user.firstname}</h3>
        </NavLink>

      );
    }

  });

  return (
    <div className='ul_wrapper'>
      <h2 className='ul_text'>Discover : </h2>
      <div className='display_users'>{userComponents}</div>
    </ div>
  );
}

export default UsersList;
