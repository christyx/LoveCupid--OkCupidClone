import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './auth.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [firstname, setFirstname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      setErrors([]);
      const data = await dispatch(signUp(firstname, email, password));
      if (data) {
        return setErrors(data)
      }
    }
    return setErrors(['Repeat Password must be the same as the Password']);
  };

  const updateFirstname = (e) => {
    setFirstname(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='signup_wrapper'>
      <form className='signup_form' onSubmit={onSignUp}>
        <div className='signup_error'>
        {errors.map((error, ind) => (
          <div className='signup_error-each' key={ind}>{error}</div>
        ))}
      </div>
        <div>
        <label>First Name</label>
          <input className='login_input'
          type='text'
          name='firstname'
          onChange={updateFirstname}
          value={firstname}
          placeholder='First Name'
        ></input>
      </div>
      <div>
        <label>Email</label>
          <input className='login_input'
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
          placeholder='Email'
        ></input>
      </div>
      <div>
        <label>Password</label>
          <input className='login_input'
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
          placeholder='Password'
        ></input>
      </div>
      <div>
        <label>Repeat Password</label>
          <input className='login_input'
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
          placeholder='Repeat Password'
        ></input>
      </div>
        <button className='lf_signin' type='submit'>Sign Up</button>
    </form>
     </div >
  );
};

export default SignUpForm;
