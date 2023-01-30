import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CreateLike from '../Likes/CreateLikes';
import DeleteLike from '../Likes/deleteLikes';
import { useDispatch, useSelector } from 'react-redux';
import getAllMyLikes from '../../store/like'
import './users.css';

function User() {
  const [user, setUser] = useState({});
  const [profile, setProfile] = useState({})

  const { userId } = useParams();
  const likes = useSelector(state => state.likes.likes)

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
      const res = await fetch(`/api/users/${userId}/profile`);
      const profile = await res.json();
      setProfile(profile[0]);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }
  const array = []
  Object.values(likes)?.map((like) => {
    array.push(like.liked_user_id)
  })
  if (profile) {
    return (
      <div className='userpage_wrapper'>
        <img src={user.image}
          alt='userImage'
          className="userpage_image"
          onError={e => { e.currentTarget.src = "https://static.vecteezy.com/system/resources/previews/005/129/844/original/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg" }}
        />
        <div className='userpage_profile'>
          <div className='userpage_like'>
            <h3 className='userpage_name'>{user.firstname}</h3>

            {array.includes(user.id) &&
              (<DeleteLike id={user.id} />)
            }
            {!array.includes(user.id) &&
              (<CreateLike id={user.id} />)
            }
          </div>
          <h4>Age: {profile.age}</h4>
          <h4>Hometown: {profile.hometown}</h4>
          <h4>Work: {profile.work}</h4>
          <h4>Bio: {profile.bio}</h4>

        </div>

        {/* {array.includes(user.id) &&
        (<DeleteLike id={user.id} />)
      }
      {!array.includes(user.id) &&
        (<CreateLike id={user.id} />)
      } */}

      </div>
    );
  }
  if (!profile) {
    return (
      <div className='userpage_wrapper'>
        <img src={user.image}
          alt='userImage'
          className="userpage_image"
          onError={e => { e.currentTarget.src = "https://static.vecteezy.com/system/resources/previews/005/129/844/original/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg" }}
        />
        <div>
          <h3 className='userpage_name'>Name: {user.firstname}</h3>
        </div>
        {array.includes(user.id) &&
          (<DeleteLike id={user.id} />)
        }
        {!array.includes(user.id) &&
          (<CreateLike id={user.id} />)
        }
      </div>
    );
  }



}
export default User;
