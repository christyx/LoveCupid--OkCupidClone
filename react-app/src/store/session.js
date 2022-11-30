// constants
const SET_USER = 'session/SET_USER';
const REMOVE_USER = 'session/REMOVE_USER';
const GET_ALL = 'session/GET_ALL'

const GET_PROFILE = 'session/GET_PROFILE'
const CREATE_PROFILE = 'session/CREATE_PROFILE'
const UPDATE_PROFILE = 'session/UPDATE_PROFILE'
const DELETE_PROFILE = 'session/DELETE_PROFILE'

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

const getProfile = (profile) => ({
  type: GET_PROFILE,
  payload: profile
})

const createProfile = (profile) => ({
  type: CREATE_PROFILE,
  payload: profile
})

const updateProfile = (profile) => ({
  type: UPDATE_PROFILE,
  payload: profile
})

const deleteProfile = () => ({
  type: DELETE_PROFILE
})

const initialState = { allUsers: null, user: null, profile: null };

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

export const getUserProfile = (userId) => async (dispatch) => {
  const response = await fetch(`/api/users/${userId}/profile`);
  if (response.ok) {
    const responseData = await response.json();
    await dispatch(getProfile(responseData))
  }
}

export const createUserProfile = (userId, profile) => async (dispatch) => {
  const response = await fetch(`/api/users/${userId}/profile`, {
    method: "POST",
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify(profile)
  })
  if (response.ok) {
    const newProfile = await response.json()
    await dispatch(createProfile(newProfile, userId))
    return newProfile
  }
}

export const updateUserProfile = (userId, profile) => async (dispatch) => {
  const response = await fetch(`/api/users/${userId}/profile`, {
    method: "PUT",
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify(profile)
  })
  if (response.ok) {
    const newProfile = await response.json()
    await dispatch(updateProfile(newProfile, userId))
    return newProfile
  }
}

export const deleteUserProfile = (userId) => async (dispatch) => {
  const response = await fetch(`/api/users/${userId}/profile`, {
    method: "DELETE",
  })
  if (response.ok) {
    await dispatch(deleteProfile())
    return response
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
    case GET_PROFILE:
      newState = { ...state, profile: {} }
      newState.profile = action.payload[0]
      return newState
    case CREATE_PROFILE:
      newState = {...state, profile: {}}
      newState.profile = action.payload
      return newState
    case UPDATE_PROFILE:
      newState = { ...state }
      newState.profile = action.payload
      return newState
    case DELETE_PROFILE:
      newState = { ...state, profile: {} }
      return newState
    default:
      return state;
  }
}
