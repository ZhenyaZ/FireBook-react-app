import React from 'react'
import './Nav.css'
export default function Nav() {
  return (
    <div className="navbar">
        <div className="logo">
            <span><a href='#'>FIRE BOOKS</a></span>
        </div>
        <span><hr /></span>
        <div className="nav-btn">
            <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">CATEGORY</a></li>
                <li><a href="#">CART</a></li>
            </ul>
        </div>
    </div>
  )
}
