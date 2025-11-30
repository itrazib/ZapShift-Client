import React from "react";
import Logo from "../../../components/Logo/Logo";
import {  NavLink, useNavigate } from "react-router";
import { Link } from "react-router";
import useAuth from "../../../Hooks/useAuth";

const Navbar = () => {

  const {user, logOut} = useAuth()
  const Navigate  = useNavigate()
     const links = <>
        <NavLink><li><a>Services</a></li></NavLink>
        <NavLink to='/coverage'><li><a>Coverage</a></li></NavLink>
        <NavLink><li><a>About us</a></li></NavLink>
        <NavLink to="/send_Percel"><li><a>Send Percel</a></li></NavLink>
        <NavLink><li><a>Blog</a></li></NavLink>
        <NavLink><li><a>Contact</a></li></NavLink>   

        {
          user && <NavLink to="/dashboard/my-percels"><li><a>My Percel</a></li></NavLink>
        }
    </>

    const handleLogout = () => {
         logOut()
         .then(() => {
            Navigate('/')
         })
         .catch(err => {
          console.log(err)
         })
    }
  return (
    <div className="navbar bg-base-100 shadow-sm rounded-b-2xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {
                links
            }
           
          </ul>
        </div>
       <Logo></Logo>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {
            links
         }
        </ul>
      </div>
      <div className="navbar-end">
       {
        user?  <a onClick={handleLogout} className="btn bg-primary">Logout</a> 
        :  <>
        <Link to='/login'><a className="btn mr-5">Sign In</a></Link>
       <Link to='/register'> <a className="btn bg-primary">Sign Up</a></Link> 
        </>
       }
      </div>
    </div>
  );
};

export default Navbar;
