import React from 'react';

function Signup() {
  return (
    <div className='wrapper-wrapper'>
       <div className='wrapper-content'>
        <div className='form-wrapper'>
            <div className='form-container'>
              <div className='heading'> <h1> Sign up </h1> </div>
            <form>
              <div className='heading-input'>  <h1> Email  </h1> </div>
              <input type="email" name='email' />
              <div className='heading-inputsecond'> <h1> Password  </h1> </div>
              <input type="password" name='password' />
              <button type='submit' className='button-form'> Submit  </button>
            </form>
            </div>
        </div>
       </div>
    </div>
  );
}

export default Signup;
