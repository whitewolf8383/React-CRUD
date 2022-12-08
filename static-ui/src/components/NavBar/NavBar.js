import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NavBar(props) {
  const [userEmail, setUserEmail] = useState(props.userEmail);
  const [loggedIn, setLoggedIn] = useState(props.loggedIn);

  const navigate = useNavigate();

  function handleLogout() {
    sessionStorage.removeItem('user')
    sessionStorage.removeItem('targetUser')
    setLoggedIn(false);
    navigate('/');
  }

  return (
    <div className='NavBar'>
      <div className='NavBar__nav-display'>
        <h1 className='NavBar__nav-display__title'>React-CRUD</h1>
        <ul className='NavBar__nav-display__list'>
          <li className='NavBar__nav-display__list__item'>
            <Link
              className='NavBar__nav-display__list__link'
              style={{display: (loggedIn) ? 'inline-block' : 'none'}}
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
              onClick={handleLogout}
              to='/'
            >{loggedIn ? 'Logout' : 'Login'}</Link>
          </li>
          <li className='NavBar__nav-display__list__item'>
            <Link
              className='NavBar__nav-display__list__link'
              // to='/'
            >{userEmail}</Link>
          </li>
        </ul>
      </div>
      
    </div>
  );
}

export default NavBar;