import React from 'react';
import './about.css';
import { NavLink, useParams } from 'react-router-dom';
import love from '../images/love.png'
const About = () => {


  return (
    <div className='about_wrapper'>
      <div className='about_text_wrapper'>
        <h2 className='about_text_big'>About LoveCupid
          <img className='love_icon' src={love} alt='love_icon'></img></h2>
        <h4 className='about_text_small'>LoveCupid is a full-stack application clone of OkCupid, an online dating website where users can: </h4>
        <div className='about_text_icon_wrapper'>
       <div className='about_text_icon'>
          <i class="fa-solid fa-heart fa-sm"></i>
            <h2 className='about_text_icon_text'>browse people's name, picture, age, hometown, work and bio
          </h2>
        </div>
        <div className='about_text_icon'>
            <i class="fa-solid fa-heart fa-sm"></i>
          <h2 className='about_text_icon_text'>like or dislike other users
          </h2>
        </div>
          <div className='about_text_icon'>
            <i class="fa-solid fa-heart fa-sm"></i>
            <h2 className='about_text_icon_text'>create, update and delete their own profiles
            </h2>
          </div>
          <div className='about_text_icon'>
            <i class="fa-solid fa-heart fa-sm"></i>
            <h2 className='about_text_icon_text'>view other users' blogs
            </h2>
          </div>
          <div className='about_text_icon'>
            <i class="fa-solid fa-heart fa-sm"></i>
            <h2 className='about_text_icon_text'>post, edit and delete blogs for themselves
            </h2>
          </div>
          <div className='about_text_icon'>
            <i class="fa-solid fa-heart fa-sm"></i>
            <h2 className='about_text_icon_text'>answer personality questions to see the match percentage with others
            </h2>
          </div>
          <div className='about_text_icon'>
            <i class="fa-solid fa-heart fa-sm"></i>
            <h2 className='about_text_icon_text'>update and delete the answer of personality questions
            </h2>
          </div>
</div>


       <h4>

          <a className='about_text_creater' href="https://github.com/christyx/LoveCupid--OkCupidClone" target="_blank" rel="noopener noreferrer">
            <div className='about_iconwithtext'>
              <img className='linkedin_icon' src="https://cdn.iconscout.com/icon/premium/png-256-thumb/repo-4889409-4070736.png" alt='linkedin'>
              </img>
              <div>LoveCupid Project Repo</div>
            </div>

          </a>
        </h4>
        <h4 className='about_text_big'>Developer: Christy Xiu</h4>
        <h4>
          <a className='about_text_creater' href="https://github.com/christyx" target="_blank" rel="noopener noreferrer">
            <div className='about_iconwithtext'>
              <img className='linkedin_icon' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt='linkedin'>
              </img>
              <div>Github</div>
            </div>

          </a>
        </h4>

        <h4>
          <a className='about_text_creater' href="https://www.linkedin.com/in/zhaoyang-xiu/" target="_blank" rel="noopener noreferrer">
            <div className='about_iconwithtext'>
              <img className='linkedin_icon' src="https://cdn-icons-png.flaticon.com/512/49/49408.png" alt='linkedin'>
              </img>
              <div>LinkedIn</div>
            </div>

          </a>
        </h4>
      </div>
    </div>


  );
}

export default About;
