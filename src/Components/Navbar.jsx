import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <div className="flex justify-between">
        <Link to="/">
          <img src="" alt="Image Here" />
        </Link>
        <div className="flex">
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/cart">
            <div><FaCartShopping></FaCartShopping></div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
