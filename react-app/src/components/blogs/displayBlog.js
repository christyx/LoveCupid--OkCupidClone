import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { getAllBlogs, createNewBlog, deleteOneBlog } from '../../store/blog';
import './blogs.css'
import { NavLink } from 'react-router-dom';

function Blog() {

  const dispatch = useDispatch()
  const history = useHistory()
  const id = useSelector(state => state.session.user.id)
  const users = useSelector(state => state.session.allUsers)

  const blogs = useSelector(state => state.blogs.allBlogs)

  useEffect(() => {
    dispatch(getAllBlogs())
  }, [dispatch])

  const deleteBlog = async (blogId) => {
    await dispatch(deleteOneBlog(blogId))

    history.push('/');

  }

  const array = []
  Object.values(blogs)?.map(x => array?.push(x))
  console.log(array)
  const blogComponents = array?.map((blog) => {
    if (blog.user_id !== id && blog.image1.length > 0) {
      return (
        <div className='ul_blogs'>
          <NavLink className='blog_name' to={`/users/${blog.user_id}`}>
            <h3 className='blog_name'>{blog.user_name}</h3>
          </NavLink>
          <div className='ul_post'>
            <h3 className='blog_post'>{blog.post}</h3>
              <img src={blog.image1}
                alt='userImage'
                className="blog_image"
                onError={e => { e.currentTarget.src = "https://static.vecteezy.com/system/resources/previews/005/129/844/original/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg" }}
              />
            </div>
        </div>
      )
    }
    if (blog.image1.length > 0){
       return (
      <div className='ul_blogs'>
        <NavLink className='blog_name' to={`/users/${blog.user_id}`}>
          <h3 className='blog_name'>{blog.user_name}</h3>
        </NavLink>
        <div className='ul_post'>
          <h3 className='blog_post'>{blog.post}</h3>
          <img src={blog.image1}
            alt='userImage'
            className="blog_image"
               onError={e => { e.currentTarget.src = "https://freesvg.org/img/linked4.png" }}
          />
        </div>
           <div>

             <NavLink className='blog_edit' to={`/blogs/${blog.id}`}>
               edit it
             </NavLink>
             <button className='blog_delete' onClick={() => deleteBlog(blog?.id)} >delete</button>
           </div>
      </div>
      )
    }
    if (blog.image1.length === 0) {
      return (
        <div className='ul_blogs'>
          <NavLink className='blog_name' to={`/users/${blog.user_id}`}>
            <h3 className='blog_name'>{blog.user_name}</h3>
          </NavLink>
          <div className='ul_post'>
            <h3 className='blog_post'>{blog.post}</h3>

          </div>
          <div>

            <NavLink className='blog_edit' to={`/blogs/${blog.id}`}>
              edit it
            </NavLink>
            <button className='blog_delete' onClick={() => deleteBlog(blog?.id)} >delete</button>
          </div>
        </div>
      )
    }
  }
  )

  return (
    <div className='ul_wrapper'>
      <h2 className='ul_text'>Share what happening and know more about others </h2>
      <div className='blog_wrapper'>
        <NavLink className='blog_create' to={`/blogs/create`}>
          create your post
        </NavLink>
        <div className='display_blogs'>{blogComponents}</div>

      </div>

    </ div>
  )

}
export default Blog;
