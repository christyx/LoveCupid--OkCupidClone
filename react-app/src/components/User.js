import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
    <ul>
      <li>
        <strong>User Id</strong> {userId}
      </li>
      <li>
        <strong>First Name</strong> {user.firstname}
      </li>
      <li>
        <strong>Email</strong> {user.email}
      </li>
      <li>
        <strong>lookingfor</strong> {user.lookingfor}
      </li>
      <li>
        <strong>image</strong> {user.image}
      </li>
    </ul>
  );
}
export default User;
