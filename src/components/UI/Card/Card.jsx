import React from "react";
import "./Card.css";
export default function Card(props) {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-text__authors">
          <span>{props.bookdata.authors}</span>
        </div>
        <div className="card-image">
          <img src={props.bookdata.image} alt={props.bookdata.title} />
        </div>
        <div className="card-text">
          <div className="card-text__title">
            <h3>{props.bookdata.title}</h3>
          </div>
          <div className="cart-text__price">
            <span>FREE</span>
          </div>
        </div>

        <div className="card-controllers">
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
}
