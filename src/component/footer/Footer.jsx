import React from 'react'
import './Footer.css' 
import {BsFacebook} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'
import {AiOutlineGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>Avinash Parakhiya</a>

      <ul className='permalinks'>
      <a href="#" ></a>
      <a href="#about" >About</a>
      <a href="#experience" >Experience</a>
      <a href="#service">Services</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#testimonials">Testimonials</a>
      <a href="#contact">Contact</a>
      </ul>

      <div className='footer_socials'>
      <a href='https://facebook.com/avinashparakhiya' ><BsFacebook/></a>
        <a href='https://github.com/avinashparakhiya' target="_blank"><AiOutlineGithub/></a>
        <a href='https://instagram.com/avinashparakhiya' target="_blank"><FiInstagram/></a>
             </div>
             <div className='footer_copyright'>
               <small>&copy; Avinash Parakhiya.All right reserved.</small>
             </div>
    </footer>
  )
}

export default Footer