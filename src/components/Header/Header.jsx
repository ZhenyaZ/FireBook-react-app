import React from "react";
import Nav from "./Nav/Nav";
import header_img from "./books_header.jpg";
import "./Header.css";
export default function Header() {
  return (
    <header>
      <Nav />
      <div className="header-content">
        <div className="header-content__text">
          <div className="header-content__text-label">
            <h1>FIRE BOOKS</h1>
          </div>
          <div className="header-content__text-description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              facilis beatae explicabo illo illum placeat ut, facere, autem
              mollitia reprehenderit, cum natus voluptatum officiis dicta
              obcaecati iure numquam vitae repellendus! Id vel dolor ut illo
              iusto culpa, quo enim voluptatem non, numquam distinctio dolore
              voluptates error possimus corporis eveniet eos!
            </p>
          </div>
        </div>
        <div className="header-content__image">
          <img src={header_img} alt="header_img" />
        </div>
      </div>
    </header>
  );
}
