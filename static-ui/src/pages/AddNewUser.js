import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import NavBar from '../components/NavBar/NavBar';

function AddNewUser(props) {
  const navigate = useNavigate();
  
  const [userName, setUserName] = useState('');
  const [userPhoneNumber, setUserPhoneNumber] = useState('');
  const [userCity, setUserCity] = useState('');
  const [userState, setUserState] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsEqual, setPasswordsEqual] = useState(true);
  const [passwordIsBlank, setPasswordIsBlank] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function handleCreateAccount() {
    if(password !== '' && confirmPassword !== ''){
      if(password === confirmPassword) {
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: userName,
            phoneNumber: userPhoneNumber,
            city: userCity,
            state: userState,
            email: userEmail,
            pass: password
          })
        }

        fetch('http://localhost:3001/createUser', requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          navigate('/userinfo');
        });
      } else {
        setPasswordsEqual(false);
        setPasswordIsBlank(false);
      }
    } else {
      setPasswordsEqual(false);
      setPasswordIsBlank(true);
    }
  }

  function handleShowPassword() {
    showPassword ? setShowPassword(false) : setShowPassword(true)
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
      <div className='CreateAccount'>
        <h2 className='CreateAccount__h2'>Create New User</h2>
        <form>
          <input id='register-name' className='CreateAccount__form__input' type='text' onChange={handleSetUserName} placeholder='Name' />
          <input id='register-phone' className='CreateAccount__form__input' type='text' onChange={handleSetUserPhoneNumber} placeholder='Phone' />
          <input id='register-city' className='CreateAccount__form__input' type='text' onChange={handleSetUserCity} placeholder='City' />
          <select id='register-state' name='state' className='CreateAccount__form__input' onChange={handleSetUserState}>
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
          <input id='register-email' className='CreateAccount__form__input' type='text' onChange={handleSetUserEmail} placeholder='Email' />
          <input id='register-password' className='CreateAccount__form__input' type={(showPassword) ? 'text' : 'password'} onChange={handleSetPassword} placeholder='Password' />
          <input id='register-confirmPasssword' className='CreateAccount__form__input' type={(showPassword) ? 'text' : 'password'} onChange={handleSetConfirmPassword} placeholder='Confirm Password' />
        </form>
        <button className='Login__form__p' onClick={handleShowPassword}>Show Password</button>
        <p 
          className='CreateAccount__error'
          style={{display: (passwordsEqual) ? 'none' : 'block'}}
          >{(passwordIsBlank) ? 'Passwords cannot be blank' : 'Passwords do not match'}
        </p>
        <button type='submit' className='CreateAccount__create-btn' onClick={handleCreateAccount}>Create Account</button>
        <button type='submit' className='CreateAccount__cancel-btn' onClick={handleCancel}>Cancel</button>
      </div>
    </>
  );
}

export default AddNewUser;