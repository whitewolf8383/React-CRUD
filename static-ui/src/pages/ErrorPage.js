import React from "react";
import NavBar from '../components/NavBar/NavBar';

function ErrorPage() {

  return (
    <>
      <NavBar loggedIn={false} />
      <div className='ErrorPage'>
        <h2 className='ErrorPage__h2'>Sorry: No Such Page Exists</h2>
      </div>
    </>
    
  );
}

export default ErrorPage;