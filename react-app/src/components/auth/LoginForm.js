import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import { login } from '../../store/session';
import './auth.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const demoUserButton = (e) => {
    setEmail('demo@aa.io');
    setPassword('password');
  }



  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='login_wrapper'>
      <form className='login_form' onSubmit={onLogin}>
        <div>
          {errors.map((error, ind) => (
            <div className='login_error' key={ind}>{error}</div>
          ))}
        </div>
        <div className='login_text'>
          <label htmlFor='email'>Email</label>
          <input className='login_input'
            name='email'
            type='text'
            placeholder='Email'
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div className='login_text'>
          <label htmlFor='password'>Password</label>
          <input className='login_input'
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={updatePassword}
          />
        </div>
        <button className='lf_signin' type='submit'>Login</button>
        <div>
          <button className='lf_signin' type='sunmit' onClick={demoUserButton}>Demo User</button>
        </div>
        <div> No account?
          <NavLink  className='lf_signup' to='/sign-up' exact={true} activeClassName='active'>
            sign up here
          </NavLink>
        </div>
      </form>
    </div>

  );
};

export default LoginForm;
