import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile, createUserProfile } from '../../store/session'
import './profile.css'

function CreateProfile() {

  const dispatch = useDispatch()
  const [age, setAge] = useState("")
  const [hometown, setHometown] = useState("")
  const [work, setWork] = useState("")
  const [bio, setBio] = useState("")
  const [errors, setErrors] = useState([])
  const currentuserId = useSelector(state => state.session.user.id);

  const handleSubmit = async e => {
    e.preventDefault()
    const newProfile = {
      user_id: currentuserId,
      age,
      hometown,
      work,
      bio
    }

    await dispatch(createUserProfile(currentuserId, newProfile))

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map(err => (
            <li key={err}>{err}</li>
          ))}
        </ul>
        <div>
          <div>
            Age:
            <input placeholder="age"
              required
              type={'text'}
              value={age}
              onChange={e => setAge(e.target.value)}
            />
          </div>
          <div>
            Hometown:
            <input placeholder="where you spent your childhood"
              required
              type={'text'}
              value={hometown}
              onChange={e => setHometown(e.target.value)}
            />
          </div>
          <div>
            Work:
            <input placeholder="your job title"
              required
              type={'text'}
              value={work}
              onChange={e => setWork(e.target.value)}
            />
          </div>
          <div>
            Bio
            <input placeholder="introduce yourself"
              required
              type={'text'}
              value={bio}
              onChange={e => setBio(e.target.value)}
            />
          </div>
          <button type="submit">Create Profile</button>

        </div>
      </form>
    </div>
  );
}
export default CreateProfile;
