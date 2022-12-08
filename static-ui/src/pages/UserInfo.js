import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import NavBar from '../components/NavBar/NavBar';
import User from '../components/User/User';

function UserInfo(props) {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  const [userEmail, setUserEmail] = useState(user.email);
  const [userID, setUserId] = useState(user.userId);
  const [isAdmin, setIsAdmin] = useState((user.accountType === 'admin'));
  const [display, setDisplay] =useState(false);
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();
  
  useEffect(() => {
    if(isAdmin) {
      fetch('http://localhost:3001/getAllUsers', {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache'
      })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
    }
  }, [isAdmin, users])

  function handleAddNewUser() {
    navigate('/addnewuser');
  }

  return (
    <>
      <NavBar userEmail={userEmail} loggedIn={true} />
      <div className='UserInfo'>
        <h2 className='UserInfo__h2'>Hi {userEmail}!!!</h2>
        <button 
          type='submit' 
          className='UserInfo__btn' 
          onClick={() => (display) ? setDisplay(false) : setDisplay(true)}
          >{isAdmin 
            ? (!display) ? 'Display Users Info' : 'Hide Users Info' 
            : (!display) ? 'Display My Info' : 'Hide My Info'}
        </button>
        <button
          style={{display: (isAdmin) ? 'inline-block' : 'none'}}
          type='submit'
          className='UserInfo__btn'
          onClick={handleAddNewUser}
          >Add New User
        </button>
        <div className='UserInfo__display' style={{display: (display) ? 'block' : 'none'}}>
          <div className="UserInfo__display__div">
            <p className='UserInfo__display__heading'>User ID</p>
            <p className='UserInfo__display__heading'>Email</p>
          </div>
          {
            (!isAdmin) 
              ? <User isAdmin={false} userID={userID} userEmail={userEmail} /> 
              : users.map((user) => {
                return (
                  <User 
                    key={user.user_id} 
                    isAdmin={true} 
                    userID={user.user_id} 
                    userEmail={user.email} />
                )
              })
          }
        </div>
      </div>
    </>
  );
}

export default UserInfo;