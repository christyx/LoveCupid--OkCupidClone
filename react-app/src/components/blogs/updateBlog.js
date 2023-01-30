import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { getAllBlogs, updateOneBlog } from '../../store/blog';
import './blogs.css'

function UpdatePost() {

  const dispatch = useDispatch()

  const { postId } = useParams()
  const history = useHistory()

  const currentPost = useSelector(state => state.blogs.allBlogs[postId]);

  const [name, setName] = useState(currentPost?.user_name)
  const [post, setPost] = useState(currentPost?.post)
  const [image1, setImage1] = useState(currentPost?.image1)
  const [errors, setErrors] = useState([])
  console.log(post)
  const userId = useSelector(state => state.session.user.id)
  console.log(currentPost)
  const handleSubmit = async e => {
    e.preventDefault()
    setErrors([])

    if (name.length > 30 || name.length < 2) return setErrors(['User Name needs to be between 2 and 30 characters'])
    if (post.length > 200 || post.length < 2) return setErrors(['Post length needs to be between 2 and 50 characters'])
    if (image1.length > 300 || image1.length < 0) return setErrors(['Image link needs to be between 10 and 300 characters'])

    const newblog = {
      user_id: userId,
      user_name: name,
      post,
      image1
    }

    console.log("this is ",newblog)
    await dispatch(updateOneBlog(postId, newblog))
    history.push("/blogs")

  }

  return (
    <div className='create_profile_wrapper'>
      <h2 className='profile_text'> Share what in your mind now </h2>
      <form className='profile_form' onSubmit={handleSubmit}>
        <div className='signup_error'>
          {errors.map(err => (
            <div key={err}>{err}</div>
          ))}
        </div>
        <div>
          <div>
            Name:
            <input className='profile_input'
              placeholder="be real or be anonymous"
              required
              type={'text'}
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div>
            Post Text:
            <input className='profile_input_big'
              placeholder="share anything"
              required
              type={'text'}
              value={post}
              onChange={e => setPost(e.target.value)}
            />
          </div>
          <div>
            Post Image:
            <input className='profile_input'
              placeholder="image link"
              type={'text'}
              value={image1}
              onChange={e => setImage1(e.target.value)}
            />
          </div>

          <button className='create_button' type="submit">Update Post</button>

        </div>
      </form>
    </div>
  )

}
export default UpdatePost;
