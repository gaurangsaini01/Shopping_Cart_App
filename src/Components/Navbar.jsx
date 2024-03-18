import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import logo from '../image/logo.png'
import { useSelector } from "react-redux";
function Navbar() {
  const {cart} = useSelector((state)=>state)
  return (
    <div className="flex items-center justify-center">
      <div className="flex justify-between py-2 w-full px-4 sm:px-0 sm:w-9/12 items-center text-white">
        <Link to="/">
          <img src={logo} width={170} alt="Image Here" />
        </Link>
        <div className="flex items-center  gap-8">
          <Link to="/">
            <p className=" text-lg font-thin hover:text-[#50a060] transition-all duration-200 ease-in-out">Home</p>
          </Link>
          <Link to="/cart">
            <div className="text-2xl relative">
              <div className="bg-green-600 w-[20px] text-center absolute rounded-full left-3 bottom-3"><p className="text-sm">{cart.length}</p></div>
              <FaCartShopping></FaCartShopping>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
