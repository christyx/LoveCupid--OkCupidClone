// constants
const SET_USER = 'session/SET_USER';
const REMOVE_USER = 'session/REMOVE_USER';
const GET_ALL = 'session/GET_ALL'

const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

const removeUser = () => ({
  type: REMOVE_USER,
})

const getUser = (users) => ({
  type: GET_ALL,
  payload: users
});

const initialState = { allUsers: null, user: null };

export const getAllUsers = () => async (dispatch) => {
  const response = await fetch('/api/users/');
  if (response.ok) {
    const responseData = await response.json();
    dispatch(getUser(responseData))
  }
}

export const authenticate = () => async (dispatch) => {
  const response = await fetch('/api/auth/', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }

    dispatch(setUser(data));
  }
}

export const login = (email, password) => async (dispatch) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });


  if (response.ok) {
    const data = await response.json();
    console.log("this is data", data)
    dispatch(setUser(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }

}

export const logout = () => async (dispatch) => {
  const response = await fetch('/api/auth/logout', {
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if (response.ok) {
    dispatch(removeUser());
  }
};


export const signUp = (firstname, email, password, lookingfor, image) => async (dispatch) => {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstname,
      email,
      password,
      lookingfor,
      image
    }),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

export default function reducer(state = initialState, action) {
  let newState = {};
  switch (action.type) {
    case GET_ALL:
      newState = {...state, allUsers:{}}
      newState.allUsers = action.payload.users
      return newState
    case SET_USER:
      newState = { ...state, user: {} }
      newState.user = action.payload
      return newState
    case REMOVE_USER:
      newState = { ...state, user: null }
      return newState
    default:
      return state;
  }
}
