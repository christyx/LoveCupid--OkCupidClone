const LOAD_LIKES = "likes/loadLikes"
const CREATE_LIKE = "likes/createLikes"
const DELETE_LIKE = "likes/deleteLikes"

const loadLikes = (likes) => {
  return {
    type: LOAD_LIKES,
    payload: likes
  }
}

const createLikes = (like) => {
  return {
    type: CREATE_LIKE,
    like
  }
}

const deleteLikes = (like) => {
  return {
    type: DELETE_LIKE,
    like
  }
}
export const getAllMyLikes = (userId) => async (dispatch) => {
  const res = await fetch(`/api/users/${userId}/likes`)
  if (res.ok) {
    const data = await res.json()

    dispatch(loadLikes(data))
  }
}

export const createNewLike = (id, like) => async (dispatch) => {
  const res = await fetch(`/api/users/${id}/likes`, {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(like)
  })
  if (res.ok) {
    const data = await res.json()
    dispatch(createLikes(data))
    // return data
  }
}

export const deleteLike = (id, like) => async (dispatch) => {
  const res = await fetch(`/api/users/${id}/likes`, {
    method: "DELETE"
  })
  if (res.ok) {
    await dispatch(deleteLikes(like))
    return res
  }
}



const initialState = { likes: {} }

const likesReducers = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case LOAD_LIKES:
      newState = { ...state, likes: {} }
      Object.values(action.payload).map(like => (
        newState.likes[like.id] = { ...like }
      ))
      return newState
    case CREATE_LIKE:
      newState = { ...state }
      let id = action.like.id
      newState.likes[id] = action.like
      return newState
    case DELETE_LIKE:
      newState = { ...state }
      delete newState.likes[action.like]
      return newState
    default:
      return state
  }
}

export default likesReducers
