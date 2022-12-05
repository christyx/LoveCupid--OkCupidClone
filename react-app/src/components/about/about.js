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
        <h4 className='about_text_small'>LoveCupid is a full-stack application clone of OkCupid, an online dating website where users can browse other users' profiles, like or dislike other users, and create, update and delete their own profiles.</h4>
        <h4>
          <a className='about_text_creater' href="https://github.com/christyx/LoveCupid--OkCupidClone" target="_blank" rel="noopener noreferrer">
            <div className='about_iconwithtext'>
                <img className='linkedin_icon' src="https://cdn.iconscout.com/icon/premium/png-256-thumb/repo-4889409-4070736.png" alt='linkedin'>
            </img>
            <div>LoveCupid Project Repo</div>
            </div>

          </a>
        </h4>
        <h4 className='about_text_big'>Creator: Christy Xiu</h4>
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
