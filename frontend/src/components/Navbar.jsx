import React from "react";
import logo from "../assets/logo.png";
import { NavLink,Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between lg:px-12 sm:px-6 px-4 py-2 bg-secondaryColor">
      <Link to={'/'}><img className="w-32" src={logo} alt="" /></Link>
      <div className="text-white text-base hidden  sm:flex items-center  lg:gap-12 md:gap-6 sm:gap-4">
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/services'}>Services</NavLink>
        <NavLink to={'/contact-us'}>Contact us</NavLink>
        <Link to={'/signin'} className="bg-mainColor px-8 py-2 rounded-full text-sm">Log In</Link>
      </div>
    </div>
  );
};

export default Navbar;
