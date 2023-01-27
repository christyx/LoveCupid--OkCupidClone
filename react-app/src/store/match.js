const GET_MATCH = 'match/GET_MATCH'
const CREATE_MATCH = 'match/CREATE_MATCH'
const UPDATE_MATCH = 'match/UPDATE_MATCH'
const DELETE_MATCH = 'match/DELETE_MATCH'

const getMatch = (match) => ({
  type: GET_MATCH,
  payload: match
})

const createMatch = (match) => ({
  type: CREATE_MATCH,
  payload: match
})

const updateMatch = (match) => ({
  type: UPDATE_MATCH,
  payload: match
})

const deleteMatch = () => ({
  type: DELETE_MATCH
})

const initialState = { match: null };


export const getUserMatch = () => async (dispatch) => {
  const response = await fetch(`/api/users/match`);
  if (response.ok) {
    const responseData = await response.json();
    await dispatch(getMatch(responseData))
  }
}

export const createUserMatch = (match) => async (dispatch) => {
  const response = await fetch(`/api/users/match`, {
    method: "POST",
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify(match)
  })
  if (response.ok) {
    const newMatch = await response.json()
    await dispatch(createMatch(newMatch))
    return newMatch
  }
}

export const updateUserMatch = (match) => async (dispatch) => {
  const response = await fetch(`/api/users/match`, {
    method: "PUT",
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify(match)
  })
  if (response.ok) {
    const newMatch = await response.json()
    await dispatch(updateMatch(newMatch))
    return newMatch
  }
}

export const deleteUserMatch = () => async (dispatch) => {
  const response = await fetch(`/api/users/match`, {
    method: "DELETE",
  })
  if (response.ok) {
    await dispatch(deleteMatch())
    return response
  }
}



export default function reducer(state = initialState, action) {
  let newState = {};
  switch (action.type) {
    case GET_MATCH:
      newState = { ...state, match: {} }
      newState.match = action.payload[0]
      return newState
    case CREATE_MATCH:
      newState = { ...state, match: {} }
      newState.match = action.payload
      return newState
    case UPDATE_MATCH:
      newState = { ...state }
      newState.match = action.payload
      return newState
    case DELETE_MATCH:
      newState = { ...state, match: {} }
      return newState
    default:
      return state;
  }
}
