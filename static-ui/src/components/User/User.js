import React from 'react';
import { useNavigate } from 'react-router-dom';

function User(props) {
  const navigate = useNavigate();

  function handleUpdateUser() {
    sessionStorage.setItem('targetUser', props.userID);
    navigate('/userupdate');
  }

  async function handleDeleteUser() {
    await fetch(`http://localhost:3001/deleteUser/${props.userID}`, {
      method: 'DELETE',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((data) => console.log(data));
  }

  return (
    <div className='User'>
      <p className='User__p'>{props.userID}</p>
      <p className='User__p'>{props.userEmail}</p>
      <button 
        type='submit'
        className='User__edit-btn'
        style={{marginLeft: '10px', display: (props.isAdmin) ? 'inline-block' : 'none'}}
        onClick={handleDeleteUser}
        >Delete User
      </button>
      <button type='submit' className='User__edit-btn' onClick={handleUpdateUser}>Edit User</button>
      
    </div>
  );
}

export default User;