import React from "react";
import "./Card.css";
export default function Card(props) {
  const click = () => {
    props.addBooksHandler(props.bookdata);
  };

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
            <span>
              {props.bookdata.price === "$0.00" ? "FREE" : props.bookdata.price}
            </span>
          </div>
        </div>

        <div className="card-controllers">
          <button onClick={click}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}
