import React from "react";
import { useState } from "react";
import search_icon from "../../../assets/icons/search.png";
import Header from "../../../components/Header/Header";
import "./SearchPage.css";
import SearchContent from "./SearchContent";
function SearchPage() {
  //Variables
  const [searchInput, setSearchInput] = useState("");
  const [searchData, setSearchData] = useState();
  const [isVisible, setIsVisible] = useState(false);
  const urlAPI = `https://api.itbook.store/1.0/search/${searchInput}`; //API url

  //Functions
  const searchOnChangeHandler = async (val) => {
    //Controlled inputs
    setSearchInput(val.target.value);
    const response = await fetch(urlAPI);
    const data = await response.json();
    setSearchData([data]);
  };
  //Search button handler.
  const searchButtonHandler = async (e) => {
    e.preventDefault();

    setIsVisible(true);
  };
  return (
    <>
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
            <button type="submit" onClick={searchButtonHandler}>
              <img src={search_icon} alt="" />
            </button>
          </li>
        </div>
        <div className="search__content-result">
          {isVisible ? (
            <SearchContent
              books={searchData[0].books}
              searchInput={searchInput}
            />
          ) : (
            <h1>Waiting your search</h1>
          )}
        </div>
      </div>
    </div>
    </>
    
  );
}

export default SearchPage;
