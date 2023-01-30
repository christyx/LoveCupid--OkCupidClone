const LOAD_BLOGS = "blogs/loadBlogs"
const CREATE_BLOG = "blogs/createBlog"
const UPDATE_BLOG = "blogs/updateBlog"
const DELETE_BLOG = "blogs/deleteBlog"

const loadBlogs = (blogs) => {
  return {
    type: LOAD_BLOGS,
    payload: blogs
  }
}

const createBlog = (blog) => {
  return {
    type: CREATE_BLOG,
    blog
  }
}

const updateBlog = (blog) => ({
  type: UPDATE_BLOG,
  blog
})

const deleteBlog = (blogId) => {
  return {
    type: DELETE_BLOG,
    payload: blogId
  }
}

export const getAllBlogs = () => async (dispatch) => {
  const res = await fetch(`/api/users/blogs`)
  if (res.ok) {
    const data = await res.json()

    dispatch(loadBlogs(data))
  }
}

export const createNewBlog = (id, blog) => async (dispatch) => {
  const res = await fetch(`/api/users/blogs`, {
    method: "POST",
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify(blog)
  })
  if (res.ok) {
    const data = await res.json()
    dispatch(createBlog(data))
    // return data
  }
}

export const updateOneBlog = (blogId, blog) => async (dispatch) => {
  const response = await fetch(`/api/users/blogs/${blogId}`, {
    method: "PUT",
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify(blog)
  })
  if (response.ok) {
    const newBlog = await response.json()
    await dispatch(updateBlog(newBlog, blogId))
    return newBlog
  }
}

export const deleteOneBlog = (blogId) => async (dispatch) => {
  const res = await fetch(`/api/users/blogs/${blogId}`, {
    method: "DELETE"
  })
  if (res.ok) {
    await dispatch(deleteBlog(blogId))
    return res
  }
}

const initialState = {allBlogs: {}}

const blogsReducers = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case LOAD_BLOGS:
      newState = { ...state, allBlogs: {} }
      // Object.values(action.payload).map(blog => (
      //   newState.blogs[blog.id] = { ...blog }
      // ))
     Object.values(action.payload).map(blog => (
       newState.allBlogs.[blog.id] = { ...blog }
      ))
      return newState
    case CREATE_BLOG:
      newState = { ...state }
      let id = action.blog.id
      newState.allBlogs.[id] = action.blog
      return newState
    case UPDATE_BLOG:
      newState = { ...state }
      let blogid = action.blog.id
      newState.allBlogs.[blogid] = action.blog
      return newState
    case DELETE_BLOG:
      newState = { ...state }
      delete newState.allBlogs[action.blogId]
      return newState
    default:
      return state
  }
}

export default blogsReducers
