import React from "react";
import { useState } from "react";
import search_icon from "../../../assets/icons/search.png";
import Header from "../../../components/Header/Header";
import "./SearchPage.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
function SearchPage() {
  //Variables
  const [searchInput, setSearchInput] = useState("");
  const searchData = [{}];
  const urlAPI = `https://api.itbook.store/1.0/search/${searchInput}`; //API url
  const navigate = useNavigate();

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
    searchData.push(data);
    navigate('/search/result')
    console.log(data);
  };
  return (
    <div className="content-wrapper">
      <Header />
      <div className="search">
        <div className="search__controllers">
          <li>
            <input
              type="search"
              placeholder="Search books"
              id="search__controllers-input"
              onChange={searchOnChangeHandler}
              value={searchInput}
            />
          </li>
          <li id="search__controllers-btn">
            <Link to={''} onClick={searchButtonHandler}> 
              <button type="submit" >
                <img src={search_icon} alt="" />
              </button>
            </Link>
          </li>
        </div>
        <div className="search__content-result">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
