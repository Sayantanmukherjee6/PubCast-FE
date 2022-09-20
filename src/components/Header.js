import React from 'react'
import Login from './Login'
import Logout from './Logout'
import Profile from './Profile'
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <div className='header__left'>
        <Login />
        <Logout />
        </div>
        <div className='header__right'>
            <Profile />
        </div>
    </div>
  )
}

export default Header