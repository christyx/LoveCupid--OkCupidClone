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
            onError={e => { e.currentTarget.src = "https://static.vecteezy.com/system/resources/previews/005/129/844/original/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg" }}
          />
          <h3 className='ul_name'>{user.firstname}</h3>
        </NavLink>

      );
    }

  });

  return (
    <div className='all_wrapper'>

    <div className='ul_wrapper'>
      <h2 className='ul_text'>Discover : </h2>
      <div className='display_users'>{userComponents}</div>
    </ div>
     <div className='nav_github'>
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
      </div>

    </div>
  );
}

export default UsersList;
