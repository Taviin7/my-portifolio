import React from 'react';
import './Footer.css';
import { FaGithubSquare, FaInstagramSquare, FaLinkedin, FaMailBulk } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer id='Footer'>
      <div className='main-container-footer'>
        <ul className='list-icon-footer'>
          <a href='https://github.com/Taviin7' target="_blank"><FaGithubSquare size={40} /></a>
          <a href='https://www.linkedin.com/in/otavio-rodrigues-lago-601355257/' target="_blank"><FaLinkedin size={40} /></a>
          <a href='mailto:otaviorl711@gmail.com' target="_blank"><FaMailBulk size={40} /></a>
          <a href='https://www.instagram.com/taviin9_/' target="_blank"><FaInstagramSquare size={40} /></a>
        </ul>
        <div className='container-end-footer'>
          <a href='#Home'><h1 className='otavio-footer'>Otavio</h1><h1 className='lago-footer'>Lago</h1></a>
        </div>
      </div>
    </footer>
  )
}