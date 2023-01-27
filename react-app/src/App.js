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
import { getAllUsers, getUserProfile } from './store/session'
import { getAllMyLikes } from './store/like'
import CreateProfile from './components/profile/createProfile'
import UpdateProfile from './components/profile/updateProfile'
import Blog from './components/blogs/displayBlog'
import CreatePost from './components/blogs/createBlog'
import UpdatePost from './components/blogs/updateBlog'
import About from './components/about/about'
import Footer from './components/about/footer'

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  const id = useSelector(state => state.session.user?.id)
  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      await dispatch(getAllUsers());
      if(id) await dispatch(getAllMyLikes(id));
      if(id) await dispatch(getUserProfile(id));
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
        <ProtectedRoute path='/profile/edit' exact={true} >
          <UpdateProfile />
        </ProtectedRoute>

        <ProtectedRoute path='/likes' exact={true} >
          <Like />
        </ProtectedRoute>
        <ProtectedRoute path='/blogs' exact={true} >
          <Blog />
        </ProtectedRoute>
        <ProtectedRoute path='/blogs/create' exact={true} >
          <CreatePost />
        </ProtectedRoute>
        <ProtectedRoute path='/blogs/:postId' exact={true} >
          <UpdatePost />
        </ProtectedRoute>
        <ProtectedRoute path='/about' exact={true} >
          <About />
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <HomePage />
        </Route>
      </Switch>

      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
