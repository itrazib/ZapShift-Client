import React from 'react';
import { useForm } from 'react-hook-form';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const {signInUser} = useAuth()
    const location = useLocation()
    const Navigate = useNavigate()
   
     const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();


  const handleLogin = (data) => {
    signInUser(data.email, data.password)
    .then(result => {
        console.log(result.user)
        Navigate(location.state || "/")
    })
    .catch(error => {
        console.log(error.message)
    })

  }

    return (
        <div className="min-h-screen flex items-center justify-center  p-4">
      <div className="w-full max-w-lg bg-white p-8 rounded-2xl ">
        <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
        <p className="text-gray-500 mb-6">Login with ZapShift</p>

        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </div>
        </div>

        <form onSubmit={handleSubmit(handleLogin)}>

          <label className="form-control w-full mb-4">
            <span className="label-text">Email</span>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Email"
              className="input input-bordered w-full"
            />
            {errors.email?.type === 'required' && <p className="text-red-500">Email is Required</p>}
          </label>

          <label className="form-control w-full mb-4">
            <span className="label-text">Password</span>
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              })}
              placeholder="Password"
              className="input input-bordered w-full"
            />
            {errors.password?.type === 'required' && (
              <p className="text-red-500">Password Minimum length 6 required</p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-500">
                Password must contain at least 8 characters, including an
                uppercase letter, a lowercase letter, a number, and a special
                character.
              </p>
            )}
          </label>
        <Link to="/forgetPassword">  <p className='mt-1'>Forget Password?</p></Link>

          <button className="btn bg-lime-300 w-full my-4">Login</button>
        </form>

        <p className="text-center text-gray-600 text-sm mb-4">
          Don't have any account?{" "}
         <Link to="/register">
          <a className="text-green-600 font-medium" href="#">
            Register
          </a>
         </Link>
        </p>

        <div className="divider">Or</div>

        <SocialLogin></SocialLogin>
      </div>
    </div>
    );
};

export default Login;