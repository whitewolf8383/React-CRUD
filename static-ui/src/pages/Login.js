import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import NavBar from '../components/NavBar/NavBar';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isBlank, setIsBlank] = useState(true);
  const [didTry, setDidTry] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
  }, []);

  function handleSetEmail(event) {
    setEmail(event.target.value);
  }

  function handleSetPassword(event) {
    setPassword(event.target.value);
  }

  async function sendLogin() {
    const data = {
      email: email,
      pass: password
    }

    if(email !== '' || password !== '') {
      await fetch('http://localhost:3001/login', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then((response) => response.json())
      .then((data) => {
        if(data.user_id != null) {
          const user = {
            userId: data.user_id,
            accountType: data.account_type,
            name: data.name,
            city: data.city,
            state: data.state,
            email: data.email,
            phoneNumber: data.phone_number
          }
          sessionStorage.setItem('user', JSON.stringify(user));
          setDidTry(false);
          navigate('/userinfo');
        } else {
          setIsBlank(false);
          setDidTry(true);
        }
      });
    } else {
      setIsBlank(true);
      setDidTry(true);
    }
  }

  return (
    <>
      <NavBar loggedIn={false} />
      <div className='Login'>
        
        <h2 className='Login__h2'>Login</h2>
        <form className='Login__form'>
          <input id='login-email' className='Login__form__input' onChange={handleSetEmail} type='text' placeholder='Email' />
          <input id='login-password' className='Login__form__input' onChange={handleSetPassword} type='text' placeholder='Password' />
        </form>
        <p 
          className='Login__error' 
          style={{display: didTry ? 'inline-block' : 'none'}}
          >{isBlank ? 'Email and Password cannot be blank' : 'Email and/or password are incorrect.'}
        </p>
        <button type='submit' onClick={sendLogin} className='Login__btn'>Submit</button>
      </div>
    </>
  );
}

export default Login;