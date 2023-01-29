import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/kevin-reynolds-35a37a126/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/reyno405' target="_blank"><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials