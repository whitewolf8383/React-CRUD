import React, { useState } from 'react';

function User(props) {
  return (
    <div className='User'>
      <p className='User__p'>{props.userID}</p>
      <p className='User__p'>{props.userEmail}</p>
      <button type='submit' className='User__edit-btn'>Edit User</button>
    </div>
  );
}

export default User;