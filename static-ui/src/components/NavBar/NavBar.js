import React, { useState } from 'react';
import { Link, redirect } from 'react-router-dom';

function NavBar() {
  const [userEmail, setUserEmail] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)

  if (!loggedIn) {
    redirect('/');
  }

  const handleUserEmail = () => {
    setUserEmail = '';
  }

  const handleLoggedIn = () => {
    setLoggedIn = false;
  }

  return (
    <div className='NavBar'>
      <div className='NavBar__nav-display'>
        <h1 className='NavBar__nav-display__title'>React-CRUD</h1>
        <ul className='NavBar__nav-display__list'>
          <li className='NavBar__nav-display__list__item'>
            <Link
              className='NavBar__nav-display__list__link'
              to='/userinfo'
            >Home</Link>
          </li>
          <li className='NavBar__nav-display__list__item'>
            <Link
              className='NavBar__nav-display__list__link'
              style={{display: (loggedIn) ? 'none' : 'inline-block'}}
              to='/createaccount'
            >Register</Link>
          </li>
          <li className='NavBar__nav-display__list__item'>
            <Link
              className='NavBar__nav-display__list__link'
              to='/'
            >{loggedIn ? 'Logout' : 'Login'}</Link>
          </li>
          <li className='NavBar__nav-display__list__item'>
            <Link
              className='NavBar__nav-display__list__link'
              to='/'
            >{userEmail}</Link>
          </li>
        </ul>
      </div>
      
    </div>
  );
}

export default NavBar;