import React, { useState } from "react";
import "./Nav.css";
import search_icon from "../../../assets/icons/search.png";
export default function Nav() {
  //Variables
  const [searchInput, setSearchInput] = useState("");
  const urlAPI = `https://api.itbook.store/1.0/search/${searchInput}`; //API url

  //Functions
  const searchOnChangeHandler = (val) => {
    //Controlled inputs
    setSearchInput(val.target.value);
  };
  const searchButtonHandler = async (e) => {
    //Search button handler.
    e.preventDefault();
    const response = await fetch(urlAPI);
    const data = response.json();
    console.log(data);
  };
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
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">CATEGORY</a>
          </li>
          <li>
            <a href="#">CART</a>
          </li>
          <div className="nav-btn__search">
            <li>
              <input
                type="search"
                placeholder="Search books"
                id="navbar_search"
                onChange={searchOnChangeHandler}
                value={searchInput}
              />
            </li>
            <li id="navbar-search__btn">
              <button type="submit" onClick={searchButtonHandler}>
                <img src={search_icon} alt="" />{" "}
              </button>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
}
