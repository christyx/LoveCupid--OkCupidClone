const LOAD_LIKES = "likes/loadLikes"

const loadLikes = (likes) => {
  return {
    type: LOAD_LIKES,
    payload: likes
  }
}

export const getAllMyLikes = (id) => async (dispatch) => {
  const res = await fetch(`/api/users/${id}/likes`)
  if (res.ok) {
    const data = await res.json()

    dispatch(loadLikes(data))
  }
}

const initialState = { likes: {} }

const likesReducers = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case LOAD_LIKES:
      newState = {...state, likes: {}}
      Object.values(action.payload).map(like => (
        newState.likes[like.id] = {...like}
    ))
    return newState

  default:
    return state
  }
}

export default likesReducers
