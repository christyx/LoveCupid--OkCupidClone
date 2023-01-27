import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserMatch } from '../../store/match'
import './match.css'

function UpdateMatchScore() {

  const dispatch = useDispatch()
  const history = useHistory()
  const currentuserMatch = useSelector(state => state.match.match);
  const [score, setScore] = useState(currentuserMatch?.score)
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

    await dispatch(updateUserMatch(newScore))
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
            YOUR SCORE: {currentuserMatch?.score}
            <input
              className='profile_input'
              placeholder="new score"
              required
              type={'text'}
              value={score}
              onChange={e => setScore(e.target.value)}
            />
          </div>

          <button className='create_button' type="submit">change score</button>

        </div>
      </form>
    </div>
  );
}
export default UpdateMatchScore;
