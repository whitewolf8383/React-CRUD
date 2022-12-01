import React from "react";

function Login(props) {
  return (
    <div className='Login'>
      <h2 className='Login__h2'>Login</h2>
      <form className='Login__form'>
        <input id='login-email' className='Login__form__input' type='text' placeholder='Email' />
        <input id='login-password' className='Login__form__input' type='text' placeholder='Password' />
      </form>
      <button type='submit' className='Login__btn'>Submit</button>
    </div>
  );
}

export default Login;