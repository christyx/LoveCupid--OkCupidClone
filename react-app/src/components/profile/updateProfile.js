import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../../store/session'
import './profile.css'

function UpdateProfile() {

  const dispatch = useDispatch()
  // const oldprofile = useSelector(state => state.session.profile)
  const history = useHistory()
  const currentuserProfile = useSelector(state => state.session.profile);
  const [age, setAge] = useState(currentuserProfile?.age)
  const [hometown, setHometown] = useState(currentuserProfile?.hometown)
  const [work, setWork] = useState(currentuserProfile?.work)
  const [bio, setBio] = useState(currentuserProfile?.bio)
  const [errors, setErrors] = useState([])
  const currentuserId = useSelector(state => state.session.user.id);

  const handleSubmit = async e => {
    e.preventDefault()
    setErrors([])
    if (!Number(age)) return setErrors(['Age must be a number'])
    if (age < 18 || age > 99) return setErrors(['Age must be between 18 to 99'])
    if (hometown.length > 50 || hometown.length < 2) return setErrors(['Hometown needs to be between 2 and 50 characters'])
    if (work.length > 50 || work.length < 2) return setErrors(['Work needs to be between 2 and 50 characters'])
    if (bio.length > 500 || bio.length < 5) return setErrors(['Bio needs to be between 5 and 500 characters'])
    const newProfile = {
      user_id: currentuserId,
      age,
      hometown,
      work,
      bio
    }
    console.log("this is", newProfile)
    await dispatch(updateUserProfile(currentuserId, newProfile))
    history.push("/profile")
  }

  return (
    <div className='create_profile_wrapper'>
      <h2 className='profile_text'>Update Your Most Current Information </h2>
      <form className='profile_form' onSubmit={handleSubmit}>
        <div className='signup_error'>
          {errors.map(err => (
            <div key={err}>{err}</div>
          ))}
        </div>
        <div>
          <div>
            Age:
            <input
              className='profile_input'
              placeholder={age}
              required
              type={'text'}
              value={age}
              onChange={e => setAge(e.target.value)}
            />
          </div>
          <div>
            Hometown:
            <input className='profile_input'
              placeholder="where you spent your childhood"
              required
              type={'text'}
              value={hometown}
              onChange={e => setHometown(e.target.value)}
            />
          </div>
          <div>
            Work:
            <input className='profile_input'
              placeholder="your job title"
              required
              type={'text'}
              value={work}
              onChange={e => setWork(e.target.value)}
            />
          </div>
          <div>
            Bio
            <input className='profile_input_big'
              placeholder="introduce yourself"
              required
              type={'text'}
              value={bio}
              onChange={e => setBio(e.target.value)}
            />
          </div>
          <button className='create_button' type="submit">Update Profile</button>

        </div>
      </form>
    </div>
  );

}
export default UpdateProfile;
