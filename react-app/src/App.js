import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/navigation/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/Users/UsersList';
import User from './components/Users/User';
import HomePage from './components/navigation/HomePage';
import Profile from './components/profile/profile';
import Like from './components/Likes/Likes'
import { authenticate } from './store/session';
import { getAllUsers } from './store/session'
import { getAllMyLikes } from './store/like'
import CreateProfile from './components/profile/createProfile'

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  const id = useSelector(state => state.session.user?.id)
  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      await dispatch(getAllUsers())
      if(id) await dispatch(getAllMyLikes(id))
      setLoaded(true);
    })();
  }, [dispatch, id]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/profile' exact={true} >
          <Profile />
        </ProtectedRoute>
        <ProtectedRoute path='/profile/add' exact={true} >
          <CreateProfile />
        </ProtectedRoute>
        <ProtectedRoute path='/likes' exact={true} >
          <Like />
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
