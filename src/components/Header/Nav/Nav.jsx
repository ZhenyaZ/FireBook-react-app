import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
export default function Nav() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span>
          <a href="#">FIRE BOOKS</a>
        </span>
      </div>
      <span>
        <hr />
      </span>
      <div className="nav-btn">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/search">SEARCH</Link>
          </li>
          <li>
            <Link to="/cart">CART</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
