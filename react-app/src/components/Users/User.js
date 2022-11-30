import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CreateLike from '../Likes/CreateLikes';
import DeleteLike from '../Likes/deleteLikes'
import './users.css';

function User() {
  const [user, setUser] = useState({});
  const { userId } = useParams();

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

  return (
    <div className='userpage_wrapper'>

      <img src={user.image}
        alt='userImage'
        className="userpage_image"
      />
      <div>
        <h3 className='userpage_name'>{user.firstname}</h3>

      </div>
      <CreateLike id={user.id}/>
      <DeleteLike id={user.id} />
    </div>
  );
}
export default User;
