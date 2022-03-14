import React from 'react'
import "./Nav.css"
import { useState } from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookBookmark} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {MdContactPhone} from 'react-icons/md'

const Nav = () => {
  const[activeNav,setActiveNav]=useState('#')
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active' : ""}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ""}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ""}><BiBookBookmark/></a>
      <a href="#service" onClick={()=>setActiveNav('#service')} className={activeNav === '#service' ? 'active' : ""}><RiServiceLine/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ""}><MdContactPhone/></a>
    </nav>
  )
}

export default Nav