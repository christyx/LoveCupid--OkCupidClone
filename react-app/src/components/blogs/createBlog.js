import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { getAllBlogs, createNewBlog } from '../../store/blog';
import './blogs.css'


function CreatePost(id) {

  const dispatch = useDispatch()
  const history = useHistory()

  const [name, setName] = useState("")
  const [post, setPost] = useState("")
  const [image1, setImage1] = useState("")
  const [errors, setErrors] = useState([])

  const userId = useSelector(state => state.session.user.id)

  const handleSubmit = async e => {
    e.preventDefault()
    setErrors([])

    if (name.length > 30 || name.length < 2) return setErrors(['User Name needs to be between 2 and 30 characters'])
    if (post.length > 200 || post.length < 2) return setErrors(['Post length needs to be between 2 and 50 characters'])
    if (image1.length > 300 || image1.length < 0) return setErrors(['Image link needs to be between 10 and 300 characters'])

    const addPost = {
      user_id: userId,
      user_name: name,
      post: post,
      image1: image1
    }

    await dispatch(createNewBlog(userId, addPost))
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

          <button className='create_button' type="submit">Create Post</button>

        </div>
      </form>
    </div>
  )

}
export default CreatePost;
