import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createUserMatch } from '../../store/match'
import './match.css'

function CreateMatchScore() {

  const dispatch = useDispatch()
  const history = useHistory()
  const [score, setScore] = useState("")
  const [errors, setErrors] = useState([])
  const currentuserId = useSelector(state => state.session.user.id);

  const handleSubmit = async e => {
    e.preventDefault()
    setErrors([])


    if (!Number(score)) return setErrors(['Score must be a number'])
    if (score < 0 || score > 30) return setErrors(['Score must be between 1 to 30'])


    const newScore = {
      user_id: currentuserId,
      score
    }

    await dispatch(createUserMatch(newScore))
    history.push("/")
  }

  return (
    <div className='create_profile_wrapper'>
      <h2 className='profile_text'> </h2>
      <form className='profile_form' onSubmit={handleSubmit}>
        <div className='signup_error'>
          {errors.map(err => (
            <div key={err}>{err}</div>
          ))}
        </div>
        <div>
          <div>
            YOUR SCORE:
            <input
              className='profile_input'
              placeholder="adding three numbers total"
              required
              type={'text'}
              value={score}
              onChange={e => setScore(e.target.value)}
            />
          </div>

          <button className='create_button' type="submit">Create Match Percentage</button>

        </div>
      </form>
    </div>
  );
}
export default CreateMatchScore;
