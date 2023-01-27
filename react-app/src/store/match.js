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
