import React from 'react'
import{BsLinkedin} from 'react-icons/bs'
import {AiOutlineGithub} from 'react-icons/ai'
import{BsInstagram} from 'react-icons/bs'
import{SiGmail}from 'react-icons/si'

const HeaderSocial = () => {
  return (
    <div className='header_socials'>
        <a href='https://linkedin.com' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com' target="_blank"><AiOutlineGithub/></a>
        <a href='https://instagram.com' target="_blank"><BsInstagram/></a>
        <a href='https://gmail.com' target="_blank"><SiGmail/></a>
        </div>
  )
}

export default HeaderSocial 