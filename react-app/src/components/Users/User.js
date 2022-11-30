import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CreateLike from '../Likes/CreateLikes';
import DeleteLike from '../Likes/deleteLikes';
import { useDispatch, useSelector } from 'react-redux';
import getAllMyLikes from '../../store/like'
import './users.css';

function User() {
  const [user, setUser] = useState({});

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
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  const array = []
  Object.values(likes)?.map((like) => {
    array.push(like.liked_user_id)
  })

  return (
    <div className='userpage_wrapper'>

      <img src={user.image}
        alt='userImage'
        className="userpage_image"
      />
      <div>
        <h3 className='userpage_name'>{user.firstname}</h3>

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
export default User;
