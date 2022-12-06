import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import NavBar from '../components/NavBar/NavBar';

function UserUpdate(props) {
  const targetUser = JSON.parse(sessionStorage.getItem('targetUser'));
  const navigate = useNavigate();
  
  const [isAdmin, setIsAdmin] = useState(false);
  const [userName, setUserName] = useState('');
  const [userPhoneNumber, setUserPhoneNumber] = useState('');
  const [userCity, setUserCity] = useState('');
  const [userState, setUserState] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsEqual, setPasswordsEqual] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3001/getUser/${targetUser}`, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache'
    })
    .then((res) => res.json())
    .then((data) => {
      setIsAdmin((data[0].account_type === 'admin') ? true : false)
      setUserName(data[0].name);
      setUserPhoneNumber(data[0].phone_number);
      setUserCity(data[0].city);
      setUserState(data[0].state);
      setUserEmail(data[0].email);
      setPassword(data[0].pass);
      setConfirmPassword(data[0].pass)
    });
  }, [])

  async function handleUpdate() {
    if(password === confirmPassword) {
      await fetch(`http://localhost:3001/updateUser/${targetUser}`, {
        method: 'PUT',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: targetUser,
          name: userName,
          phoneNumber: userPhoneNumber,
          city: userCity,
          state: userState,
          email: userEmail,
          pass: password
        })
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        navigate('/userinfo');
      });
    } else {
      setPasswordsEqual(false)
    }
  }

  function handleCancel() {
    navigate('/userinfo');
  }

  // Handle input changes
  function handleSetUserName(event) {setUserName(event.target.value)}
  function handleSetUserPhoneNumber(event) {setUserPhoneNumber(event.target.value)}
  function handleSetUserCity(event) {setUserCity(event.target.value)}
  function handleSetUserState(event) {setUserState(event.target.value)}
  function handleSetUserEmail(event) {setUserEmail(event.target.value)}
  function handleSetPassword(event) {setPassword(event.target.value)}
  function handleSetConfirmPassword(event) {setConfirmPassword(event.target.value)}
  
  return (
    <>
      <NavBar userEmail={userEmail} loggedIn={true} />
      <div className='UserUpdate'>
        <h2 className='UserUpdate__h2'>{isAdmin ? 'Update User\'s Info' : 'Update My Info'}</h2>
        <form>
          <input id='register-name' className='UserUpdate__form__input' type='text' onChange={handleSetUserName} placeholder={userName} />
          <input id='register-phone' className='UserUpdate__form__input' type='text' onChange={handleSetUserPhoneNumber} placeholder={userPhoneNumber} />
          <input id='register-city' className='UserUpdate__form__input' type='text' onChange={handleSetUserCity} placeholder={userCity} />
          <select id='register-state' name='state' className='UserUpdate__form__input' onChange={handleSetUserState}>
            <option value={userState}>{userState}</option>
            <option value="Alabama">Alabama</option>
            <option value="Alaska">Alaska</option>
            <option value="Arizona">Arizona</option>
            <option value="California">California</option>
            <option value="Colorado">Colorado</option>
            <option value="Connecticut">Connecticut</option>
            <option value="Delaware">Delaware</option>
            <option value="Florida">Florida</option>
            <option value="Georgia">Georgia</option>
            <option value="Hawaii">Hawaii</option>
            <option value="Idaho">Idaho</option>
            <option value="Illinois">Illinois</option>
            <option value="Indiana">Indiana</option>
            <option value="Iowa">Iowa</option>
            <option value="Kansas">Kansas</option>
            <option value="Kentucky">Kentucky</option>
            <option value="Louisiana">Louisiana</option>
            <option value="Maine">Maine</option>
            <option value="Maryland">Maryland</option>
            <option value="Massachusetts">Massachusetts</option>
            <option value="Michigan">Michigan</option>
            <option value="Minnesota">Minnesota</option>
            <option value="Mississippi">Mississippi</option>
            <option value="Missouri">Missouri</option>
            <option value="Montana">Montana</option>
            <option value="Nebraska">Nebraska</option>
            <option value="Nevada">Nevada</option>
            <option value="New Hampshire">New Hampshire</option>
            <option value="New Jersey">New Jersey</option>
            <option value="New Mexico">New Mexico</option>
            <option value="New York">New York</option>
            <option value="North Carolina">North Carolina</option>
            <option value="North Dakota">North Dakota</option>
            <option value="Ohio">Ohio</option>
            <option value="Oklahoma">Oklahoma</option>
            <option value="Oregon">Oregon</option>
            <option value="Pennsylvania">Pennsylvania</option>
            <option value="Rhode Island">Rhode Island</option>
            <option value="South Carolina">South Carolina</option>
            <option value="South Dakota">South Dakota</option>
            <option value="Tennessee">Tennessee</option>
            <option value="Texas">Texas</option>
            <option value="Utah">Utah</option>
            <option value="Vermont">Vermont</option>
            <option value="Virginia">Virginia</option>
            <option value="Washington">Washington</option>
            <option value="West Virginia">West Virginia</option>
            <option value="Wisconsin">Wisconsin</option>
            <option value="Wyoming">Wyoming</option>
          </select>
          <input id='register-email' className='UserUpdate__form__input' type='text' onChange={handleSetUserEmail} placeholder={userEmail} />
          <input id='register-password' className='UserUpdate__form__input' type='text' onChange={handleSetPassword} placeholder='Password' />
          <input id='register-confirmPasssword' className='UserUpdate__form__input' type='text' onChange={handleSetConfirmPassword} placeholder='Confirm Password' />
        </form>
        <p className='UserUpdate__error' style={{display: (passwordsEqual) ? 'none' : 'block'}}>Passwords do not match</p>
        <button type='submit' className='UserUpdate__update-btn' onClick={handleUpdate}>Update</button>
        <button type='submit' className='UserUpdate__cancel-btn' onClick={handleCancel}>Cancel</button>
      </div>
    </>
  );
}

export default UserUpdate;