import React, { useState } from 'react';
import User from '../components/User/User';

function UserInfo(props) {
  const [userEmail, setUserEmail] = useState('test@email.com')
  const [isAdmin, setIsAdmin] = useState(true)

  return (
    <div className='UserInfo'>
      <h2 className='UserInfo__h2'>Hi {userEmail}!!!</h2>
      <button type='submit' className='UserInfo__btn'>{isAdmin ? 'Display Users Info' : 'Display My Info'}</button>
      <button style={{display: (isAdmin) ? 'inline-block' : 'none'}} type='submit' className='UserInfo__btn'>Add New User</button>
      <div className='UserInfo__display'>
        <div className="UserInfo__display__div">
          <p className='UserInfo__display__heading'>User ID</p>
          <p className='UserInfo__display__heading'>Email</p>
        </div>

        <User userID='0' userEmail='user@email.com' />
        
      </div>
    </div>
  );
}

export default UserInfo;