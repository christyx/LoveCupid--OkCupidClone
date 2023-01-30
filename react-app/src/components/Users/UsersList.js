import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './users.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../store/session'
import { getAllMyLikes } from '../../store/like';
import { getUserMatch } from '../../store/match'
import love from '../images/love.png'

function UsersList() {
  // const [users, setUsers] = useState([]);
  const dispatch = useDispatch()
  const id = useSelector(state => state.session.user.id)

  useEffect(() => {
    dispatch(getAllUsers())
    dispatch(getAllMyLikes(id))
    dispatch(getUserMatch())
  }, [dispatch, id])

  const users = useSelector(state => state.session.allUsers)

  const currentuser = useSelector(state => state.session.user);
  const currentMatch = useSelector(state => state.match.match);

  // function getRandomArbitrary(min, max) {
  //   return Math.random() * (max - min) + min;
  // }


  const userComponents = users?.map((user) => {

    const percentage = 100 * Math.abs(user.id * 1.1 - currentMatch?.score) / currentMatch?.score

    if (user.id !== currentuser.id && currentMatch && Number(percentage)) {
      return (

        <NavLink className='ul_user' to={`/users/${user.id}`}>
          <img src={user.image}
            alt='userImage'
            className="user_image"
            onError={e => { e.currentTarget.src = "https://static.vecteezy.com/system/resources/previews/005/129/844/original/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg" }}
          />
          <h3 className='ul_name'>{user.firstname}</h3>
          {/* <h4>Match Percentage: {1 - (Math.abs(getRandomArbitrary(5, 25) - currentMatch.score)/ currentMatch.score)}</h4> */}
          {/* <h4>Match Percentage: {Math.abs(1 - (Math.abs((user.id * 3) - currentMatch.score) / currentMatch.score))}</h4> */}
          <h4 className='percentage_score'>Match Percentage: {percentage.toPrecision(2)} %</h4>
        </NavLink>

      );
    }
    if (user.id !== currentuser.id && currentMatch && !Number(percentage)) {
      return (

        <NavLink className='ul_user' to={`/users/${user.id}`}>
          <img src={user.image}
            alt='userImage'
            className="user_image"
            onError={e => { e.currentTarget.src = "https://static.vecteezy.com/system/resources/previews/005/129/844/original/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg" }}
          />
          <h3 className='ul_name'>{user.firstname}</h3>
          {/* <h4>Match Percentage: {1 - (Math.abs(getRandomArbitrary(5, 25) - currentMatch.score)/ currentMatch.score)}</h4> */}
          {/* <h4>Match Percentage: {Math.abs(1 - (Math.abs((user.id * 3) - currentMatch.score) / currentMatch.score))}</h4> */}
          <div>
            <h4>Match Percentage: </h4>
            <h4>answer personality </h4>
            <h4>questions first </h4>
          </div>

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
        <h4 className='nav_github_text'>
          <a className='about_text_creater' href="https://github.com/christyx" target="_blank" rel="noopener noreferrer">
            <div className='about_iconwithtext'>
              <img className='linkedin_icon' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt='linkedin'>
              </img>
              <div>Github</div>
            </div>

          </a>
        </h4>

        <h4 className='nav_github_text'>
          <a className='about_text_creater' href="https://www.linkedin.com/in/zhaoyang-xiu/" target="_blank" rel="noopener noreferrer">
            <div className='about_iconwithtext'>
              <img className='linkedin_icon' src="https://cdn-icons-png.flaticon.com/512/49/49408.png" alt='linkedin'>
              </img>
              <div>LinkedIn</div>
            </div>


          </a>
        </h4>

      <div className='about_text_wrapper_user_page'>
        
        <h4 className='about_text_small'>LoveCupid is a full-stack application clone of OkCupid, an online dating website where users can: </h4>
        <div className='about_text_icon_wrapper'>
          <div className='about_text_icon'>
            <i class="fa-solid fa-heart fa-sm"></i>
            <h2 className='about_text_icon_text'>browse people's name, picture, age, hometown, work and bio
            </h2>
          </div>
          <div className='about_text_icon'>
            <i class="fa-solid fa-heart fa-sm"></i>
            <h2 className='about_text_icon_text'>like or dislike other users
            </h2>
          </div>
          <div className='about_text_icon'>
            <i class="fa-solid fa-heart fa-sm"></i>
            <h2 className='about_text_icon_text'>create, update and delete their own profiles
            </h2>
          </div>
          <div className='about_text_icon'>
            <i class="fa-solid fa-heart fa-sm"></i>
            <h2 className='about_text_icon_text'>view other users' blogs
            </h2>
          </div>
          <div className='about_text_icon'>
            <i class="fa-solid fa-heart fa-sm"></i>
            <h2 className='about_text_icon_text'>post, edit and delete blogs for themselves
            </h2>
          </div>
          <div className='about_text_icon'>
            <i class="fa-solid fa-heart fa-sm"></i>
            <h2 className='about_text_icon_text'>answer personality questions to see the match percentage with others
            </h2>
          </div>
          <div className='about_text_icon'>
            <i class="fa-solid fa-heart fa-sm"></i>
            <h2 className='about_text_icon_text'>update and delete the answer of personality questions
            </h2>
          </div>
        </div>
        </div>


      </div>


    </div>
  );
}

export default UsersList;
