import React from 'react';
import './about.css';
import { NavLink, useParams } from 'react-router-dom';
import love from '../images/love.png'
const Footer = () => {


  return (
    <div className='footer_wrapper'>
      <a className='about_text_creater' href="https://github.com/christyx/LoveCupid--OkCupidClone" target="_blank" rel="noopener noreferrer">
            <div className='about_iconwithtext'>
              <img className='linkedin_icon' src="https://cdn.iconscout.com/icon/premium/png-256-thumb/repo-4889409-4070736.png" alt='linkedin'>
              </img>
              <div>LoveCupid Project Repo</div>
            </div>
          </a>
          <a className='about_text_creater' href="https://github.com/christyx" target="_blank" rel="noopener noreferrer">
            <div className='about_iconwithtext'>
              <img className='linkedin_icon' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt='linkedin'>
              </img>
              <div>Github</div>
            </div>
          </a>

          <a className='about_text_creater' href="https://www.linkedin.com/in/zhaoyang-xiu/" target="_blank" rel="noopener noreferrer">
            <div className='about_iconwithtext'>
              <img className='linkedin_icon' src="https://cdn-icons-png.flaticon.com/512/49/49408.png" alt='linkedin'>
              </img>
              <div>LinkedIn</div>
            </div>
          </a>
    </div>


  );
}

export default Footer;
