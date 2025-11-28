import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { Navigate, useLocation, useNavigate } from 'react-router';

const SocialLogin = () => {
    const Navigate = useNavigate()
    const location = useLocation()
    const {signInGoogle} = useAuth()
     const handleGoogleSignIn = () => {
    console.log('cliks')
      signInGoogle()
      .then(result => {
        console.log(result)
        Navigate( location.state ||'/')
      })
      .catch(error => {
        console.log(error.message)
      })
  }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn btn-outline w-full flex items-center gap-2">
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            className="w-5 h-5"
          />
          Login with Google
        </button>
        </div>
    );
};

export default SocialLogin;